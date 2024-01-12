# DineSmart Retrieval Service
## Overview
The DineSmart Retrieval Service is responsible for exposing an underlying Cloud Firestore database that contains 
inspection data.

## Running the application locally
- Create a Google Cloud IAM Principal with the `Firebase Admin`, `Firebase Admin SDK Administrator Service Agent`,
and `Firebase Service Agent` Roles
- Remove `.template` from `.env.template` and populate the file with the values from the service account JSON file
    - The `.env` file is only used for local testing. On deployment, the required env variables should be injected by
      Render
- Run the application using `npm run start`

### Interacting with the API
You can interact with the API using Postman.

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/22529934-bd387f4c-4b62-4c51-bfe9-5dc39bccd567?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D22529934-bd387f4c-4b62-4c51-bfe9-5dc39bccd567%26entityType%3Dcollection%26workspaceId%3D557e02ab-1929-4e7a-a54e-114f27762738)

## Technologies
- [Render](https://render.com/)
- Cloud Firestore
- Node.js (with TypeScript)

## Related Projects
- [dinesmart](https://github.com/maldahleh/dinesmart): iOS Client
- [dinesmart-update-service](https://github.com/maldahleh/dinesmart-update-service): Firebase Cloud Function that
populates the Cloud Firestore Database
