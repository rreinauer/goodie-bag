import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCandy } from '../reducers/candyReducer';
import SingleCandy from './SingleCandy';

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
          {candies.map(candy => (
            <tr key={candy.id}>
              <Link to={`/candies/${candy.id}`}>
                <td>{candy.name}</td>
              </Link>
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
