import React from "react";

const DrinkCard = (props) => {

        const drink = props.response.map((drink) => {
            return (
                <div className="ui card" style={{margin: "1rem"}}>
                    <div className="image">
                        <img src=""/>
                    </div>
                    <div className="content">
                        <a className="header">{drink.strDrink}</a>
                        <div className="image">
                            <img src={drink.strDrinkThumb} style={{width: "75%", margin: "1rem"}}/>
                        </div>
                        <div className="description">
                            {drink.strInstructions}
                        </div>
                    </div>
                </div>
            )
        })

    return(
            <div className="ui link cards centered grid" style={{marginTop: "2rem"}}>
                {drink}
            </div>
        )
    }

export default DrinkCard;