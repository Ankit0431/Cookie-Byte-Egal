import React, { useEffect, useState } from "react";
import {
  Heading,
  Text,
  Button,
  Box,
  Flex,
  Spacer,
  Input,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const Profile = ({ userType }) => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    height: "",
    specialisedIn: "",
    // Add more fields as needed
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const profilesRef = collection(db, "Doctor");
      const profilesSnapshot = await getDocs(profilesRef);
      profilesSnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.email === "manavshah1104@gmail.com") {
          setProfileData(data);
        }
      });
    };

    fetchData();
  }, []);

  const handleEditProfile = async () => {
    // Implement edit profile functionality
    // For example, update the profile data in the database
    const profileRef = doc(db, "profiles", "profileId"); // Replace "profileId" with the actual document ID
    await updateDoc(profileRef, profileData);
    setIsEditModalOpen(false); // Close the modal after editing
  };

  return (
    <Flex direction="column" align="center" justify="center">
      <Heading size="lg" mb={4}>User Profile</Heading>
      <Box borderWidth="1px" borderRadius="lg" p={6} width="80%">
        <FormControl id="name" mb={4}>
          <FormLabel fontWeight="bold">Name</FormLabel>
          <Input type="text" value={profileData.name} readOnly />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel fontWeight="bold">Email</FormLabel>
          <Input type="email" value={profileData.email} readOnly />
        </FormControl>
        <FormControl id="phone" mb={4}>
          <FormLabel fontWeight="bold">Phone</FormLabel>
          <Input type="tel" value={profileData.phone} readOnly />
        </FormControl>
      
        <FormControl id="specialised" mb={4}>
          <FormLabel fontWeight="bold">Specialised In</FormLabel>
          <Input type="text" value={profileData.specialised} readOnly />
        </FormControl>
        {/* Add more fields here */}
        <Link to="">
          <Button
            colorScheme="blue"
            variant="solid"
            mt={4}
            onClick={() => setIsEditModalOpen(true)}
          >
            Edit Profile
          </Button>
        </Link>
      </Box>

      {/* Edit Profile Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Form for editing profile */}
            <FormControl id="name" mb={4}>
              <FormLabel fontWeight="bold">Name</FormLabel>
              <Input
                type="text"
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel fontWeight="bold">Email</FormLabel>
              <Input
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              />
            </FormControl>
            <FormControl id="phone" mb={4}>
              <FormLabel fontWeight="bold">Phone</FormLabel>
              <Input
                type="tel"
                value={profileData.phone}
                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
              />
            </FormControl>
       
            
            <FormControl id="specilised" mb={4}>
              <FormLabel fontWeight="bold">Specialised In</FormLabel>
              <Input
                type="text"
                value={profileData.weight}
                onChange={(e) => setProfileData({ ...profileData, specialised: e.target.value })}
              />
            </FormControl>
            {/* Add more fields here */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleEditProfile}>
              Save Changes
            </Button>
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Profile;
