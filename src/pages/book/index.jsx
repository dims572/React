import { useState } from 'react';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import books from '../../utils/books';

export default function Book() {
    const [bookList, setBookList] = useState(books);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('title');
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

    // Filter books based on search term
    const filteredBooks = bookList.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort books
    const sortedBooks = [...filteredBooks].sort((a, b) => {
        if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortBy === 'author') {
            return a.author.localeCompare(b.author);
        } else if (sortBy === 'year') {
            return b.year - a.year; // Newest first
        }
        return 0;
    });

    return (
        <>
            <Header />
            
            <div className="container py-5">
                <h1 className="text-center mb-5">Katalog Buku</h1>
                
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Cari buku berdasarkan judul atau penulis..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-primary" type="button">Cari</button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <select 
                            className="form-select" 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="title">Urutkan: Judul</option>
                            <option value="author">Urutkan: Penulis</option>
                            <option value="year">Urutkan: Tahun Terbaru</option>
                        </select>
                    </div>
                    <div className="col-md-3 text-end">
                        <button 
                            className="btn btn-success w-100" 
                            onClick={() => setIsFormVisible(!isFormVisible)}
                        >
                            {isFormVisible ? 'Tutup Form' : 'Tambah Buku Baru'}
                        </button>
                    </div>
                </div>

                {isFormVisible && (
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <h4 className="mb-0">Tambah Buku Baru</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
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
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="description" className="form-label">Deskripsi</label>
                                                    <textarea 
                                                        className="form-control" 
                                                        id="description" 
                                                        name="description"
                                                        rows="4"
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
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Simpan Buku</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {sortedBooks.map((book) => (
                        <div className="col" key={book.id}>
                            <div className="card h-100">
                                <img 
                                    src={book.image} 
                                    className="card-img-top" 
                                    alt={`Cover buku ${book.title}`}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Oleh: {book.author} ({book.year})</h6>
                                    <p className="card-text">{book.description}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between align-items-center">
                                    <span className="fw-bold">{book.price}</span>
                                    <div className="btn-group">
                                        <button className="btn btn-outline-secondary btn-sm">Detail</button>
                                        <button className="btn btn-primary btn-sm">Tambah ke Keranjang</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {sortedBooks.length === 0 && (
                    <div className="text-center mt-5">
                        <h3>Tidak ada buku yang sesuai dengan pencarian.</h3>
                        <p>Coba ubah kata kunci pencarian atau menambahkan buku baru.</p>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
}