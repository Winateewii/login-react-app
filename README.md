

# Login Page Project

This is a simple login page built using **React** and **TypeScript** with authentication functionality. It includes features like form validation, error handling, loading states, search function and user authentication.

## Features

- User login with form validation
- Loading spinner during authentication
- Error display for invalid credentials
- Search and filtering entries

## Tech Stack

- **Frontend:** React, TypeScript, TailwindCSS


## Prerequisites

Make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm**

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Winateewii/login-react-app.git
cd login-react-app
```

### 2. Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

### 3. Run the Application

To run the application locally, execute:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

### 4. Testing the Application

Once the application is running, you will be able to view a dashboard similar to the following:

![Dashboard](https://ucarecdn.com/911eb080-a884-4620-92b5-9442b5fa281d/-/preview/1000x710/)

Check out the live demo here! : https://login-react-app-six.vercel.app/

### Steps to Test:

1. **Login to the Dashboard:**
   - After starting the application, you will be prompted to log in.
   - Use the following test credentials:
     - **Username:** `user1`
     - **Password:** `user1123`

2. **Dashboard Overview:**
   - After logging in, you'll see the dashboard displaying a list of items with columns:
     - **Name**: Name of the item (e.g., `Item 1`)
     - **Category**: The category the item belongs to (e.g., `Category A`)
     - **Price**: Price of the item (e.g., `10.99 $`)
     - **View Details**: A "More Info" button for each item.

3. **Search and Filter:**
   - **Search Bar**: Type the name of an item in the search field (e.g., "Item 1") to filter the list.
   - **Category Filter**: Use the dropdown next to the search bar to filter items by category (e.g., `All Categories`, `Category A`, `Category B`).

4. **View Details:**
   - Click the **More Info** button next to any item to view detailed information about that item.
   - A modal window will appear displaying additional details about the selected item.

5. **Logout:**
   - Click the **Logout** button at the top right to log out of the application.


To test login failures, use incorrect credentials like:

- **Username:** `user`
- **Password:** `wrongpassword`



