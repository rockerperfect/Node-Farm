# Node Farm

Node Farm is a simple Node.js application that demonstrates building a basic web server from scratch, rendering dynamic product pages using custom HTML templates and data from JSON files. This project is great for learning how core Node.js modules work together to create server-side applications without frameworks.

## Features

- Serves dynamic product overview and individual product pages
- Uses core Node.js modules (`fs`, `http`, `url`)—no frameworks
- Template engine built from scratch (custom module)
- Reads and parses product data from JSON
- Modular folder structure for maintainability

## Project Structure

```
starter/
├── dev-data/           # Contains sample product data (data.json)
├── index.js            # Main server logic
├── modules/            # Custom modules (e.g., template replacement)
├── node_modules/       # Project dependencies
├── templates/          # HTML templates for rendering pages
├── txt/                # Text files for I/O operations
├── package.json        # Project metadata and dependencies
└── package-lock.json   # Dependency lock file
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v14 or higher recommended)

### Installation
1. Clone or download this repository
2. Navigate to the `starter` directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server
Run the following command in the `starter` directory:
```bash
npm start
```
This will start the server using Nodemon for automatic reloads.

The server typically runs on [http://localhost:8000](http://localhost:8000).

## Routes
- `/` or `/overview`: Displays an overview of all products
- `/product?id=0`: Displays details for a specific product (replace `0` with the product ID)

## Customization
- Add or edit products in `dev-data/data.json`
- Edit HTML templates in the `templates` directory

## Author
- Divye Bisaria

## License
ISC

