const express = require('express');
  const server = express();
  const port = 3000;

  const Routes = require('.routes');
const { ClientRoutes } = require('./routes');

  server.use('/api/v1/clients', Routes.ClientRoutes);
  server.use('/api/v1/products', Routes.ProductRoutes);
  server.use('/api/v1/sales', Routes.SaleRoutes);

  server.listen(port, () => {
    console.log('API escuchando en puerto ${port}.');
  })

