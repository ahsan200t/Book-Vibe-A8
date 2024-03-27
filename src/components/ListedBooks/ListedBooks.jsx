/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Wish from '../Wishlist/Wish'
import Read from "../Read/Read";



const ListedBooks = () => {
  const [bookData, setBookData] = useState([]);
  const [readBooks, setReadBooks]=useState([])
  useEffect(() => {
    const getDefaultData = JSON.parse(localStorage.getItem("books")) || [];
    setBookData(getDefaultData);
    setReadBooks(getDefaultData);
  }, []);
  const [tabIndex, setTabIndex] = useState(0);
 
  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel>

          {
            readBooks.map(item=><Read item={item}></Read>)
          }  
        
        </TabPanel>

        <TabPanel>
          {
            bookData.map(book=><Wish book={book}></Wish>)
          }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
