import express, { NextFunction, Response, Request } from 'express';
const app = express();
const port = 3000;

// Middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log('Url', req.originalUrl);
    next();
};

// Middleware
const authenticate = (req: Request, res: Response, next: NextFunction) => {
    console.log('Authentication');
    next();
};

app.use(logger);
app.use(authenticate);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
