import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner book.png'
const Banner = () => {
    return (
        <div className='m-5 space-y-4 text-center md:flex items-center justify-between my-14 bg-[#1313130D] p-20 rounded-3xl '>
            <div>
                <h1 className='text-3xl md:text-5xl font-bold mb-12'>Books to freshen <br /> up your bookshelf</h1>
               <Link to='/listed books'>
               <button className="btn bg-[#23BE0A] text-white">View The List</button>
               </Link>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;