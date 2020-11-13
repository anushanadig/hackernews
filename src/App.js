import React,{useDebugValue, useState} from 'react';
import SearchHeader from './components/SearchHeader'
import Posts from './components/Posts'

function App() {

  // Hackernews API endpoint
  const URL = 'https://hn.algolia.com/api/v1/search?query=';

  const [searchTerm,setSearchTerm] = useState('');
  const [loading,setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [response, setResponse] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');
  const [noResults, setNoResults] = useState(false);

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      let response = await fetch(`${URL}${searchTerm}`);
      response = await response.json();
      setLoading(false);
      setResponse(response.hits);
      setNoResults(!response.hits.length);
    } catch {
      setLoading(false);
      setHasError(true);
    }
  }

  return (
    <div className="App">
      <SearchHeader 
        searchTerm={searchTerm} 
        onSearchTermChange={(e) => setSearchTerm(e.target.value)}
        onSearchSubmit={onSearchSubmit}
      />

      <Posts 
        response={response} 
        loading={loading} 
        filterTerm={filterTerm}
        noResults={noResults}
      />
    </div>
  );
}

export default App;
