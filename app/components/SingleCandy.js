import React from 'react';
import { connect } from 'react-redux';
import {
  getMoreCandy,
  getLessCandy,
  getSingleCandy,
} from '../reducers/candyReducer';

class SingleCandy extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.candyId;
    console.log('id: ', id);
    this.props.getSingleCandy(id);
  }
  render() {
    const candy = this.props.candy;
    console.log('single candy: ', candy);
    return (
      <div>
        {' '}
        <td>{candy.description}</td>
        <td>
          {candy.quantity}
          <button
            type="submit"
            onClick={() => this.props.moreCandy(candy.id, candy.quantity)}
          >
            More!
          </button>
          <button
            type="submit"
            onClick={() => this.props.lessCandy(candy.id, candy.quantity)}
          >
            Less!
          </button>
        </td>
        <td>
          <img src={candy.imageUrl} />
        </td>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  candy: state.singleCandy.singleCandy,
});

const mapDispatchToProps = dispatch => ({
  getSingleCandy: id => dispatch(getSingleCandy(id)),
  moreCandy: (id, quantity) => dispatch(getMoreCandy(id, quantity)),
  lessCandy: (id, quantity) => dispatch(getLessCandy(id, quantity)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCandy);
