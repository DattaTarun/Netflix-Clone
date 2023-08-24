import React, { useState,useEffect } from 'react';
import axios from"./axios.js";
import row from "./row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchURL,isLargerow}){

    const[movies,setmovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("")
    useEffect(()=>{
        async function fetchdata(){
            const request=await axios.get(fetchURL);
            setmovies(request.data.results);
            return request;
        }
        fetchdata();

    },[fetchURL])
    const opts={
        height:"390",
        width:"100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }
    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
        }
        else{
            movieTrailer(movie?.name || "")
            .then((url)=>{
                const urlParams=new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((error)=> console.log(error))
        }
    }
    //if array is empty,then run once
    return(
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id} 
                    onClick={()=> handleClick(movie)}
                    className={isLargerow ? 'row_posterlarge' : 'row_poster'} src={base_url+ (isLargerow ? movie.poster_path : movie.backdrop_path)} alt={movie.name} />
                ))}
            </div>
            { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )

}

export default Row;
