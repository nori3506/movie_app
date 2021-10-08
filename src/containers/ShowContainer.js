import {
  Image,
  Heading,
  Text,
  View,
  VStack,
  Divider,
  HStack,
} from "native-base";
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
    <View px={4}>
      {movie ? (
        <>
          <VStack space={4} my={1} alignItems="center">
            <Heading textAlign="center" mt="10">
              {movie.title || movie.name}
            </Heading>
            <Image
              alt={movie.title}
              source={{ uri: BASE_IMAGE_URL + movie.poster_path }}
              size={"2xl"}
            />
          </VStack>
          <VStack space={3} my={4}>
            <Text>{movie.overview}</Text>
            <Text>
              Popularity: {movie.popularity} | Release Date:{" "}
              {movie.release_date}
            </Text>
          </VStack>
        </>
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default Showcontainer;
