import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFectch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data, error, isPending } = useFetch('http://localhosts:8000/blogs/');
    return (
        <div className="blog-details">
            <h2>Blog Details</h2>
        </div>
      );
}
 
export default BlogDetails;