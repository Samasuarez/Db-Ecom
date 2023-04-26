const mongoose = require('mongoose')

const collectionName = 'product'

const collectionSchema = new mongoose.Schema({
name: String,
title: String,
prime: Number,
})

const Products = mongoose.model(collectionName, collectionSchema)

module.exports = Products