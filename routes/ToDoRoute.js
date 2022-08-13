import express from 'express';
import { router } from 'express-file-routing';
import {createToDoItem, updateToDoItem, deleteToDoItem, getToDoItem, getAllToDoItems} from './controllers/ToDoController';

const router = express.Router();

router.route('/').post(createToDoItem);
router.route('./id').put(updateToDoItem);
router.route('./id').delete(deleteToDoItem);
router.route('/id').get(getToDoItem);
router.route('/').get(getAllToDoItems);


export default router;