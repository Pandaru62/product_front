import Box from "@mui/joy/Box";

export default function AboutPage() {
   

  return (
   <Box sx={{display : 'block', textAlign: 'start'}}>
        <h1>About this SPA</h1>
        <p>This SPA was designed by <strong>Loris Buchelet</strong> and is mocking a Product CRUD front-end application.</p>

        
                    <h2>
                        Instructions
                    </h2>
                    <p>
                        Create a single-page application that displays a list of products using the @mui/x-data-grid component. Each product should have the following attributes:
                    </p>
                    <ul>
                        <li>Id (a number)</li>
                        <li>Name (a string)</li>
                        <li>Reference (a string)</li>
                        <li>Price (a floating-point number)</li>
                        <li>Rating (a number from 0 to 5)</li>
                    </ul>

                    The application should meet the following requirements:

                    <ol>
                        <li>Upon initial load, the application should display a list of 10 products, which are initialized from a JSON file.</li>
                        <li>Implement an edit feature that allows users to update product details. The updated product information should be stored in the localStorage. Upon refreshing the page, the updated product details should persist.</li>
                        <li>Include validation checks to ensure that each product has a unique reference and that the price is not less than 0 euros.</li>
                        <li>Implement a feature that allows users to add new products to the list.</li>
                        <li>The rating attribute should be displayed as a list of stars in the "Rating" column.</li>
                    </ol>
    </Box>
  );
}