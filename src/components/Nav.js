import { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <div className='ui two column centered grid'>
                <div className="ui two item menu" style={{margin: "2rem", width: "50vW"}}>
                    <Link to='/' className="item">🏡 Home</Link>
                    <Link to='/about' className="item">ℹ️ About</Link>
                </div>
            </div>
        )
    }
}

export default Nav;