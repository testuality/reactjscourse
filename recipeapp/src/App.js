import React,{Component, useEffect, useState }from "react";
import Recipe from "./Recipe.jsx";
import './App.css';

/*
  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

    */

    /*
    edamam
    application id
    38235dbd
    application key
    532d72b81ed6c5d2d71d171448dbe1d1	

    API docs https://developer.edamam.com/edamam-docs-recipe-api
    */
   const APP_ID = "38235dbd";
   const APP_KEY = "532d72b81ed6c5d2d71d171448dbe1d1";
 
   let query = 
   "https://api.edamam.com/search?q=chicken&app_id=" + APP_ID + 
    "&app_key=" + APP_KEY + "&from=0&to=3&calories=591-722&health=alcohol-free";
 
class App extends Component {

  // const [recipes, setRecipes] = useState([]);
  //let result = fetch()

  constructor() {
    super();
    this.state = 
      {
        recipes:[]
      }
      this.getRecipes();
    }
/*
  useEffect(() => {
    console.log("Effect has been done");
    getRecipes();
  }, []);
*/
  xxx(response) {
    const data = JSON.parse(response.body);
    console.log(data);
    this.setState({
      recipes: data.hits.slice()
    });  
  }

  getRecipes() {
    fetch(query).then(this.xxx);
    
  };

  render() {
    return (
      <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
    );
  }
}

/*
      {recipes.map(recipe => {
         return (<Recipe></Recipe>);
      })}

*/
export default App;
