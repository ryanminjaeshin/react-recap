const Home = () => {

    const handleClick = () => {
        console.log('hello world');
    }

    const handleClickAgain = name => {
        console.log('hello ' + name);
    }

    return (  
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('Ryan')}>Click ME AGAIN</button>
        </div>
    );
}
 
export default Home;