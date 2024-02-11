// Import React and required AdminJS components
import React from 'react';
import { Box, Text } from '@adminjs/design-system';

// Define the CustomDashboardComponent function
const CustomDashboardComponent = () => {
    console.log('CustomDashboardComponent loaded');

    // Define totalUsers, totalCars, totalPricings, and totalBrands functions
    const totalUsers = () => {
        // Logic to fetch and return the total number of users
        return 10; // Replace with your actual logic
    };

    const totalCars = () => {
        // Logic to fetch and return the total number of cars
        return 20; // Replace with your actual logic
    };

    const totalPricings = () => {
        // Logic to fetch and return the total number of pricings
        return 5; // Replace with your actual logic
    };

    const totalBrands = () => {
        // Logic to fetch and return the total number of brands
        return 3; // Replace with your actual logic
    };
    // Render the custom dashboard component
    return (
        <Box variant="grey">
            <Text as="h2" fontSize="xl">
                Resource Information
            </Text>
            <Box>
                <Text as="p">Users: Total {totalUsers()}</Text>
                <Text as="p">Cars: Total {totalCars()}</Text>
                <Text as="p">Pricings: Total {totalPricings()}</Text>
                <Text as="p">Brands: Total {totalBrands()}</Text>
            </Box>
        </Box>
    );
};

// Export the CustomDashboardComponent
export default CustomDashboardComponent;

