/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAssetsQuery
// ====================================================

export interface GetAssetsQuery_asset_banner {
  __typename: 'UploadFile';
  url: string;
}

export interface GetAssetsQuery_asset_logo {
  __typename: 'UploadFile';
  url: string;
}

export interface GetAssetsQuery_asset {
  __typename: 'Asset';
  banner: GetAssetsQuery_asset_banner | null;
  logo: GetAssetsQuery_asset_logo | null;
}

export interface GetAssetsQuery {
  asset: GetAssetsQuery_asset | null;
}
