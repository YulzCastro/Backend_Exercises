const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Endpoint 1
app.get('/api/', (req, res) => {
  res.status(200).json({ mensaje: 'Hola mundo' });
});

// Endpoint 2
app.get('/api/suma', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const resultado = num1 + num2;
  res.status(200).json({ resultado });
});

// Endpoint 3
app.get('/api/usuario/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.status(200).json({ usuario: nombre });
});

// Endpoint 4
app.get('/api/swapi/:numero', (req, res) => {
  const numero = req.params.numero;
  const swapiURL = `https://swapi.dev/api/people/${numero}/`;
  
  // Aquí puedes hacer una solicitud HTTP a la URL de SWAPI y devolver la respuesta en el formato deseado
  
  res.status(200).json({ personaje: { name: 'Luke Skywalker' } });
});

// Endpoint 5
app.put('/api/body', (req, res) => {
  const body = req.body;
  res.status(200).json(body);
});

// Endpoint 6
app.post('/api/suma', (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const resultado = num1 + num2;
  res.status(200).json({ resultado });
});

// Endpoint 7
app.delete('/api/:id', (req, res) => {
  const id = req.params.id;
  if (id === '3') {
    res.status(200).send('Se ha eliminado el objeto con ID 3');
  } else {
    res.status(404).send('No se encontró el objeto con el ID especificado');
  }
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});