# Record Store Project Overview

### Client-Side (Frontend) Overview

- **Framework**: The client-side is built using React, a popular JavaScript library for building user interfaces.
- **Styling**: Sass is used for styling, allowing more complex stylesheets with variables, nesting, and mixins.
- **Structure**:
  - **Components**: Organized into subdirectories for different functionalities. For instance, `records` for displaying record items, `user` for user authentication components, and `cart` for shopping cart components.
  - **API Calls**: Separate JavaScript files (`cartsApiCalls.js`, `recordsApiCalls.js`, `usersApiCalls.js`) are dedicated to handling API requests to the server.
  - **Assets**: Contains images and other static files used in the application.
  - **Styling (SCSS)**: The `scss` directory contains Sass files, including partials for modular styling.
  - **Routing**: Utilizes React Router for managing navigation within the application.
  - **State Management**: The project is using React's context API and useReducer hook.

### Server-Side (Backend) Overview

- **Framework**: Built on Node.js using Express, a minimal and flexible Node.js web application framework.
- **Database**: Uses MongoDB, a NoSQL database, with Mongoose as an ODM (Object Data Modeling) library to manage relationships between data and provide schema validation.
- **API Endpoints**:
  - **Records Endpoint**: Handles operations related to records like fetching all records or a specific record.
  - **Users Endpoint**: Manages user data, including authentication (signup and login) and user details retrieval.
  - **Cart Endpoint**: Deals with shopping cart operations, such as adding items to the cart, updating them, and retrieving cart details.
- **Models**: Defines the data structure for `Record`, `User`, and `Cart` using Mongoose schemas.
- **Middleware**: Includes error handling and possibly other middleware for tasks like request logging, request body parsing, etc.

### API Details

- **Records API**: Provides functionality to retrieve all records or a specific record by its ID. This is crucial for any e-commerce or record display functionality.
- **Users API**: Handles user registration, login, and retrieval of user data. This is key for personalized user experiences and security.
- **Cart API**: Essential for e-commerce functionalities, allowing users to add items to their cart, update them, and view cart contents.

### Data Models

- **Record Model**: Contains fields like title, year, artist, image URL, price, and genre. This model is central to the application as it represents the items (records) being sold or displayed.
- **User Model**: Includes user information such as name, email, password, cart ID (linking to the user's cart), and role (e.g., admin, user). This model is crucial for user authentication and management.
- **Cart Model**: Represents a user's shopping cart, containing items (linked to records) and their quantities.

### Getting Started

- **Setup**: Clone the repository, install dependencies using npm for both client and server sides.
- **Configuration**: Set up necessary environment variables, like the database connection string.
- **Running the Application**: Star the client using `npm start` and the server using `nodemon app.js`. The client will typically run on `localhost:3000`, and the server on `localhost:8000` or `localhost:5000`.

### Tree Structure

#### Client

- [package.json](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/package.json)
- [package-lock.json](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/package-lock.json)
- **public/**
  - [index.html](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/public/index.html)
- **src/**
  - [App.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/App.jsx)
  - [index.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/index.js)
  - **apiCalls/**
    - [cartsApiCalls.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/apiCalls/cartsApiCalls.js)
    - [recordsApiCalls.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/apiCalls/recordsApiCalls.js)
    - [usersApiCalls.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/apiCalls/usersApiCalls.js)
  - **assets/**
    - [01.gif](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/assets/01.gif)
    - [02.gif](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/assets/02.gif)
    - [avatar.jpeg](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/assets/avatar.jpeg)
    - [recordshop.jpeg](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/assets/recordshop.jpeg)
  - **components/**
    - [Error.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/Error.jsx)
    - [Form.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/Form.jsx)
    - [HomePage.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/HomePage.jsx)
    - [Loading.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/Loading.jsx)
    - [Nav.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/Nav.jsx)
    - [NotFound.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/NotFound.jsx)
    - [SearchRecord.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/SearchRecord.jsx)
    - **cart/**
      - [CartContainer.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/cart/CartContainer.jsx)
      - [CartIcon.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/cart/CartIcon.jsx)
      - [CartItemsList.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/cart/CartItemsList.jsx)
    - **records/**
      - [RecordCard.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/records/RecordCard.jsx)
      - [RecordsList.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/records/RecordsList.jsx)
    - **user/**
      - [Login.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/user/Login.jsx)
      - [Signup.jsx](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/components/user/Signup.jsx)
  - **scss/**
    - [App.scss](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/scss/App.scss)
    - **partials/**
      - [\_cart.scss](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/scss/partials/_cart.scss)
      - [\_dashboard.scss](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/scss/partials/_dashboard.scss)
      - [\_form.scss](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/scss/partials/_form.scss)
      - [\_homepage.scss](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/scss/partials/_homepage.scss)
      - [\_layout.scss](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/scss/partials/_layout.scss)
      - [\_nav.scss](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/scss/partials/_nav.scss)
      - [\_reset.scss](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/scss/partials/_reset.scss)
      - [\_variables.scss](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/scss/partials/_variables.scss)
  - **store/**
    - **reducers/**
      - [cartReducer.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/store/reducers/cartReducer.js)
      - [recordsReducer.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/store/reducers/recordsReducer.js)
      - [usersReducer.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/store/reducers/usersReducer.js)
    - [context.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/client/src/store/context.js)

#### Server

- [.DS_Store](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/.DS_Store)
- [app.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/app.js)
- [package.json](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/package.json)
- [package-lock.json](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/package-lock.json)
- **controllers/**
  - [cartController.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/controllers/cartController.js)
  - [recordsController.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/controllers/recordsController.js)
  - [usersController.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/controllers/usersController.js)
- **middlewares/**
  - [errorHandlers.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/middlewares/errorHandlers.js)
  - [successHandler.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/middlewares/successHandler.js)
- **models/**
  - [cartModel.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/models/cartModel.js)
  - [recordModel.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/models/recordModel.js)
  - [userModel.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/models/userModel.js)
- **routes/**
  - [cartRouter.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/routes/cartRouter.js)
  - [recordsRouter.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/routes/recordsRouter.js)
  - [usersRouter.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/routes/usersRouter.js)
- **seed/**
  - [records.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/seed/records.js)
  - [seed_db_records.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/seed/seed_db_records.js)
  - [seed_db_users.js](https://github.com/FbW-WD-23-E03/backend-BE/blob/main//02_database/2023-12-14/server/seed/seed_db_users.js)
