// Routes to get Grants
const express =  require('express');
const router = express.Router();

// Get Grants
// api/grants
router.get('/', () => {
    console.log('Getting Grants...');
});

module.exports = router;