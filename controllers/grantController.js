const Grant = require('../models/Grant');

exports.getGrants = (req, res) => {
    console.log('From getGrants');
    res.status(200).send({message: "Server Up"});
}

exports.updateGrants = async (req, res) => {
    console.log('From updateGrants');
    try {
        let grant;

        // create new grant
        grant = new Grant({ ...req.body, _id: req.body.id });

        // save grant
        await grant.save();

        // confirmation message
        res.send('Grant created');
    } catch (error) {
        console.log(error);
        res.status(400).send('There was an error');
    }
}