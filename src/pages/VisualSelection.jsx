import React, { useState } from "react";
import { Box, SimpleGrid, Image, Button, useToast, Heading } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const visuals = ["https://source.unsplash.com/random/1", "https://source.unsplash.com/random/2", "https://source.unsplash.com/random/3", "https://source.unsplash.com/random/4", "https://source.unsplash.com/random/5", "https://source.unsplash.com/random/6", "https://source.unsplash.com/random/7", "https://source.unsplash.com/random/8", "https://source.unsplash.com/random/9"];

const VisualSelection = () => {
  const [selectedVisuals, setSelectedVisuals] = useState([]);
  const toast = useToast();

  const toggleVisualSelection = (url) => {
    setSelectedVisuals((prevSelected) => {
      if (prevSelected.includes(url)) {
        return prevSelected.filter((visual) => visual !== url);
      } else {
        return [...prevSelected, url];
      }
    });
  };

  const handleSubmit = () => {
    if (selectedVisuals.length === 0) {
      toast({
        title: "Selection Error",
        description: "You must select at least one visual.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    window.history.pushState({ selectedVisuals }, "Brand Identity", "/brand-identity");
    window.location.reload();
  };

  return (
    <Box p={10}>
      <Heading mb={6}>Select visual direction</Heading>
      <SimpleGrid columns={3} spacing={6}>
        {visuals.map((url, index) => (
          <Box key={index} boxShadow="md" borderRadius="lg" overflow="hidden" cursor="pointer" borderColor={selectedVisuals.includes(url) ? "blue.500" : "transparent"} borderWidth="2px" onClick={() => toggleVisualSelection(url)}>
            <Image src={url} alt={`Visual ${index + 1}`} ratio={1} />
          </Box>
        ))}
      </SimpleGrid>
      <Button mt={10} rightIcon={<FaArrowRight />} colorScheme="blackAlpha" onClick={handleSubmit}>
        Continue to Brand Identity
      </Button>
    </Box>
  );
};

export default VisualSelection;
