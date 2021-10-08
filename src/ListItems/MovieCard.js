import React from "react";
import { View, VStack, HStack, Text, Button, Image } from "native-base";
import { BASE_IMAGE_URL } from "../config/api_config";

const Moviecard = (props) => {
  const { id, type, image, navigation, title, popularity, release_date } =
    props;
  return (
    <View w="100%" py="2" borderBottomWidth="1" borderColor="coolGray.200">
      <HStack space={4} justifyContent="space-between">
        <VStack w="95px">
          <Image
            flex={1}
            alt={title}
            source={{ uri: BASE_IMAGE_URL + image }}
          />
        </VStack>
        <VStack w="240px">
          <Text>{title}</Text>
          <Text>Popularity: {popularity}</Text>
          <Text>Release Date: {release_date}</Text>
          <Button
            onPress={() => navigation.navigate("Show", { id: id, type: type })}
          >
            More Details
          </Button>
        </VStack>
      </HStack>
    </View>
  );
};

export default Moviecard;
