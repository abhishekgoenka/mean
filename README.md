# mean
A MEAN stack application

[![Build Status](https://dev.azure.com/abhishekgoenkapublic/github-projects/_apis/build/status/mean-main-ci?branchName=main)](https://dev.azure.com/abhishekgoenkapublic/github-projects/_build/latest?definitionId=3&branchName=main)

> https://abhishek1950mean.herokuapp.com

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

1. Configure MongoDB server settings

    Update `local-environment.js` file in the `server/env/` folder with your MongoDB settings. Replace the database name key, and port with your specific configuration.

    ```javascript
    const dbName = 'mean-application';
    const un = 'abhishek';
    const pwd = 'abhishek123'
    const port = '44979'

    module.exports = {
        dbName,
        un,
        pwd,
        port
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
