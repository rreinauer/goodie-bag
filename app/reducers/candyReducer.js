import Axios from 'axios';

const GOT_CANDY = 'GOT_CANDY';
const GOT_SINGLE_CANDY = 'GOT_SINGLE_CANDY';
const MORE_CANDY = 'MORE_CANDY';
const LESS_CANDY = 'LESS_CANDY';

const gotCandy = candies => ({
  type: GOT_CANDY,
  candies,
});
const gotSingleCandy = candy => ({
  type: GOT_SINGLE_CANDY,
  candy,
});
const moreCandy = id => ({
  type: MORE_CANDY,
  id,
});
const lessCandy = id => ({
  type: LESS_CANDY,
  id,
});

export const getCandy = () => async dispatch => {
  const { data } = await Axios.get('/api/candies');
  dispatch(gotCandy(data));
};
export const getSingleCandy = id => async dispatch => {
  const { data } = await Axios.get(`/api/candies/${id}`);
  dispatch(gotSingleCandy(data));
};

export const getMoreCandy = (id, qty) => async dispatch => {
  await Axios.put(`/api/candies/increase/${id}`, { quantity: qty + 1 });
  dispatch(moreCandy(id));
};

export const getLessCandy = (id, qty) => async dispatch => {
  await Axios.put(`/api/candies/increase/${id}`, { quantity: qty - 1 });
  dispatch(lessCandy(id));
};

const initialState = {
  candies: [],
  singleCandy: {},
  loading: true,
};

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDY:
      return { ...state, candies: action.candies, loading: false };
    case GOT_SINGLE_CANDY:
      return { ...state, singleCandy: action.candy, loading: false };
    case MORE_CANDY:
      return {
        ...state,
        singleCandy: {
          ...state.singleCandy,
          quantity: state.singleCandy.quantity + 1,
        },
      };
    case LESS_CANDY:
      return {
        ...state,
        singleCandy: {
          ...state.singleCandy,
          quantity: state.singleCandy.quantity - 1,
        },
      };
    default:
      return state;
  }
};

export default candyReducer;
