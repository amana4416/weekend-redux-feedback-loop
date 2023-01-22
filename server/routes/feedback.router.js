const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//post route
router.post('/', (req, res) => {
    // variables
    let feedback = req.body;
    let feeling = Number(feedback.feeling);
    let understanding = Number(feedback.understanding);
    let support = Number(feedback.support);
    let comments = feedback.comments;
    let sqlText = `
        INSERT INTO "feedback" ("feeling","understanding","support","comments")
            VALUES ($1,$2,$3,$4);
    `;
    let sqlValues = [feeling, understanding, support, comments];
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((dbErr) => {
            console.log('something broke in post /feedback', dbErr);
            res.sendStatus(500);
        })
})

//get route
router.get('/', (req, res) => {
    let sqlText = `
        SELECT * FROM "feedback"
            ORDER BY "id" DESC;
        `;
        //order by "id" desc so the most recent feedback is at the top
    pool.query(sqlText)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((error) => {
            console.log('something broke in get /feedback', error);
            res.sendStatus(500);
        })
})

module.exports = router;