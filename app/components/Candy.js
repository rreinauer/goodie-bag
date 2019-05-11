import React from 'react';
import { connect } from 'react-redux';
import { getCandy } from '../reducers/candyReducer';

class Candy extends React.Component {
  componentDidMount() {
    this.props.getCandy();
    console.log(this.props);
  }
  render() {
    const candies = this.props.candies;
    console.log(candies);
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>image</th>
          </tr>
          {candies.map(candy => (
            <tr key={candy.id}>
              <td>{candy.name}</td>
              <td>{candy.description}</td>
              <td>{candy.quantity}</td>
              <td>
                <img src={candy.imageUrl} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = state => ({
  candies: state.candies,
});
const mapDispatchToProps = dispatch => ({
  getCandy: () => dispatch(getCandy()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Candy);
