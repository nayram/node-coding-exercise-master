"use strict";

const fs = require("fs/promises");
const { cleanObjectCollection } = require("./clean-objects-collection");
const { cleanScenesCollection } = require("./clean-scenes-collection");
const mockApplicationJson = require("../mock_application.json");

const cleanUpSchema = () => {
  const { versions, ...rest } = mockApplicationJson;
  const cleanVersions = versions.map(
    ({ objects, scenes, ...restOfVersions }) => {
      const cleanedObjects = cleanObjectCollection(objects);
      const cleanedScenes = cleanScenesCollection(scenes);
      return {
        ...restOfVersions,
        objects: cleanedObjects,
        scenes: cleanedScenes,
      };
    }
  );
  return {
    ...rest,
    versions: cleanVersions,
  };
};

const cleanAndCreateNewShcema = async () => {
  const newSchema = cleanUpSchema();
  const result = await fs.writeFile("clean_application.json", JSON.stringify(newSchema, null, 2));
  return result;
};

module.exports = { cleanAndCreateNewShcema };
