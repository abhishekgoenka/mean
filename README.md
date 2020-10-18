# mean
A MEAN stack application

[![Build Status](https://dev.azure.com/abhishekgoenkapublic/github-projects/_apis/build/status/mean-main-ci?branchName=main)](https://dev.azure.com/abhishekgoenkapublic/github-projects/_build/latest?definitionId=3&branchName=main)

> https://abhishek1950mean.herokuapp.com/home

# Angular MEAN stack application

You can [watch build the app](https://www.youtube.com/watch?v=vLvNr3Wa5YI&list=PLC3y8-rFHvwj200LLotCYum_9wmGeTJx9&index=1)

[Learn more about developing Node.js apps with Azure's cloud services here](https://www.youtube.com/watch?v=HznzUUMyV1Q&list=PLC3y8-rFHvwj200LLotCYum_9wmGeTJx9)

## Requirements

1. Install the Angular CLI

    ```bash
    npm install -g @angular/cli
    ```

1. Install the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)

## Getting Started

1. Clone this repository

    ```bash
    git clone https://github.com/abhishekgoenka/mean.git
    cd mean
    ```

1. Install the npm packages

    ```bash
    npm i
    ```

1. Configure Cosmos DB server settings

    Rename the `example-environment.js` file to `environment.js` in the `server/env/` folder and update it with your Cosmos DB settings. Replace the database name key, and port with your specific configuration.

    ```javascript
    // server/env/environment.js
    const cosmosPort = 1234; // replace with your port
    const dbName = 'your-cosmos-db-name-goes-here';
    const key = 'your-key-goes-here';

    module.exports = {
      cosmosPort,
      dbName,
      key
    };
    ```

## Running the app

1. Run app in development environment. This will start angular client and node server.
    ```bash
    npm start
    ```

2. Build the Angular app

    ```bash
    ng build
    ```

3. Launch the server

    ```bash
    npm start
    ```

1. Open the browser to http://localhost:4200

## Dockerize the App 


### To start the containers
> docker-compose up

### To stop the containers
> docker-compose down

### Install docker compose if not already installed
> sudo apt install docker-compose

### Pull and Run image from registry
> docker run -p 80:80 abhishek1950/mean

### URL to use
> http://localhost/

## Problems or Suggestions

[Open an issue here](https://github.com/abhishekgoenka/mean/issues)
