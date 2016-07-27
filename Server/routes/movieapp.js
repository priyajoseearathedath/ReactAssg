var MoviePart = require('./models/scema');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var movie = require('node-movie');

router.get('/show', function(req, res) {
  MoviePart.find(function(err, mov) {
    if(err){
      return res.send("Movie not found");
    }
    res.json(mov);
  });
});
//react view operation
router.get('/', function(req, res) {
  MoviePart.find(function(err, mov) {
    if(err){
      return res.send("Movie not found");
    }
    res.json(mov);
  });
});
router.post('/insert', function(req, res) {
  var m_name = req.body.title;
    movie(m_name, function (err, data) {
      var m = new MoviePart();
      m.Title=data.Title;
      m.Year=data.Year;
      m.Rated=data.Rated;
      m.Released=data.Released;
      m.Runtime=data.Runtime;
      m.Genre=data.Genre;
      m.Director=data.Director;
      m.Writer=data.Writer;
      m.Actors=data.Actors;
      m.Language=data.Language;
      m.Country=data.Country;
      m.Awards=data.Awards;
      m.Poster=data.Poster;
      m.Metascore=data.Metascore;
      m.imdbRating=data.imdbRating;
      m.imdbVotes=data.imdbVotes;
      m.imdbID=data.imdbID;
      m.Type=data.Type;
      m.Response=data.Response;
      m.save(function(err) {
        if(err) {
          res.send("Insertion failed");
        }
        res.send("Inserted successfully");
      });
    });
});
//react insert operation
router.post('/', function(req, res) {
    console.log(req.body);
    var m=new MoviePart(req.body);
    m.save(function(err) {
      if(err) {
        res.send("Insertion failed");
      }
      res.send("Inserted successfully");
    });
  });

//update details
router.put('/:id', function(req, res) {
  MoviePart.findOne({ _id: req.params.id}, function(err, movie) {
    if(err) {
      return res.send("Id not found");
    }
    for(properties in req.body) {
      movie[properties] = req.body[properties];
    }
    movie.save(function(err) {
      if(err) {
        return res.send("Not updated");
      }
      res.json(movie);
    });
  });
});
// update operation in react
router.put('/:mname1/:mname2', function(req, res, next) {
  var mname1=req.param('mname1');
    var mname2=req.param('mname2');
  MoviePart.update(
 { _id: mname1 },
 {
    $set:{Title: mname2,Year:"1994" }

 },function(err,result){
   console.log("updated successfully");
 }
)
res.send("Updated successfully");
   });
//delete operation
router.delete('/:id', function(req, res) {
  MoviePart.remove({
    _id: req.params.id
  }, function(err, movie) {
    if(err) {
      res.send("Id not found");
    }
    res.json(movie);
  });
});
module.exports = router;
