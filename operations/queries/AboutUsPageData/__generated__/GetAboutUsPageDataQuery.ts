/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAboutUsPageDataQuery
// ====================================================

export interface GetAboutUsPageDataQuery_asset_banner {
  __typename: 'UploadFile';
  url: string;
}

export interface GetAboutUsPageDataQuery_asset_logo {
  __typename: 'UploadFile';
  url: string;
}

export interface GetAboutUsPageDataQuery_asset {
  __typename: 'Asset';
  banner: GetAboutUsPageDataQuery_asset_banner | null;
  logo: GetAboutUsPageDataQuery_asset_logo | null;
}

export interface GetAboutUsPageDataQuery {
  asset: GetAboutUsPageDataQuery_asset | null;
}
