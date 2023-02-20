'use strict'

const removeDuplicateFields = ({ field = '', collection = []} = {}) => {
    return collection.reduce((accumulator, cuurent) => {
      const exists = accumulator.find((element) => {
        return element[field] === cuurent[field]
      })
      if (!exists){
        accumulator.push(cuurent)
      }
      return accumulator
    },[])
}

module.exports = {removeDuplicateFields}
