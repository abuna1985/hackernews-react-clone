import React, {useState, useEffect} from 'react';
import List from './components/List';
import InputWithLabel from './components/InputWithLabel';
import Header from './components/Header';

const initialStories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const getAsyncStories = () =>
  new Promise(resolve =>
    setTimeout(
      () => resolve({ data: { stories: initialStories } }),
      2000
    )
  );

const useSemiPersistentState = (key, initialState) => {
  // Set initial state for searchTerm
  const [value, setValue] = useState(
    localStorage.getItem(key) || initialState
  );
  
  // update local storage 'search' variable after searchTerm is updated
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const App = () => {
 
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', '');
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    getAsyncStories()
      .then(result => {
        setStories(result.data.stories);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);;

  const handleRemoveStory = item => {
    const newStories = stories.filter(story => {
      return item.objectID !== story.objectID;
    });
    setStories(newStories);
  }

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }
  const searchedStories = stories.filter(story => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>               
      <Header/>
      <main>
        <InputWithLabel id="search" type="text" value={searchTerm} onInputChange={handleSearch}>
          <strong>Search:</strong>
        </InputWithLabel>
        <hr />
        {isError && <p>Something went wrong...</p>}
        
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <List list={searchedStories} onRemoveItem={handleRemoveStory} />
        )}
      </main>
    </div>
  );
}

export default App;