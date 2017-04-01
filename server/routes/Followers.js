const db = require('./../db/Followers');

module.exports.getFollowers = (req, res, next) => {
  const { q, pitchId, userId } = req.query;

  if (q === 'count' && pitchId) {
    // EXAMPLE: /api/followers?q=count&pitchId=1234
    db.getPitchFollowerCount(pitchId)
      .then(results => res.send(results.rows))
      .catch(error => res.status(404).send(error));
  } else if (q === 'follows') {
    // EXAMPLE: /api/followers?q=followst&pitchId=1234
    db.getPitchFollowers(pitchId)
      .then(results => res.send(results.rows))
      .catch(error => res.status(404).send(error));
  } else if (userId) {
    // EXAMPLE: /api/followers?userId=5678
    db.getUserPitchFollows(userId)
      .then(results => res.send(results.rows))
      .catch(error => res.status(404).send(error));
  } else {
    res.status(404).send('Malformed query');
  }
};

module.exports.postFollower = (req, res, next) => {
  const { userId, pitchId } = req.body;
  console.log('userID', userId)
  console.log('pitchID', pitchId)

  // EXAMPLE: /api/followers?userId=3&pitchId=2
  db.postNewPitchFollower(userId, pitchId)
    .then(results => res.send('successfully added follower information'))
    .catch(error => {
      console.log('ERROR', error);
      res.status(404).send(error)
      });
};

module.exports.removeFollower = (req, res, next) => {
  const { userId, pitchId } = req.body;

  // EXAMPLE: /api/followers?userId=3&pitchId=2
  db.deletePitchFollower(userId, pitchId)
    .then(results => res.send())
    .catch(error => {
      console.log('ERROR____', error)
      res.status(404).send(error)
    });
};

module.exports.isFollowing = (req, res, next) => {
  const { userId, pitchId } = req.query;

  db.getIfUserFollowPitch(userId, pitchId)
    .then(results => res.send(results.rows))
    .catch(error => {
      res.status(404).send(error)
    });
}