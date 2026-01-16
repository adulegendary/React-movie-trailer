const API_KEY = "56cd527fe946a4cf80b764693d8c1aa5";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
};

export const searchMovies = async (query) => {
    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
};

export const getMovieTrailer = async (movieId) => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
        );
        const data = await response.json();
        // Find the first YouTube trailer
        const trailer = data.results.find(
            video => video.type === "Trailer" && video.site === "YouTube"
        );
        return trailer ? trailer.key : null;
    } catch (error) {
        console.error("Error fetching movie trailer:", error);
        return null;
    }
}; 