import React from 'react';
import ProjMenu from './ProjMenu';

class App extends React.Component {
    render() {
        return (
            <div className="proj-wrap">
                <ProjMenu />
                {this.props.children}
            </div>
        );
    }
}

export default App;