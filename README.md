# StratForge-Challenge: Explore SpaceX Webapp

This project is a responsive web application for exploring SpaceX rockets, launches, and history. It fetches data from the SpaceX v4 API and displays dynamic information about rockets and launches with detailed views, interactive cards, and more. The project is built using React, TypeScript, and Tailwind CSS, ensuring a responsive and modern user interface.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Custom Hooks](#custom-hooks)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)

## Features
- **Home Page**: 
  - Contains a hero section with responsive images for different screen sizes.
  - Provides the latest news and information about upcoming SpaceX launches.
- **Navigation**: 
  - **Rockets**: Lists SpaceX rockets with details like name, description, and images. Clicking on a rocket takes you to its detailed view.
  - **Launches**: Displays a paginated list of SpaceX launches with filter functionality. Users can filter launches by name, and the page is paginated for better performance.
  - **History**: Shows a list of historical events related to SpaceX.
- **Detailed Pages**: Each rocket or launch has a detailed view with interactive cards displaying relevant information.
- **Fallbacks**: When images or other data are missing from the API, fallback images are provided for a consistent user experience.
- **Reusable Components**: The app is designed with reusable components to ensure scalability and maintainability.
- **Custom Fonts and Styling**: Tailwind CSS has been customized for unique fonts and a responsive design.

## Technologies Used
- **React**: For building the user interface and handling component structures.
- **TypeScript**: To ensure type safety and code quality.
- **Tailwind CSS**: For responsive and utility-first styling.
- **SpaceX API (v4)**: Fetches real-time data on rockets, launches, and history.
- **React Router**: For client-side routing between pages (Home, Rockets, Launches, History).
- **React Icons**: Used for adding icons to the UI.
- **Debouncing**: A custom hook, `useDebounce`, limits API calls when filtering launches by name.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Mikey6521/stratforge-challenge
    ```
2. Navigate to the project directory:
    ```bash
    cd stratforge-challenge
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

#├── src 
#│ ├── api # API handling for fetching data from SpaceX API 
#│ ├── assets # Static assets such as images 
#│ ├── components # Reusable components (cards, buttons, etc.) 
#│ ├── constants # Constants used throughout the app 
#│ ├── customHooks # Custom hooks including useDebounce 
#│ ├── routes # Page-level components (Home, Rockets, Launches, History) 
#│ ├── types # TypeScript type definitions 
#│ ├── App.tsx # Main application component 
#│ ├── index.tsx # Entry point of the app 
#│ ├── App.css # Global CSS 
#│ └── index.css # Tailwind and global styling 
#├── tailwind.config.js # Tailwind CSS configuration 
#├── tsconfig.json # TypeScript configuration 
#├── README.md # Project README file 
#└── package.json # Project dependencies and scripts


## Custom Hooks

- **useDebounce**: This custom hook is used to limit the number of API calls made when the user types in the filter input field on the Launches page. By debouncing the input, API calls are delayed until the user stops typing, improving performance and reducing the number of requests made to the SpaceX API.

## Usage
- **Home Page**: Provides the latest news and upcoming launch details from SpaceX.
- **Rockets Page**: Lists all SpaceX rockets with detailed views available on click.
- **Launches Page**: 
  - Allows users to filter launches by name and view paginated results.
  - Click on a launch to get more detailed information.
- **History Page**: Shows important historical events related to SpaceX.

## Future Enhancements
- **Additional Filters**: Adding more filtering options, such as by launch date, success rate, or rocket type.
- **Animations**: Introducing animations for better user engagement.
- **Testing**: Implementing unit and integration tests to improve code reliability and catch edge cases.
- **Caching**: Optimizing API responses with caching for frequently accessed data.

---

This README includes all necessary information for setting up, running, and contributing to the project. Feel free to modify the repository URL and any other details as needed!
