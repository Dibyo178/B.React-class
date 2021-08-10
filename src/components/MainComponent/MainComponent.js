import React, { Component } from 'react';
import bookList from '../assets/books';
import BookList from '../List/BookList';
// import Person from './components/Person/Person';

// Functional components

// function App() {
//   return (
//     <div className="App">
//      <h1>Hello world!</h1>
//     <Person/>
//     </div>
//   );
// }
  // return React.createElement('div',{className: 'App'},
  // React.createElement('h1',null,"Hello world"), <Person/>);

  // function Person() {
  //   return(
  //     <h1>I am a React person</h1>
  //   )
  //   // return React.createElement('div',null,React.createElement('h1',null,"I am a React person"))
  // };

  // class components
class MainComponent extends Component {
    state = {
        books:bookList,
          // showBooks: true, // show book
          showBooks: true, 
        otherProp:'i am a trying to google job...'
      }
    
    //  changeBookState= newBookName =>{
    //   // 
    //   this.setState({
    //     books:[
    //       {bookName:newBookName, writer:'Gorge Orwell'},
    //       {bookName:'c++', writer:'Dan Brown'},
    //       {bookName:'python', writer:'Paulo Coelho'}
    //     ],
    //   })
    // };
    
    // trigger
    
    changeInputWithChange=(event,index)=>{
    
      const book={
        ...this.state.books[index]
      }
    
      book.bookName=event.target.value;
      const books=[...this.state.books];
      books[index]=book;
    
       this.setState({books: books}); // books array is updated
      // this.setState({
      //   books:[
      //     {bookName:event.target.value, writer:'Gorge Orwell'},
      //     {bookName:'c++', writer:'Dan Brown'},
      //     {bookName:'python', writer:'Paulo Coelho'}
      //   ],
      // })
    };
    
                   /* delete book state*/
    
    
            deleteBookState =(index)=>{    // index peraMeter accept
              //  const books=this.state.books;
              // const books=this.state.books.slice();
              // const books=this.state.books.map(item=>item);
              const books=[...this.state.books];
               books.splice(index, 1);
               this.setState({books: books});
            }   
    
                      // toggle use
    
            toggleChangeBookState=()=>{
              // this.setState({showBooks:!this.state.showBooks});
              this.setState({showBooks:!this.state.showBooks});
              
            } 
                    
        // constructor(){
        //   super();
        //   this.state ={};
        // }
        render() {  
          
          const style= {
            border: '1px solid red',
            borderRadius: '5px', 
            backgroundColor: 'black',
            color: 'white'
          }
    
    
               /*  mapping books..  */
    
      // const bookState=this.state.books;
    
      // const books=bookState.map(function(book){
      //    console.log(book.bookName)
      // })
    
    
         let books;
    
           if(this.state.showBooks){
           books=<BookList books={this.state.books} 
           changeInputWithChange={this.changeInputWithChange}
           deleteBookState={this.deleteBookState} 
           
           />
           }
    
              
      // const books=bookState.map((book)=>{
        // const books=this.state.books.map((book,index)=>{
          // console.log(book.bookName)
          // console.log(book)
      //     return(
      //       <Book 
           
      //       bookName={book.bookName}
      //       writer={book.writer}
      //       delete={()=>this.deleteBookState(index)}
      //        key={book.id}
      //        inputName={(event)=>this.changeInputWithChange(event,index)}
      //       />
      //     )
      //  })
    
          return(
            <div className="App">
               {/* <h1>Hello world!</h1>
               <Person name='jhon' age='23 '/>
               <Person name='kd' age='21 '/>
               <Person name='pd' age='43 '/>
               <Person name='nichal' age='33 '/> */}
               <h1 style={style}>Book list</h1>
               {/* <button onClick={()=>this.changeBookState( 'nineteen eighty four')}>Change click</button> */}
               {/* <input type='text' onChange={this.changeInputWithChange} ></input> */}
                  <button  onClick={this.toggleChangeBookState}>Toggle books</button>
                  {/* toggle use */}
                   {books};
                   {/* {this.state.showBooks? books:null} */}
    
                          {/* dynamic books mapping */}
                 {/* {
                   bookState.map(book=><Book bookName={book.bookName} writer={book.writer}></Book>)
                 }  */}
                               {/* ----- */}
    
               {/* <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer}  inputName={this.changeInputWithChange}/>
               <Book bookName={this.state.books[1].bookName}  writer={this.state.books[1].writer}/>
               <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} change={this.changeBookState.bind(this, 'nineteen 84')}/> */}
               {/* <Book  bookName='1984' writer='Gorge Orwell' />
               <Book  bookName='The de vinci code' writer='Dan Brown' />
               <Book  bookName='The Alchemist' writer='Paulo Coelho' /> */}
            </div>
          )
        }
}
export default MainComponent;