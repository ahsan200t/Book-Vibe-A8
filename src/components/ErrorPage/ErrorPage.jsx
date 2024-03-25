import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[100vh] text-4xl font-bold ">
            <h1 className="text-orange-600">Opps!!</h1>
            <Link to='/' className=" text-green-600 text-4xl font-bold underline">Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;