import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      newWord: {
        word: "",
        definition: ""
      },
      newWords:[]
    }
    this.onAdd = this.onAdd.bind(this);
    this.handleWordInputChange = this.handleWordInputChange.bind(this);
    this.handleDefinitionInputChange = this.handleDefinitionInputChange.bind(this);
    this.handleUpdateDefinition = this.handleUpdateDefinition.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount() {
    axios.get('/words')
    .then((response) => {
      this.setState({items: response.data})
    })
    .catch((error) => {
      console.log(error);
    })

    axios.get('/newwords')
    .then((response) => {
      this.setState({newWords: response.data})
    })
  }
  handleWordInputChange = (e) => {
    let tem = this.state.newWord;
    tem.word = e.target.value;
    this.setState({
      newWord: tem
    });
   
  }

  handleDefinitionInputChange = (e) => {
    let tem = this.state.newWord;
    tem.definition = e.target.value;
    this.setState({
      newWord: tem
    });
    
  }

  handleUpdateDefinition(e) {
    let tem = this.state.newWord;
    tem.definition = e.target.value;
    this.setState({
     definition: tem
    })
 }
 
  onAdd(e) {
    e.preventDefault();
    axios.post('/newwords',  this.state.newWord)
    .then((response) => {
      alert('Your creation is saved!')
      axios.get('/newwords')
      .then((response) => {
        this.setState({newWords: response.data})
      })
    })
    
  }

  onUpdate(e, word) {
     axios.put('/newwords', {word: word, definition: this.state.newWord.definition})
     .then(response => {
      console.log("updated!")
      axios.get('/newwords')
      .then((response) => {
        console.log("res", response);
        this.setState({newWords: response.data})
      })
     })

  }
 

  onDelete(e,id) {
      axios.delete('/newwords', {data: {id}})
      .then((response) => {
        console.log("Successfully deleted!")
        axios.get('/newwords')
      .then((response) => {
        this.setState({newWords: response.data})
      })
    })
     
  }
  
    

      
  // }

  render() {
    return (
      <div>
        <h1>Onion Glossary</h1>
          <h2>Please Create Your Own Fun Glossary: </h2>
        <form >
          <label>
            Word:
            <input onChange={this.handleWordInputChange}type="text" name="word" required />
          </label>
          <label>
            Definition:
            <input onChange={this.handleDefinitionInputChange}type="text" name="definition" required/>
          </label>
          <button onClick={this.onAdd}>Add</button>
        </form>
          
          {this.state.newWords.map((item, index) => {
            return (
              <div key={index}>
              <p className="newWordDisplay" type="text" id={'p'+index}>{item.word}: </p>
              <input className="newDefinitionDisplay" type="text" defaultValue={item.definition} onChange={this.handleUpdateDefinition}/>
              <button onClick={e=>{this.onUpdate(e, item.word)}}>Update</button>
              <button  onClick={e =>{this.onDelete(e, item._id)}}>Delete</button>
            </div>
            )
          })}
        <Search newWords={this.state.newWords} className="search"/>
        <h3>Example Defintions For Some Inspiration:</h3>
         {this.state.items.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item.word}:  {item.definition}</li>
            </ul>
          )
         })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
