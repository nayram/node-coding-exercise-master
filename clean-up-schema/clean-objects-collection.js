'use strict'

const { removeDuplicateFields } = require('./remove-duplicate-fields')

const cleanDuplicateObjectFields = (collection=[]) => removeDuplicateFields({ field: 'key', collection })

const cleanDuplicateObjects = (collection=[]) => removeDuplicateFields({ field: 'key', collection })

const cleanObjectCollection = (collection = []) => {
    const objectsWithoutDuplicates = cleanDuplicateObjects(collection)
    const objectsWithoutDuplicateFields = objectsWithoutDuplicates.map(({ fields, ...rest }) => {
        const cleanFields = cleanDuplicateObjectFields(fields)
        return {
            fields: cleanFields,
            ...rest
        }
    })
    return objectsWithoutDuplicateFields
}

module.exports = { cleanObjectCollection }
