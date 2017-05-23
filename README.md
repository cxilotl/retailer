# Retailer site

#### Clothing retailer site with cart.

On GitHub: https://github.com/cxilotl/retailer

Displays a list of products.
Allows users to add a product to the cart.

As a User I can view the products and their category, price and availability information.
* As a User I can add a product to my shopping cart.
* As a User I can remove a product from my shopping cart.
* As a User I can view the total price for the products in my shopping cart.
* As a User I can apply a voucher to my shopping cart.
* As a User I can view the total price for the products in my shopping cart with discounts applied.
* As a User I am alerted when I apply an invalid voucher to my shopping cart.
* As a User I am unable to Out of Stock products to the shopping cart.

##### Setup

From a terminal:

1. Installing Node.js

Installing node'js version 6.9.4.
https://nodejs.org/download/release/v6.9.4/

Uses npm version 3.10.10

2. Installing NPM modules

For installing the npm modules, run the command: npm install

3. Running the dev server and loading the site

For running the server, run the command: npm run start:dev
Once running, go the the following URL to see the site: http://localhost:8080/

4. Building the site for production
For building the site for production, run the command: npm run build
All files should be minified.

5. For Running the production server and looking at the prod site
In order to run the production server, type the command: npm run start:prod
Once started, go the the following URL to see the site: http://localhost:8080/

6. For running the tests
In order to run the test and see the coverage report, type: npm run test:jest
