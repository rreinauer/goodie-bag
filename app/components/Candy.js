import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCandy } from '../reducers/candyReducer';

class Candy extends React.Component {
  componentDidMount() {
    this.props.getCandy();
  }
  render() {
    const candies = this.props.candies;
    if (this.props.loading) return <div>LOADING!!!</div>;
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
  candies: state.candies.candies,
  loading: state.loading,
});
const mapDispatchToProps = dispatch => ({
  getCandy: () => dispatch(getCandy()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Candy);
