import express from 'express';
import { createOpening,getOpening,getJobInfo ,applyForJob} from '../controllers/hr-management';
const router = express.Router();


router.post('/create/jobOpening',createOpening)
router.get('/getOpenings',getOpening)

router.get('/get/jobInfo/:title',getJobInfo)

router.post('/job/applyforJob/',applyForJob)
module.exports = router;