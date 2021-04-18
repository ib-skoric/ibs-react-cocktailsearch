import React from 'react';

class About extends React.Component {
    render() {
        return(
            <div className='ui centered' style={{textAlign: "center"}}>
                <h2>Simple cocktail search app</h2>
                <p>This is a simple project created in order to practice: </p>
                <ol className="ui ordered list">
                    <li>React and JSX in general</li>
                    <li>React states and props</li>
                    <li>Passing props to from child to parent and from parent to child</li>
                    <li>Using React Router to make a multi-page app</li>
                </ol>
                <p>This project has been create using <a href="https://www.thecocktaildb.com/api.php">TheCocktailDB</a> and uses exclusively the development API key.</p>
                <p><i className="connectdevelop icon"></i> Created by Ivan Branimir Skoric</p>
            </div>
        )
    }
}

export default About;