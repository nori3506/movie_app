import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Movieslist from "../lists/MoviesList";
import { getMovies } from "../services/api";

const Moviescontainer = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = getMovies("now_playing");
    fetchMovies.then((res) => {
      setIsLoading(true);
      console.log("REEEE", res[0].original_title);
      setMovies(res);
    });
  }, []);

  const fetchMoviesHandler = (e) => {
    const fetchMovies = getMovies(e.target.value);
    fetchMovies.then((res) => {
      setIsLoading(true);
      console.log("REEEE", res[0].original_title);
      setMovies(res);
    });
  };

  return (
    <View>
      <select onChange={fetchMoviesHandler}>
        <option value="now_playing">now playing</option>
        <option value="popular">popular</option>
        <option value="top_rated">top rated</option>
        <option value="upcoming">upcoming</option>
      </select>
      <View>
        {!isLoading ? (
          <Text>unko</Text>
        ) : (
          <View>
            <Text>
              <Movieslist navigatio={navigation} movies={movies} />
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Moviescontainer;
