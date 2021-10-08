import React from "react";
import { FlatList, Text } from "react-native";
import Moviecard from "../ListItems/MovieCard";

const Movieslist = (props) => {
  const { navigation, type } = props;
  console.log(props.movies);
  return (
    <FlatList
      nestedScrollEnabled={true}
      data={props.movies}
      renderItem={({ item }) => (
        <Moviecard
          type={type}
          image={item.backdrop_path}
          id={item.id}
          label={item.label}
          navigation={navigation}
          title={item.original_title || item.name}
          popularity={item.popularity}
          release_date={item.release_date}
        />
      )}
      keyExtractor={(item) => item.title}
    />
  );
};

export default Movieslist;
