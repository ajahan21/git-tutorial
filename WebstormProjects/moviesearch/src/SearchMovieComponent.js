import React, {useState} from "react";
import MovieCard from "./movie-card";
export default function searchMovie() {
    //static -input query, movies <-- need to tract
    //useState to manage data

    //sending default valsue in usestate funcation
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [query, setQuery] = useState('');

    //creat the state for movies and update that stat appropriate
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [movies, setMovies] = useState([]);

    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("submitting");

            const url = 'https://api.themoviedb.org/3/search/movie?api_key=d11bdf4d11e25cd7375edacc7c44f744&language=en-US&query=${query}&page=1&include_adult=face';
            try {
                const res = await fetch(url);
                const data = await res.json();
                setMovies(data.results);
            } catch (err) {
                console.error(err);
            }
        }
        return (
            <>
            <form className="form" onSubmit={searchMovie}>
                <label className="label" htmlFor="query">
                    Movie Name
                </label>

                <input className="input" type="text" name="query"
                       placeholder="i.e Jurassic Park"
                       value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button className="button" type="submit"> Search</button>
            </form>
                <div className="card-list">
                    {movies.filter(movie => movie.poster_path).map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>

                </>
        )
    }
