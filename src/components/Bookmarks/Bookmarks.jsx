import PropTypes from "prop-types";
import ReadBook from "../ReadBook/ReadBook";


const Bookmarks = ({Bookmark, readingTime}) => {
    console.log(typeof Bookmark);
    return (
        <div className="md:w-1/3">
            <div>
                <h4 className="text-2xl">Reading Time : {readingTime}</h4>
            </div>

            <h2>This is book marks Area = {Bookmark.length}</h2>
            

            {
                Bookmark.map(bookmark => <ReadBook key={bookmark.id} Bookmark = {bookmark}></ReadBook>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    Bookmark: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;