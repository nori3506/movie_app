import React from "react";
import { FlatList } from "react-native";
import Moviecard from "../ListItems/MovieCard";

const Movieslist = (props) => {
  const { navigation, type, movies } = props;
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <Moviecard
          type={type || item?.media_type}
          image={item.poster_path}
          id={item.id}
          navigation={navigation}
          title={item.original_title || item.name}
          popularity={item.popularity}
          release_date={item.release_date}
        />
      )}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      w="100%"
    />
  );
};

export default Movieslist;
