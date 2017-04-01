import axios from 'axios';

function pitchFetching() {
  return {
    type: 'FETCHING_PITCH_PAGE'
  }
}
function pitchReceived(pitch) {
  return {
    type: 'PITCH_LOADED',
    pitch: pitch
  }
}
export function fetchPitch(userid=null, pitchid) {
  return (dispatch) => {
    dispatch(pitchFetching())
    //URL to get pitch
    axios.get('http://localhost:8080/api/pitch', {
      params: {
        userId: userid,
        pitchId: pitchid
      }
    })
    .then(results => dispatch(pitchReceived(results.data)))
  }
}

export function fetchFollowers(pitchid) {
  return (dispatch) => {
    axios.get('http://localhost:8080/api/followers', {
      params: {
        q: 'follows',
        pitchId: pitchid
      }
    })
    .then(results => dispatch(followersRecieved(results.data)))
    .catch( err => console.log(err))
  }
}

function followersRecieved(followers) {
  return {
    type: 'FETCHED_FOLLOWERS',
    followers: followers
  }
}