

import React from 'react';
import data from './data.json';
import Products from './components/products.';



class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products: data.products,
      size:"",
      sort:"",
    };
  }

  render(){
  return (
    <div className="grid-container">
      <header>
     <a href="/"> My react App </a>
      </header>

      <main>
        <div className="content">
          <div className="main">
          <products products={this.state.products}></products>
          </div>
          <div className="sidebar">
            Cart Items
            </div>

        </div>
        </main>


        <footer>

            All rights is reserved

          </footer>


    </div>
  );
  }
}

export default App;
