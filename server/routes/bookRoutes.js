import express from 'express';
import { Book } from '../model/bookModel.js';
const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({})
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        res.status(500).send(error.message)
    }
})
// ! book by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        return res.status(200).json(book)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
// ! create a new book
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: 'send all required fields: title,author,publishYear'
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const book = await Book.create(newBook)
        return res.status(200).send(book)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})
// ! update book
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: 'send all required fields: title,author,publishYear'
            })
        }
        const { id } = req.params
        const results = await Book.findByIdAndUpdate(id, req.body)
        if (!results) {
            return res.status(404).json({ message: 'Book not found' })
        }
        return res.status(200).send({ message: 'Book updated successfully' })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            status: 'book not found'
        })
    }
})
//  ! delete book
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await Book.findByIdAndDelete(id)
        if (!result) {
            return res.status(404).json({ message: 'Book not found' })
        }
        return res.status(200).send({message:'book deleted successfully'})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
export default router