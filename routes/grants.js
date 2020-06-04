// Routes to get Grants
const express =  require('express');
const router = express.Router();
const grantController = require('../controllers/grantController');

// Get Grants
// api/grants
router.get('/', 
    grantController.getGrants
);

// Update Grants
router.get('/update',
    grantController.updateGrants
);

module.exports = router;