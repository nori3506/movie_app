import React from "react";
import { FlatList, Text } from "react-native";
import Moviecard from "../ListItems/MovieCard";

const Movieslist = (props, { navigation }) => {
  console.log(props.movies[0]?.poster_path);
  return (
    <FlatList
      data={props.movies}
      renderItem={({ item }) => (
        <Moviecard
          image={item.poster_path}
          navigation={navigation}
          title={item.original_title}
          popularity={item.popularity}
          release_date={item.release_date}
        />
      )}
      keyExtractor={(item) => item.title}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Movieslist;
