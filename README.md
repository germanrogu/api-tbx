### File Processing API

**File Processing API** is a RESTful API built with **Node.js** and **Express.js**. It fetches data from an external API, processes it, and exposes the reformatted information through its own endpoints. The API is designed to handle CSV files, filter data, and return JSON responses.

---

## Features

- **GET /files/list**: Returns the list of available files from the external API.
- **GET /files/data**: Processes and returns the content of the files in JSON format.
- **Query Parameter Filtering**: Allows filtering data by a specific file name using the `fileName` query parameter.
- **Unit Testing**: Includes tests written with **Mocha** and **Chai**.

---

## Installation

Follow these steps to configure and run the backend locally:

### 1. **Clone the Repository**

```bash
git clone https://github.com/germanrogu/api-tbx.git
cd api-tbx
```

## **Running Locally**

### 2. **Install the Dependencies**

Make sure you have Node.js and npm installed. Then, run:

```bash
npm install
```

### 3. **Start the Backend Server**

Run the following command to start the server:

```bash
npm run start
```

The backend will be available at `http://localhost:4000`.

### 4. **Testing**

Run the following command :

```bash
npm run test
```

---

## **Run with Docker**

### **1. Build the Image**

First, make sure you are in the root directory of the backend (where the `Dockerfile` is located) and run the following command to build the Docker image:

```bash
docker build -t my-backend .
```

### **2. Run the container**

Once the image is built, run the container with the following command::

```bash
docker run -p 4000:4000 my-backend
```

This will make the backend available at `http://localhost:4000`.

## Technologies Used

- **Node.js**: Runtime environment for JavaScript.
- **Express**: Framework to build the RESTful API.

```

```
