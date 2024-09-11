const ensureAuthenticated = require('../middleware/auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('----loggedin user detail----', req.user);
    res.status(200).json([
        {
            name: "truck",
            price: 500
        },
        {
            name: "doll",
            price: 400
        },
    ]);
});


module.exports = router;