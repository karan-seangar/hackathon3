const mongoose = require('mongoose');

const Product = require('./models/Product');

const products = [
    {
        author: " Edmund Burke",
        quote: "The only thing necessary for the triumph of evil is for good men to do nothing."
    },
    {
        author: "Mahatma Gandhi",
        quote: "Be the change that you wish to see in the world."
    },
    {
        author: "Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        author: "Dalai Lama",
        quote: "Happiness is not something ready-made. It comes from your own actions."
    },
    {
        author: "Winston Churchill",
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts."
    },
    {
        author: "Thomas A. Edison",
        quote: "I have not failed. I've just found 10,000 ways that won't work."
    },
    {
        author: "Albert Schweitzer",
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
    },


]

// seeding function
async function seedDB(){
    await Product.insertMany(products);
    console.log("Data seeded successfully")
}

module.exports = seedDB;