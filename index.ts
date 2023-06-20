import express, { Request, Response } from 'express';

const app = express();
const {generateCreditCardDetails} = require('./cc-generator-function')

const PORT = 3000 || process.env.PORT

app.get('/creditCard', (req, res) => {
    const numGenerations = parseInt(req.query.count as string, 10) || 1;
    const generatedCards = [];
  
    for (let i = 0; i < numGenerations; i++) {
      const cardDetails = generateCreditCardDetails();
      generatedCards.push(cardDetails);
    }
  
    res.json(generatedCards);
  });;

app.listen(PORT, ()=> {
    console.log(`Lestening To ${PORT}`)
})