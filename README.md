Recipe Showcase

This project is a simple recipe showcase app where users can view detailed recipes for my five favorite dishes. The app dynamically loads recipe data from a local API (using json-server), displaying a list of recipes with images, ingredients, and directions. Users can expand each recipe to view more details, and they can easily copy the recipe information to their clipboard.

Features

    Displays a list of 5 recipes with their images, ingredients, and directions.

    Allows users to expand a recipe by hovering over the recipe title, revealing a background square that toggles visibility of the recipe details.

    Copy recipe information to clipboard for easy sharing or saving.

    Fully responsive design with a background image and semi-transparent container for improved readability.

Tech Stack

    HTML: Structure of the web page.

    CSS: Styling for layout and visual appearance.

    JavaScript: Fetching data from a local json-server API and handling interactivity (like toggling recipe details).

    json-server: Used as a simple mock backend to serve the recipe data.

Setup

    Install json-server globally if you don't have it already:

    npm install -g json-server

    Clone or download this repository to your local machine.

Running the App

    Navigate to the project folder in your terminal.

    Start the json-server with the following command:

    json-server --watch db.json --port 3000

    Open the index.html file in your browser. The app will load the recipe data and display it on the page.

Usage

    Hover over a recipe title to reveal a background square.

    Click the title to toggle the recipe details.

    Click the "Copy Recipe" button to copy the ingredients and directions to your clipboard.
