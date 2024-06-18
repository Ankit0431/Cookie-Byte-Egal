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

const Vendor_Profile = () => {
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
          src="https://images.unsplash.com/photo-1621580624994-80b5b5b7ab87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1MzE2NzN8MHwxfGFsbHw0fHx8fHx8fHx8fHwxNjI0MjA2OTYy&ixlib=rb-1.2.1&q=80&w=1080"
          alt="Vendor Avatar"
          mb={4}
        />
      </Flex>
      <VStack spacing={4} alignItems="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Mr.Vendor
        </Text>
        <Divider />
        <HStack>
          <Text fontWeight="bold" flex="1">
            Email:
          </Text>
          <Text flex="3">Vendor@example.com</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold" flex="1">
            Phone:
          </Text>
          <Text flex="3">+1 123-456-789</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold" flex="1">
            Address:
          </Text>
          <Text flex="3">123 Vendor St, City, Country</Text>
        </HStack>
        <Divider />
        <Text fontWeight="bold">Role:</Text>
        <Text>Vendor</Text>
      </VStack>
    </Box>
  );
};

export default Vendor_Profile;
