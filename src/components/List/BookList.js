import React from 'react';
import Book from '../Represntational/Book/Book';

const BookList = (props) => {
    return (
        props.books.map((book,index)=>{
            return(
              <Book 
              bookName={book.bookName}
              writer={book.writer}
              delete={()=>props.deleteBookState(index)}
               key={book.id}
               inputName={(event)=>props.changeInputWithChange(event,index)}
              />
            )
         })
    );
};

export default BookList;