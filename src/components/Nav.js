import { Component } from "react";
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <div className='ui two column centered grid'>
                <div className="ui two item menu" style={{margin: "2rem", width: "50vW", alignItems: "center"}}>
                    <NavLink to='/' className="item">Home</NavLink>
                    <NavLink to='/about' className="item">About</NavLink>
                </div>
            </div>
        )
    }
}

export default Nav;