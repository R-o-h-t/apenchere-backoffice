"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncUsers = exports.syncProducts = exports.syncPrices = exports.syncOffers = exports.syncCategories = exports.listUsers = exports.listProducts = exports.listPrices = exports.listOffers = exports.listCategories = exports.getUser = exports.getProduct = exports.getPrice = exports.getOffer = exports.getCategory = void 0;

/* eslint-disable */
// this is an auto generated file. This will be overwritten
const getPrice =
/* GraphQL */
`
  query GetPrice($id: ID!) {
    getPrice(id: $id) {
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
exports.getPrice = getPrice;
const listPrices =
/* GraphQL */
`
  query ListPrices(
    $filter: ModelPriceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
exports.listPrices = listPrices;
const syncPrices =
/* GraphQL */
`
  query SyncPrices(
    $filter: ModelPriceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
exports.syncPrices = syncPrices;
const getOffer =
/* GraphQL */
`
  query GetOffer($id: ID!) {
    getOffer(id: $id) {
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
exports.getOffer = getOffer;
const listOffers =
/* GraphQL */
`
  query ListOffers(
    $filter: ModelOfferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        startAt
        endAt
        userID
        isPublished
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        offerProductId
      }
      nextToken
      startedAt
    }
  }
`;
exports.listOffers = listOffers;
const syncOffers =
/* GraphQL */
`
  query SyncOffers(
    $filter: ModelOfferFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOffers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        startAt
        endAt
        userID
        isPublished
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        offerProductId
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncOffers = syncOffers;
const getCategory =
/* GraphQL */
`
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
exports.getCategory = getCategory;
const listCategories =
/* GraphQL */
`
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.listCategories = listCategories;
const syncCategories =
/* GraphQL */
`
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        label
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncCategories = syncCategories;
const getUser =
/* GraphQL */
`
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
exports.getUser = getUser;
const listUsers =
/* GraphQL */
`
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        email
        phone
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.listUsers = listUsers;
const syncUsers =
/* GraphQL */
`
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstname
        lastname
        email
        phone
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncUsers = syncUsers;
const getProduct =
/* GraphQL */
`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
exports.getProduct = getProduct;
const listProducts =
/* GraphQL */
`
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
exports.listProducts = listProducts;
const syncProducts =
/* GraphQL */
`
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
exports.syncProducts = syncProducts;