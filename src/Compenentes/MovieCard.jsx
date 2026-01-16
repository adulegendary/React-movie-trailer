import { useState } from "react";
import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext"
import { getMovieTrailer } from "../service/api"
import TrailerModal from "./TrailerModal"

function MovieCard({movie}) {
    const { isFavorite, addToFavorite, removeFavorite } = useMovieContext();
    const favorite = isFavorite(movie.id);
    const [showTrailer, setShowTrailer] = useState(false);
    const [trailerKey, setTrailerKey] = useState(null);
    const [loadingTrailer, setLoadingTrailer] = useState(false);

    function onFavoriteClick(e) {
        e.stopPropagation();
        if (favorite) {
            removeFavorite(movie.id);
        } else {
            addToFavorite(movie);
        }
    }

    async function handlePosterClick() {
        setLoadingTrailer(true);
        const trailer = await getMovieTrailer(movie.id);
        setTrailerKey(trailer);
        setShowTrailer(true);
        setLoadingTrailer(false);
    }

    function closeTrailer() {
        setShowTrailer(false);
        setTrailerKey(null);
    }

    return (
        <>
            <div className="movie_card">
                <div
                    className="movie_poster"
                    onClick={handlePosterClick}
                    style={{ cursor: loadingTrailer ? 'wait' : 'pointer' }}
                >
                    <img src={movie.url} alt={movie.title} />
                    <div className="movie_overlay">
                        <button
                            className={`favorite-btn ${favorite ? "active" : ""}`}
                            onClick={onFavoriteClick}
                        >
                            {favorite ? "♥" : "♡"}
                        </button>
                        <div className="play-icon">▶</div>
                    </div>
                </div>
                <div className="movie_info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </div>
            </div>

            {showTrailer && (
                <TrailerModal
                    trailerKey={trailerKey}
                    onClose={closeTrailer}
                    movieTitle={movie.title}
                />
            )}
        </>
    );
}

export default MovieCard