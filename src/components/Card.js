import { useEffect, useState } from "react"

export default function Card(props) {
    const [clicked, setClicked] = useState(false)

    const saveClick = () => {
        if (clicked) {
            props.playTurn(true)
            return
        }
        setClicked(true)
        props.playTurn(false)
    }

    useEffect(() => {
        setClicked(false)
    }, [props.level, props.cardsData])

    return (
        <div style={{ order: props.order }} className="card-container" onClick={saveClick}>
            <div className="card">
                <img className="card-img" src={props.imgUrl} alt={props.name} />
                <div className="character-name">{props.name}</div>
            </div>
            <img src={props.imgUrl} className='card-background' alt="" />
        </div>
    )
}