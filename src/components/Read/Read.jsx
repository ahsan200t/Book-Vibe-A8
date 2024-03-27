/* eslint-disable react/prop-types */
const Read = ({item}) => {
    const {
        image,
        bookName,
        author,
        tags,
        yearOfPublishing,
        category,
        rating
      } = item;
    return (
        <div>
            <div className="p-6 md:flex gap-4 card-side bg-base-100 border mb-4 md:p-4">
        <figure className="bg-[#F3F3F3] p-6 w-[210px] rounded-2xl">
          <img src={image} alt="book image" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p>By: {author}</p>
          <div className="md:flex gap-6">
            <div className="flex gap-4">
              <h1 className="font-bold">Tag</h1>
              <p className="flex gap-4 text-[#23BE0A]">
                {
                    tags.map((tag, index)=><p key={tag.index}>#{tag}</p>)
                }
              </p>
              
            </div>
            
            <div className="flex gap-2">
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
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </p>
              <h1><span>Year of Publishing: </span>{yearOfPublishing}</h1>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex justify-center items-center gap-3">
            <p className="bg-[#328EFF26] p-3 text-center rounded-full text-[#328EFF]">Category: {category}</p>
            <p className="bg-[#FFAC3326] p-3 rounded-full text-center text-[#FFAC33]">Rating: {rating}</p>
            <button className="btn bg-[#23BE0A] rounded-full text-white">View Details</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Read;