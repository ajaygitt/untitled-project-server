import express from 'express';
import { createOpening } from '../controllers/hr-management';
const router = express.Router();


router.post('/create/jobOpening',createOpening)


module.exports = router;