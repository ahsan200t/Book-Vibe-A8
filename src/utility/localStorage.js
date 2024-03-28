export const saveDataToLocalStorage = (book) => {
    const storedData = JSON.parse(localStorage.getItem("books")) || [];

    const dataStored = storedData.find((item) => item.id == book.id);

    if (dataStored) {
        alert('data already ache boss')
    }else {
        storedData.push(book);
        localStorage.setItem("books", JSON.stringify(storedData));
    }
}
export const saveReadDataToLocalStorage = (book) => {
    const storedReadData = JSON.parse(localStorage.getItem("readBooks")) || [];

    const readDataStored = storedReadData.find((item) => item.id == book.id);

    if (readDataStored) {
        alert('Already Ache Boss')
    } else {
        storedReadData.push(book);
        localStorage.setItem("readBooks", JSON.stringify(storedReadData));

    }
}
