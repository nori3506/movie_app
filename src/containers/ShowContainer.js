import { Image } from "native-base";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BASE_IMAGE_URL } from "../config/api_config";
import { getMovie } from "../services/api";

const Showcontainer = ({ route, navigation }) => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetchMovie = getMovie(route.params.id, route.params.type);
    fetchMovie.then((res) => {
      setMovie(res);
      console.log(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      {movie ? (
        <View>
          <Text style={styles.title}> {movie.title || movie.name}</Text>
          <Image
            style={styles.image}
            alt={movie.title}
            source={{ uri: BASE_IMAGE_URL + movie.poster_path }}
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
const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  image: {
    marginTop: 40,
    marginBottom: 30,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default Showcontainer;
