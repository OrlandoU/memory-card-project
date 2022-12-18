import { useEffect } from 'react'
import { useState } from 'react'
import randomizer from '../helpers/randomizer'
import queryId from '../helpers/queryId'

export default function Body(props){
    const [cardsData, setCardsData] = useState([])

    useEffect(()=>{
        queryArr(props.level)
    }, [props.level])

    const queryArr = async (size) => {
        let randomizedArr = randomizer(size)

        let arrOfData = []
        for(const id of randomizedArr){
            let data = await queryId(id)
            console.log(data)
            arrOfData.push(data)
        }
        setCardsData(arrOfData)
    }

    return (
        <div className="cards-container">
            {cardsData.map(e=>{
                return <li>dayum</li>
            })}
        </div>
    )
}