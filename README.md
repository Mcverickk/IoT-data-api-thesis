# Run IoT-data-api-thesis server locally

Follow the steps to run the server locally.

## Clone the repo

    git clone https://github.com/Mcverickk/IoT-data-api-thesis.git
    
## Install Dependencies

    cd IoT-data-api-thesis
    npm install
    
## Start Server

    npm run dev
    
## The API endpoints for localhost are:

## To get the IoT data
`GET https://127.0.0.1:3002/api/v1/iotdata/`

    Example response:
    {
        "status":200,
        "message":"IoT data fetched!",
        "body":{
                "temperature":23,
                "humidity":46
        }
    }
