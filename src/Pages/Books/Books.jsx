import React, { useContext } from 'react';
import { BookContext } from '../../BookProvider/BookProvider';

const Books = () => {
    const { handlemarkAsRead, storeBook } = useContext(BookContext);
    console.log(handlemarkAsRead);
    console.log('store book', storeBook);
  return (
    <div className='mt-20'>
     
    </div>
  );
};

export default Books;