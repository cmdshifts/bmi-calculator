var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

/* GET bmi page. */
router.get('/bmi/:weight/:height', function (req, res) {
  const weight = parseFloat(req.params.weight)
  const height = parseFloat(req.params.height) / 100
  let result

  if (!weight || !height) {
    return res.status(400).send('Weight and height are required')
  }

  const bmi = weight / (height * height)

  if (bmi < 18.5) {
    result = 'Underweight'
  } else if (bmi >= 18.5 && bmi < 25) {
    result = 'Normal weight'
  } else if (bmi >= 25 && bmi < 30) {
    result = 'Overweight'
  } else {
    result = 'Obesity'
  }

  res.send({
    weight,
    height,
    bmi,
    result,
  })
})

module.exports = router
