## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download Node.js [here](https://nodejs.org/en/download/), and npm is included in the installation.

### Installing

1. Clone the repository to your local machine.

```bash
git clone https://github.com/stevenluo23/SafeSmarts.git
```

2. Navigate to the project directory.

```bash
cd SafeSmarts
```

3. Install the project dependencies.

```bash
npm install
```

### Configuration

1. Optionally, you can create a `.env` file in the `server` directory of the project and add the following line:

```
OPENAI_API_KEY=your_openai_api_key
```

Replace `your_openai_api_key` with your actual OpenAI API key. Note that if you choose not to define an OpenAI API key, the text-to-speech (TTS) feature will not work.

### Running the Application

1. Navigate to the root directory of the project. To start the frontend server, run:

```bash
npm run dev
```

The frontend server will start on [http://localhost:3000](http://localhost:3000).

2. Navigate to the `server` directory of the project. To start the backend server, run:

```bash
npm run start:dev
```

The backend server will start on [http://localhost:8080](http://localhost:8080).
