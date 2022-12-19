import { useEffect } from 'react'
import { useState } from 'react'
import randomizer from '../helpers/randomizer'
import queryId from '../helpers/queryId'
import Card from '../components/Card'
import shuffleArr from '../helpers/shuffleArr'
import '../styles/body.css'

export default function Body(props){
    const [cardsData, setCardsData] = useState([])
    const [order, setOrder] = useState(Array(props.level).fill(1).map((el, index)=>index))
    const [streak, setStreak] = useState(1)
    const [uniqueId, setUniqueId] = useState(0)

    useEffect(()=>{
        queryArr(props.level)
        setStreak(1)
    }, [props.level])


    const queryArr = async (size) => {
        let randomizedArr = randomizer(size)

        let arrOfData = []
        for(const id of randomizedArr){
            let data = await queryId(id)
            data.hasBeenClicked = false
            arrOfData.push(data)
        }
        setCardsData(arrOfData)
        setUniqueId(prevState=>prevState+1)
    }

    const playTurn = (isEndGame) => {
        if(isEndGame){
            queryArr(3)
            setStreak(0)
            props.restartGame()
        }
        else if(streak >= props.level){
            props.continueNextLevel()
        }

        setStreak(prevState=>prevState + 1)
        setOrder(prevState=>{
            let arr = [...shuffleArr(prevState)]
            return arr
        })
    }

    return (
        <div className="cards-container">
            {cardsData.map((e,index)=>{
                return <Card key={index.toString()+uniqueId} cardsData={cardsData} level={props.level} order={order[index]} playTurn={playTurn} name={e.name} imgUrl={e.image} gender={e.gender}/>}
            )}
        </div>
    )
}