# GAS React Example Project

This project is an example of integrating Google Apps Script (GAS) with a React front end. It demonstrates how to build a web application using GAS for server-side logic and React for the client-side interface.

## Overview

The project consists of the following parts:

1. **Google Apps Script (GAS) Backend**:
   - `Get.js`: GAS script for serving HTML content and providing utility functions.
   - `Session.js`: Manages session data using GAS's built-in session management features.

2. **React Frontend**:
   - `index.html`: Entry point for the React application, includes basic HTML structure and loads React components.
   - `App.html`: Defines the main React component.
   - `AppContext.html`: Defines a React context for managing session data.
   - `Session.js`: JavaScript module for interacting with GAS's session management from the frontend.

## How It Works

1. **Google Apps Script (GAS) Backend**:
   - `Get.js`: Defines a `doGet()` function to serve the main HTML file (`index.html`) when the web app is accessed. It also provides utility functions like `getUrl()` for retrieving the web app URL.
   - `Session.js`: Manages session data using GAS's `Session` and `PropertiesService`. It provides functions to get and set session data.

2. **React Frontend**:
   - `index.html`: Loads the main React component (`App`) and initializes the React Router for client-side routing.
   - `App.html`: Defines the main React component (`App`). Currently, it contains a simple placeholder content.
   - `AppContext.html`: Creates a React context for managing session data. It fetches session data from GAS and updates it when needed.

3. **Interaction**:
   - The React frontend communicates with the GAS backend using `google.script.run` to execute functions defined in GAS scripts.
   - The frontend fetches session data from GAS using `Utilities.getSessionData()` defined in `Session.js`.
   - Session data is updated asynchronously, and the frontend re-renders components when the data changes.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.
