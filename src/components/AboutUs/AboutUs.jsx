import { FaFacebook, FaInstagram, FaGithub} from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="bg-gray-100 p-10 rounded-2xl">
         <div className="space-y-2">
         <h1 className="text-4xl font-bold text-center">Welcome to <span className="text-[#0088FE]">Book Corner!</span></h1> 
          <p className="text-[#131313CC]">We are passionate about books and the magic they bring into our lives. Nestled in the heart of Pekua/Cox,s Bazar, our cozy bookstore has been a beloved destination for book lovers since 2015. With shelves filled with treasures waiting to be discovered and a welcoming atmosphere that invites you to stay awhile, we strive to create a haven for bibliophiles of all ages</p> 
         </div>
         <div>
            <h1 className="text-4xl font-bold text-center mt-6">Our Mission</h1>
            <p className="text-[#131313CC]"> we believe in the power of stories to inspire, educate, and connect us all. Our mission is to foster a love of reading by curating a diverse selection of books that reflect the rich tapestry of human experience.</p>
         </div>
         <p className="text-xl font-medium mt-3">Thank you for supporting independent book selling, and we look forward to welcoming you soon!</p>
            <div className="mt-10 bg-gray-300 text-center p-4 rounded-3xl w-1/2 mx-auto">
                <p className="text-2xl font-semibold">Know More:</p>
                <p className="text-xl font-medium">Please contact Us...</p>
                <p><span className="text-xl font-semibold">Phone:</span> 0125485745</p>
                <p><span className="text-xl font-semibold">Email:</span> abc@gmail.com</p>
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-center mt-3">Social Media Links</h1>
               <div className="flex gap-4 text-4xl justify-center items-center mt-3 text-blue-gray-900">
                 <FaFacebook />
                <FaInstagram />
                <FaGithub />
                
                </div>
            </div>
        </div>
    );
};

export default AboutUs;