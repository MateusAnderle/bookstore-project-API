const ProductModel = require('../models/ProductModel')

class ProductController {
    async register(req, res){
        try {
            const { livro } = req.body

            const productAlreadyExists = await ProductModel.findOne({ livro });

            if(productAlreadyExists){
                return res.status(400).json({message: "This book already exists"})
            }

            const createdProduct = await ProductModel.create(req.body)

            return res.status(200).json(createdProduct)
        } catch (error) {
            console.log(error)

            return res.status(404).json({message: "Failed to create product!"})
        }
    }

    async listproducts(req, res){
        try {
            const products = await ProductModel.find()

            return res.status(200).json( products )
        } catch (error) {
            return res.status(404).json({message: "Failed to list products!"})
        }
        
    }

    async listproductsbyid(req, res){
        try {
            const { id } = req.params;

            const product = await ProductModel.findById(id)
    
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
            const { id } = req.params

            await ProductModel.findByIdAndUpdate(id, req.body)

            res.status(200).json({ message: "Product updated"})
        } catch (error) {
            return res.status(404).json({message: "Failed to update product!"})
        }

    }

    async deleteproduct(req, res){
        try {
            const { id } = req.params
            
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
        const { category } = req.params
        const categoryLower = category.toLowerCase()
        let filteredCategories = []

        try {
            const categoryBooks = await ProductModel.find()
            categoryBooks.map(item => {
                const filter = item.genero.toLowerCase().includes(categoryLower)
                if(filter) filteredCategories.push(item)
            })

            if(filteredCategories.length === 0) {
               return res.status(404).json({message: "There is no categories with this title!"})
            }

            return res.status(200).json( filteredCategories )
        } catch (error) {
            console.log(error)
            return res.status(404).json({message: "Failed to list books of this category!"})
        }finally {
            filteredCategories = []
        }
    }

    async listSearchBooks(req, res){
        const { search } = req.params
        const searchLower = search.toLowerCase()
        let filteredBooks = []

        try {
            const allBooks = await ProductModel.find()
            allBooks.map(item => {
                const filter = item.livro.toLowerCase().includes(searchLower)
                const filterCategory = item.genero.toLowerCase().includes(searchLower)
                const filterAuthor = item.autor.toLowerCase().includes(searchLower)
                if(filter || filterCategory || filterAuthor) filteredBooks.push(item)
            })

            if(filteredBooks.length === 0) {
               return res.status(404).json({message: "There is no books with this title!"})
            }

            return res.status(200).json(filteredBooks)
        } catch (error) {
            console.log(error)
            return res.status(404).json({message: "Failed to list books!"})
        } finally {
            filteredBooks = []
        }
    }
}

module.exports = new ProductController()