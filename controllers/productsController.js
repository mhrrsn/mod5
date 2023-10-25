const axios = require('axios');
const getProducts = (req,res) => {
    axios.get('https://fakestoreapi.com/products')
}