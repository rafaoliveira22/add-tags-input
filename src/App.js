import React, { useState } from 'react';
import './style.css'

const TagsInput = () => {
  const [tags, setTags] = useState(['name;cpf']);
  const addTags = event => {
    let value_input = event.target.value
    /*
    SE A TECLA PRESSIONADA FOR A ENTER
    E O INPUT NAO ESTIVER VAZIO
    ADICIONA NO ARRAY TAGS
    VOLTANDO O INPUT COM VALOR VAZIO
    */
    if(event.key === 'Enter' &&  value_input !== ""){
      setTags([...tags, value_input]);
      event.target.value = "";
    }
  }; // addTags()
  const removeTags = indexToRemove => {
    setTags(tags.filter((_, index) => index != indexToRemove));
  }
  return(
    <section className='tag-input'>
      <div className='tag-input-content'>
        <ul>
          {
            tags.map((tag, index) => 
              <li key={index}>
                <span className='title-tag'>{tag}</span>
                <span 
                  class="material-symbols-outlined icon" 
                  onClick={() => removeTags(index)}
                >cancel
                </span>
              </li>
            ) // map
          }
        </ul>
        <input 
          type='text'
          placeholder='Pressione o ENTER para adicionar'
          onKeyUp={addTags}
        />
      </div>
    </section>
  )
}
function App() {
  
  return (
    <div className='container'>
      <TagsInput />
    </div>
  );
} // App()

export default App;
