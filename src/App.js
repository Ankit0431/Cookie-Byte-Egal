import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SideBar from "./pages/SideBar";
import { ChakraProvider } from "@chakra-ui/react";
import News from "./pages/News";
import Assistant from "./pages/Assistant";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin_Dashboard from "./pages/Admin/Admin_Dashboard";
import Volunteer_Dashboard from "./pages/Volunteer/Volunteer_Dashboard";
import Vendor_Dashboard from "./pages/Vendor/Vendor_Dashboard";
import Current_List from "./pages/Vendor/Current_List";
import Add_List from "./pages/Vendor/Add_List";
import Vendor_Profile from "./pages/Vendor/Vendor_Profile";
import Tasks from "./pages/Volunteer/Tasks";
import FamilyData from "./pages/Volunteer/FamilyData";
import ProductData from "./pages/Volunteer/ProductData";
import Vendor_Details from "./pages/Admin/Vendor_Details";
import Volunteer_Details from "./pages/Admin/Volunteer_Details";
import Sold_List from "./pages/Vendor/Sold_List";
import Volunteer_Profile from "./pages/Volunteer/Volunteer_Profile";
import Admin_Profile from "./pages/Admin/Admin_Profile";
import View_Family from "./pages/Volunteer/ViewFamily";
import Update_Family from "./pages/Volunteer/UpdateFamily";
import Add_Family from "./pages/Volunteer/AddFamily";
import Assign_Product from "./pages/Volunteer/AssignProduct";
import Update_Product from "./pages/Volunteer/UpdateProduct";
import Approve_Requests from "./pages/Admin/Approve_Requests";
import Add_Person from "./pages/Admin/Add_Person";
import SingleVendorDetails from "./pages/Admin/SingleVendorDetails";
import View_Product from "./pages/Volunteer/viewProduct";
import Add_Work from "./pages/Admin/Add_Work";
import SingleVolunteerDetails from "./pages/Admin/SingleVolunteerDetails";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/assistant" element={<Assistant />} />

        <Route
          path="/vendor_Dashboard"
          element={
            <>
              <SideBar>
                <Vendor_Dashboard />
              </SideBar>
            </>
          }
        />

        <Route
          path="/volunteer_Dashboard"
          element={
            <SideBar>
              <Volunteer_Dashboard />
            </SideBar>
          }
        />
        <Route
          path="/Tasks"
          element={
            <SideBar>
              <Tasks />
            </SideBar>
          }
        />
        <Route
          path="/Admin_Dashboard"
          element={
            <SideBar>
              <Admin_Dashboard />
            </SideBar>
          }
        />
        <Route
          path="/Vendor_Details"
          element={
            <SideBar>
              <Vendor_Details />
            </SideBar>
          }
        />
        <Route
          path="/Vendor_Details/:id"
          element={
            <SideBar>
              <SingleVendorDetails />
            </SideBar>
          }
        />
        <Route
          path="/Volunteer_Details"
          element={
            <SideBar>
              <Volunteer_Details />
            </SideBar>
          }
        />
        <Route
          path="/Volunteer_Details/:id"
          element={
            <SideBar>
              <SingleVolunteerDetails />
            </SideBar>
          }
        />
        <Route
          path="/Family_Data"
          element={
            <SideBar>
              <FamilyData />
            </SideBar>
          }
        />
        <Route
          path="/Product_Data"
          element={
            <SideBar>
              <ProductData />
            </SideBar>
          }
        />
        <Route
          path="/Current_List"
          element={
            <SideBar>
              <Current_List />
            </SideBar>
          }
        />
        <Route
          path="/Add_List"
          element={
            <SideBar>
              <Add_List />
            </SideBar>
          }
        />
        <Route
          path="/Sold_List"
          element={
            <SideBar>
              <Sold_List />
            </SideBar>
          }
        />

        <Route
          path="/Vendor_Profile"
          element={
            <SideBar>
              <Vendor_Profile />
            </SideBar>
          }
        />
        <Route
          path="/Volunteer_Profile"
          element={
            <SideBar>
              <Volunteer_Profile />
            </SideBar>
          }
        />
        <Route
          path="/Admin_Profile"
          element={
            <SideBar>
              <Admin_Profile />
            </SideBar>
          }
        />
        <Route
          path="/View_Family"
          element={
            <SideBar>
              <View_Family />
            </SideBar>
          }
        />
        <Route
          path="/Update_beneficiary"
          element={
            <SideBar>
              <Update_Family />
            </SideBar>
          }
        />
        <Route
          path="/Add_beneficiary"
          element={
            <SideBar>
              <Add_Family />
            </SideBar>
          }
        />
        <Route
          path="/assign_product"
          element={
            <SideBar>
              <Assign_Product />
            </SideBar>
          }
        />
        <Route
          path="/Update_Product"
          element={
            <SideBar>
              <Update_Product />
            </SideBar>
          }
        />
        <Route
          path="/Approve_Requests"
          element={
            <SideBar>
              <Approve_Requests />
            </SideBar>
          }
        />
        <Route
          path="/Add_Person"
          element={
            <SideBar>
              <Add_Person />
            </SideBar>
          }
        />
        <Route
          path="/view_product"
          element={
            <SideBar>
              <View_Product />
            </SideBar>
          }
        />
        <Route
          path="/Add_Work"
          element={
            <SideBar>
              <Add_Work />
            </SideBar>
          }
        />
      </Routes>
    </ChakraProvider>
  );
}
export default App;
