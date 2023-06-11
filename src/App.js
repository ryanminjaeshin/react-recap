import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = {name:'yoshi', age:50};
  const link = "http://google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{person.name}</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
