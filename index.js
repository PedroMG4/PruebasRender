const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware CORS forzado manual
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://jrburguesiafe.onrender.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 Backend de prueba funcionando');
});

app.post('/enviar-pedido', (req, res) => {
  console.log('Pedido recibido:', req.body);
  res.status(200).json({ mensaje: 'Pedido recibido correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
