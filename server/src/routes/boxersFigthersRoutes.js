import {Router} from 'express';
import { deleteBoxer, getAllBoxers, getSingleBoxer, getSingleDivision, postBoxer, putBoxer } from '../controllers/boxersControllers.js';

// 
const router = Router();


router.get('/', getAllBoxers)
router.get('/:division', getSingleDivision)
router.get('/:division/:id', getSingleBoxer)

router.post('/:division', postBoxer)
router.put('/:division/:id', putBoxer)
router.delete('/:division/:id', deleteBoxer)


export default router;