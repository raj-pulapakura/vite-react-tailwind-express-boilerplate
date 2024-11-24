import express, { Request, Response } from 'express';
import Product from '../models/Product';

export const productsRouter = express.Router();

// Create a new product
productsRouter.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
});

// Get all products
productsRouter.get('/', async (_req: Request, res: Response): Promise<void> => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

// Get a single product by ID
productsRouter.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

// Update a product by ID
productsRouter.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.json(product);
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
});

// Delete a product by ID
productsRouter.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});
