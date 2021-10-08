import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Movieslist from "../lists/MoviesList";
import { getTvshows } from "../services/api";
import RNPickerSelect from "react-native-picker-select";

const Tvshowcontainer = ({ navigation }) => {
  const [tvShows, setTvShows] = useState();

  useEffect(() => {
    const fetchTvshows = getTvshows("top_rated");
    fetchTvshows.then((res) => {
      console.log("REEEE", res);
      setTvShows(res);
    });
  }, []);

  const fetchTvshowsHandler = (value) => {
    const fetchTvshow = getTvshows(value);
    fetchTvshow.then((res) => {
      console.log(res);
      setTvShows(res);
      // setTvShows((tvShows) => [...tvShows, { ...res }]);
    });
  };
  return (
    <View>
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
    </View>
  );
};

export default Tvshowcontainer;
