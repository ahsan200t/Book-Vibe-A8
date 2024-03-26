import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Wish from '../Wishlist/Wish';

const ListedBooks = () => {

    const [bookData, setBookData] = useState([]);
    useEffect(() => {
      const getDefaultData = JSON.parse(localStorage.getItem("books")) || [];
      setBookData(getDefaultData);
    }, []);

    const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
     <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Read</Tab>
        <Tab>Wishlist</Tab>
      </TabList>
      <TabPanel>

      </TabPanel>
      <TabPanel>
        {
           bookData.map(book=><Wish key={book.id} book={book}></Wish>)
        }
        </TabPanel>
    </Tabs>
        
      </div>
    
  );
};

export default ListedBooks;
