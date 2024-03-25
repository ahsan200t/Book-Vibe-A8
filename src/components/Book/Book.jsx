/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {id, image, tags, bookName, author, rating, category } = book;
  return (
    <div>
     <Link to={`/book-details/${id}`}>
     <div className="card bg-base-100 shadow-xl">
        <figure className="bg-[#F3F3F3] p-6">
          <img className="w-[110px]" src={image} alt="book image" />
        </figure>
        <div className="card-body">
          <div className="flex gap-4 text-[#23BE0A]">
            {tags.map((tag, idx) => (
              <p key={tag.idx}>#{tag}</p>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By:{author}</p>
          <div className="card-actions flex justify-between items-center">
            <h1>{category}</h1>
            <div className="flex gap-3 items-center">
              <h2>{rating}</h2>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
     </Link>
    </div>
  );
};

export default Book;
