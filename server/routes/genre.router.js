const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
// importing all necessary tools for the app

router.get('/:id', (req, res) => {
  const id = req.params.id
  const query = `SELECT "genres"."name", "movies"."id" FROM "movies" 
  JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
  JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
  WHERE "movies"."id" = '${id}';`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

module.exports = router;