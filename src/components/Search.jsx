import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../redux/slices/searchSlice"

export default function Search() {

    const { searchValue } = useSelector(state => state.search)
    const dispatch = useDispatch()

    const searchInput = React.useRef()

    const onClickClose = () => {
        dispatch(setSearchValue(''))
        searchInput.current.focus()
    }

    return (
        <div className="search__body">
            <img src={require('../img/header/search.png')} alt="" className="search__img" />
            <input
                ref={searchInput}
                type="text"
                placeholder="Поиск пиццы..."
                className="search__input"
                onChange={e => dispatch(setSearchValue(e.target.value))}
                value={searchValue}
            />
            <img onClick={onClickClose} src={require('../img/header/close.png')} alt="" className="search__img-close" />
        </div>
    )
}