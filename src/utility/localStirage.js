export const saveItems = (data) => {
    console.log(data)
   const storedData=localStorage.getItem('wishlist');
   if(storedData){
    return JSON.parse(storedData);
   }else{
    return [];
   }

}

const saveData=id=>{
    const saveStoredData=saveItems();
    const exist= saveStoredData.find(bookId=>bookId==id);
    if(!exist){
        saveStoredData.push(id);
        localStorage.setItem('wishlist', JSON.stringify(saveStoredData))
    }
}

