const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect("mongodb://127.0.0.1:27017/booking", { useMongoClient: true })

  .then(() => {
    console.log('Successfully connected to database')
  })

  .catch(error => {
    console.error('Error connecting to MongoDB database', error)
  })

module.exports = mongoose
