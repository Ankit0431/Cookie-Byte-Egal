import React from "react";
import {
  Box,
  Flex,
  Text,
  Avatar,
  VStack,
  HStack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

const Volunteer_Profile = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="lg"
      p={8}
      borderRadius="xl"
      w="full"
      maxW="600px"
      mx="auto"
      mt={12}
    >
      <Flex justifyContent="center">
        <Avatar
          size="xl"
          src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          alt="Volunteer Avatar"
          mb={4}
        />
      </Flex>
      <VStack spacing={4} alignItems="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Mr.volunteer
        </Text>
        <Divider />
        <HStack>
          <Text fontWeight="bold" flex="1">
            Email:
          </Text>
          <Text flex="3">volunteer@example.com</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold" flex="1">
            Phone:
          </Text>
          <Text flex="3">+1 123 456 7890</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold" flex="1">
            Address:
          </Text>
          <Text flex="3">123 Volunteer St, City, Country</Text>
        </HStack>
        <Divider />
        <Text fontWeight="bold">Bio:</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          cursus in ligula ut tempor. Proin dictum ultrices justo, nec
          bibendum risus fringilla vel.
        </Text>
      </VStack>
    </Box>
  );
};

export default Volunteer_Profile;
