import mongoose, { Schema, Document } from 'mongoose';

// Define TypeScript interface for the Product document
export interface IProduct extends Document {
    name: string;
    price: number;
    description?: string;
    inStock: boolean;
}

// Define schema
const productSchema: Schema = new Schema<IProduct>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    inStock: { type: Boolean, default: true },
});

// Create and export the model
const Product = mongoose.model<IProduct>('Product', productSchema);
export default Product;
