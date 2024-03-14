import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

const BrandIdentity = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        Your Brand Identity
      </Heading>
      <Box mb={6}>
        <Text fontSize="lg" mb={2}>
          Logo:
        </Text>
        {}
        {window.history.state.selectedVisuals.map((visual, index) => (
          <Image key={index} src={visual} alt={`Selected Visual ${index + 1}`} mb={4} />
        ))}
      </Box>
      <Box mb={6}>
        <Text fontSize="lg" mb={2}>
          Color Palette:
        </Text>
        {}
        <Box borderRadius="md" height="50px" backgroundColor="#123456"></Box>
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
