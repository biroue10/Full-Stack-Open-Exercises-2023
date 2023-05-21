const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/api/blogs', (request, response) => {
    Blog.find({}).then(blogs => {
        response.json(blogs)
    })
})

blogsRouter.post('/api/blogs', (request, response, next) => {
    const body = request.body

    const blog = new Blog({
        content: body.content,
        important: body.important || false,
        date: new Date()
    })

    blog.save()
        .then(savedBlog => {
            response.json(savedBlog)
        })
        .catch(error => next(error))
})

module.exports = blogsRouter