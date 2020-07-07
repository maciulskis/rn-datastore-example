/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecord = /* GraphQL */ `
  subscription OnCreateRecord($owner: String!) {
    onCreateRecord(owner: $owner) {
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
export const onUpdateRecord = /* GraphQL */ `
  subscription OnUpdateRecord($owner: String!) {
    onUpdateRecord(owner: $owner) {
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
export const onDeleteRecord = /* GraphQL */ `
  subscription OnDeleteRecord($owner: String!) {
    onDeleteRecord(owner: $owner) {
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
