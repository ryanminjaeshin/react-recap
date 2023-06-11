const Home = () => {

    const handleClick = (e) => {
        console.log('hello world');
    }

    const handleClickAgain = (name, e)=> {
        console.log('hello ' + name, e.target);
    }

    return (  
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('Ryan', e)}>Click ME AGAIN</button>
        </div>
    );
}
 
export default Home;