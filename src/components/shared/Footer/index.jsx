import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-5 bg-light mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>BookStore</h5>
            <p className="text-muted">
              Toko buku online terlengkap dengan koleksi buku berkualitas untuk menambah wawasan dan pengetahuan Anda.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Navigasi</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
              <li className="nav-item mb-2"><Link to="/book" className="nav-link p-0 text-muted">Katalog Buku</Link></li>
              <li className="nav-item mb-2"><Link to="/team" className="nav-link p-0 text-muted">Tim Kami</Link></li>
              <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-muted">Kontak</Link></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h5>Kategori</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pemrograman</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Desain</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Bisnis</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pendidikan</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Fiksi</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Hubungi Kami</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><span className="text-muted">Email: info@bookstore.com</span></li>
              <li className="nav-item mb-2"><span className="text-muted">Telepon: +62 21 1234 5678</span></li>
              <li className="nav-item mb-2"><span className="text-muted">Alamat: Jl. Buku No. 123, Jakarta</span></li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>© 2025 BookStore, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-twitter"></i></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-instagram"></i></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-facebook"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}