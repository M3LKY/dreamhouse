import React, { useState, useEffect, createContext } from 'react';

import { housesData } from '../data'

export const HouseContext = createContext()
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [Property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => { return house.type; });
    const uniqueProperties = ['Property type (any)', ... new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true)
    const isDefault = (str) => {
      return str.split(' ').includes('(any)')
    }
    const minPrice = parseInt(price.split(' ')[0])
    const maxPrice = parseInt(price.split(' ')[2])
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price.split(',').join(''))
      

      if (house.country === country && house.type === Property && housePrice >= minPrice && housePrice <= maxPrice) {
        return house
      }

      if (isDefault(country) && isDefault(Property) && isDefault(price)) {
        return house
      }
      if (!isDefault(country) && isDefault(Property) && isDefault(price)) {
        return house.country === country
      }
      if (!isDefault(Property) && isDefault(country) && isDefault(price)) {
        return house.type === Property
      }

      if (!isDefault(price) && isDefault(country) && isDefault(Property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house
        }
      }

      if (!isDefault(country) && !isDefault(Property) && isDefault(price)) {
        return house.country === country && house.type === Property
      }

      if (!isDefault(country) && isDefault(Property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country
        }
      }

      if (!isDefault(country) && !isDefault(Property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === Property
        }
      }
    })

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      )
    }, 1000)
  }

  return (
    <HouseContext.Provider
      value={{
        houses,
        country,
        setCountry,
        countries,
        setCountries,
        properties,
        setProperties,
        Property,
        setProperty,
        price,
        setPrice,
        loading,
        handleClick
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};


export default HouseContextProvider;
