const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Router1')
    console.log('Router1')
})

module.exports = router