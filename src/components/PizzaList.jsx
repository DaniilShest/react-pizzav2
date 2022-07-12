import React from "react";
import { useSelector } from "react-redux";
import Pizza from "./Pizza";

export default function PizzaList({ listOfPizza, }) {

    const { searchValue } = useSelector(state => state.search)

    return (
        <div className="pizza-list">
            <div className="cards">
                {listOfPizza
                    .filter(e => e.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map(e => (
                        <Pizza key={e.id} pizzaItem={e} />
                    ))}
            </div>

        </div>
    )
}