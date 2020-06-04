const Grant = require('../models/Grant');
const axios = require('axios');

exports.getGrants = async (req, res) => {
    console.log('From getGrants');
    // res.status(200).send({message: "Server Up"});
    try {
        const grants = await Grant.find().sort({ openDate: -1 });
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
        const response = await axios.post('https://www.grants.gov/grantsws/rest/opportunities/search/', {startRecordNum: 0, sortBy: "openDate|desc", oppStatuses: "forecasted|posted", rows: 10});
        // note: change the amount of data with rows (1000)

        const grants = response.data.oppHits;

        // Update and validate if grant exists
        let newGrant;
        let grantExists

        grants.forEach( async (grant) => {
            // validate that the grant is unique
            grantExists = await Grant.findOne({ id: grant.id });
            if ( !grantExists ) {
                // create new grant
                newGrant = new Grant({ ...grant });
                // save grant
                await newGrant.save();
            } else {
                console.log('Grant already exist');
            }
        });

        // confirmation message
        res.json({ msg: 'Grants Updated' });
        // res.json( grants );
    } catch (error) {
        console.log(error);
        res.status(400).send('There was an error');
    }
}