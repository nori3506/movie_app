import React from "react";
import { FlatList, Text } from "react-native";
import Moviecard from "../ListItems/MovieCard";

const Movieslist = (props) => {
  const { navigation, type, movies } = props;
  console.log(movies);
  return (
    <FlatList
      nestedScrollEnabled={true}
      data={movies}
      renderItem={({ item }) => (
        <Moviecard
          type={type || item?.media_type}
          image={item.poster_path}
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
