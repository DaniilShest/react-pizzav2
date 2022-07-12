import React from "react";
import axios from "axios";

import { useSelector } from "react-redux";

import Sort from "../components/Sort";
import PizzaList from "../components/PizzaList";
import MyLoader from "../components/MyLoader";

export default function Home({ searchValue }) {

    const [isLoading, setIsLoading] = React.useState(true)
    const [pizzaList, setPizzaList] = React.useState([])


    const { activeSort, activeCategory } = useSelector(state => state.sort)

    React.useEffect(() => {
        try {
            const category = activeCategory ? activeCategory : ''
            setIsLoading(true)
            axios.get(`https://62a7fff5a89585c1770ab3a4.mockapi.io/pizzas?category=${category}&sortBy=${activeSort.sortType}&order=${activeSort.ascending}`).then(res => {
                setPizzaList(res.data)
            })

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [activeCategory, activeSort])



    return (
        <>
            <Sort setIsLoading={setIsLoading} />
            <h1 className="title">Все пиццы</h1>
            {isLoading
                ?
                <div className="loaders">
                    <MyLoader className="loader" />
                    <MyLoader className="loader" />
                    <MyLoader className="loader" />
                    <MyLoader className="loader" />
                    <MyLoader className="loader" />
                    <MyLoader className="loader" />
                    <MyLoader className="loader" />
                    <MyLoader className="loader" />
                </div>
                :
                <PizzaList listOfPizza={pizzaList} />}
        </>
    )
}