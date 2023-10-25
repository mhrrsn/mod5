const express = require('express');
const app = express();
const port = 3000;

/*
Exercise 1 (More than 1 port)

const app2 = express();
const port2 = 3001;

app2.listen(port2, () => {
    console.log(`Example app listenting at http://localhost:${port2}`)
});

*/

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.use('/', express.static('public'));

/* Earlier segment of Mod 5
const testRoutes = require('./routes/myTestRoutes');
app.use('/mytest', testRoutes);
*/

const calculatorRoutes = require('./routes/calculatorRoutes.js');
app.use('/calculator', calculatorRoutes);


app.listen(port, () => {
    console.log(`Example app listenting at http://localhost:${port}`)
});



