import './App.css';
import List from './List';
import Search from './Search';
import React from 'react'
const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Harun',
      Position: 'React Developer',
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


  const [searchTerm,setSearchTerm]= React.useState('');

    const handleSearch = (event) => {
        setSearchTerm ( event.target.value);
        
    
    };
  //create call back handeler function
   const searchedStories = stories.filter((story)=>{
    return story.title.includes(searchTerm);
   });



  return (
    <div className='App'>
      <div className='App-header'><h1>My Hacker Stories</h1></div>


      <Search   onSearch = {handleSearch}/>
      <p>Searching for <strong>{searchTerm}</strong></p>
      <hr />

      <List list={searchedStories} />
    </div>
  );
};
export default App;

