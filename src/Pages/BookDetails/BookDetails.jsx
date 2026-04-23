
import { use } from 'react';
import {  useParams } from 'react-router';

const bookPromise = fetch('/booksData.json').then((res) => res.json());


const BookDetails = () => {
  const { bookId } = useParams()

  const books = use(bookPromise)
  
  const expectedBook = books.find((book) => book.bookId == bookId)
  console.log(expectedBook,'expected book');
  // console.log(books);
  
  return (
    <div className='mt-20'>
      <h2>book details</h2>
    </div>
  );
};

export default BookDetails;