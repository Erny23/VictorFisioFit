import express from "express";
import controller from '../controllers/controllers.js';

const router = express.Router();

router.post('/login', controller.log);

router.get('/test', controller.test);

router.get('/check', controller.check);

function getRouter() {
    return router;
};

export default getRouter();