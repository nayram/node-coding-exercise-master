## Service to remove duplicates from mock_application.json schema file

This service cleans up schema and removes duplicates within the mock_application.json file.

## Environment
 node Js

 ## Run

From the root directory run the command `node clean-up-schema`

The file `clean_application.json` file will be created without the duplicates with `mock_application.json`

### Testing

run the following commands
 - `npm i` 
 - `npm run test`


### TODO
- check if `mock_application.json` exits before the business logic runs
- write test to check if `mock_application.json` exits
- wite test to check if `clean_application.json` is created 