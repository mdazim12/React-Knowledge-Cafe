import PropTypes from "prop-types";
import ReadBook from "../ReadBook/ReadBook";


const Bookmarks = ({Bookmark}) => {
    console.log(typeof Bookmark);
    return (
        <div className="md:w-1/3">
            <h2>This is book marks Area = {Bookmark.length}</h2>
            {/* <ReadBook Bookmark = {Bookmark}></ReadBook> */}

            {
                Bookmark.map(bookmark => <ReadBook key={bookmark.id} Bookmark = {bookmark}></ReadBook>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    Bookmark: PropTypes.array.isRequired
}

export default Bookmarks;