class Library {
    #books = [];

    //конструктор
    constructor(listOfBooks) {
        try {
            if (listOfBooks.length === 0) {
                throw new Error('Вы не передали книги в библиотеку!');
            } else {
                listOfBooks.forEach(book => {
                    if (this.#books.includes(book)) {
                        throw new Error(`В списке книг есть дубликаты: "${book}"!`);
                    } else {
                        this.#books.push(book);
                        return this.#books;
                    }
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    //возвращает текущий список книг
    get allBooks() {
        return this.#books;
    }

    //добавления книги
    addBook(title) {
        try {
            if (this.#books.includes(title)) {
                throw new Error(`Книга с названием "${title}" уже существует в списке!`);
            } else {
                this.#books.push(title);
                return this.#books;
            }
        } catch (error) {
            console.error(error);
        }
    }

    //удаления книги
    removeBook(title) {
        try {
            if (this.#books.includes(title)) {
                this.#books = this.#books.filter(bookTitle => bookTitle !== title);
                console.log(`Обновленный список книг: ${this.#books}`);
                return this.#books;
            } else {
                throw new Error(`Книги с названием "${title}" нет в списке!`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    //проверка наличия книги в библиотеке
    hasBook(title) {
        if (this.#books.includes(title)) {
            return true;
        } else {
            return false;
        }
    }
}
const library = new Library(["Ночь", "Три поросенка","Три медведя"]);
console.log(library.allBooks);