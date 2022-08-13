import express from 'express';
import { router } from 'express-file-routing';

const router = express.Router();

const {createToDoItem} = require('../controllers/ToDoController');

router.route('/').post(createTask);

export default router;