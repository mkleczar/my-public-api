import express from 'express';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/echo/:value', (req, res) => {
  res.status(200).json({ status: 'ok', echo:  req.params.value });
})

export default app;
