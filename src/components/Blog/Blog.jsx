import PropTypes from 'prop-types'; 


const Blog = ({ blog }) => {

    const {title,cover_img,author,author_img,reading_time,post_time,hashtag} = blog;


    return (
        <div>
            <img src={cover_img}  />
            <h2 className='text-4xl'>{title}</h2>

            <p>
                {
                    hashtag.map((hash, idx) => <span key = {idx}><a href="">{hash}</a></span>)
                }
           </p>

        <div className='flex justify-between'>
           <div className='flex gap-4'>
                 <img className='w-14 rounded-full' src={author_img} alt="" />

                 <div>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{post_time}</p>
                 </div>
           </div>

           <div>
                <span>{reading_time} min read</span>
           </div>
          

        </div>

        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired
}

export default Blog;