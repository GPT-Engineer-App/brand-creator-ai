import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

const BrandIdentity = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        Your Brand Identity
      </Heading>
      <Box display="flex" alignItems="center" mb={6}>
        <Box mr={8}>
          <Text fontSize="lg" mb={2}>
            Logo:
          </Text>
          <Image src={window.history.state.selectedVisuals[0]} alt="Selected Logo" mb={4} maxW="500px" />
        </Box>
        <Box>
          <Text fontSize="lg" mb={2}>
            Color Palette:
          </Text>
          <Box display="flex">
            <Box borderRadius="50%" width="50px" height="50px" backgroundColor="#FF6347" mr={4}></Box>
            <Box borderRadius="50%" width="50px" height="50px" backgroundColor="#FFD700" mr={4}></Box>
            <Box borderRadius="50%" width="50px" height="50px" backgroundColor="#4682B4"></Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Text fontSize="lg" mb={2}>
          Selected Font:
        </Text>
        {}
        <Text fontFamily="Your Font Family">Sample Text</Text>
      </Box>
    </Box>
  );
};

export default BrandIdentity;
