import React from 'react';
import { Alert, Spin } from 'antd';
import { ApplicationTable } from '../ApplicationsTable/AplicationTable';
import { useFetch } from './useFetch';

const errorMessage = "Something went terribly wrong :(";

export const DataFetcher = () => {
  const { loading, error, data } = useFetch();

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <Alert message={errorMessage} type="error" />
  }

  return <ApplicationTable initialApplications={data} />;
}
