/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Wish from "../Wishlist/Wish";
import Read from "../Read/Read";

const ListedBooks = () => {
  const [bookData, setBookData] = useState([]);
  const [readData, setReadData] = useState([]);

  useEffect(() => {
    const getReadDefaultData =
      JSON.parse(localStorage.getItem("readBooks")) || [];

    setReadData(getReadDefaultData);
  }, []);

  useEffect(() => {
    const getDefaultData = JSON.parse(localStorage.getItem("books")) || [];
    setBookData(getDefaultData);
  }, []);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <div className="bg-[#1313130C] p-10 my-8 rounded-2xl text-center">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>
      <div className="text-center mb-14">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white">
            Sort By{" "}
            <span>
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel>
          {readData.map((item) => (
            <Read key={item.id} item={item}></Read>
          ))}
        </TabPanel>

        <TabPanel>
          {bookData.map((book) => (
            <Wish book={book}></Wish>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
