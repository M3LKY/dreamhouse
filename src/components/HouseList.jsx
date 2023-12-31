import React, { useContext } from 'react';
import { HouseContext } from './HouseContext'
import House from './House'
import { Link } from 'react-router-dom'
import { ImSpinner2 } from 'react-icons/im'
const HouseList = () => {
  const { houses, loading } = useContext(HouseContext)

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-white text-5xl mt-[250px] md:mt-[100px]' />
    )
  }
  if (houses.length < 1) {
    return <div className='text-center text-3x1 text-white mt-[48px] md:mt-[48px]'>Not found</div>
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index) => {
            return (
              <Link to={`/dreamhouse/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            )
          })}
        </div>
      </div>

    </section>
  );
};

export default HouseList;
