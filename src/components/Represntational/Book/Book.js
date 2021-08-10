import React from 'react';
import '../../Represntational/Book/Book.css';
const Book = (props) => {
    //  console.log(props)
    const {bookName,writer} = props;
    return (
        <div className='book'>
           {/* <h3 onClick={props.change}>Book: {bookName}</h3> */}
           <h3 onClick={props.delete}>Book: {bookName}</h3>
           <h4>Writer: {writer}</h4> 
           <input type="text" onChange={props.inputName} value={props.bookName} />
        </div>
    );
};

export default Book;