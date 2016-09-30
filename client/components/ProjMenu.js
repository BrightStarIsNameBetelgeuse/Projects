import React from 'react';
import { Link } from 'react-router';

export default () => {
    return (
        <div className="proj-menu">
            <h2>Projects</h2>
            <ul className="proj-menu-list">
                <li className="proj-menu-list__item">
                    <Link to="sequence">Task 1</Link>
                </li>
                <li className="proj-menu-list__item">
                    <Link to="/">Task 2</Link>
                </li>
                <li className="proj-menu-list__item">
                    <Link to="/">Task 3</Link>
                </li>
                <li className="proj-menu-list__item">
                    <Link to="/">Task 4</Link>
                </li>
            </ul>
        </div>
    );
}