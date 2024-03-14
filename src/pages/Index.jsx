import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast, Image } from "@chakra-ui/react";
import { FaArrowRight, FaPalette, FaFont, FaRegBuilding } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [brandInfo, setBrandInfo] = useState({
    mission: "",
    values: "",
    targetUser: "",
  });
  const [brandIdentity, setBrandIdentity] = useState(null);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrandInfo({ ...brandInfo, [name]: value });
  };

  const handleSubmit = () => {
    const identity = {
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ298ZW58MHx8fHwxNzA5ODI1NTg1fDA&ixlib=rb-4.0.3&q=80&w=1080",
      colorPalette: ["#FF6347", "#FFD700", "#4682B4"],
      font: "Arial",
    };

    window.history.pushState(
      {
        brandInfo: brandInfo,
      },
      "Visual Selection",
      "/select-visuals",
    );
    window.location.reload();
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading mb={6}>Brand Identity Generator</Heading>
      <VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
        <FormControl isRequired>
          <FormLabel htmlFor="mission">Brand Mission</FormLabel>
          <Input id="mission" name="mission" value={brandInfo.mission} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="values">Brand Values</FormLabel>
          <Textarea id="values" name="values" value={brandInfo.values} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="targetUser">Target User</FormLabel>
          <Input id="targetUser" name="targetUser" value={brandInfo.targetUser} onChange={handleChange} />
        </FormControl>
        <Button rightIcon={<FaArrowRight />} colorScheme="blackAlpha" onClick={handleSubmit}>
          Generate Identity
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
