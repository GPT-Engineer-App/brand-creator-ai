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
        <Image src="path-to-your-logo.png" alt="Brand Logo" />
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
