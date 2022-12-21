import { useState } from 'react';
import "./App.css";
import LoadingSpinner from './LoadingSpinner';

const endPoint = " https://openlibrary.org/authors/OL23919A/works.json?limit=10"

function App() {
  const [books, setBooks] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchBooks() {
    setIsLoading(true);
    setError(null)
    try {
    const response = await fetch(endPoint);
    const data = await response.json();
    setBooks(data.entries);
  } catch(error){
    setError(error)
  }
  setIsLoading(false);
}
 
 return (
    <div>
      <h1>Books</h1>
      <button onClick={fetchBooks}>Find</button>
      {error && <p>something was wrong: {error.message}</p>}
      {isLoading && <LoadingSpinner />}
      {books && books.map((book) => {

       const convertedDate = new Date(book.last_modified.value)
       const dateTimeFormat = new Intl.DateTimeFormat('en', {
        year: 'numeric', })
        const bookYear = dateTimeFormat.format(convertedDate);

        return (
        <div className='book'>
          <h3>{book.title}</h3>
          <p>{bookYear}</p>
        </div>
      )}) }
    </div>  
  )
}



export default App;