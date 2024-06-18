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
import UpdateFamily from "../UpdateFamily";

import { storage, db } from "../../../firebase/firebase-config";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

function UpdateFamilyForm() {
  const [aadharNum, setAadharNum] = useState("");
  const [numOfPeople, setNumOfPeople] = useState(0);
  const [maritalStatus, setMaritalStatus] = useState("");
  const [disability, setDisability] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const vendorsCollection = collection(db, "Family");
      const q = query(vendorsCollection, where("aadharCard", "==", aadharNum));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (docSnapshot) => {
        const docRef = doc(db, "Family", docSnapshot.id);
        await updateDoc(docRef, {
          numOfPeople: numOfPeople,
          maritalStatus: maritalStatus,
          disability: disability,
        });
        console.log(
          `Document with aadharCard ${aadharNum} successfully updated`
        );
      });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
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
            <Heading fontSize={"4xl"}>Update Family Details</Heading>
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

export default UpdateFamilyForm;
