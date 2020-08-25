import React from 'react';
import {connect} from "react-redux";
import {addFeature,removeFeature} from "../actions/carAction";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onclick={()=>{
        props.removeFeature(props.feature)
      }} className="button">Remove</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null,{removeFeature})(addFeature);
