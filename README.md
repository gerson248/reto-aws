# Serverless - AWS Node.js Typescript

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

- **Requirements**: NodeJS
- **Requirements**: Serverless, to install serverless globally execute the following `npm install -g serverless`

### STEPS TO RUN THE PROJECT

- Run `npm i --force` to install the project dependencies
- Run `npm run deploy-dev` to deploy this stack to AWS
- Run `npm run test` to run the tests in observation mode

### Locally

In order to test the functions locally, run the following command:

- `npm run local` if you're using NPM

### REQUEST

> METHOD POST: https://km63u2dl4f.execute-api.us-east-2.amazonaws.com/dev/v3/films
> BODY= {
>    "title": "A New Hope 2",
>    "opening_crawl": "It is a period of civil war 2.",
>    "episode_id": 2,
>    "url": "https://swapi.py4e.com/api/films/12",
>    "vehicles": ["vehiculo 1, vehiculo 2"]
> }
> METHOD GET: https://km63u2dl4f.execute-api.us-east-2.amazonaws.com/dev/v3/films/244e9193-1f14-47a5-b34d-29d4670d0afc
> RESPONSE= {
>    "vehicles": [ "vehiculo 1, vehiculo 2" ],
>    "opening_crawl": "It is a period of civil war 2."
>    "episode_id": 4,
>    "title": "A New Hope 2",
>    "url": "https://swapi.py4e.com/api/films/2/"
> }

