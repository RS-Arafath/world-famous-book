//loacal storage
const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem('readList');


  if (allReadList) return allReadList;

  return[]
}
const addReadListToLocalDB = () => {
  
}
export { getAllReadListFromLocalDB, addReadListToLocalDB };