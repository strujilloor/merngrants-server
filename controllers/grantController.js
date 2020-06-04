const Grant = require('../models/Grant');

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

    // extract id
    const { id } = req.body;

    try {
        // validate that the grant is unique
        let grant = await Grant.findOne({ _id: id });
        if ( grant ) {
            return res.status(400).json({ msg: 'Grant already exists' });
        }

        // create new grant
        grant = new Grant({ ...req.body, _id: req.body.id });

        // save grant
        await grant.save();

        // confirmation message
        // res.json({ msg: 'Grant created' });
        res.json( grant );
    } catch (error) {
        console.log(error);
        res.status(400).send('There was an error');
    }
}