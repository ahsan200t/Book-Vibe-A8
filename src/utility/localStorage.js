import { toast } from "react-toastify";

export const saveDataToLocalStorage = (book) => {
    const storedData = JSON.parse(localStorage.getItem("books")) || [];

    const dataStored = storedData.find((item) => item.id == book.id);

    if (!dataStored) {
        storedData.push(book);
        localStorage.setItem("books", JSON.stringify(storedData)); 
        toast.success('You Have Successfully Added')
    }else{
        toast.warn("Already Added")
    }
}
export const saveReadDataToLocalStorage = (book) => {
    const storedReadData = JSON.parse(localStorage.getItem("readBooks")) || [];

    const readDataStored = storedReadData.find((item) => item.id == book.id);

    if (!readDataStored) {
        storedReadData.push(book);
        localStorage.setItem("readBooks", JSON.stringify(storedReadData));
        toast.success("You Have Successfully Added")
    }else{
        toast.warn("Already Added")
    } 
}
