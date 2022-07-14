

export interface BooksResponse {
    books: Book[];
}

export interface Book {
    ISBN: number,
    title: string,
    author: string,
    summary: string,
    image: string,
    price: Price
}

export interface Price {
    currency: string,
    value: number,
    displayValue: string,
}