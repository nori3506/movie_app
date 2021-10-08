import { Image, Heading, Text, View } from "native-base";
import React, { useState, useEffect } from "react";
import { BASE_IMAGE_URL } from "../config/api_config";
import { getMovie } from "../services/api";

const Showcontainer = ({ route, navigation }) => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetchMovie = getMovie(route.params.id, route.params.type);
    fetchMovie.then((res) => {
      setMovie(res);
    });
  }, []);

  return (
    <View>
      {movie ? (
        <View>
          <Heading textAlign="center" mt="60">
            {" "}
            {movie.title || movie.name}
          </Heading>
          <Image
            alt={movie.title}
            source={{ uri: BASE_IMAGE_URL + movie.poster_path }}
            size={"2xl"}
            mt="60"
            margin="auto"
          />
          <Text px="6" mt="8">
            {movie.overview}
          </Text>
          <Text px="6" my="5">
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
