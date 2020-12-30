import React from "react";

export default function searchMovie(){
    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const searchMovies = async (e) => {
            e.preventDefault();
            console.log("submitting");

            const query = "Jurassic Park";

            const url = 'https://api.themoviedb.org/3/search/movie?api_key=d11bdf4d11e25cd7375edacc7c44f744&language=en-US&query=${query}&page=1&include_adult=face';
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
            }catch (err){
                console.error(err);
            }
    }
    return(
        <form className="form" onSubmit={searchMovie}>
            <label className="label" htmlFor="query">
                Movie Name
            </label>

            <input className="input" type="text"  name="query"
                    placeholder="i.e Jurassic Park"/>
            <button className="button" type="submit"> Search </button>
        </form>
    )
}
