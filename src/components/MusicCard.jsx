import "../styles/MusicCard.css";

function MusicCard(props) {
    return(
        <div className="CardContainer">
            <img src={props.cover} alt="" />
            <div className="TitleText">
                <span>{props.title}</span>
                <span>{props.artist}</span>
                <span>{(props.duration / 60).toFixed(2)} Minutes</span>
            </div>
            <div className="CardButtonContainer">
                <button>écouter</button>
                <button>Artiste</button>
                <button>Album</button>
            </div>
        </div>
    )
}

export default MusicCard;