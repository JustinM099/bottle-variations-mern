const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')
const User = require('../models/userModel')

//desc: get all posts
//route: GET api/posts
//access: private

const getPosts = asyncHandler(async (req, res) => {
    //do i need to sort these results? 
    const posts = await Post.find({ user: req.user.id })

    res.status(200).json(bottles)

})

//desc: add post
//route: POST api/posts
//access: private

const addPost = asyncHandler(async (req, res) => {

    if (!req.body.postTitle) {
        res.status(400)
        throw new Error('there is no post title, and a post title is required')
    }

    const post = await Post.create({
        postTitle: req.body.postTitle,
        postText: req.body.postText,
        createdAt: req.body.createdAt,
        username: req.body.username,
        comments: req.body.comments
        //do i need to do the toJSON thing from the postModel here?
    })

    req.status(200).json(post)
})

//desc: get one post
//route: GET api/posts
//access: private

fetch(url)
.then(response => {
    if (response.ok) {
        return response.json()
    } else if (response.status === 404) {
        todayContent.text('Error: 404. Please try again.')
        return Promise.reject('error 404')
        
    } else {
        todayContent.text('Error. Please try again.')
        return Promise.reject('some other error: ' + response.status)
    }
})