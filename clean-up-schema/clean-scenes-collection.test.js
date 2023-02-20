'use strict'
const { cleanScenesCollection } = require('./clean-scenes-collection')

const duplicateScenes = [{
    "groups" : [],
    "_id" : "61e8666b010a37023e3d99a5",
    "name" : "Home",
    "slug" : "home",
    "key" : "scene_1",
    "views" : [
        {
            "columns" : [],
            "links" : [],
            "inputs" : [],
            "_id" : "61e86a5d1137bc002545ff11",
            "groups" : [],
            "format" : "none",
            "label" : "Menu",
            "name" : "Menu",
            "type" : "menu",
            "title" : "",
            "description" : "",
            "source" : {},
            "key" : "view_4"
        }, 
        {
            "columns" : [],
            "links" : [],
            "inputs" : [],
            "_id" : "61e86a5d1137bc002545ff11",
            "groups" : [],
            "format" : "none",
            "label" : "Menu",
            "name" : "Menu",
            "type" : "menu",
            "title" : "",
            "description" : "",
            "source" : {},
            "key" : "view_4"
        }
    ],
    "parent" : "home-login"
}, 
{
    "groups" : [],
    "_id" : "61e86a411137bc002545ff0d",
    "name" : "Home Login",
    "parent" : null,
    "object" : null,
    "type" : "authentication",
    "views" : [ 
        {
            "columns" : [],
            "links" : [],
            "inputs" : [],
            "_id" : "61e86a411137bc002545ff0e",
            "name" : "Login Form",
            "title" : "Login",
            "type" : "login",
            "description" : "Enter your email address and password to login.",
            "limit_profile_access" : false,
            "allowed_profiles" : [],
            "registration_type" : "closed",
            "key" : "view_3"
        }
    ],
    "key" : "scene_3",
    "slug" : "home-login"
}, 
{
    "groups" : [],
    "_id" : "61e869e11137bc002545feec",
    "name" : "Account Settings",
    "type" : "user",
    "limit_profile_access" : false,
    "allowed_profiles" : [],
    "views" : [ 
        {
            "columns" : [],
            "links" : [],
            "inputs" : [],
            "_id" : "61e869e11137bc002545feed",
            "name" : "Account Settings",
            "type" : "form",
            "source" : {
                "authenticated_user" : true,
                "object" : "object_2"
            },
            "action" : "update",
            "title" : "Account Settings",
            "description" : "",
            "rules" : {
                "submits" : [ 
                    {
                        "is_default" : true,
                        "reload_show" : true,
                        "message" : "Your account settings have been updated.",
                        "action" : "message",
                        "key" : "submit_1"
                    }
                ]
            },
            "groups" : [ 
                {
                    "columns" : [ 
                        {
                            "inputs" : [ 
                                {
                                    "key" : "field_7",
                                    "type" : "name",
                                    "label" : "Name",
                                    "field" : {
                                        "key" : "field_7"
                                    },
                                    "id" : "field_7"
                                }, 
                                {
                                    "key" : "field_8",
                                    "type" : "email",
                                    "label" : "Email",
                                    "field" : {
                                        "key" : "field_8"
                                    },
                                    "id" : "field_8"
                                }
                            ]
                        }
                    ]
                }
            ],
            "key" : "view_1"
        }, 
        {
            "columns" : [],
            "links" : [],
            "inputs" : [],
            "_id" : "61e869e11137bc002545feee",
            "name" : "Change Password",
            "type" : "form",
            "source" : {
                "authenticated_user" : true,
                "object" : "object_2"
            },
            "action" : "update",
            "title" : "Change Password",
            "description" : "",
            "rules" : {
                "submits" : [ 
                    {
                        "is_default" : true,
                        "reload_show" : true,
                        "message" : "Password successfully changed.",
                        "action" : "message",
                        "key" : "submit_1"
                    }
                ]
            },
            "groups" : [ 
                {
                    "columns" : [ 
                        {
                            "inputs" : [ 
                                {
                                    "key" : "field_9",
                                    "type" : "password",
                                    "label" : "Password",
                                    "field" : {
                                        "key" : "field_9"
                                    },
                                    "action_authenticate" : true,
                                    "label_authenticate" : "Current Password",
                                    "action_update" : true,
                                    "label_update" : "New Password",
                                    "id" : "field_9"
                                }
                            ]
                        }
                    ]
                }
            ],
            "key" : "view_2"
        }, {
            "columns" : [],
            "links" : [],
            "inputs" : [],
            "_id" : "61e869e11137bc002545feee",
            "name" : "Change Password",
            "type" : "form",
            "source" : {
                "authenticated_user" : true,
                "object" : "object_2"
            },
            "action" : "update",
            "title" : "Change Password",
            "description" : "",
            "rules" : {
                "submits" : [ 
                    {
                        "is_default" : true,
                        "reload_show" : true,
                        "message" : "Password successfully changed.",
                        "action" : "message",
                        "key" : "submit_1"
                    }
                ]
            },
            "groups" : [ 
                {
                    "columns" : [ 
                        {
                            "inputs" : [ 
                                {
                                    "key" : "field_9",
                                    "type" : "password",
                                    "label" : "Password",
                                    "field" : {
                                        "key" : "field_9"
                                    },
                                    "action_authenticate" : true,
                                    "label_authenticate" : "Current Password",
                                    "action_update" : true,
                                    "label_update" : "New Password",
                                    "id" : "field_9"
                                }
                            ]
                        }
                    ]
                }
            ],
            "key" : "view_2"
        }
    ],
    "key" : "scene_2",
    "slug" : "account-settings"
}, {
    "groups" : [],
    "_id" : "61e86a411137bc002545ff0d",
    "name" : "Home Login",
    "parent" : null,
    "object" : null,
    "type" : "authentication",
    "views" : [ 
        {
            "columns" : [],
            "links" : [],
            "inputs" : [],
            "_id" : "61e86a411137bc002545ff0e",
            "name" : "Login Form",
            "title" : "Login",
            "type" : "login",
            "description" : "Enter your email address and password to login.",
            "limit_profile_access" : false,
            "allowed_profiles" : [],
            "registration_type" : "closed",
            "key" : "view_3"
        }
    ],
    "key" : "scene_3",
    "slug" : "home-login"
}]

