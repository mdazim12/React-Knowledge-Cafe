import profile from '../../images/profile.png'


const Header = () => {
    return (
        <div className="container mx-auto p-2 flex justify-between items-center border-b-2">
            <h2 className="text-3xl text-black font-bold">Knowledge Cafe</h2>
            <img src={profile} alt="" />

        </div>
    );
};

export default Header;