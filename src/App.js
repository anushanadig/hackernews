import React,{useDebugValue, useEffect, useState} from 'react';
import SearchHeader from './components/SearchHeader'
import Posts from './components/Posts';
import Filter from './components/Filter';

function App() {

  const URL = 'https://hn.algolia.com/api/v1/search?query='; 

  const [searchTerm,setSearchTerm] = useState('');
  const [loading,setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [response, setResponse] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');
  const [noResults, setNoResults] = useState(false);

  useEffect(()=>{
    fetchStories(searchTerm);
  },[])

  const fetchStories = async (term) => {
    setLoading(true);
    try{
      let response = await fetch(`${URL}${term}`);
      response = await response.json();
      setLoading(false);
      setResponse(response.hits);
      setNoResults(!response.hits.length);
    } catch {
      setLoading(false);
      setHasError(true);
    }
  }

  const onSearchSubmit = (event) => {
		event.preventDefault();
		
		fetchStories(searchTerm);
	}

  const onDismiss = (objectID) => {
    const filteredResponse = response.filter(item => item.objectID !== objectID);
    setResponse(filteredResponse); 
  }

  return (
    <div className="App">
      <SearchHeader 
        searchTerm={searchTerm} 
        onSearchTermChange={(e) => setSearchTerm(e.target.value)}
        onSearchSubmit={onSearchSubmit}
      />

    {
      !hasError && !noResults && (
        <Filter 
        filterTerm={filterTerm}
        onFilterTermChange={(event) => setFilterTerm(event.target.value) }
        />
      )
    }

    <Posts 
        response={response} 
        loading={loading} 
        filterTerm={filterTerm}
        noResults={noResults}
        onDismiss={onDismiss}
        hasError={hasError}
    />  
    </div>
  );
}

export default App;
