const express = require('express');
const router = express.Router();

const calculatorController = require('../controllers/calculatorController')

//Route for addition
router.get('/add', (req,res) => {
    calculatorController.addNumbers(req,res)
})

//Route for subtraction
router.get('/subtract', (req,res) => {
    calculatorController.subtractNumbers(req,res)
})

//Route for multiplication
router.get('/multiply', (req,res) =>{
    calculatorController.multiplyNumbers(req,res)
})

//Route for division
router.get('/divide', (req,res) => {
    calculatorController.divideNumbers(req,res)
})

module.exports = router;

/*Earlier Segment of Mod 5
//Adding two numbers
router.get('/add', (req,res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
})

//Subtracting two numbers
router.get('/subtract', (req,res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let difference = number1 - number2
    console.log(difference)
    res.status(200)
    res.json({result:difference})
})

//Multiplying two numbers
router.get('/multiply', (req,res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = number1 * number2
    console.log(product)
    res.status(200)
    res.json({result:product})
})

//Dividing two numbers
router.get('/divide', (req,res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let fraction = number1 / number2
    console.log(fraction)
    res.status(200)
    res.json({result:fraction})
})
*/

