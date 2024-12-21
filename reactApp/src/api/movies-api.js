export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=32ab18a058a4eb569a0e855f0bf5d992&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };