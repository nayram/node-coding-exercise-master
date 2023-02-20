'use strict'
const { removeDuplicateFields } = require('./remove-duplicate-fields')

const parentObject = [{
    name: 'John Doe',
    age: 10,
    id: '12334567',
    key: 'abcde'
}, {
    name: 'Jane Doe',
    age: 20,
    id: '2343234234',
    key: 'ijkl'
}, {
    name: 'John Doe',
    age: 10,
    id: '12334568',
    key: 'abcde'
}]

const cleanObject = [{
    name: 'John Doe',
    age: 10,
    id: '12334567',
    key: 'abcde'
}, {
    name: 'Jane Doe',
    age: 20,
    id: '2343234234',
    key: 'ijkl'
}]

describe('Remove duplicates', () => {
    test('should remove duplicate by field name', () => {
        const results = removeDuplicateFields({ field: 'key', collection: parentObject})
        expect(results).toStrictEqual(cleanObject)
    })
})