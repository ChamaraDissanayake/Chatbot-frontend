# Chatbot Project
This project consists of a Frontend and Backend for a chatbot application. The chatbot allows users to send messages via WhatsApp using Twilio. To join the test, you need to send a specific WhatsApp message to the provided number. Below are the instructions to set up, test, and use the application.



# Project Overview
This project is a chatbot application that integrates with Twilio to send and receive WhatsApp messages. The frontend is built with Angular, and the backend is built with Node.js and Express. The application allows users to send messages to clients, select templates, and dynamically replace placeholders like [Client's Name].

# Live Demo
Frontend Dashboard: https://chamaradissanayake.github.io/Chatbot-frontend/main/home

# Backend Server: https://chatbot-2ib4.onrender.com/

# How to Join the Test
To join the test and gain access to the chatbot, follow these steps:

Open WhatsApp on your phone.

Send a message to +1 (415) 523-8886 with the following text:

Copy
join angry-forgot
Twilio will detect you as a tester, and you will gain access to the chatbot.

You can now interact with the chatbot and test its features.

# Frontend Setup
Follow these steps to set up the frontend locally:

Clone the repository:

bash
Copy
git clone https://github.com/ChamaraDissanayake/Chatbot-frontend.git
cd Chatbot-frontend
Install dependencies:

bash
Copy
npm install
Run the development server:

bash
Copy
ng serve
Open your browser and navigate to:

Copy
http://localhost:4200


# Backend Setup
Follow these steps to set up the backend locally:

Clone the repository:

bash
Copy
git clone https://github.com/ChamaraDissanayake/ChatBot-Backend.git
cd ChatBot-Backend
Install dependencies:

bash
Copy
npm install
Set up environment variables:
Create a .env file in the root directory and add the following variables:

Copy
PORT=3000
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
Run the server:

bash
Copy
npm start
The backend will be running at:

Copy
http://localhost:3000



# Technologies Used
Frontend:

Angular
Bootstrap
HTML/CSS
TypeScript

Backend:

Node.js
Express
Twilio API
RESTful APIs

Deployment:

Render (Backend)
GitHub Pages (Frontend)

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or feedback, please contact: +971547516387

Chamara Dissanayake

Email: your-email@example.com

GitHub: https://github.com/ChamaraDissanayake
