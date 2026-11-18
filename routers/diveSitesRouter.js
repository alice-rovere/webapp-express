import express from 'express';
import {destroy, index, show, store, update} from '../controller/diveSiteController.js'

const router = express.Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', store);
router.patch('/:id', update);
router.delete('/:id', destroy);

export default router;