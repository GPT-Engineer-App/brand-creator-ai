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
    // Here you would normally gather the information and send it to an AI service
    // to generate the brand identity. For the sake of this example,
    // we'll mock this functionality.

    // Mocked brand identity data
    const identity = {
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ298ZW58MHx8fHwxNzA5ODI1NTg1fDA&ixlib=rb-4.0.3&q=80&w=1080",
      colorPalette: ["#FF6347", "#FFD700", "#4682B4"],
      font: "Arial",
    };

    setBrandIdentity(identity);

    toast({
      title: "Brand identity generated!",
      description: "We've created a brand identity based on your input.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
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

      {brandIdentity && (
        <Box mt={10} textAlign="center">
          <Heading mb={4}>Your Brand Identity</Heading>
          <Image src={brandIdentity.logo} alt="Brand Logo" boxSize="150px" objectFit="contain" mx="auto" mb={4} />
          <Box d="flex" justifyContent="center" alignItems="center" mb={4}>
            <FaPalette style={{ marginRight: "8px" }} />
            {brandIdentity.colorPalette.map((color, index) => (
              <Box key={index} w="30px" h="30px" bgColor={color} borderRadius="50%" mx="1"></Box>
            ))}
          </Box>
          <Box d="flex" justifyContent="center" alignItems="center" mb={4}>
            <FaFont style={{ marginRight: "8px" }} />
            <Box as="span" fontFamily={brandIdentity.font}>
              {brandIdentity.font}
            </Box>
          </Box>
          <Box d="flex" justifyContent="center" alignItems="center">
            <FaRegBuilding style={{ marginRight: "8px" }} />
            <Box as="span">Mission: {brandInfo.mission}</Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Index;
