/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg } from './../../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetHomePageDataQuery
// ====================================================

export interface GetHomePageDataQuery_asset_banner {
  __typename: 'UploadFile';
  url: string;
}

export interface GetHomePageDataQuery_asset_logo {
  __typename: 'UploadFile';
  url: string;
}

export interface GetHomePageDataQuery_asset {
  __typename: 'Asset';
  banner: GetHomePageDataQuery_asset_banner | null;
  logo: GetHomePageDataQuery_asset_logo | null;
}

export interface GetHomePageDataQuery_announcements_icon {
  __typename: 'UploadFile';
  url: string;
}

export interface GetHomePageDataQuery_announcements {
  __typename: 'Announcement';
  title: string;
  description: string;
  publishedAt: any | null;
  icon: GetHomePageDataQuery_announcements_icon | null;
  locale: string | null;
}

export interface GetHomePageDataQuery {
  asset: GetHomePageDataQuery_asset | null;
  announcements: GetHomePageDataQuery_announcements[] | null;
}

export interface GetHomePageDataQueryVariables {
  locale: any;
  pagination: PaginationArg;
  sort: (string | null)[];
}
