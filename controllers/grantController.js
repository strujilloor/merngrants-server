const Grant = require('../models/Grant');
const axios = require('axios');

exports.getGrants = async (req, res) => {
    console.log('From getGrants');
    // res.status(200).send({message: "Server Up"});
    try {
        const pagination = req.query.pagination
            ? parseInt(req.query.pagination)
            : 5;

        const page = req.query.page
            ? parseInt(req.query.page)
            : 1;
            
        const grants = await Grant.find()
            .skip((page - 1) * pagination) // skip n elements (ex: (pag 2 - 1) * 20 = 20, skip 20 elements)
            .limit(pagination) // amount of data to bring
            .sort({ openDate: -1 });

        res.json({ grants });
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.updateGrants = async (req, res) => {
    console.log('From updateGrants');

    try {
        // Get grants from grants.gov
        const response = await axios.post('https://www.grants.gov/grantsws/rest/opportunities/search/', {startRecordNum: 0, sortBy: "openDate|desc", oppStatuses: "forecasted|posted", rows: 1000});
        // note: change the amount of data with rows (1000)

        const grants = response.data.oppHits;

        // Update and validate if grant exists
        let newGrant;
        let grantExists

        await Grant.insertMany( grants );

        // confirmation message
        res.json({ msg: 'Grants Updated' });
        // res.json( grants );
    } catch (error) {
        console.log(error);
        res.status(400).send('There was an error');
    }
}