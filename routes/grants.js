// Routes to get Grants
const express =  require('express');
const router = express.Router();
const grantController = require('../controllers/grantController');

// Get Grants
// api/grants
router.get('/', 
    grantController.getGrants
);

router.post('/update',
    grantController.updateGrants
);

module.exports = router;