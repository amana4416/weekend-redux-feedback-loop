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