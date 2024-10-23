
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 
  const [Bookmark, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) =>{
    console.log(blog);
    const newBookMark = [...Bookmark, blog]
    setBookmarks(newBookMark)
  }

  return (
    <>
      
      <Header></Header>  
     <div className='md:flex container mx-auto'>
        <Blogs handleAddToBookmark ={handleAddToBookmark}></Blogs>
        <Bookmarks Bookmark = {Bookmark}></Bookmarks>
     </div>

    </>
  )
}

export default App
