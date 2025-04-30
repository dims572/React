import { useState } from 'react';
import books from '../../../utils/books';

export default function ProductList() {
    const [bookList, setBookList] = useState(books);
    const [newBook, setNewBook] = useState({
        id: books.length + 1,
        title: '',
        author: '',
        year: new Date().getFullYear(),
        description: '',
        image: 'https://picsum.photos/id/30/400/225',
        price: ''
    });
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form
        if (!newBook.title || !newBook.author || !newBook.description || !newBook.price) {
            alert('Semua field harus diisi!');
            return;
        }

        // Add new book
        const updatedBooks = [...bookList, { ...newBook, id: bookList.length + 1 }];
        setBookList(updatedBooks);
        
        // Reset form
        setNewBook({
            id: updatedBooks.length + 1,
            title: '',
            author: '',
            year: new Date().getFullYear(),
            description: '',
            image: 'https://picsum.photos/id/30/400/225',
            price: ''
        });
        
        // Hide form
        setIsFormVisible(false);
    };

    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Buku Terlaris Bulan Ini</h1>
                        <p className="lead text-body-secondary">Temukan koleksi buku terbaik yang telah menginspirasi ribuan pembaca. Dari pengembangan diri hingga fiksi terbaik, semua tersedia di BookStore.</p>
                        <p>
                            <a href="#" className="btn btn-primary my-2 m-2">Lihat Semua</a>
                            <a href="#" className="btn btn-secondary my-2">Rekomendasi Khusus</a>
                        </p>
                        <button 
                            className="btn btn-success my-3" 
                            onClick={() => setIsFormVisible(!isFormVisible)}
                        >
                            {isFormVisible ? 'Tutup Form' : 'Tambah Buku Baru'}
                        </button>
                    </div>
                </div>
            </section>

            {isFormVisible && (
                <div className="container mb-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <h4 className="mb-0">Tambah Buku Baru</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Judul Buku</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="title" 
                                                name="title" 
                                                value={newBook.title}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="author" className="form-label">Penulis</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="author" 
                                                name="author"
                                                value={newBook.author}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="year" className="form-label">Tahun Terbit</label>
                                            <input 
                                                type="number" 
                                                className="form-control" 
                                                id="year" 
                                                name="year"
                                                value={newBook.year}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Deskripsi</label>
                                            <textarea 
                                                className="form-control" 
                                                id="description" 
                                                name="description"
                                                value={newBook.description}
                                                onChange={handleInputChange}
                                            ></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="price" className="form-label">Harga</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="price" 
                                                name="price"
                                                placeholder="Contoh: Rp 150.000"
                                                value={newBook.price}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Simpan</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {bookList.map((book) => (
                            <div className="col" key={book.id}>
                                <div className="card shadow-sm">
                                    <img 
                                        src={book.image} 
                                        className="bd-placeholder-img card-img-top" 
                                        width="100%" 
                                        height="225" 
                                        alt={`Cover buku ${book.title}`}
                                    />
                                    <div className="card-body">
                                        <h5>{book.title}</h5>
                                        <p className="card-text">{book.description}</p>
                                        <p className="text-muted mb-0">Penulis: {book.author}</p>
                                        <p className="text-muted">Tahun: {book.year}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                                                <button type="button" className="btn btn-sm btn-primary">Beli</button>
                                            </div>
                                            <small className="text-body-secondary">{book.price}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}