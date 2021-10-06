import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Image,
  Text,
  VStack,
} from "native-base";

const Moviecard = (props) => {
  const { image, navigation, title, popularity, release_date } = props;
  return (
    <Box borderWidth={1} borderRadius="md" pb={5} mb={10}>
      <VStack space={4} divider={<Divider />}>
        <Box>
          <Image
            alt={title}
            source={{ uri: "https://image.tmdb.org/t/p/original/" + image }}
            size={"2xl"}
          />
        </Box>
        <Box px={4} pb={4}>
          <Text>{title}</Text>
          <Text>Popularity: {popularity}</Text>
          <Text>Release Date: {release_date}</Text>
          <Button
            variant="ghost"
            onPress={() =>
              navigation.navigate("Show", {
                title,
              })
            }
          >
            More Details
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Moviecard;
