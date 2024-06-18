# NGO Management System

This project was developed for JPMorgan Chase's Code for Good 2024, addressing the problem statement provided by the Eagl Foundation. It facilitates efficient management and tracking of NGO activities through a comprehensive web and mobile application.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [User Types](#user-types)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Contributors](#contributors)
- [Acknowledgements](#acknowledgements)

## Overview
This NGO Management System is designed to streamline operations for the NGO, specifically for managing volunteers, vendors, and beneficiaries. The application provides tailored functionalities for three types of users: Admins, Volunteers, and Vendors. It ensures efficient tracking, resource allocation, and task management to enhance the effectiveness of NGO operations.

## Features
- **Admin Dashboard:**
  - Access and manage details of volunteers and vendors.
  - Track volunteer activities and validate their work through photo uploads and location data.
  - Assign daily tasks to volunteers.
  - Monitor various insights and statistics through visualizations:
    - Number of villages vs. Date (weekly)
    - Village to mortality rate (lifetime)
    - Village vs. Profit
- **Volunteer Portal:**
  - Add and update beneficiary details.
  - Assign and update resources (e.g., goats, fruits).
  - Provide updates on assignments, including production, profits, diseases, and insurance.
  - Upload photos as proof of work with automatic location submission for attendance tracking.
- **Vendor Portal:**
  - Submit listings of items for sale to the NGO.
  - Admins can review and purchase listed items.

## User Types
1. **Admins:**
   - Foundation personnel with access to all system functionalities.
   - Can track volunteers, manage vendor listings, and assign tasks.
   - View insightful dashboards on NGO operations.
2. **Volunteers:**
   - Field workers who manage beneficiaries and resources.
   - Required to upload photos and location data for proof of work.
   - Update and track assignment progress.
3. **Vendors:**
   - Suppliers who list items for sale to the NGO.
   - Listings are reviewed and approved by admins before transactions can occur.

## Technologies Used
- **Frontend:**
  - ReactJS
  - React Native with Capacitor
- **Backend:**
  - Firebase
  - Google Maps API (for location mapping)
  - Python libraries (GraphQL for insights)
- **Mobile App:**
  - Capacitor for native functionalities (Camera and Location)

## Setup
To set up the project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Cookie-Byte-Egal 
   ```
3. Install dependencies for the web application:
   ```bash
   npm install
   ```
4. Run the web application:
   ```bash
   npm start
   ```

5. Run the mobile application:
   ```bash
   npx cap run
   ```

## Contributors
- Aadil0904 
- Manav39 
- MannShah0312 
- priyamaggarwal18 
- itzzsuj 
- yashikalawani

## Acknowledgements
This project was developed during a hackathon and was awarded 1st runner-up in the problem statement category. Special thanks to JPMorgan Chase's Code for Good 2024 and the Eagl Foundation for the opportunity to work on this impactful project.
