const pool = require('../config/database');

// GET all products
// Endpoint: GET /api/products
const getAllProducts = async (req, res, next) => {
  try {
    const result = await pool.query(
      'SELECT * FROM products ORDER BY id DESC;'
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    next(error);
  }
};

// GET single product by ID
// Endpoint: GET /api/products/:id
const getProductById = async (req, res, next) => {
  const { id } = req.params;

  // Validate ID format
  if (!id || isNaN(parseInt(id, 10))) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  try {
    const result = await pool.query(
      'SELECT * FROM products WHERE id = $1;',
      [parseInt(id, 10)]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error.message);
    next(error);
  }
};

// POST create a new product
// Endpoint: POST /api/products
const createProduct = async (req, res, next) => {
  const {
    name,
    description,
    price,
    original_price,
    discount,
    category,
    image_url,
    rating,
    stock,
  } = req.body;

  // Validate required fields
  if (!name || name.trim() === '') {
    return res.status(400).json({ message: 'Product name is required' });
  }

  const numericPrice = parseFloat(price);
  if (isNaN(numericPrice) || numericPrice <= 0) {
    return res.status(400).json({ message: 'Price must be greater than zero' });
  }

  const numericOriginalPrice = original_price ? parseFloat(original_price) : null;
  const numericDiscount = discount !== undefined ? parseInt(discount, 10) : null;
  const numericRating = rating !== undefined ? parseFloat(rating) : 0;
  const numericStock = stock !== undefined ? parseInt(stock, 10) : 0;

  if (numericDiscount !== null && (numericDiscount < 0 || numericDiscount > 100)) {
    return res.status(400).json({ message: 'Discount must be between 0 and 100' });
  }

  if (numericStock < 0) {
    return res.status(400).json({ message: 'Stock cannot be negative' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO products (
        name, description, price, original_price, discount, category, image_url, rating, stock
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;`,
      [
        name.trim(),
        description || '',
        numericPrice,
        numericOriginalPrice,
        numericDiscount,
        category || 'General',
        image_url || '',
        numericRating,
        numericStock,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating product:', error.message);
    next(error);
  }
};

// PUT update an existing product
// Endpoint: PUT /api/products/:id
const updateProduct = async (req, res, next) => {
  const { id } = req.params;

  if (!id || isNaN(parseInt(id, 10))) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  const productId = parseInt(id, 10);

  try {
    // Check if product exists
    const checkProduct = await pool.query(
      'SELECT * FROM products WHERE id = $1;',
      [productId]
    );

    if (checkProduct.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const current = checkProduct.rows[0];
    const {
      name,
      description,
      price,
      original_price,
      discount,
      category,
      image_url,
      rating,
      stock,
    } = req.body;

    const updatedName = name !== undefined ? name.trim() : current.name;
    const updatedDescription = description !== undefined ? description : current.description;
    const updatedPrice = price !== undefined ? parseFloat(price) : parseFloat(current.price);
    const updatedOriginalPrice = original_price !== undefined ? parseFloat(original_price) : current.original_price;
    const updatedDiscount = discount !== undefined ? parseInt(discount, 10) : current.discount;
    const updatedCategory = category !== undefined ? category : current.category;
    const updatedImageUrl = image_url !== undefined ? image_url : current.image_url;
    const updatedRating = rating !== undefined ? parseFloat(rating) : current.rating;
    const updatedStock = stock !== undefined ? parseInt(stock, 10) : current.stock;

    if (!updatedName || updatedName === '') {
      return res.status(400).json({ message: 'Product name cannot be empty' });
    }

    if (isNaN(updatedPrice) || updatedPrice <= 0) {
      return res.status(400).json({ message: 'Price must be greater than zero' });
    }

    const result = await pool.query(
      `UPDATE products
       SET name = $1, description = $2, price = $3, original_price = $4, discount = $5,
           category = $6, image_url = $7, rating = $8, stock = $9
       WHERE id = $10
       RETURNING *;`,
      [
        updatedName,
        updatedDescription,
        updatedPrice,
        updatedOriginalPrice,
        updatedDiscount,
        updatedCategory,
        updatedImageUrl,
        updatedRating,
        updatedStock,
        productId,
      ]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(`Error updating product ${id}:`, error.message);
    next(error);
  }
};

// DELETE product by ID
// Endpoint: DELETE /api/products/:id
const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  if (!id || isNaN(parseInt(id, 10))) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  const productId = parseInt(id, 10);

  try {
    const result = await pool.query(
      'DELETE FROM products WHERE id = $1 RETURNING *;',
      [productId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
      message: 'Product deleted successfully',
      deletedProduct: result.rows[0],
    });
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error.message);
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
