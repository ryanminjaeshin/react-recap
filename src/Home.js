import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([null]);

    const [name, setName] = useState('ryan')

    const handleDelete = id => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    // runs the function everytime it re-redners
    useEffect(() => {
        fetch('http://localhost:8000/blogs');
    }, []);

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home;