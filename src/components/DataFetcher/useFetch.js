import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = () => {
  const [fetchState, setFetchState] = useState({
    loading: true,
    error: null,
    data: null
  });

  useEffect(() => {
    axios.get('https://randomuser.me/api/?nat=gb&results=5')
      .then(response => {
        const data = response.data.results;
        setFetchState({ loading: false, data, error: null });
      })
      .catch(error => {
        setFetchState({ loading: false, data: null, error });
      })
    return () => {
      // component unmount
      // need to add cancellation of ajax request here
    };
  }, []);

  return fetchState;
}
