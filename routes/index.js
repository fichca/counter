const express = require("express");
const CountService = require('../service/CountService');

const countService = new CountService();
const router = express.Router()

router.post("/:bookId/incr", (req, res) => {
    const {bookId} = req.params;
    countService.increment(bookId)
        .then(count => {
            res.status(201);
            res.json({count: count});
        })
        .catch(() => {
            res.status(400);
            res.send();
        })
})

router.get("/:bookId", (req, res) => {
    const {bookId} = req.params;
    let views = countService.getViews(bookId);
    res.status(201);
    res.json({count: views, bookId: bookId});
})

router.get("/get/all", (req, res) => {
    res.status(201);
    let allMap = countService.getAll();
    const allList = [];
    allMap.forEach((value, key) => {
        allList.push({
            id: key,
            count: value
        })
    })
    res.json({all: allList});
})


module.exports = router;