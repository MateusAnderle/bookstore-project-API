const ProductModel = require('../models/ProductModel');

class ProductController {
    async register(req, res){
        try {
            const { livro } = req.body;

            const productAlreadyExists = await ProductModel.findOne({ livro });

            if(productAlreadyExists){
                return res.status(400).json({message: "This book already exists"})
            }

            const createdProduct = await ProductModel.create(req.body);

            return res.status(200).json(createdProduct);
        } catch (error) {
            console.log(error)

            return res.status(404).json({message: "Failed to create product!"})
        }
    }

    async listproducts(req, res){
        try {
            const products = await ProductModel.find();

            return res.status(200).json( products );
        } catch (error) {
            return res.status(404).json({message: "Failed to list products!"})
        }
        
    }

    async listproductsbyid(req, res){
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

    async updateproduct(req, res){
        try {
            const { id } = req.params;

            await ProductModel.findByIdAndUpdate(id, req.body);

            res.status(200).json({ message: "Product updated"})
        } catch (error) {
            return res.status(404).json({message: "Failed to update product!"})
        }

    }

    async deleteproduct(req, res){
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

    async listCategoryBooks(req, res){
        const { category } = req.params;
        console.log(category)

        try {
            const categoryBooks = await ProductModel.find({ genero: category });

            return res.status(200).json( categoryBooks );
        } catch (error) {
            console.log(error)
            return res.status(404).json({message: "Failed to list books!"})
        }
    }
}

module.exports = new ProductController();