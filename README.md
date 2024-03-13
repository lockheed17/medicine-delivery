## Installation
To install and run the project locally, follow these steps:
1. Clone the repository:
    ```git
    $ git clone https://github.com/your_username/medicine-delivery.git
    ```
2. Navigate to the project directory:
    ```sh
    $ cd medicine-delivery
    ```
3. Install server-side dependencies:
    ```sh
    $ cd server
    $ npm install
    ```
4. Install client-side dependencies:
    ```sh
    $ cd client
    $ npm install
    ```
5. Set up environment variables: You need to create two separate .env files for the client and the server in the project root directory. Below are the necessary environment variables for each:

    Client (.env in the client directory)
    ```js
    $ VITE_ENDPOINT="your_endpoint"
    ```
    Make sure to add the .env file to the .gitignore list to avoid exposing your secret keys.

    Server (.env in the client directory)
    ```js
    $ MONGO_URL=your_mongo_url
    $ PORT=your_port
    $ FRONTEND="your_frontend_url"
6. Start the server:
    ```sh
    $ cd server
    $ npm start
    ```
7. Start the client:
    ```sh
    $ cd client
    $ npm run dev
    ```
