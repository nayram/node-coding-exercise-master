'use strict'
const { cleanObjectCollection } = require('./clean-objects-collection')
const duplicateObjects = [
    {
        "type" : "StandardObject",
        "_id" : "61e869d51137bc002545fedc",
        "name" : "Products",
        "fields" : [ 
            {
                "type" : "short_text",
                "required" : true,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fede",
                "key" : "field_1",
                "name" : "Products Name"
            }, 
            {
                "type" : "auto_increment",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fedf",
                "name" : "Product ID",
                "key" : "field_2"
            }, 
            {
                "type" : "image",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee0",
                "name" : "Image",
                "format" : {
                    "source" : "upload",
                    "thumbs" : []
                },
                "key" : "field_3"
            }, 
            {
                "type" : "paragraph_text",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee1",
                "name" : "Description",
                "key" : "field_4"
            }, 
            {
                "type" : "paragraph_text",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee2",
                "name" : "Description",
                "key" : "field_4"
            }, 
            {
                "type" : "currency",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee3",
                "name" : "Price",
                "format" : {
                    "format" : "$"
                },
                "key" : "field_5"
            }, 
            {
                "type" : "boolean",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee4",
                "name" : "Available",
                "format" : {
                    "default" : false,
                    "format" : "yes_no",
                    "input" : "dropdown",
                    "required" : false
                },
                "default" : false,
                "key" : "field_6"
            }
        ],
        "template" : "product",
        "key" : "object_1",
        "identifier" : "field_1"
    },
    {
        "inflections" : {
            "singular" : "Account",
            "plural" : "Accounts"
        },
        "connections" : {
            "inbound" : [],
            "outbound" : []
        },
        "name" : "Accounts",
        "user" : true,
        "status" : "current",
        "tasks" : [],
        "type" : "UserObject",
        "_id" : "61e869e11137bc002545fee5",
        "profile_key" : "all_users",
        "fields" : [
            {
                "type" : "name",
                "required" : true,
                "unique" : false,
                "user" : true,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869e11137bc002545fee7",
                "name" : "Name",
                "format" : {
                    "format" : "First Last"
                },
                "immutable" : true,
                "key" : "field_7"
            }, 
            {
                "type" : "email",
                "required" : true,
                "unique" : true,
                "user" : true,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869e11137bc002545fee8",
                "name" : "Email",
                "format" : {
                    "text_format" : "url",
                    "label" : ""
                },
                "immutable" : true,
                "key" : "field_8"
            }, 
            {
                "type" : "password",
                "required" : true,
                "unique" : true,
                "user" : true,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869e11137bc002545fee9",
                "name" : "Password",
                "format" : null,
                "immutable" : true,
                "key" : "field_9"
            }, 
            {
                "type" : "multiple_choice",
                "required" : true,
                "unique" : false,
                "user" : true,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869e11137bc002545feea",
                "name" : "User Status",
                "format" : {
                    "options" : [ 
                        "active", 
                        "inactive", 
                        "pending approval"
                    ],
                    "default" : "active"
                },
                "immutable" : true,
                "key" : "field_10"
            }, 
            {
                "type" : "user_roles",
                "required" : false,
                "unique" : false,
                "user" : true,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869e11137bc002545feeb",
                "name" : "User Roles",
                "immutable" : true,
                "key" : "field_11"
            }
        ],
        "key" : "object_2",
        "identifier" : "field_7"
    },
    {
        "type" : "StandardObject",
        "_id" : "61e869d51137bc002545fedc",
        "name" : "Products",
        "fields" : [ 
            {
                "type" : "short_text",
                "required" : true,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fede",
                "key" : "field_1",
                "name" : "Products Name"
            }, 
            {
                "type" : "auto_increment",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fedf",
                "name" : "Product ID",
                "key" : "field_2"
            }, 
            {
                "type" : "image",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee0",
                "name" : "Image",
                "format" : {
                    "source" : "upload",
                    "thumbs" : []
                },
                "key" : "field_3"
            }, 
            {
                "type" : "paragraph_text",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee1",
                "name" : "Description",
                "key" : "field_4"
            }, 
            {
                "type" : "paragraph_text",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee2",
                "name" : "Description",
                "key" : "field_4"
            }, 
            {
                "type" : "currency",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee3",
                "name" : "Price",
                "format" : {
                    "format" : "$"
                },
                "key" : "field_5"
            }, 
            {
                "type" : "boolean",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee4",
                "name" : "Available",
                "format" : {
                    "default" : false,
                    "format" : "yes_no",
                    "input" : "dropdown",
                    "required" : false
                },
                "default" : false,
                "key" : "field_6"
            }
        ],
        "template" : "product",
        "key" : "object_1",
        "identifier" : "field_1"
    }
]

