import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    db: [],
    search:'',
    searchResult: []
    }
    this.onSearch = this.onSearch.bind(this);
    this.hanldeSearchInput = this.hanldeSearchInput.bind(this);
  }
  
  hanldeSearchInput(e) {
    var temp = this.state.search;
    console.log("newWordsViaProps", this.props.newWords);
    temp = e.target.value;
    console.log('temp', temp);
    this.setState({
      search: temp
    })
  }

  onSearch(e) {
    //  e.preventDefault();
    // axios.get('/search')
    //   .then((response) => {
    //     console.log('resppppp', response);
    //     this.setState({searchResult: response.data})
    //   })
    //   .catch(err => {
    //     console.log('err', err);
    //   })
    //   console.log(this.state.db);
    

    var result = this.props.newWords.filter(item => {
      return item.word === this.state.search;
    })

    console.log(result);

    if(result.length) {
     alert(`${result[0].word}: ${result[0].definition}`);
    } else {
      alert('Content does not exist!');
    }
  


  }


  render() {
    return (
      <div>
        <h3>Search:</h3>
        <form>
          <input type="text" onChange={this.hanldeSearchInput}/>
          <button onClick={this.onSearch}>Search</button>
        </form>
      </div>
    )
  }
}

export default Search;