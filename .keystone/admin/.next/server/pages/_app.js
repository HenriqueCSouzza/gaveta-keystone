"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "@keystone-6/core/___internal-do-not-use-will-break-in-patch/admin-ui/pages/App"
const App_namespaceObject = require("@keystone-6/core/___internal-do-not-use-will-break-in-patch/admin-ui/pages/App");
;// CONCATENATED MODULE: external "@keystone-6/core/___internal-do-not-use-will-break-in-patch/admin-ui/id-field-view"
const id_field_view_namespaceObject = require("@keystone-6/core/___internal-do-not-use-will-break-in-patch/admin-ui/id-field-view");
;// CONCATENATED MODULE: external "@keystone-6/core/fields/types/text/views"
const views_namespaceObject = require("@keystone-6/core/fields/types/text/views");
;// CONCATENATED MODULE: external "@keystone-6/core/fields/types/password/views"
const password_views_namespaceObject = require("@keystone-6/core/fields/types/password/views");
;// CONCATENATED MODULE: external "@keystone-6/core/fields/types/relationship/views"
const relationship_views_namespaceObject = require("@keystone-6/core/fields/types/relationship/views");
;// CONCATENATED MODULE: external "@keystone-6/core/fields/types/timestamp/views"
const timestamp_views_namespaceObject = require("@keystone-6/core/fields/types/timestamp/views");
;// CONCATENATED MODULE: ./pages/_app.js






var adminConfig = {};
/* harmony default export */ const _app = ((0,App_namespaceObject.getApp)({
    lazyMetadataQuery: {
        "kind": "Document",
        "definitions": [
            {
                "kind": "OperationDefinition",
                "operation": "query",
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [
                        {
                            "kind": "Field",
                            "name": {
                                "kind": "Name",
                                "value": "keystone",
                                "loc": {
                                    "start": 22,
                                    "end": 30
                                }
                            },
                            "arguments": [],
                            "directives": [],
                            "selectionSet": {
                                "kind": "SelectionSet",
                                "selections": [
                                    {
                                        "kind": "Field",
                                        "name": {
                                            "kind": "Name",
                                            "value": "adminMeta",
                                            "loc": {
                                                "start": 39,
                                                "end": 48
                                            }
                                        },
                                        "arguments": [],
                                        "directives": [],
                                        "selectionSet": {
                                            "kind": "SelectionSet",
                                            "selections": [
                                                {
                                                    "kind": "Field",
                                                    "name": {
                                                        "kind": "Name",
                                                        "value": "lists",
                                                        "loc": {
                                                            "start": 59,
                                                            "end": 64
                                                        }
                                                    },
                                                    "arguments": [],
                                                    "directives": [],
                                                    "selectionSet": {
                                                        "kind": "SelectionSet",
                                                        "selections": [
                                                            {
                                                                "kind": "Field",
                                                                "name": {
                                                                    "kind": "Name",
                                                                    "value": "key",
                                                                    "loc": {
                                                                        "start": 77,
                                                                        "end": 80
                                                                    }
                                                                },
                                                                "arguments": [],
                                                                "directives": [],
                                                                "loc": {
                                                                    "start": 77,
                                                                    "end": 80
                                                                }
                                                            },
                                                            {
                                                                "kind": "Field",
                                                                "name": {
                                                                    "kind": "Name",
                                                                    "value": "isHidden",
                                                                    "loc": {
                                                                        "start": 91,
                                                                        "end": 99
                                                                    }
                                                                },
                                                                "arguments": [],
                                                                "directives": [],
                                                                "loc": {
                                                                    "start": 91,
                                                                    "end": 99
                                                                }
                                                            },
                                                            {
                                                                "kind": "Field",
                                                                "name": {
                                                                    "kind": "Name",
                                                                    "value": "fields",
                                                                    "loc": {
                                                                        "start": 110,
                                                                        "end": 116
                                                                    }
                                                                },
                                                                "arguments": [],
                                                                "directives": [],
                                                                "selectionSet": {
                                                                    "kind": "SelectionSet",
                                                                    "selections": [
                                                                        {
                                                                            "kind": "Field",
                                                                            "name": {
                                                                                "kind": "Name",
                                                                                "value": "path",
                                                                                "loc": {
                                                                                    "start": 131,
                                                                                    "end": 135
                                                                                }
                                                                            },
                                                                            "arguments": [],
                                                                            "directives": [],
                                                                            "loc": {
                                                                                "start": 131,
                                                                                "end": 135
                                                                            }
                                                                        },
                                                                        {
                                                                            "kind": "Field",
                                                                            "name": {
                                                                                "kind": "Name",
                                                                                "value": "createView",
                                                                                "loc": {
                                                                                    "start": 148,
                                                                                    "end": 158
                                                                                }
                                                                            },
                                                                            "arguments": [],
                                                                            "directives": [],
                                                                            "selectionSet": {
                                                                                "kind": "SelectionSet",
                                                                                "selections": [
                                                                                    {
                                                                                        "kind": "Field",
                                                                                        "name": {
                                                                                            "kind": "Name",
                                                                                            "value": "fieldMode",
                                                                                            "loc": {
                                                                                                "start": 175,
                                                                                                "end": 184
                                                                                            }
                                                                                        },
                                                                                        "arguments": [],
                                                                                        "directives": [],
                                                                                        "loc": {
                                                                                            "start": 175,
                                                                                            "end": 184
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "loc": {
                                                                                    "start": 159,
                                                                                    "end": 198
                                                                                }
                                                                            },
                                                                            "loc": {
                                                                                "start": 148,
                                                                                "end": 198
                                                                            }
                                                                        }
                                                                    ],
                                                                    "loc": {
                                                                        "start": 117,
                                                                        "end": 210
                                                                    }
                                                                },
                                                                "loc": {
                                                                    "start": 110,
                                                                    "end": 210
                                                                }
                                                            }
                                                        ],
                                                        "loc": {
                                                            "start": 65,
                                                            "end": 220
                                                        }
                                                    },
                                                    "loc": {
                                                        "start": 59,
                                                        "end": 220
                                                    }
                                                }
                                            ],
                                            "loc": {
                                                "start": 49,
                                                "end": 228
                                            }
                                        },
                                        "loc": {
                                            "start": 39,
                                            "end": 228
                                        }
                                    }
                                ],
                                "loc": {
                                    "start": 31,
                                    "end": 234
                                }
                            },
                            "loc": {
                                "start": 22,
                                "end": 234
                            }
                        },
                        {
                            "kind": "Field",
                            "name": {
                                "kind": "Name",
                                "value": "authenticatedItem"
                            },
                            "selectionSet": {
                                "kind": "SelectionSet",
                                "selections": [
                                    {
                                        "kind": "InlineFragment",
                                        "typeCondition": {
                                            "kind": "NamedType",
                                            "name": {
                                                "kind": "Name",
                                                "value": "User"
                                            }
                                        },
                                        "selectionSet": {
                                            "kind": "SelectionSet",
                                            "selections": [
                                                {
                                                    "kind": "Field",
                                                    "name": {
                                                        "kind": "Name",
                                                        "value": "id"
                                                    }
                                                },
                                                {
                                                    "kind": "Field",
                                                    "name": {
                                                        "kind": "Name",
                                                        "value": "name"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    },
    fieldViews: [
        id_field_view_namespaceObject,
        views_namespaceObject,
        password_views_namespaceObject,
        relationship_views_namespaceObject,
        timestamp_views_namespaceObject
    ],
    adminMetaHash: "1g7jv24",
    adminConfig: adminConfig,
    apiPath: "/api/graphql"
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(960));
module.exports = __webpack_exports__;

})();