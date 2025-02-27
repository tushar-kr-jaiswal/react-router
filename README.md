# React Router App

This is a simple React app using React Router DOM for client-side routing. It includes multiple pages like Home, About, User, and GitHub, with a loader function to fetch GitHub data before rendering the component.

🛠 Tech Stack
React
React Router DOM
JavaScript
CSS
📂 Project Structure
pgsql
Copy
Edit
/project-root
│── /src
│ │── /components
│ │ │── /Home
│ │ │── /About
│ │ │── /User
│ │ │── /Github
│ │ │── /Header
│ │ │── /Footer
│ │── index.css
│ │── index.js
│ │── Layout.jsx
│── package.json
│── README.md
🚀 How to Run
1️⃣ Clone the repository

sh
Copy
Edit
git clone <https://github.com/tushar-kr-jaiswal/react-router>
2️⃣ Navigate to the project directory

sh
Copy
Edit
cd project-root
3️⃣ Install dependencies

sh
Copy
Edit
npm install
4️⃣ Start the development server

sh
Copy
Edit
npm run dev
The app will run on http://localhost:3000

🌍 Routing
The app uses React Router v6 for navigation.
Here's a breakdown of the routes:

Route Component Description
/ Home Homepage of the app
/about About Displays info about the app
/user/:id User Dynamic route to show user details
/github Github Fetches GitHub user data using loader

-   Not Found Handles unknown routes
    🔗 Features
    ✅ React Router DOM for navigation
    ✅ Dynamic Routes (/user/:id)
    ✅ Loader Function (useLoaderData) for API fetching
    ✅ Component-Based Architecture

📜 License
This project is open-source and available under the MIT License.
