const getMovies = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Ooooops! Looks like something went wrong, keep calm and try again"); 
  }
};

export { getMovies };
