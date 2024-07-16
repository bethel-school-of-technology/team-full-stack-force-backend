import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
})

app.listen(3000);
console.log("Server listening on port 3000");