const router = require('express').Router();


router.post('/login', (req,res)=>{
    res.send('Login Successfull')
});

router.post('/signup', (req,res)=>{
    res.send('Sigup Successfull')
});

module.exports = router;