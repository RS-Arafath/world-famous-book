
import { use } from 'react';
import {  useParams } from 'react-router';

const bookPromise = fetch('/booksData.json').then((res) => res.json());


const BookDetails = () => {
  const { bookId } = useParams()

  const books = use(bookPromise)
  
  const expectedBook = books.find((book) => book.bookId == bookId)
  console.log(expectedBook.image,'expected book');
const {
  bookName,
  author,
  image,
  review,
  totalPages,
  rating,
  category,
  tags,
  publisher,
  yearOfPublishing,
} = expectedBook;
  
  return (
    <div className="card container mx-auto lg:card-side bg-base-100 shadow-sm mt-20">
      <figure className="p-5 bg-gray-100 rounded-xl w-full max-h-[500px]">
        <img
          src={image}
          alt={bookName}
          className="w-full h-[400px] object-contain rounded-xl"
        />
      </figure>

      <div className="card-body">
        <h2 className="font-primary text-3xl sm:text-4xl md:text-5xl font-bold">
          {bookName}
        </h2>
        <h4 className="font-secondary ">
          <span className="text-lg md:text-xl  font-bold ">By: </span>
          <span className="text-lg text-[#737373] md:text-xl  font-semiboldbold ">
            {author}
          </span>
        </h4>
        <div className="divider my-0"></div>

        <p className="font-secondary text-[#737373] text-lg">{category}</p>
        <div className="divider my-0"></div>

        <p className="">
          <span className="font-primary text-base sm:text-lg font-bold">
            Review:{' '}
          </span>
          {'   '}
          <span className="text-base sm:text-lg font-secondary">{review}</span>
        </p>

        <div className="flex gap-2 items-center">
          <span className="font-primary font-bold text-lg">Tag</span>
          {tags.map((tag, ind) => (
            <strong
              key={ind}
              className="badge badge-soft badge-success font-semibold "
            >
              <span className='font-semibold '>#{tag}</span>
            </strong>
          ))}
        </div>

        <div className="divider my-0"></div>

        <div>
          <p>Number of pages: {totalPages}</p>
          <p>Publisher: {publisher}</p>
          <p>Year of Publishing: {yearOfPublishing}</p>
          <p>Rating: {rating}</p>
        </div>
        <div className=" flex gap-2 md:gap-4">
          <button className="btn btn-outline">Read</button>
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;