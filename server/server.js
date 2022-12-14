const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//paths go here app.use('/api/users') etc
app.use('/api/users', require('./routes/userRoutes'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('currently in development mode. please set to production.'))
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))