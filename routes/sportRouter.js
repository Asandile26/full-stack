const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.status(200).json({
        message: 'GET request handling'
    });
})
router.post('/', (req, res) =>{
    const sport ={
        sport_code: req.body.sport_code,
        sportName: req.body.sportName,
        ballSize: req.body.ballSize,
        number_Of_Players: req.body.number_Of_Players
    };
    res.status(201).json({
        message: 'POST request to /sportRouter',
        createdProduct: sport
    });
});
router.put('/:sport_code', (req, res, next) =>{
    res.status(200).json({
        message: 'PUT request by id',
        sport_code: req.params.sport_code
    });
});
router.delete('/:sport_code', (req, res, next) =>{
    res.status(200).json({
        message: 'delete by Id'
    });
});
