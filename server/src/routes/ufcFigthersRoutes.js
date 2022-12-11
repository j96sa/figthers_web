import {Router} from 'express'
import { getAllFighters, putFighter, postFighter, deleteFighter, getFightersDivision, getSingleFighter } from '../controllers/figtersController.js';

// 
const router = Router()


// 
router.get('/', getAllFighters);
router.get('/:division', getFightersDivision);
router.get('/:division/:id', getSingleFighter);

router.post('/:division', postFighter);
router.put('/:division/:id', putFighter);
router.delete('/:division/:id', deleteFighter);


export default router;
