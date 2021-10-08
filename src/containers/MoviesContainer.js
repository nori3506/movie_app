import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Movieslist from "../lists/MoviesList";
import { getMovies } from "../services/api";
import RNPickerSelect from "react-native-picker-select";

const Moviescontainer = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = getMovies("now_playing");
    fetchMovies.then((res) => {
      setIsLoading(true);
      console.log("REEEE", res);
      setMovies(res);
    });
  }, []);

  const fetchMoviesHandler = (e) => {
    const fetchMovies = getMovies(e);
    fetchMovies.then((res) => {
      setIsLoading(true);
      setMovies(res);
    });
  };

  return (
    <View>
      <RNPickerSelect
        onValueChange={(value) => fetchMoviesHandler(value)}
        items={[
          { label: "now playing", value: "now_playing" },
          { label: "popular", value: "popular" },
          { label: "top_rated", value: "top_rated" },
          { label: "upcoming", value: "upcoming" },
        ]}
      />
      {!isLoading ? (
        <Text>Loading</Text>
      ) : (
        <View>
          <Text>
            <Movieslist type="movie" navigation={navigation} movies={movies} />
          </Text>
        </View>
      )}
    </View>
  );
};

export default Moviescontainer;
