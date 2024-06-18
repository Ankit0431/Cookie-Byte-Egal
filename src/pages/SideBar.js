import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  CheckIcon,
  InfoOutlineIcon,
  AddIcon,
  CalendarIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  useDisclosure,
  DrawerContent,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import {
  FiHome,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { useContract } from "../context/context";

const SidebarContent = ({ onClose, ...rest }) => {
  const { userType } = useContract();
  let LinkItems = [];

  if (userType === "Vendor") {
    LinkItems = [
      { name: "Current_List", icon: CheckIcon },
      { name: "Add_List", icon: AddIcon },
      { name: "Sold_List", icon: CalendarIcon },
      { name: "Vendor_Profile", icon: InfoOutlineIcon },
    ];
  } else if (userType === "Volunteer") {
    LinkItems = [
      { name: "Tasks", icon: CheckIcon },
      { name: "Beneficiaries", icon: SearchIcon },
      { name: "Product", icon: SearchIcon },
      { name: "Volunteer_Profile", icon: InfoOutlineIcon },
    ];
  } else if (userType === "Admin") {
    LinkItems = [
      { name: "admin_Dashboard", icon: CheckIcon },
      { name: "Vendor_Details", icon: SearchIcon },
      { name: "Volunteer_Details", icon: SearchIcon },
      { name: "Approve_Requests", icon: SearchIcon },
      { name: "Add_Person", icon: SearchIcon },
      { name: "Add_Work", icon: SearchIcon },
      { name: "Admin_Profile", icon: InfoOutlineIcon },
    ];
  }

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <img src="/eagl_logo.png" style={{ height: "45px" }} alt="Logo" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          userType={userType}
          linkName={link.name}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, userType, linkName, ...rest }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {linkName === "Beneficiaries" && (
        <Menu isOpen={menuOpen} onClose={handleMenuClose}>
          <MenuButton
            as={Box}
            mx="4"
            p="4"
            borderRadius="lg"
            cursor="pointer"
            onClick={handleMenuToggle}
            _focus={{ boxShadow: "none" }}
          >
            <Flex align="center">
              {icon && <Icon mr="4" fontSize="16" as={icon} />}
              <Text>{children}</Text>
              <Box ml="auto">
                <FiChevronDown />
              </Box>
            </Flex>
          </MenuButton>
          <MenuList mt="0" pt="0">
            <MenuItem as={Link} to="/add_Beneficiary" onClick={handleMenuClose}>
              Add Beneficiary
            </MenuItem>
            <MenuItem
              as={Link}
              to="/update_Beneficiary"
              onClick={handleMenuClose}
            >
              Update Beneficiary
            </MenuItem>
            <MenuItem as={Link} to="/View_Family" onClick={handleMenuClose}>
              View Beneficiary
            </MenuItem>
          </MenuList>
        </Menu>
      )}

      {linkName === "Product" && (
        <Menu isOpen={menuOpen} onClose={handleMenuClose}>
          <MenuButton
            as={Box}
            mx="4"
            p="4"
            borderRadius="lg"
            cursor="pointer"
            onClick={handleMenuToggle}
            _focus={{ boxShadow: "none" }}
          >
            <Flex align="center">
              {icon && <Icon mr="4" fontSize="16" as={icon} />}
              <Text>{children}</Text>
              <Box ml="auto">
                <FiChevronDown />
              </Box>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/assign_product" onClick={handleMenuClose}>
              Assign Product
            </MenuItem>
            <MenuItem as={Link} to="/update_product" onClick={handleMenuClose}>
              Update Product
            </MenuItem>
            <MenuItem as={Link} to="/view_product" onClick={handleMenuClose}>
              View Product
            </MenuItem>
          </MenuList>
        </Menu>
      )}

      {linkName !== "Beneficiaries" && linkName !== "Product" && (
        <Link to={`/${children}`} style={{ textDecoration: "none" }}>
          <Box as="a" _focus={{ boxShadow: "none" }} {...rest}>
            <Flex
              align="center"
              p="4"
              mx="4"
              borderRadius="lg"
              role="group"
              cursor="pointer"
            >
              {icon && <Icon mr="4" fontSize="16" as={icon} />}
              {children}
            </Flex>
          </Box>
        </Link>
      )}
    </>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { account, userType } = useContract();
  const navigate = useNavigate();
  const toast = useToast();

  const signOutOfMetamask = () => {
    navigate("/");
    toast({
      position: "top",
      title: "Logged Out Successfully",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        E-Vault
      </Text>
      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">You</Text>
                  <Text fontSize="xs" color="gray.600">
                    {userType}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem onClick={signOutOfMetamask}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SideBar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState();

  useEffect(() => {
    if (location.state) {
      setAddress(location.state.address);
      setBalance(location.state.Balance);
    }
  }, [location.state]);

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose()}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {props.children}
      </Box>
    </Box>
  );
};

export default SideBar;
