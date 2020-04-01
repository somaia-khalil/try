import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let MovieList = [
  {name: "Aleta" , description: "about electric sef sfesdc ", year: 2019 , poster:"https://images-na.ssl-images-amazon.com/images/I/81vgOQFZ8YL._AC_SX522_.jpg" },
  {name: "SpiderMan", description: "sdfsjkf ahe f adhjwef ", year: 2002 , poster: "https://images-na.ssl-images-amazon.com/images/I/518YkARUDLL._AC_.jpg"},
  {name: "Aleta" , description: "about electric sef sfesdc ", year: 2019 , poster:"https://images-na.ssl-images-amazon.com/images/I/81vgOQFZ8YL._AC_SX522_.jpg" },
  {name: "SpiderMan", description: "sdfsjkf ahe f adhjwef ", year: 2002 , poster: "https://images-na.ssl-images-amazon.com/images/I/518YkARUDLL._AC_.jpg"},
  {name: "Aleta" , description: "about electric sef sfesdc ", year: 2019 , poster:"https://images-na.ssl-images-amazon.com/images/I/81vgOQFZ8YL._AC_SX522_.jpg" },
  {name: "SpiderMan", description: "sdfsjkf ahe f adhjwef ", year: 2002 , poster: "https://images-na.ssl-images-amazon.com/images/I/518YkARUDLL._AC_.jpg"},
  {name: "Aleta" , description: "about electric sef sfesdc ", year: 2019 , poster:"https://images-na.ssl-images-amazon.com/images/I/81vgOQFZ8YL._AC_SX522_.jpg" },
  {name: "SpiderMan", description: "sdfsjkf ahe f adhjwef ", year: 2002 , poster: "https://images-na.ssl-images-amazon.com/images/I/518YkARUDLL._AC_.jpg"},
  {name: "Aleta" , description: "about electric sef sfesdc ", year: 2019 , poster:"https://images-na.ssl-images-amazon.com/images/I/81vgOQFZ8YL._AC_SX522_.jpg" },
  {name: "SpiderMan", description: "sdfsjkf ahe f adhjwef ", year: 2002 , poster: "https://images-na.ssl-images-amazon.com/images/I/518YkARUDLL._AC_.jpg"},
  {name: "Aleta" , description: "about electric sef sfesdc ", year: 2019 , poster:"https://images-na.ssl-images-amazon.com/images/I/81vgOQFZ8YL._AC_SX522_.jpg" },
  {name: "SpiderMan", description: "sdfsjkf ahe f adhjwef ", year: 2002 , poster: "https://images-na.ssl-images-amazon.com/images/I/518YkARUDLL._AC_.jpg"},
  {name: "Aleta" , description: "about electric sef sfesdc ", year: 2019 , poster:"https://images-na.ssl-images-amazon.com/images/I/81vgOQFZ8YL._AC_SX522_.jpg" },
  {name: "SpiderMan", description: "sdfsjkf ahe f adhjwef ", year: 2002 , poster: "https://images-na.ssl-images-amazon.com/images/I/518YkARUDLL._AC_.jpg"},
  {name: "Aleta" , description: "about electric sef sfesdc ", year: 2019 , poster:"https://images-na.ssl-images-amazon.com/images/I/81vgOQFZ8YL._AC_SX522_.jpg" },
  {name: "SpiderMan", description: "sdfsjkf ahe f adhjwef ", year: 2002 , poster: "https://images-na.ssl-images-amazon.com/images/I/518YkARUDLL._AC_.jpg"}
]


ReactDOM.render(
  <React.StrictMode>
    <App MovieList={MovieList}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


