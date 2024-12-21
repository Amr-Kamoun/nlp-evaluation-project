# NLP Evaluation Project

This project is an NLP Evaluation Tool that analyzes the sentiment of news articles using the MeaningCloud API. The project includes a frontend interface for user interaction and a backend server to handle API requests.

---

## **Features**
- Analyze news articles for sentiment, subjectivity, and snippets.
- A responsive frontend powered by Webpack.
- Backend server implemented using Node.js and Express.
- Development and production environments.
- Testing support with Jest.

---

## **Setup Instructions**

### **1. Prerequisites**
- Install [Node.js](https://nodejs.org/) (v16+ recommended).
- Install [npm](https://www.npmjs.com/).

---

### **2. Installation**
Clone the repository and navigate into the project directory:

```bash
git clone <repository-url>
cd nlp-evaluation-project
```

Install dependencies:

```bash
npm install
```

---

### **3. Configure Environment Variables**
Create a `.env` file in the project root with the following content:

```plaintext
MEANINGCLOUD_API_KEY=your_api_key
```

Replace `your_api_key` with your MeaningCloud API key.

---

## **Scripts**

### **Development**
Run the backend server with `nodemon` for hot-reloading:

```bash
npm run start:dev
```

Run the frontend with Webpack Dev Server:

```bash
npm run start:frontend
```

Access the application at [http://localhost:8081](http://localhost:8081).

---

### **Production**
Build the production-ready application:

```bash
npm run build:prod
```

Start the production server:

```bash
npm start
```

The production server will be running at [http://localhost:8080](http://localhost:8080).

---

### **Testing**
Run the test suite with Jest:

```bash
npm run test
```

---

## **Folder Structure**

```plaintext
nlp-evaluation-project/
├── dist/                # Compiled production build
├── src/                 # Source files
│   ├── js/              # Frontend JavaScript
│   ├── scss/            # Frontend styles
│   ├── server/          # Backend server
│   ├── views/           # Frontend HTML templates
├── .env                 # Environment variables
├── package.json         # Project configuration
├── webpack.dev.js       # Webpack configuration for development
├── webpack.prod.js      # Webpack configuration for production
```

---

## **Usage**
1. **Development Workflow**:
   - Start both the backend (`npm run start:dev`) and frontend (`npm run start:frontend`) servers.
   - Open [http://localhost:8081](http://localhost:8081) to use the app.

2. **Production Workflow**:
   - Build the production-ready app (`npm run build:prod`).
   - Start the production server (`npm start`).
   - Open [http://localhost:8080](http://localhost:8080) to use the app.

3. **Testing**:
   - Run `npm run test` to execute all unit tests.

---

## **Dependencies**

### **Production**
- `express`: Backend framework.
- `body-parser`: Middleware for parsing JSON requests.
- `dotenv`: Environment variable management.
- `cors`: Cross-Origin Resource Sharing.
- `node-fetch`: HTTP requests.

### **Development**
- `webpack`: Module bundler.
- `webpack-cli`: CLI for Webpack.
- `webpack-dev-server`: Development server for Webpack.
- `html-webpack-plugin`: Generates HTML files.
- `jest`: Testing framework.
- `nodemon`: Monitors backend for changes and restarts automatically.
- `sass-loader`, `style-loader`, `css-loader`: SCSS support.

---

## **API Details**

### **POST /analyze**
- **Description**: Analyze the sentiment of a given news article URL.
- **Request Body**:
  ```json
  {
    "url": "https://example.com/article"
  }
  ```
- **Response**:
  ```json
  {
    "polarity": "positive",
    "subjectivity": "subjective",
    "text": "Sample snippet from the article"
  }
  ```

---

## **Known Issues**
- Ensure the `MEANINGCLOUD_API_KEY` in `.env` is valid.
- Frontend SCSS may require browser compatibility adjustments.

---

## **Contributing**
Feel free to fork the repository and submit pull requests. Contributions are welcome!

---

## **License**
This project is licensed under the [MIT License](LICENSE).