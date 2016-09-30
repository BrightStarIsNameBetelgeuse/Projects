import React from 'react';

export default () => {
//class Sequence extends React.Component {
    //render(){
        return(
            <div className="proj-content">
                <input type="number" placeholder="Enter the figure" id="input"></input>
                <button className="proj-btn" classID="submit">Ok</button> <button className="proj-btn" id="clear">Clear</button>
                <p id="prime-result"></p>
            </div>
        );
    //}
}