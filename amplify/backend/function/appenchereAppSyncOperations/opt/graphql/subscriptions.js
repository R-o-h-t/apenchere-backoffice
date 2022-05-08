"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onUpdateUser = exports.onUpdateProduct = exports.onUpdatePrice = exports.onUpdateOffer = exports.onUpdateCategory = exports.onDeleteUser = exports.onDeleteProduct = exports.onDeletePrice = exports.onDeleteOffer = exports.onDeleteCategory = exports.onCreateUser = exports.onCreateProduct = exports.onCreatePrice = exports.onCreateOffer = exports.onCreateCategory = void 0;

/* eslint-disable */
// this is an auto generated file. This will be overwritten
const onCreatePrice =
/* GraphQL */
`
  subscription OnCreatePrice {
    onCreatePrice {
      id
      value
      userID
      offerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.onCreatePrice = onCreatePrice;
const onUpdatePrice =
/* GraphQL */
`
  subscription OnUpdatePrice {
    onUpdatePrice {
      id
      value
      userID
      offerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.onUpdatePrice = onUpdatePrice;
const onDeletePrice =
/* GraphQL */
`
  subscription OnDeletePrice {
    onDeletePrice {
      id
      value
      userID
      offerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.onDeletePrice = onDeletePrice;
const onCreateOffer =
/* GraphQL */
`
  subscription OnCreateOffer {
    onCreateOffer {
      id
      startAt
      endAt
      userID
      prices {
        nextToken
        startedAt
      }
      product {
        id
        label
        file
        description
        userID
        categoryID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      isPublished
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      offerProductId
    }
  }
`;
exports.onCreateOffer = onCreateOffer;
const onUpdateOffer =
/* GraphQL */
`
  subscription OnUpdateOffer {
    onUpdateOffer {
      id
      startAt
      endAt
      userID
      prices {
        nextToken
        startedAt
      }
      product {
        id
        label
        file
        description
        userID
        categoryID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      isPublished
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      offerProductId
    }
  }
`;
exports.onUpdateOffer = onUpdateOffer;
const onDeleteOffer =
/* GraphQL */
`
  subscription OnDeleteOffer {
    onDeleteOffer {
      id
      startAt
      endAt
      userID
      prices {
        nextToken
        startedAt
      }
      product {
        id
        label
        file
        description
        userID
        categoryID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      isPublished
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      offerProductId
    }
  }
`;
exports.onDeleteOffer = onDeleteOffer;
const onCreateCategory =
/* GraphQL */
`
  subscription OnCreateCategory {
    onCreateCategory {
      id
      label
      products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.onCreateCategory = onCreateCategory;
const onUpdateCategory =
/* GraphQL */
`
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      label
      products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.onUpdateCategory = onUpdateCategory;
const onDeleteCategory =
/* GraphQL */
`
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      label
      products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.onDeleteCategory = onDeleteCategory;
const onCreateUser =
/* GraphQL */
`
  subscription OnCreateUser {
    onCreateUser {
      id
      firstname
      lastname
      email
      phone
      products {
        nextToken
        startedAt
      }
      prices {
        nextToken
        startedAt
      }
      offers {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.onCreateUser = onCreateUser;
const onUpdateUser =
/* GraphQL */
`
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstname
      lastname
      email
      phone
      products {
        nextToken
        startedAt
      }
      prices {
        nextToken
        startedAt
      }
      offers {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.onUpdateUser = onUpdateUser;
const onDeleteUser =
/* GraphQL */
`
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstname
      lastname
      email
      phone
      products {
        nextToken
        startedAt
      }
      prices {
        nextToken
        startedAt
      }
      offers {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.onDeleteUser = onDeleteUser;
const onCreateProduct =
/* GraphQL */
`
  subscription OnCreateProduct {
    onCreateProduct {
      id
      label
      file
      description
      userID
      categoryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.onCreateProduct = onCreateProduct;
const onUpdateProduct =
/* GraphQL */
`
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      label
      file
      description
      userID
      categoryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.onUpdateProduct = onUpdateProduct;
const onDeleteProduct =
/* GraphQL */
`
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      label
      file
      description
      userID
      categoryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.onDeleteProduct = onDeleteProduct;