const express =  require('express');
const { addContent ,updateContent,getContents, deleteContent} = require('../controllers/contentController');

const router = express.Router();

router.post('/addcontent',addContent)
router.post('/updatecontent/:id',updateContent)
router.get('/getcontent',getContents)
router.post('/deletecontent/:id',deleteContent)

module.exports = router;