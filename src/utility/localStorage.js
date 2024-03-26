export const saveDataToLocalStorage = (book) => {
    const storedData = JSON.parse(localStorage.getItem("books")) || [];

    const dataStored = storedData.find((item) => item.id == book.id);
    if (dataStored) {
        alert('data already ache boss')
    } else {
        storedData.push(book);
        localStorage.setItem('books', JSON.stringify(storedData));

    }
}