const cleanObjects  = [
    {
        "type" : "StandardObject",
        "_id" : "61e869d51137bc002545fedc",
        "name" : "Products",
        "fields" : [ 
            {
                "type" : "short_text",
                "required" : true,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fede",
                "key" : "field_1",
                "name" : "Products Name"
            }, 
            {
                "type" : "auto_increment",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fedf",
                "name" : "Product ID",
                "key" : "field_2"
            }, 
            {
                "type" : "image",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee0",
                "name" : "Image",
                "format" : {
                    "source" : "upload",
                    "thumbs" : []
                },
                "key" : "field_3"
            }, 
            {
                "type" : "paragraph_text",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee1",
                "name" : "Description",
                "key" : "field_4"
            }, 
            {
                "type" : "currency",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee3",
                "name" : "Price",
                "format" : {
                    "format" : "$"
                },
                "key" : "field_5"
            }, 
            {
                "type" : "boolean",
                "required" : false,
                "unique" : false,
                "user" : false,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869d51137bc002545fee4",
                "name" : "Available",
                "format" : {
                    "default" : false,
                    "format" : "yes_no",
                    "input" : "dropdown",
                    "required" : false
                },
                "default" : false,
                "key" : "field_6"
            }
        ],
        "template" : "product",
        "key" : "object_1",
        "identifier" : "field_1"
    },
    {
        "inflections" : {
            "singular" : "Account",
            "plural" : "Accounts"
        },
        "connections" : {
            "inbound" : [],
            "outbound" : []
        },
        "name" : "Accounts",
        "user" : true,
        "status" : "current",
        "tasks" : [],
        "type" : "UserObject",
        "_id" : "61e869e11137bc002545fee5",
        "profile_key" : "all_users",
        "fields" : [
            {
                "type" : "name",
                "required" : true,
                "unique" : false,
                "user" : true,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869e11137bc002545fee7",
                "name" : "Name",
                "format" : {
                    "format" : "First Last"
                },
                "immutable" : true,
                "key" : "field_7"
            }, 
            {
                "type" : "email",
                "required" : true,
                "unique" : true,
                "user" : true,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869e11137bc002545fee8",
                "name" : "Email",
                "format" : {
                    "text_format" : "url",
                    "label" : ""
                },
                "immutable" : true,
                "key" : "field_8"
            }, 
            {
                "type" : "password",
                "required" : true,
                "unique" : true,
                "user" : true,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869e11137bc002545fee9",
                "name" : "Password",
                "format" : null,
                "immutable" : true,
                "key" : "field_9"
            }, 
            {
                "type" : "multiple_choice",
                "required" : true,
                "unique" : false,
                "user" : true,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869e11137bc002545feea",
                "name" : "User Status",
                "format" : {
                    "options" : [ 
                        "active", 
                        "inactive", 
                        "pending approval"
                    ],
                    "default" : "active"
                },
                "immutable" : true,
                "key" : "field_10"
            }, 
            {
                "type" : "user_roles",
                "required" : false,
                "unique" : false,
                "user" : true,
                "conditional" : false,
                "rules" : [],
                "validation" : [],
                "_id" : "61e869e11137bc002545feeb",
                "name" : "User Roles",
                "immutable" : true,
                "key" : "field_11"
            }
        ],
        "key" : "object_2",
        "identifier" : "field_7"
    }
]

describe('Clean Objects', () => { 
    test('should remove duplicates from object', () => {
        const results = cleanObjectCollection(duplicateObjects)
        expect(results).toStrictEqual(cleanObjects)
    })
 })