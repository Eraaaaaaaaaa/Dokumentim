const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(express.json());


// Swagger Configuration
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Dokumentacioni',
        version: '1.0.0',
        description: 'Dokumentacioni për API-të',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['./app.js'], // Path to the API docs in your code
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Merr të gjithë përdoruesit
 *     responses:
 *       200:
 *         description: Lista e përdoruesve
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 * 
 */


// Geti per user
app.get('/users', (req, res) => {
    res.send([{ id: 1, name: 'John Doe' }]);
});



/**
 * @swagger
 * /users:
 *   post:
 *     summary: Shto një përdorues të ri
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Përdoruesi u shtua
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 */

// Post per user
app.post('/users', (req, res) => {
    const { name } = req.body;
    res.status(201).send({ id: 2, name });
});

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Përditëso një përdorues
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID e përdoruesit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Përdoruesi u përditësua
 */

// Update per user
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    res.send({ id, name });
  });

  /**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Fshij një përdorues
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID e përdoruesit
 *     responses:
 *       200:
 *         description: Përdoruesi u fshi
 */

// Delete per user
  app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send({ message: `Përdoruesi me id ${id} u fshi.` });
  });

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Merr të gjithë produktet
 *     responses:
 *       200:
 *         description: Lista e produkteve
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 * 
 */


// Geti per products 
app.get('/products', (req, res) => {
  res.send([{ id: 1, name: 'Lapsi' }]);
});

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Shto një produkt të ri
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Produkti u shtua
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 */

// Post per products
app.post('/products', (req, res) => {
  const { name } = req.body;
  res.status(201).send({ id: 2, name });
});

  /**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Përditëso një produkt
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID e produktit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Produkti u përditësua
 */

  // Update per products
app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.send({ id, name });
});

  /**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Fshij një produkt
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID e produktit
 *     responses:
 *       200:
 *         description: Produkti u fshi
 */

// Delete per products
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  res.send({ message: `Produkti me id ${id} u fshi.` });
});
  

// Start the Server
const PORT= 3000;
app.listen(PORT, () => {
  console.log(`API dokumentacioni është i disponueshëm në http://localhost:${PORT}/api-docs`);
});

