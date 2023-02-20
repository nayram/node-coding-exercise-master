'use strict'

const fs = require('fs/promises')
const { cleanAndCreateNewShcema } = require('./clean-and-create-new-schema')

const mockApplicationJson = require('../mock_application.json')

describe('Clean And Create New Schema', () => {
    let cleanAndNewSchema
    beforeAll(async () => {
        await cleanAndCreateNewShcema()
        const results = await fs.readFile('clean_application.json', 'utf8')
        cleanAndNewSchema = JSON.parse(results)
    })

    test('should clean up schema', async () => {
        expect(cleanAndNewSchema).not.toStrictEqual(mockApplicationJson)
    })
    
    test('should have the correct number of objects and fields', () => {
      const { versions } = cleanAndNewSchema
      const [{ objects }] = versions
      const numberOfFields = objects.reduce((accumulator, { fields } ) => {
        return accumulator + fields.length
      }, 0)
      expect(objects.length).toEqual(mockApplicationJson.object_count)
      expect(numberOfFields).toEqual(mockApplicationJson.field_count)
    })

    test('should have the correct number of scenes and view counts', () => {
        const { versions } = cleanAndNewSchema
      const [{ scenes }] = versions
      const numberOfViews = scenes.reduce((accumulator, { views } ) => {
        return accumulator + views.length
      }, 0)
      expect(scenes.length).toEqual(mockApplicationJson.scene_count)
      expect(numberOfViews).toEqual(mockApplicationJson.view_count)
    })
    
    // Todo - write test clean_application.json is created.
})
