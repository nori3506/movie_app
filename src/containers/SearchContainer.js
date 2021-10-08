import React, { useState } from "react";
import Movieslist from "../lists/MoviesList";
import { searchContents } from "../services/api";
import RNPickerSelect from "react-native-picker-select";
import {
  Heading,
  VStack,
  Divider,
  HStack,
  Button,
  View,
  Text,
  Input,
} from "native-base";
import { StyleSheet } from "react-native";

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
    <View h="100%" flex={1} px={4}>
      <VStack space={1} w="100%" h="100%" mt={4} divider={<Divider />}>
        <Text>Search Movie/ TV Show Name</Text>
        <Input
          placeholder="i.e. James Bond, CSI"
          onChangeText={(value) => {
            textHandler(value);
          }}
        />
        {isTextBlank ? (
          <Text color="rgb(255,0,0)">Movie/TV Show name is required</Text>
        ) : (
          <View></View>
        )}

        <Text>Choose Search Type </Text>
        <HStack space={4} justifyContent="space-between">
          <RNPickerSelect
            placeholder={{}}
            style={pickerSelectStyles}
            onValueChange={(value) => selectHandler(value)}
            items={[
              { label: "movie", value: "movie" },
              { label: "multi", value: "multi" },
              { label: "tv", value: "tv" },
            ]}
            value={type}
          />
          <Button onPress={buttonHandler}>Search</Button>
        </HStack>

        {contents?.length > 0 ? (
          <Movieslist navigation={navigation} movies={contents} />
        ) : (
          <Heading textAlign="center" mt="20">
            Please Initiate a search
          </Heading>
        )}
      </VStack>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    width: 220,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
});

export default SearchContainer;