const cleanScenes = [{
    "groups" : [],
    "_id" : "61e8666b010a37023e3d99a5",
    "name" : "Home",
    "slug" : "home",
    "key" : "scene_1",
    "views" : [ 
        {
            "columns" : [],
            "links" : [],
            "inputs" : [],
            "_id" : "61e86a5d1137bc002545ff11",
            "groups" : [],
            "format" : "none",
            "label" : "Menu",
            "name" : "Menu",
            "type" : "menu",
            "title" : "",
            "description" : "",
            "source" : {},
            "key" : "view_4"
        }
    ],
    "parent" : "home-login"
}, 
{
    "groups" : [],
    "_id" : "61e86a411137bc002545ff0d",
    "name" : "Home Login",
    "parent" : null,
    "object" : null,
    "type" : "authentication",
    "views" : [ 
        {
            "columns" : [],
            "links" : [],
            "inputs" : [],
            "_id" : "61e86a411137bc002545ff0e",
            "name" : "Login Form",
            "title" : "Login",
            "type" : "login",
            "description" : "Enter your email address and password to login.",
            "limit_profile_access" : false,
            "allowed_profiles" : [],
            "registration_type" : "closed",
            "key" : "view_3"
        }
    ],
    "key" : "scene_3",
    "slug" : "home-login"
}, 
{
    "groups" : [],
    "_id" : "61e869e11137bc002545feec",
    "name" : "Account Settings",
    "type" : "user",
    "limit_profile_access" : false,
    "allowed_profiles" : [],
    "views" : [ 
        {
            "columns" : [],
            "links" : [],
            "inputs" : [],
            "_id" : "61e869e11137bc002545feed",
            "name" : "Account Settings",
            "type" : "form",
            "source" : {
                "authenticated_user" : true,
                "object" : "object_2"
            },
            "action" : "update",
            "title" : "Account Settings",
            "description" : "",
            "rules" : {
                "submits" : [ 
                    {
                        "is_default" : true,
                        "reload_show" : true,
                        "message" : "Your account settings have been updated.",
                        "action" : "message",
                        "key" : "submit_1"
                    }
                ]
            },
            "groups" : [ 
                {
                    "columns" : [ 
                        {
                            "inputs" : [ 
                                {
                                    "key" : "field_7",
                                    "type" : "name",
                                    "label" : "Name",
                                    "field" : {
                                        "key" : "field_7"
                                    },
                                    "id" : "field_7"
                                }, 
                                {
                                    "key" : "field_8",
                                    "type" : "email",
                                    "label" : "Email",
                                    "field" : {
                                        "key" : "field_8"
                                    },
                                    "id" : "field_8"
                                }
                            ]
                        }
                    ]
                }
            ],
            "key" : "view_1"
        }, 
        {
            "columns" : [],
            "links" : [],
            "inputs" : [],
            "_id" : "61e869e11137bc002545feee",
            "name" : "Change Password",
            "type" : "form",
            "source" : {
                "authenticated_user" : true,
                "object" : "object_2"
            },
            "action" : "update",
            "title" : "Change Password",
            "description" : "",
            "rules" : {
                "submits" : [ 
                    {
                        "is_default" : true,
                        "reload_show" : true,
                        "message" : "Password successfully changed.",
                        "action" : "message",
                        "key" : "submit_1"
                    }
                ]
            },
            "groups" : [ 
                {
                    "columns" : [ 
                        {
                            "inputs" : [ 
                                {
                                    "key" : "field_9",
                                    "type" : "password",
                                    "label" : "Password",
                                    "field" : {
                                        "key" : "field_9"
                                    },
                                    "action_authenticate" : true,
                                    "label_authenticate" : "Current Password",
                                    "action_update" : true,
                                    "label_update" : "New Password",
                                    "id" : "field_9"
                                }
                            ]
                        }
                    ]
                }
            ],
            "key" : "view_2"
        }
    ],
    "key" : "scene_2",
    "slug" : "account-settings"
}]

describe('Remove dupicate scenes', () => {
    test('should remove all duplicates from scene objects', () => {
        const results = cleanScenesCollection(duplicateScenes)
        expect(results).toStrictEqual(cleanScenes)
    })
})
