# Live Link: https://ai-chat-puce-alpha.vercel.app/
# AI Chat Application
An AI-powered chat application built with Next.js, Shadcn, and OpenAI API, featuring a conversational interface where users can interact with an AI system.

# Features

Message Input: Users can type messages and send them to interact with the AI.

Chat Display: Displays user and AI messages in a conversational style with different layouts.

## AI Responses: Integrated with OpenAI Mock API to simulate realistic AI conversations.

## How to Run the Project Locally

##  Prerequisites
Node.js: Install Node.js (version 18 or higher recommended).

Git: Ensure you have Git installed on your system.

OpenAI API Key: Obtain an API key from OpenAI.

Steps to Run


##  Clone the Repository
git clone https://github.com/faysal725/ai-chat.git

cd ai-chat

##  Install Dependencies
npm install

## Set Environment Variables
Create a .env.local file in the project root.

Add your OpenAI mock API key:

makefile

NEXT_PUBLIC_OPENAI_API_KEY=your_openai_mock_api_key

NEXT_PUBLIC_OPENAI_MOCK_API = your_openai_mock_api
##  Run the Development Server
npm run dev

# Access the Application
Open your browser and navigate to http://localhost:3000.
