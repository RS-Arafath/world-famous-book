import React, { use } from 'react';
const bookPromise = fetch('/public/booksData.json').then((res) => res.json());
const AllBooks = () => {
  const books = use(bookPromise);
  console.log(books);
  return (
    <div className="container mx-auto font-primary">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        books
      </h2>

      <div className="grid grid-cols-3 gap-10 mt-20">
        {books.map((book) => {
          return (
            <div className="card  bg-base-100 w-96 shadow-lg">
              <div className="mx-auto">
                <div className="hover-3d mx-auto ">
                  {/* content */}
                  <figure>
                    <img
                      src={book.image}
                      className="h-[200px]"
                      alt="Book img"
                    />
                  </figure>
                  {/* 8 empty divs needed for the 3D effect */}
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="card-body">
                <div className="flex gap-2">
                  {book.tags.map((tag) => (
                    <strong className="badge badge-soft badge-success font-semibold ">
                      {' '}
                      {tag}
                    </strong>
                  ))}
                </div>
                <h2 className="card-title font-bold text-xl sm:text-3xl">
                  {book.bookName}
                </h2>
                <p className="font-semibold text-lg">{book.author}</p>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="divider"></div>
                <div className="card-actions justify-between">
                  <div className="text-lg font-semibold">{book.category}</div>
                  <div className="font-semibold text-lg">{book.rating}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
