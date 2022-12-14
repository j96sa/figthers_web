import {Router} from 'express';
import { getAllBoxers, getSingleBoxer, getSingleDivision } from '../controllers/boxersControllers.js';

// 
const router = Router();


router.get('/', getAllBoxers)
router.get('/:division', getSingleDivision)
router.get('/:division/:id', getSingleBoxer)
// router.post('/')
// router.put('/')
// router.delete('/')


export default router;