//loacal storage
const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem('storeBook');

  if (allReadList) return JSON.parse(allReadList);;

  return [];
};
const addReadListToLocalDB = (book) => {
  const allBooks = getAllReadListFromLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem('storeBook', JSON.stringify(allBooks));
    return true; // added
  }
  return false; // already exists
};


export { getAllReadListFromLocalDB, addReadListToLocalDB };
