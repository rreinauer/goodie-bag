import React from 'react';
import { connect } from 'react-redux';

const SingleCandy = props => {
  const id = props.match.params.candyId;
  console.log('id: ', id);
  const candy = props.candies.filter(singleCandy => singleCandy.id == id)[0];
  console.log('single candy: ', candy);
  return (
    <div>
      {' '}
      <td>{candy.description}</td>
      <td>
        {candy.quantity}
        <button type="submit">More!</button>
        <button type="submit">Less!</button>
      </td>
      <td>
        <img src={candy.imageUrl} />
      </td>
    </div>
  );
};

const mapStateToProps = state => ({
  candies: state.candies,
});
export default connect(mapStateToProps)(SingleCandy);
