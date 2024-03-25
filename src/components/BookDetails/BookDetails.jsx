import { useLoaderData, useParams } from "react-router-dom";
import { saveItems } from "../../utility/localStirage";

const BookDetails = () => {
    const handleWishList=()=>{
        saveItems(book);
    }
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.id == id);

  return (
    <div className="grid grid-cols-2 gap-8 my-10">
     
        <div className="bg-[#1313130D] p-16 rounded-2xl">
           <img className="w-full" src={book.image} alt="Album" /> 
        </div>
       <div>
       <div className="">
          <h2 className="text-4xl font-bold">{book.bookName}</h2>
          <p className="text-xl font-medium mt-3">By: {book.author}</p>
          <div className="divider"></div>
          <p className="text-[#131313CC] text-xl font-medium">{book.category}</p>
          <div className="divider"></div>
          <div>
            <p className="mb-6"><span className="font-bold">Review: </span>{book.review}</p>
          </div>
          <div className="flex gap-5">
            <h1 className="font-bold">Tag</h1>
            <div className="flex gap-6 text-[#23BE0A]">
              {book.tags.map((tag, idx) => (
                <p key={tag.idx}>#{tag}</p>
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <div className="">
            <table className="">
              <tr>
                <td className="pr-10 pb-4">Number of Pages: </td>
                <td className="font-semibold">{book.totalPages}</td>
              </tr>
              <tr>
                <td className="pb-4">Publisher: </td>
                <td className="font-semibold">{book.publisher}</td>
              </tr>
              <tr>
                <td className="pb-4">Year of Publishing: </td>
                <td className="font-semibold">{book.yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating: </td>
                <td className="font-semibold">{book.rating}</td>
              </tr>
            </table>
            <div className="mt-5">
              <button className="btn mr-4">Read</button>
              <button onClick={handleWishList} className="btn bg-[#50B1C9] text-white">Wishlist</button>
            </div>
          </div>
        </div>
        <div></div>
       </div>
      </div>
    
  );
};

export default BookDetails;
