import '../styles/header.css'

function Header(props){
    return (
        <header className="headerContainer">
            <div className="title-container">Morty's Memory Quest</div>
            <div className="scores-container">
                <div className="current-score-container score">Current Score: {props.crrScore}</div>
                <div className="best-score-container score">Best Score: {props.bestScore}</div>
            </div>
        </header>
    )
}
export default Header