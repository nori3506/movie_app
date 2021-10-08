import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Movieslist from "../lists/MoviesList";
import { searchContents } from "../services/api";
import RNPickerSelect from "react-native-picker-select";

const SearchContainer = ({ navigation }) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("movie");
  const [contents, setContents] = useState();
  const [isTextBlank, setIsTextBlank] = useState(false);

  const textHandler = (value) => {
    setText(value);
  };

  const selectHandler = (value) => {
    setType(value);
  };

  const buttonHandler = () => {
    if (text === "") {
      setIsTextBlank(true);
      return;
    }
    setIsTextBlank(false);
    const searchedContentList = searchContents(type, text);
    searchedContentList.then((res) => {
      setContents(res);
    });
  };
  return (
    <View>
      <Text>Search Movie/ TV Show Name</Text>
      <TextInput onChangeText={textHandler} value={text} />
      <Text>Choose Search Type</Text>
      <RNPickerSelect
        onValueChange={(value) => selectHandler(value)}
        items={[
          { label: "movie", value: "movie" },
          { label: "multi", value: "multi" },
          { label: "tv", value: "tv" },
        ]}
      />
      <Button title="Search" onPress={buttonHandler} />
      {contents?.length > 0 ? (
        <Movieslist navigation={navigation} movies={contents} />
      ) : (
        <Text>Please Initiate a search</Text>
      )}
      {isTextBlank ? (
        <Text>Movie/TV Show name is required</Text>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default SearchContainer;
