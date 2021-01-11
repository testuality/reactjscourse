import React, {useEffect, useState, useRef} from "react";
import FlashcardList from "./FlashcardList";
import "./App.css";
import axios from "axios"

// Open trivia https://opentdb.com/api_config.php

// Youtube video https://youtu.be/hEtZ040fsD8

function App() {

  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([]);

  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php").then((response) => {
      setCategories(response.data.trivia_categories);
    });
  });

  useEffect(() => {
    generateQuestions();
  }, []);

  function generateQuestions() {
    let categoryId = categoryEl.current.value;
    axios.get(`https://opentdb.com/api.php?amount=${amountEl.current.value}&category=${categoryId}&difficulty=hard&type=multiple`)
    .then((response)=>{
      let newFlascards = response.data.results.map((result, index) => {
        return {
          id: index,
          question: result.question,
          answer: result.correct_answer,
          options: [...result.incorrect_answers, result.correct_answer].sort(() => {return Math.random() -0.5;})
        };
      });
      setFlashcards(newFlascards);
    });
  }  
  
  function handleSubmit(event) {
    event.preventDefault();
    generateQuestions();
  }

  return (
    <>
    <form className="header" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select id="category" ref={categoryEl}>
          {categories.map((category)=>{
            return (<option key={category.id} value={category.id}>{category.name}</option>);
          })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="amount">Number of questions</label>
        <input type="number" is="amount" min="1" step="1" defaultValue="10" ref={amountEl}/>
      </div>
      <div className="form-group">
        <input type="submit" value="Generate"/>
      </div>
    </form>
    <div className="container">
      <FlashcardList flashcards={flashcards}/>

    </div>
    </>
  );
}

export default App;
