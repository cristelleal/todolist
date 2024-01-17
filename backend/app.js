const { createServer } = require('http');
const {
  index, create, remove, update,
} = require('./functions/api/todos');

createServer(async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    const url = new URL(req.url, `http://${req.headers.host}`);
    const endpoint = `${req.method}:${url.pathname}`;
    let result;
    switch (endpoint) {
      case 'GET:/todos':
        result = await index(req, res);
        break;
      case 'POST:/todos':
        result = await create(req, res);
        break;
      case 'DELETE:/todos':
        result = await remove(req, res);
        break;
      case 'PUT:/todos':
        result = await update(req, res);
        break;
      default:
        res.writeHead(404);
        res.end();
        return;
    }
    if (result) {
      res.write(JSON.stringify(result));
    } else {
      res.writeHead(404);
    }
  } catch (error) {
    res.writeHead(500);
    res.write(JSON.stringify({ error: 'Internal Server Error' }));
  }
  res.end();
}).listen(3000);
