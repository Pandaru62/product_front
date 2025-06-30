# product_front
exercise SPA list of products (React, @mui/x-data-grid)

# Instructions

## Create a single-page application that displays a list of products using the @mui/x-data-grid component. Each product should have the following attributes:
- Id (a number)
- Name (a string)
- Reference (a string)
- Price (a floating-point number)
- Rating (a number from 0 to 5)

## The application should meet the following requirements:
1. Upon initial load, the application should display a list of 10 products, which are initialized from a JSON file.
2. Implement an edit feature that allows users to update product details. The updated product information should be stored in the localStorage. Upon refreshing the page, the updated product details should persist.
3. Include validation checks to ensure that each product has a unique reference and that the price is not less than 0 euros.
4. Implement a feature that allows users to add new products to the list.
5. The rating attribute should be displayed as a list of stars in the ‘Rating’ column.