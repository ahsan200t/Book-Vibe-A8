import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[100vh] gap-4 ">
            <h1 className="text-7xl font-black">404</h1>
            <p className="text-2xl font-semibold">Sorry!!!  No Data Found</p>
            <Link to='/' ><button className="btn text-white bg-[#23BE0A]">Back to Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;