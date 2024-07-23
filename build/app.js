"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors = require('cors');
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const models_1 = require("./models");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// routes
app.use('/api/tasks', taskRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
// 404 if not found
app.use((req, res, next) => {
    res.status(404).end();
});
models_1.db.sync().then(() => {
    console.log("Connected to MySQL");
});
app.listen(3000);
console.log("Server listening on port 3000");
