const { Schema, model } = require('mongoose')
// const commentSchema = require('./commentModel')
const momemt = require('moment')

const postSchema = new Schema(
    {
        postTitle: {
            type: String,
            required: true,
            trim: true,
            minLength: 1,
            maxLength: 60
        },
        postText: {
            type: String,
            required: true,
            trim: true,
            minLength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAt) => moment(createdAt).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
        },
        comments: [commentSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
)

postSchema.virtual('commentCount').get(function () {
    return `comments: ${this.reactions.length}`
})

const Post = model('Post', postSchema)

module.exports = Post