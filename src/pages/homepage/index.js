import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHome } from 'store/actions';
import { Flex } from 'rebass';
const HomePage = () => {
  const { homeData, loading } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHome());
  }, [dispatch]);
  return (
    <Flex>
      {loading ? (
        'loading...'
      ) : (
        <ul>
          <li>NewConfirmed : {homeData.NewConfirmed}</li>
          <li>NewDeaths : {homeData.NewDeaths}</li>
          <li>NewRecovered : {homeData.NewRecovered}</li>
          <li>TotalConfirmed : {homeData.TotalConfirmed}</li>
          <li>TotalDeaths : {homeData.TotalDeaths}</li>
          <li>TotalRecovered : {homeData.TotalRecovered}</li>
        </ul>
      )}{' '}
    </Flex>
  );
};

export default HomePage;
