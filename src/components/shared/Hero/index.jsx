import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img 
            src="https://picsum.photos/id/42/600/400" 
            className="d-block mx-lg-auto img-fluid rounded shadow" 
            alt="Hero Image" 
            width="700" 
            height="500" 
            loading="lazy" 
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Temukan Buku Pilihan untuk Menemani Harianmu
          </h1>
          <p className="lead">
            Cari inspirasi, pengetahuan, dan hiburan melalui koleksi buku-buku terbaik kami. 
            Dari buku pengembangan diri hingga teknologi terkini, semua tersedia dengan harga terjangkau.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to="/book" className="btn btn-primary btn-lg px-4 me-md-2">Jelajahi Katalog</Link>
            <Link to="/register" className="btn btn-outline-secondary btn-lg px-4">Daftar Sekarang</Link>
          </div>
        </div>
      </div>
    </div>
  );
}