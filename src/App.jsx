
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 
  const [Bookmark, setBookmarks] = useState([]);
  const [readingTime , setReadingTime] = useState(0)


  const handleAddToBookmark = (blog) =>{
    console.log(blog);
    const newBookMark = [...Bookmark, blog]
    setBookmarks(newBookMark)
  }


  const handleMarkAsRead = (time , id) =>{
    setReadingTime(readingTime + time);
    const reamingBookMark = Bookmark.filter(bookmark => bookmark.id !== id)
    setBookmarks(reamingBookMark);
  }

  return (
    <>
      
      <Header></Header>  
     <div className='md:flex container mx-auto'>
        <Blogs 
        handleAddToBookmark ={handleAddToBookmark}
        handleMarkAsRead = {handleMarkAsRead}
        
        ></Blogs>

        <Bookmarks 
          Bookmark = {Bookmark}
          readingTime = {readingTime}
          ></Bookmarks>
     </div>

    </>
  )
}

export default App
