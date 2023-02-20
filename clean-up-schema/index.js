"use strict";

const {
  cleanAndCreateNewShcema
} = require("./clean-and-create-new-schema");

console.log(' ---- removing duplicates from mock_application.json -------')
cleanAndCreateNewShcema().then(() => {
  console.log('---- duplicates removed and clean_appliocation.json file created')
}).catch(console.error).finally(() => {
  console.log('----- done ------')
})
