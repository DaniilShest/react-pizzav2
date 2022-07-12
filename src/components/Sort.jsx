import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAtiveCategory, setActiveSort } from "../redux/slices/sortSlice";

const sortTypes = [
    { name: 'популярности (по убыванию)', sortType: 'rating', ascending: 'desc' },
    { name: 'популярности (по возрастанию)', sortType: 'rating', ascending: 'asc' },
    { name: 'цене (по убыванию)', sortType: 'price', ascending: 'desc' },
    { name: 'цене (по возрастанию)', sortType: 'price', ascending: 'asc' }
]

const categories = ['Все', 'Мясные', 'Вегетерианские', 'Острые']

export default function Sort() {
    React.useEffect(() => {
        window.onclick = e => {
            if (!e.target.classList.contains('sort__by-popup') && !e.target.classList.contains('sort__by-item') && !e.target.classList.contains('filter__span')) {
                setSortIsOpened(false)
            }
        }
    }, [])

    const { activeSort, activeCategory } = useSelector(state => state.sort)
    const dispatch = useDispatch()

    const [sortIsOpened, setSortIsOpened] = React.useState(false)

    const changeSort = (obj) => {
        setSortIsOpened(false)
        dispatch(setActiveSort(obj))
    }

    return (
        <div className="sort">
            <ul className="sort__list">
                {categories.map((category, categoryIndex) => (
                    <li
                        key={categoryIndex}
                        onClick={() => dispatch(setAtiveCategory(categoryIndex))}
                        className={activeCategory === categoryIndex
                            ? "sort__item active"
                            : "sort__item"
                        }>{category}</li>
                ))}
            </ul>
            <div className="sort__by">
                <div className="sort__by-text">Сортировать по: <span className="filter__span" onClick={() => setSortIsOpened(!sortIsOpened)}> {activeSort.name}</span></div>
                <div className={sortIsOpened ? 'sort__by-popup active' : 'sort__by-popup'}>
                    {sortTypes.map((obj) => (
                        <div key={obj.name} onClick={() => changeSort(obj)} className={activeSort.name === obj.name ? "sort__by-item active" : "sort__by-item"}>{obj.name}</div>
                    ))
                    }
                </div>
            </div>
        </div >
    )
}