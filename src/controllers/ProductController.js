const ProductModel = require('../models/ProductModel');

class ProductController {
    async store(req, res){
        try {
            const { title, description, price } = req.body;

            const productAlreadyExists = await ProductModel.findOne({ title });

            if(productAlreadyExists){
                return res.status(400).json({message: "This name already exists"})
            }

            if(!title || !description || !price) {
                return res.status(400).json({message: "Title, Description and Price are required"})
            }

            const createdProduct = await ProductModel.create(req.body);

            return res.status(200).json(createdProduct);
        } catch (error) {
            return res.status(404).json({message: "Failed to create product!"})
        }
    }

    async index(req, res){
        try {
            const products = await ProductModel.find();

            return res.status(200).json( products );
        } catch (error) {
            return res.status(404).json({message: "Failed to list products!"})
        }
        
    }

    async show(req, res){
        try {
            const { id } = req.params;

            const product = await ProductModel.findById(id);
    
            if(!product) {
                return res.status(404).json({message: "Product does not exists!"})
            }
    
            res.status(200).json(product)
        } catch (error) {
            return res.status(404).json({message: "Failed to list product!"})
        }
    }

    async update(req, res){
        try {
            const { id } = req.params;

            await ProductModel.findByIdAndUpdate(id, req.body);

            res.status(200).json({ message: "Product updated"})
        } catch (error) {
            return res.status(404).json({message: "Failed to update product!"})
        }

    }

    async destroy(req, res){
        try {
            const { id } = req.params;
            
            const productDeleted = await ProductModel.findByIdAndDelete(id);

            if(!productDeleted) {
                return res.status(404).json({message: "Product does not exists"});
            }

            return res.status(200).json({message: "Product deleted"})

        } catch (error) {
            return res.status(404).json({message: "Failed to delete product!"})
        }
    }
}

module.exports = new ProductController();