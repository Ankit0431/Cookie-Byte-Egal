import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { storage, db } from "../../../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";

function FamilyForm() {
  const [aadharNum, setAadharNum] = useState("");
  const [numOfPeople, setNumOfPeople] = useState(0);
  const [maritalStatus, setMaritalStatus] = useState("");
  const [disability, setDisability] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const aa = localStorage.getItem("aadhar");
    const docRef = await addDoc(collection(db, "Family"), {
      aadharCard: aadharNum,
      numOfPeople: numOfPeople,
      maritalStatus: maritalStatus,
      disability: disability,
      volunteer: aa,
    });
  };
  return (
    <section className="family-container">
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Family Details</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            style={{ width: "460px" }}
            p={8}
          >
            <Stack spacing={4} as="form">
              <FormControl id="aadharNum" isRequired>
                <FormLabel>Aadhaar Number</FormLabel>
                <Input
                  type="text"
                  value={aadharNum}
                  onChange={(e) => setAadharNum(e.target.value)}
                />
              </FormControl>
              <FormControl id="numOfPeople" isRequired>
                <FormLabel>Number of People</FormLabel>
                <Input
                  type="number"
                  value={numOfPeople}
                  onChange={(e) => setNumOfPeople(parseInt(e.target.value))}
                />
              </FormControl>
              <FormControl id="maritalStatus" isRequired>
                <FormLabel>Marital Status</FormLabel>
                <Select
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                >
                  <option value="">Select Marital Status</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Married">Married</option>
                  <option value="Widow">Widow</option>
                </Select>
              </FormControl>
              <FormControl id="disability" isRequired>
                <FormLabel>Disability</FormLabel>
                <Input
                  type="text"
                  value={disability}
                  onChange={(e) => setDisability(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </section>
  );
}

export default FamilyForm;
