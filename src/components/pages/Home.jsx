import { useState } from "react";
import { Link } from "react-router-dom";
import fetchJsonp from "../../lib/fetch-jsonp";
import Header from "../Header";
import MusicCard from "../MusicCard";
import "../../styles/Home.css";

function Home() {
    const [musicList, setMusicList] = useState([]);

    function searchMusic(e) {
        if(e.target.value.length < 1){
            setMusicList([]);
            return
        }
        fetchJsonp(`https://api.deezer.com/search?q=${e.target.value}&output=jsonp`)
        .then(res => res.json())
        .then(data => {console.log(data.data); setMusicList(data.data)});
    }
    return(
        <div>
            <Header />
            <div className="HomeContainer">
                <h1>DeezWeb</h1>
                <h2>Chercher une musique</h2>
                <input onChange={e => searchMusic(e)} type="text" />
                <div className="MusicListContainer">
                    {musicList.map(i => {
                        return <MusicCard title={i.title_short} artist={i.artist.name} duration={i.duration} cover={i.album.cover}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;