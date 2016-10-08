var mongoose = require('mongoose');
var Zombie = mongoose.model('Zombie');

var sendJSONresponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.createZombies = function (req, res) {
	Zombie.create({
    Season: req.body.season,
    Episode: req.body.episode,
    SeriesNumber: req.body.seriesnumber,
    Title: req.body.title,
    FirstAirDate: req.body.firstairdate,
    USViewers: req.body.usviewers
  }, function(err, zombie) {
    if (err) {
      console.log(err);
      sendJSONresponse(res, 400, err);
    } else {
      console.log(zombie);
      sendJSONresponse(res, 201, zombie);
    }
  });
}

module.exports.retrieveZombies = function (req, res) {
	Zombie
    .find()
    //.select('')
    .exec(
      function(err, zombie) {
        if (err) {
          sendJSONresponse(res, 400, err);
        } else {
          sendJSONresponse(res, 200, zombie);
        }
      }
    );
}

module.exports.removeZombies = function (req, res) {
  var zombieid = req.params.zombieid;
  if (zombieid) {
    Zombie
      .findByIdAndRemove(zombieid)
      .exec(
        function(err, zombie) {
          if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log("This zombie " + zombieid + " is deleted");
          sendJSONresponse(res, 204, null);
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "zombieid not found"
    });
  }
}
