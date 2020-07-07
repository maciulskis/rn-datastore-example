/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncRecords = /* GraphQL */ `
  query SyncRecords(
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRecords(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        number
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRecord = /* GraphQL */ `
  query GetRecord($id: ID!) {
    getRecord(id: $id) {
      id
      number
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listRecords = /* GraphQL */ `
  query ListRecords(
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        number
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
