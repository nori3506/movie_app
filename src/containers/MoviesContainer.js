import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Movieslist from "../lists/MoviesList";
import { getMovies } from "../services/api";
import RNPickerSelect from "react-native-picker-select";
import { VStack, Divider } from "native-base";
import { StyleSheet } from "react-native";

const Moviescontainer = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchMovies = getMovies("now_playing");
    fetchMovies.then((res) => {
      setIsLoading(true);
      setMovies(res);
    });
  }, []);

  const fetchMoviesHandler = (e) => {
    const fetchMovies = getMovies(e);
    fetchMovies.then((res) => {
      setType(e);
      setIsLoading(true);
      setMovies(res);
    });
  };

  return (
    <View h="100%" flex={1} px={4}>
      <VStack
        alignItems="center"
        space={1}
        w="100%"
        h="100%"
        mt={4}
        divider={<Divider />}
      >
        <VStack
          alignItems="center"
          space={1}
          w="80%"
          mt={4}
          divider={<Divider />}
        >
          <RNPickerSelect
            placeholder={{}}
            value={type}
            style={pickerSelectStyles}
            onValueChange={(value) => fetchMoviesHandler(value)}
            items={[
              { label: "now playing", value: "now_playing" },
              { label: "popular", value: "popular" },
              { label: "top_rated", value: "top_rated" },
              { label: "upcoming", value: "upcoming" },
            ]}
          />
        </VStack>
        {!isLoading ? (
          <Text>Loading</Text>
        ) : (
          <View>
            <Text>
              <Movieslist
                type="movie"
                navigation={navigation}
                movies={movies}
              />
            </Text>
          </View>
        )}
      </VStack>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 3,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
  },
});

export default Moviescontainer;
