# DineSmart Retrieval Service
## Overview
The DineSmart Retrieval Service is responsible for exposing an underlying Cloud Firestore database that contains 
inspection data.

## Running the application locally
- Create a Google Cloud IAM Principal with the `Firebase Service Agent` Role
- Remove `.template` from `.env.template` and populate the file with the values from the service account json file
    - The `.env` file is only used for local testing. On deployment, the required env variables should be injected by
      Render
- Run the application using `npm run start`

## Technologies
- [Render](https://render.com/)
- Cloud Firestore
- Node.js (with TypeScript)

## Related Projects
- [dinesmart](https://github.com/maldahleh/dinesmart): iOS Client
- [dinesmart-update-service](https://github.com/maldahleh/dinesmart-update-service): Firebase Cloud Function that
populates the Cloud Firestore Database
