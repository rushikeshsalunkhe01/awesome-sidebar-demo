// Book Data
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction", image: "book1.jpg" },
    { title: "Sapiens", author: "Yuval Noah Harari", category: "non-fiction", image: "book2.jpg" },
    { title: "A Brief History of Time", author: "Stephen Hawking", category: "science", image: "book3.jpg" },
    { title: "The Diary of a Young Girl", author: "Anne Frank", category: "biographies", image: "book4.jpg" },
    { title: "Murder on the Orient Express", author: "Agatha Christie", category: "mystery", image: "book5.jpg" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", category: "fantasy", image: "book6.jpg" }
];

// Elements
const booksGrid = document.getElementById("books-grid");
const categoryList = document.getElementById("category-list");
const searchBar = document.getElementById("search-bar");

// Function to display books
function displayBooks(filter = "all", searchQuery = "") {
    booksGrid.innerHTML = "";

    // Filter and search logic
    const filteredBooks = books.filter((book) => {
        const matchesCategory = filter === "all" || book.category === filter;
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Display filtered books
    if (filteredBooks.length === 0) {
        booksGrid.innerHTML = "<p>No books found.</p>";
        return;
    }

    filteredBooks.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";

        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
        `;

        booksGrid.appendChild(bookCard);
    });
}

// Event Listener: Category Filter
categoryList.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        const category = e.target.dataset.category;
        displayBooks(category);
    }
});

// Event Listener: Search Bar
searchBar.addEventListener("input", (e) => {
    const searchQuery = e.target.value;
    displayBooks("all", searchQuery);
});

// Load all books initially
displayBooks();
