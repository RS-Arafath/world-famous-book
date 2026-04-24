import React, { createContext, useState} from 'react';
export const BookContext = createContext();
export const BookProvider = ({ children }) => {
    const [storeBook, setStoreBook] = useState([]);

    const handlemarkAsRead = (currentBook) => {
      /**
       * 1) store book id
       * 2) where to store
       * 3) array or collection
       * 4) if the book is akready exist show the alert
       * 5) if not then add the book in the array or collection
       */

      
      const isExistBook = storeBook.find(
        (book) => book.bookId === currentBook.bookId,
      );
      if (isExistBook) {
        alert('The book is already exists');
      } else {
        setStoreBook([...storeBook, currentBook]);
        alert(`${currentBook.bookName}  is added the List`)
      }
    };

    
  const data = {
    storeBook,setStoreBook,handlemarkAsRead
  }
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
