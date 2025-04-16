import express, { Request, Response } from 'express';

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Example route
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP' });
});

// Add other routes and middleware here

export default app;
