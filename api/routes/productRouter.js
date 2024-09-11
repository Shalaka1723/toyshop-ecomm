
const router = require('express').Router();

router.get('/product', (req, ensureAuthenticated, res) => {
    res.status(200).json([
        {
            name: "truck",
            price: 500
        },
        {
            name: "doll",
            price: 400
        },
    ])
});


module.exports = router;