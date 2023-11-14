# API Boilerplate

## Overview

This is a simple boilerplate for kickstarting your API development. It provides a foundation with basic configurations and structure to help you build robust APIs quickly.

## Features

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing and retrieving data efficiently.
- **JWT Authentication**: Secure your API with JSON Web Token-based authentication.
- **ESLint Configuration**: ESLint rules for your project.
- **Environment Variables**: Configure your API using environment variables.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database connection URI

### Installation

1. Clone the repository: `git clone https://github.com/temarych/api-boilerplate.git`
2. Navigate to the project directory: `cd api-boilerplate`
3. Install dependencies: `npm install`
4. Set up environment variables: Create a `.env` file based on `.env.example` and update the values.

### Development

1. Start the server and watch for file updates: `npm run dev`
2. The API will be available at `http://localhost:3000`

### Production

1. Build the server: `npm run build`
2. Start the server: `npm run start`
3. The API will be available at `http://localhost:3000`

## Configuration

### Environment Variables

- `PORT`: Port on which the server will run (default is 3000).
- `DATABASE_URL`: MongoDB connection URI.
- `JWT_SECRET`: Secret key for JWT authentication.
- `JWT_EXPIRES_IN`: Time after which access token expires.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
