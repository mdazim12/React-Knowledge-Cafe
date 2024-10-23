import PropTypes from 'prop-types'; 
import { IoBookmarksOutline } from "react-icons/io5";




const Blog = ({ blog ,handleAddToBookmark }) => {

    const {id,title,cover_img,author,author_img,reading_time,post_time,hashtag} = blog;


    return (
        <div className='mb-15'> 
            <img className='w-full' src={cover_img}  />
            <h2 className='text-4xl py-4'>{title}</h2>

            <p>
                {
                    hashtag.map((hash, idx) => <span key = {idx}><a href="">{hash}</a></span>)
                }
           </p>

            <div className='flex justify-between py-4'>
            <div className='flex gap-4 py-4'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />

                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{post_time}</p>
                    </div>
            </div>

            <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(id)} className='inline-block ml-2 text-xl'> <IoBookmarksOutline /></button>
            </div>
            

            </div>

        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired
}

export default Blog;