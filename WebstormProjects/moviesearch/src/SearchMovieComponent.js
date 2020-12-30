import React, {useState} from "react";

export default function searchMovie(){
    //static -input query, movies <-- need to tract
    //useState to manage data

    //sending default valsue in usestate funcation
    const [query, setQuery] = useState('');
    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const searchMovies = async (e) => {
            e.preventDefault();

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
                    placeholder="i.e Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button className="button" type="submit"> Search </button>
        </form>
    )
}
