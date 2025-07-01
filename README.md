# product_front
A quick front-end interface mocking a simplified Product management system.

## Run the application

From a terminal:

1. Clone the project in a folder
```bash
   git clone https://github.com/Pandaru62/product_front.git
   cd <project-folder>
```

2. Install packages
```bash
   npm install
```

3. Launch React using Vite
```bash
   npm run dev
```

4. Open up the app in a browser

By default, the app should be running at http://localhost:5173

## Extensions and libraries

This app relies on the Front-End library React and uses:
- Vite as a fast build tool
- @mui as a UI component library and data table component
- Formik and Yup for building forms and managing value validation
- React-Router-Dom to handle routing
- Sweetalert2 to customize confirmation alerts.


## Initial instructions

### Expectations

Create a single-page application that displays a list of products using the @mui/x-data-grid component. Each product should have the following attributes:
- Id (a number)
- Name (a string)
- Reference (a string)
- Price (a floating-point number)
- Rating (a number from 0 to 5)

### Requirements:
1. Upon initial load, the application should display a list of 10 products, which are initialized from a JSON file.
2. Implement an edit feature that allows users to update product details. The updated product information should be stored in the localStorage. Upon refreshing the page, the updated product details should persist.
3. Include validation checks to ensure that each product has a unique reference and that the price is not less than 0 euros.
4. Implement a feature that allows users to add new products to the list.
5. The rating attribute should be displayed as a list of stars in the ‘Rating’ column.