import PropTypes from "prop-types";

const ReadBook = ({Bookmark}) => {
    const {title} = Bookmark;
    console.log(Bookmark)
    return (
        <div className="bg-slate-200 rounded-xl p-4 m-4">
            <h1 className="text-xl">{title}</h1>
           
        </div>
    );
};

ReadBook.propTypes = {
    Bookmark: PropTypes.object,
}

export default ReadBook;