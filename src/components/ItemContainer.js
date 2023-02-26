import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";
function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}> Buy Items </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;
  return {
    item: itemState,
  };
};

const mapDispatctToProps = (dispatch, ownProps) => {
  const dispatctFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatctFunction,
  };
};

export default connect(mapStateToProps, mapDispatctToProps)(ItemContainer);
