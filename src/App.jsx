import 'react-quill/dist/quill.snow.css'
import Blogs from "./post/view/blogs"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from "./post/create/create_blog"
import Blog from "./components/blog"
import BlogHeader from "./components/blog_header"
import Page_Not_Found from "./page_not_found"
import BlogFooter from './components/blog_footer'
import Login from './Login'; // Import the Login component

function App() {

    return (
        <>
            <BlogHeader/>
            <Routes>
            <Route path="/login" element={<Login />} />
                <Route path="/" element={<Blogs />} />
                <Route path='blog/new' element={<Create />} />
                <Route path='blog/:id' element={<Blog />} />
                <Route path='*' element={<Page_Not_Found />} />
            </Routes>
            {/* <BlogFooter/> */}
        </>
    )
}

export default App
