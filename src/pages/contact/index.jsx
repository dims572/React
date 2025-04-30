import React from 'react';
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row align-items-md-stretch">
          <div className="col-md-6 mb-4">
            <div className="h-100 p-5 bg-body-tertiary rounded-3">
              <h2>Hubungi Kami</h2>
              <p className="lead">Punya pertanyaan? Kami siap membantu! Silakan kirim pesan kepada kami dan tim kami akan segera menghubungi Anda.</p>
              <p><i className="fa-solid fa-location-dot me-2"></i> Jl. Buku Indah No. 123, Jakarta Selatan</p>
              <p><i className="fa-solid fa-phone me-2"></i> +62 21 5678 9000</p>
              <p><i className="fa-solid fa-envelope me-2"></i> info@bookstore.id</p>
              <div className="mt-4">
                <h5>Ikuti Kami</h5>
                <div className="d-flex mt-3">
                  <a href="#" className="text-decoration-none me-3"><i className="fa-brands fa-facebook fa-2x"></i></a>
                  <a href="#" className="text-decoration-none me-3"><i className="fa-brands fa-twitter fa-2x"></i></a>
                  <a href="#" className="text-decoration-none me-3"><i className="fa-brands fa-instagram fa-2x"></i></a>
                  <a href="#" className="text-decoration-none me-3"><i className="fa-brands fa-youtube fa-2x"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-secondary border rounded-3">
              <h2>Kirim Pesan</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nama Lengkap</label>
                  <input type="text" className="form-control" id="name" placeholder="Masukkan nama lengkap" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Masukkan email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subjek</label>
                  <input type="text" className="form-control" id="subject" placeholder="Masukkan subjek pesan" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Pesan</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Tulis pesan Anda di sini"></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Kirim Pesan</button>
              </form>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h3 className="text-center mb-4">Jam Operasional</h3>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="table-primary">
                  <th>Hari</th>
                  <th>Jam Buka</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Senin - Jumat</td>
                  <td>09:00 - 21:00 WIB</td>
                </tr>
                <tr>
                  <td>Sabtu</td>
                  <td>10:00 - 22:00 WIB</td>
                </tr>
                <tr>
                  <td>Minggu</td>
                  <td>10:00 - 20:00 WIB</td>
                </tr>
                <tr>
                  <td>Hari Libur Nasional</td>
                  <td>12:00 - 18:00 WIB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}