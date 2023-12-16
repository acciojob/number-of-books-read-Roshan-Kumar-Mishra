function numberOfBooksRead(library) {
  // Ensure the library is defined and is an array
  if (!Array.isArray(library)) {
    console.error("Invalid library format. Please provide an array of book objects.");
    return 0;
  }

  // Count the number of books marked as read
  const readBooks = library.filter(book => book.readingStatus === true);

  return readBooks.length;
}



