"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.updateProduct = exports.updatePrice = exports.updateOffer = exports.updateCategory = exports.deleteUser = exports.deleteProduct = exports.deletePrice = exports.deleteOffer = exports.deleteCategory = exports.createUser = exports.createProduct = exports.createPrice = exports.createOffer = exports.createCategory = void 0;

/* eslint-disable */
// this is an auto generated file. This will be overwritten
const createPrice =
/* GraphQL */
`
  mutation CreatePrice(
    $input: CreatePriceInput!
    $condition: ModelPriceConditionInput
  ) {
    createPrice(input: $input, condition: $condition) {
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
exports.createPrice = createPrice;
const updatePrice =
/* GraphQL */
`
  mutation UpdatePrice(
    $input: UpdatePriceInput!
    $condition: ModelPriceConditionInput
  ) {
    updatePrice(input: $input, condition: $condition) {
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
exports.updatePrice = updatePrice;
const deletePrice =
/* GraphQL */
`
  mutation DeletePrice(
    $input: DeletePriceInput!
    $condition: ModelPriceConditionInput
  ) {
    deletePrice(input: $input, condition: $condition) {
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
exports.deletePrice = deletePrice;
const createOffer =
/* GraphQL */
`
  mutation CreateOffer(
    $input: CreateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    createOffer(input: $input, condition: $condition) {
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
exports.createOffer = createOffer;
const updateOffer =
/* GraphQL */
`
  mutation UpdateOffer(
    $input: UpdateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    updateOffer(input: $input, condition: $condition) {
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
exports.updateOffer = updateOffer;
const deleteOffer =
/* GraphQL */
`
  mutation DeleteOffer(
    $input: DeleteOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    deleteOffer(input: $input, condition: $condition) {
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
exports.deleteOffer = deleteOffer;
const createCategory =
/* GraphQL */
`
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
exports.createCategory = createCategory;
const updateCategory =
/* GraphQL */
`
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
exports.updateCategory = updateCategory;
const deleteCategory =
/* GraphQL */
`
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
exports.deleteCategory = deleteCategory;
const createUser =
/* GraphQL */
`
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
exports.createUser = createUser;
const updateUser =
/* GraphQL */
`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
exports.updateUser = updateUser;
const deleteUser =
/* GraphQL */
`
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
exports.deleteUser = deleteUser;
const createProduct =
/* GraphQL */
`
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
exports.createProduct = createProduct;
const updateProduct =
/* GraphQL */
`
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
exports.updateProduct = updateProduct;
const deleteProduct =
/* GraphQL */
`
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
exports.deleteProduct = deleteProduct;