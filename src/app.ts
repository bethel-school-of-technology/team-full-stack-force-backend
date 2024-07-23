import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
const cors = require('cors');
import taskRoutes from './routes/taskRoutes';
import userRoutes from './routes/userRoutes';

import { db } from './models';

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// 404 if not found
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
})

db.sync().then(() => {
    console.log("Connected to MySQL");
    
})

app.listen(3000);
console.log("Server listening on port 3000");