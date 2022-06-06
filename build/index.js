"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const winston_1 = __importDefault(require("./winston"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware que transforma req.body a json
const PORT = 3080;
app.get('/ping', (_req, res) => {
    console.log('pong');
    res.send('pong');
});
app.listen(PORT, () => {
    winston_1.default.info(`Server is listening on port ${PORT}`);
    console.log('Server listeting');
});
