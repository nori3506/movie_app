import { Image } from "native-base";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { BASE_IMAGE_URL } from "../config/api_config";
import { getMovie } from "../services/api";

const Showcontainer = ({ route, navigation }) => {
  const { id } = route.params;
  console.log(route.params.id);
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetchMovie = getMovie(route.params.id, route.params.type);
    fetchMovie.then((res) => {
      setMovie(res);
      console.log(res);
    });
  }, []);

  return (
    <View>
      {movie ? (
        <View>
          <Text> {movie.title || movie.name}</Text>
          <Image
            alt={movie.title}
            source={{ uri: BASE_IMAGE_URL + movie.backdrop_path }}
            size={"2xl"}
          />
          <Text>{movie.overview}</Text>
          <Text>
            Popularity: {movie.popularity} | Release Date: {movie.release_date}
          </Text>
        </View>
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default Showcontainer;
