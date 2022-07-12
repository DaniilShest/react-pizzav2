import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

export default function Pizza({ pizzaItem }) {
    const [activeSize, setActiveSize] = React.useState(0)
    const [activeType, setActiveType] = React.useState(0)

    const typesName = ['Тонкое', 'Традиционное']

    const dispatch = useDispatch()

    const onClickAdd = () => {
        const item = {
            id: pizzaItem.id,
            name: pizzaItem.name,
            price: pizzaItem.price,
            img: pizzaItem.imgURL,
            type: typesName[activeType],
            size: pizzaItem.sizes[activeSize]
        }
        dispatch(addItem(item))
    }

    return (
        <div className="card">
            <img src={require(`../img/pizza/${pizzaItem.imgURL}`)} alt="" className="card__img" />
            <h2 className="card__title">{pizzaItem.name}</h2>
            <div className="card__select">
                <div className="card__thickness">
                    {pizzaItem.thicness.map((typeID) => (
                        <div
                            key={typeID}
                            onClick={() => setActiveType(typeID)}
                            className={activeType === typeID ? 'card__thick active' : 'card__thick'}
                        >{typesName[typeID]}</div>
                    ))}
                </div>
                <div className="card__sizes">
                    {pizzaItem.sizes.map((size, i) => (
                        <div
                            key={size}
                            onClick={() => setActiveSize(i)}
                            className={activeSize === i ? 'card__size active' : 'card__size'}
                        >{size} см.</div>
                    ))}
                </div>
            </div>
            <div className="card__bottom">
                <div className="card__price">{pizzaItem.price} ₽</div>
                <div onClick={onClickAdd} className="card__add">+ Добавить </div>
            </div>
        </div >
    )
}