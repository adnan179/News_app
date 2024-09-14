# aconews (📰 News Aggregator App)

**Welcome to the News Aggregator App! 🎉 This project pulls the latest news using the GNews API and presents it through a sleek, responsive frontend. The backend is built with Express.js and hosted on Vercel, while the front end lives on Firebase. Let's dive into the details! 🚀**

## 📜 Brief Description
1.**API Exploration:** Started with the GNews API 📚. Read through the documentation to understand how to fetch news headlines.
2.**Design:** Created the UI/UX design using Figma ✏️, planning out how the app should look and feel.
3.**Backend Development:** Built the backend routes using Express.js 🛠️ to handle API requests and responses.
4.**Frontend Coding:** Developed the frontend, divided into three sections for easier management 🖥️.
5.**Deployment:** Deployed the backend on Vercel (because Firebase wasn’t cooperating with backend hosting 😅) and the frontend on Firebase 🔥. Updated API endpoints accordingly.

## 🛠️ Tech and Dependencies

**Frontend:**
-React.js
-Tailwind CSS
-Axios (for API requests)
-Firebase Hosting

**Backend:**
-Node.js
-Express.js
-Axios (for API requests)
-Vercel for deployment

## 🚀 Installation and Running
**Prerequisites**
-Node.js and npm installed (download from Node.js)
-A Firebase account (for frontend deployment)
-A Vercel account (for backend deployment)

# Backend Setup
1. Clone the Repository:
   ```bash
     git clone <repository-url>
     cd <repository-folder>
2. Install Dependencies:
   ```bash
     npm install
3. Set Up Environment Variables: Create a .env file in the root of the project and add your GNews API key:
    ```bash
      GNEWS_API_KEY=<your-gnews-api-key>
4. Run the Server Locally:
     ```bash
     nodemon server
5. Deploy to Vercel:
  -Create a new project on Vercel.
  -Connect your GitHub repository.
  -Vercel will automatically detect the server.js file and deploy your backend.
   
# Frontend Setup
1. Clone the Repository:
     ```bash
     git clone <repository-url>
     cd <repository-folder>
2. Install Dependencies:
     ```bash
     npm install
3. Run the App Locally:
     ```bash
     npm start
4. Deploy to Firebase:(type one after another)
    ```bash
    npm install -g firebase-tools
    firebase login
    firebase init
    firebase deploy

## 🎨 Screenshots

![image](https://github.com/user-attachments/assets/eecf787a-7fae-4d8c-a2b5-699e0fee307d)

![image](https://github.com/user-attachments/assets/a9e32051-93a9-4435-a4d2-4f09608f57bf)

![image](https://github.com/user-attachments/assets/5b16b1cf-a7e5-46e6-acfc-25d7909c0503)




## 💡 Features
1. Fetches and displays the latest news headlines.
2. Search functionality to filter news articles.
3. Responsive design for a seamless experience on any device.

      



   
