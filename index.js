const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Main app listenting at http://localhost:${port}`)
});


const friendRoutes = require('./routes/friendRoutes');

const friendApp = express();
const friendPort = 5555;

friendApp.use(express.json());

friendApp.use('/', express.static('public'));
friendApp.use('/friends', friendRoutes);

friendApp.listen(friendPort, () => {
    console.log(`Example app listening at http://localhost:${friendPort}`);
});

/*
Exercise 1 (More than 1 port)

const app2 = express();
const port2 = 3001;

app2.listen(port2, () => {
    console.log(`Example app listenting at http://localhost:${port2}`)
});

*/

/*
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

/*
const calculatorRoutes = require('./routes/calculatorRoutes.js');
app.use('/calculator', calculatorRoutes);



*/


