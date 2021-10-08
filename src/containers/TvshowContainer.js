import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Movieslist from "../lists/MoviesList";
import { getTvshows } from "../services/api";
import RNPickerSelect from "react-native-picker-select";
import { VStack, Divider } from "native-base";

const Tvshowcontainer = ({ navigation }) => {
  const [tvShows, setTvShows] = useState();

  useEffect(() => {
    const fetchTvshows = getTvshows("top_rated");
    fetchTvshows.then((res) => {
      setTvShows(res);
    });
  }, []);

  const fetchTvshowsHandler = (value) => {
    const fetchTvshow = getTvshows(value);
    fetchTvshow.then((res) => {
      setTvShows(res);
      // setTvShows((tvShows) => [...tvShows, { ...res }]);
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
        <RNPickerSelect
          onValueChange={(value) => fetchTvshowsHandler(value)}
          items={[
            { label: "airing_today", value: "airing_today" },
            { label: "on_the_air", value: "on_the_air" },
            { label: "popular", value: "popular" },
            { label: "top_rated", value: "top_rated" },
          ]}
        />
        {tvShows?.length > 0 ? (
          <Movieslist type="tv" navigation={navigation} movies={tvShows} />
        ) : (
          <View></View>
        )}
      </VStack>
    </View>
  );
};

export default Tvshowcontainer;
