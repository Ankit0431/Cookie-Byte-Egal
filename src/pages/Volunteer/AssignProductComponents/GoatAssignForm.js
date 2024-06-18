import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Input,
    Checkbox,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase/firebase-config";
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { getDocs, query, collection, where, getDoc, addDoc } from "firebase/firestore";

function GoatAssignForm() {
    const toast = useToast();
    const [beneficiaryId, setBeneficiaryId] = useState("");
    const [villageName, setVillageName] = useState("");
    const [maleCount, setMaleCount] = useState(0);
    const [femaleCount, setFemaleCount] = useState(0);
    const [hasInsurance, setHasInsurance] = useState(false);
    const [hasVaccination, setHasVaccination] = useState(false);
    const [noOfInfantDeaths, setNoOfInfantDeaths] = useState(0);
    const [noOfAdultDeaths, setNoOfAdultDeaths] = useState(0);
    const [diseases, setDiseases] = useState("");
    const [profitsMade, setProfitsMade] = useState(0);

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [location, setLocation] = useState({});

    const handleSubmit = async (e) => {
        console.log("Hello");
        e.preventDefault();
        // Implement submission logic here

        try {
            const aa = localStorage.getItem("aadhar");
            const coordinates = await getCurrentPosition();
            console.log("Hello");
            const docRef = await addDoc(collection(db, "Beneficiary"), {
                beneficiaryId: beneficiaryId,
                villageName: villageName,
                maleCount: maleCount,
                femaleCount: femaleCount,
                hasInsurance: hasInsurance,
                hasVaccination: hasVaccination,
                diseases: diseases,
                volunteer: aa,
                noOfInfantDeaths: 0,
                noOfAdultDeaths: 0,
                profitsMade: 0,
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
            });
            toast({
                title: "Successfully Submitted",
                status: "success",
                duration: 1500,
                isClosable: true,
              });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleUpload = async () => {
        try {
            const storageRef = ref(storage, `CFG/${Date.now()}.jpg`);
            await uploadBytes(storageRef, image);
            const downloadUrl = await getDownloadURL(storageRef);
            setImageUrl(downloadUrl);
            alert("Image uploaded successfully");
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleTakePhoto = async () => {
        try {
            const img = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Uri
            });
            setImage(img);
            handleUpload();
            const imageUrl = img.webPath;
            setPhotoUrl(imageUrl);
        } catch (error) {
            console.error('Error taking photo:', error);
        }
    };

    const getCurrentPosition = async () => {
        try {
            const position = await Geolocation.getCurrentPosition();
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            return { latitude, longitude };
        } catch (error) {
            console.error('Error getting location:', error);
            return null;
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
                        <Stack spacing={4} as="form" onSubmit={handleSubmit}>
                            <HStack>

                                <Stack spacing={10} pt={7}>
                                    <Button
                                        onClick={handleTakePhoto}
                                        size="lg"
                                        bg={"blue.400"}
                                        color={"white"}
                                        _hover={{
                                            bg: "blue.500",
                                        }}
                                    >
                                        Take Photo
                                    </Button>
                                </Stack>
                            </HStack>
                            {photoUrl && (
                                <Box mt={4}>
                                    <img src={photoUrl} alt="Captured" style={{ width: "100%" }} />
                                </Box>
                            )}
                            <FormControl id="beneficiaryId" isRequired>
                                <FormLabel>Aadhar of the Beneficiary</FormLabel>
                                <Input
                                    type="text"
                                    value={beneficiaryId}
                                    onChange={(e) => setBeneficiaryId(e.target.value)}
                                />
                            </FormControl>
                            <FormControl id="villageName" isRequired>
                                <FormLabel>Village Name</FormLabel>
                                <Input
                                    type="text"
                                    value={villageName}
                                    onChange={(e) => setVillageName(e.target.value)}
                                />
                            </FormControl>
                            <FormControl id="maleChildCount" isRequired>
                                <FormLabel>Male Count</FormLabel>
                                <Input
                                    type="number"
                                    value={maleCount}
                                    onChange={(e) => setMaleCount(parseInt(e.target.value))}
                                />
                            </FormControl>
                            <FormControl id="femaleChildCount" isRequired>
                                <FormLabel>Female Count</FormLabel>
                                <Input
                                    type="number"
                                    value={femaleCount}
                                    onChange={(e) => setFemaleCount(parseInt(e.target.value))}
                                />
                            </FormControl>
                            <FormControl id="hasInsurance">
                                <FormLabel>Insurance of the Goats</FormLabel>
                                <Checkbox
                                    isChecked={hasInsurance}
                                    onChange={(e) => setHasInsurance(e.target.checked)}
                                >
                                    Has Insurance
                                </Checkbox>
                            </FormControl>
                            <FormControl id="hasVaccination">
                                <FormLabel>Vaccination of the Goats</FormLabel>
                                <Checkbox
                                    isChecked={hasVaccination}
                                    onChange={(e) => setHasVaccination(e.target.checked)}
                                >
                                    Has Vaccination
                                </Checkbox>
                            </FormControl>
                            <FormControl id="diseases">
                                <FormLabel>Diseases</FormLabel>
                                <Input
                                    type="text"
                                    value={diseases}
                                    onChange={(e) => setDiseases(e.target.value)}
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
                                    onClick={handleSubmit}>
                                    Update Goats
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </section>
    );
}

export default GoatAssignForm;
