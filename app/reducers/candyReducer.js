import Axios from 'axios';

const GOT_CANDY = 'GOT_CANDY';

const gotCandy = candies => ({
  type: GOT_CANDY,
  candies,
});

export const getCandy = () => async dispatch => {
  const { data } = await Axios.get('/api/candies');
  dispatch(gotCandy(data));
};

const candyReducer = (candies = [], action) => {
  switch (action.type) {
    case GOT_CANDY:
      return action.candies;
    default:
      return candies;
  }
};

export default candyReducer;
