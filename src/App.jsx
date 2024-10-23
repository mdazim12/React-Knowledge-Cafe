
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


  const handleMarkAsRead = time =>{
    setReadingTime(readingTime + time)
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
