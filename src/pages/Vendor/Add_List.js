import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Stack,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { storage, db } from "../../firebase/firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

function SignUpForm() {
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [immunization, setImmunization] = useState("");
  const [disease, setDisease] = useState("");
  const [insuranceDate, setInsuranceDate] = useState("");
  const [insuranceValue, setInsuranceValue] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const [errors, setErrors] = useState({});

  const retrieveFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (!breed) {
      tempErrors["breed"] = "Breed is required";
      isValid = false;
    }
    if (!age) {
      tempErrors["age"] = "Age is required";
      isValid = false;
    }
    if (!gender) {
      tempErrors["gender"] = "Gender is required";
      isValid = false;
    }
    if (!weight) {
      tempErrors["weight"] = "Weight is required";
      isValid = false;
    }
    if (!immunization) {
      tempErrors["immunization"] = "Immunization status is required";
      isValid = false;
    }
    if (!disease) {
      tempErrors["disease"] = "Disease is required";
      isValid = false;
    }
    if (!insuranceDate) {
      tempErrors["insuranceDate"] = "Insurance date is required";
      isValid = false;
    }
    if (!insuranceValue) {
      tempErrors["insuranceValue"] = "Insurance value is required";
      isValid = false;
    }
    if (!image) {
      tempErrors["image"] = "Image is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleAdd = async () => {
    const aa = localStorage.getItem("aadhar");
    const docRef = await addDoc(collection(db, "Vendor"), {
      breed: breed,
      age: age,
      gender: gender,
      weight: weight,
      immunization: immunization,
      disease: disease,
      insuranceDate: insuranceDate,
      insuranceValue: insuranceValue,
      imageUrl: imageUrl,
      aadharCard: aa,
      price: price,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storageRef = ref(storage, `CFG/${Date.now()}.jpg`);
      const bytes = await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(storageRef);
      console.log(downloadUrl);
      setImageUrl(downloadUrl);
      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <section className="todo-container">
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Goat Details</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            style={{ width: "460px" }}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="breed" isRequired isInvalid={errors.breed}>
                <FormLabel>Breed</FormLabel>
                <Input
                  type="text"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                />
                <FormErrorMessage>{errors.breed}</FormErrorMessage>
              </FormControl>
              <FormControl id="age" isRequired isInvalid={errors.age}>
                <FormLabel>Age</FormLabel>
                <Input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </FormControl>
              <HStack>
                <FormControl isRequired isInvalid={errors.image}>
                  <FormLabel>Breed Image </FormLabel>
                  <Input
                    type="file"
                    id="file-upload"
                    name="data"
                    onChange={retrieveFile}
                  />
                  <FormErrorMessage>{errors.image}</FormErrorMessage>
                </FormControl>
                <Stack spacing={10} pt={7}>
                  <Button
                    onClick={handleSubmit}
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Upload
                  </Button>
                </Stack>
              </HStack>
              <FormControl id="gender" isRequired isInvalid={errors.gender}>
                <FormLabel>Gender</FormLabel>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
                <FormErrorMessage>{errors.gender}</FormErrorMessage>
              </FormControl>
              <FormControl id="weight" isRequired isInvalid={errors.weight}>
                <FormLabel>Weight (in Kgs.)</FormLabel>
                <Input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <FormErrorMessage>{errors.weight}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="immunization"
                isRequired
                isInvalid={errors.immunization}
              >
                <FormLabel>Immunization</FormLabel>
                <Select
                  value={immunization}
                  onChange={(e) => setImmunization(e.target.value)}
                >
                  <option value="">Select Immunization Status</option>
                  <option value="Up to date">Up to date</option>
                  <option value="Pending">Pending</option>
                </Select>
                <FormErrorMessage>{errors.immunization}</FormErrorMessage>
              </FormControl>
              <FormControl id="disease" isRequired isInvalid={errors.disease}>
                <FormLabel>Disease</FormLabel>
                <Input
                  type="text"
                  value={disease}
                  onChange={(e) => setDisease(e.target.value)}
                />
                <FormErrorMessage>{errors.disease}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="insuranceDate"
                isRequired
                isInvalid={errors.insuranceDate}
              >
                <FormLabel>Insurance Date</FormLabel>
                <Input
                  type="date"
                  value={insuranceDate}
                  onChange={(e) => setInsuranceDate(e.target.value)}
                />
                <FormErrorMessage>{errors.insuranceDate}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="insuranceValue"
                isRequired
                isInvalid={errors.insuranceValue}
              >
                <FormLabel>Insurance Value</FormLabel>
                <Input
                  type="number"
                  value={insuranceValue}
                  onChange={(e) => setInsuranceValue(e.target.value)}
                />
                <FormErrorMessage>{errors.insuranceValue}</FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleAdd}
                >
                  Add Goat
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </section>
  );
}

export default SignUpForm;
