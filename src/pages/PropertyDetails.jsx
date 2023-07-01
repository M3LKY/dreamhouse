import React, { useState } from 'react';
import { housesData } from '../data';
import { useParams, Link } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => house.id === parseInt(id));
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      window.location.href = '/'; // Redirect to the homepage after 4 seconds
    }, 5000);
  };
  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center text-left lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold text-pink-100'>{house.name}</h2>
            <h3 className='text-lg mb-4 text-blue-300'>{house.address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-blue-500 text-white px-3 rounded-full'>{house.type}</div>
            <div className='bg-blue-800 text-white px-3 rounded-full'>{house.country}</div>
          </div>
          <div className="text-3xl font-semibold text-green-100">$ {house.price} USD</div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[738px]'>
            <div className='mb-8'>
              <img className='rounded-md' src={house.imageLg} alt='House' />
            </div>
            <div className='flex gap-x-5 text-white'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl' />
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl' />
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl' />
                <div>{house.surface}</div>
              </div>
            </div>
            <br />
            <div className='text-left text-pink-100'>{house.description}</div>
          </div>
          <div className='flex-1 bg-blue-100 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-800 rounded-full'>
                <img src={house.agent.image} alt="Agent" />
              </div>
              <div className='text-left'>
                <div className='font-bold text-lg'>{house.agent.name}</div>
                <Link className='text-blue-700 text-sm' to={``}>Agent</Link>
              </div>
            </div>
            <form className='flex flex-col gap-y-2' onSubmit={handleFormSubmit}>
              <input className='border border-blue-300 focus:border-blue-700 outline-none rounded w-full text-blue-700 px-4 h-14 text-sm' type='text' placeholder='Name*' required />
              <input className='border border-blue-300 focus:border-blue-700 outline-none text-blue-700 rounded w-full px-4 h-14 text-sm' type='email' placeholder='Email*' required />
              <input className='border border-blue-300 focus:border-blue-700 text-blue-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Phone*' required />
              <textarea className='border border-blue-300 focus:border-blue-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-blue-700' placeholder='Message*' required></textarea>
              <div className='flex gap-x-2'>
                <button className='bg-violet-400 hover:bg-violet-900 text-white rounded p-4 text-sm w-full transition'>Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isFormSubmitted && (
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className='bg-black px-6 py-4 rounded-md shadow-lg'>
            <p className='text-green-300 text-lg'> Your information has been sent.  We'll reach you soon. </p>
          </div>
        </div>
      )}

    </section>
  );
};

export default PropertyDetails;
