'use strict'

const { removeDuplicateFields } = require('./remove-duplicate-fields')

const removeDuplicateViews = (collection = []) => removeDuplicateFields({ field: 'key', collection })

const removeDuplicateScenes = (collection = []) => removeDuplicateFields({ field: 'key', collection })

const cleanScenesCollection = (collection) => {
    const scenesWithoutDuplicates = removeDuplicateScenes(collection)
    const scenesWithoutDuplicateViews = scenesWithoutDuplicates.map(({ views, ...rest }) => {
        const cleanViews = removeDuplicateViews(views)
        return {
            views: cleanViews,
            ...rest
        }
    })
    return scenesWithoutDuplicateViews
}

module.exports = { cleanScenesCollection }
