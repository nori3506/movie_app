import React from "react";
import { Box, Button, Divider, Image, Text, VStack } from "native-base";
import { BASE_IMAGE_URL } from "../config/api_config";

const Moviecard = (props) => {
  const { id, type, image, navigation, title, popularity, release_date } =
    props;
  return (
    <Box borderWidth={1} borderRadius="md" pb={5} mb={10}>
      <VStack space={4} divider={<Divider />}>
        <Box>
          <Image
            alt={title}
            source={{ uri: BASE_IMAGE_URL + image }}
            size={"2xl"}
          />
        </Box>
        <Box px={4} pb={4}>
          <Text>{title}</Text>
          <Text>Popularity: {popularity}</Text>
          <Text>Release Date: {release_date}</Text>
          <Button
            variant="ghost"
            title="詳細へ"
            onPress={() => navigation.navigate("Show", { id: id, type: type })}
          >
            More Details
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Moviecard;
