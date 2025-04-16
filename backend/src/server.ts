import app from './app';

const PORT = process.env.PORT || 3001; // Use environment variable or default

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
