import React from 'react';
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

export default function Team() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Tim Kami</h2>
        <p className="text-center mb-5 lead">Kenali individu berbakat di balik BookStore yang berdedikasi untuk membawa literasi ke seluruh Indonesia</p>
        
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i className="fa-solid fa-user-tie"></i>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Andi Wijaya</h3>
              <p className="text-secondary mb-1">Founder & CEO</p>
              <p>Visioner dengan pengalaman 15 tahun di industri penerbitan. Mendirikan BookStore dengan misi menyebarkan pengetahuan berkualitas ke seluruh Indonesia.</p>
              <div className="d-flex mt-3">
                <a href="#" className="text-decoration-none me-2"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="text-decoration-none me-2"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" className="text-decoration-none"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i className="fa-solid fa-palette"></i>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Dewi Lestari</h3>
              <p className="text-secondary mb-1">Creative Director</p>
              <p>Dengan latar belakang di bidang desain dan industri kreatif, Dewi memastikan pengalaman visual dan branding BookStore tetap konsisten dan menarik.</p>
              <div className="d-flex mt-3">
                <a href="#" className="text-decoration-none me-2"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="text-decoration-none me-2"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" className="text-decoration-none"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i className="fa-solid fa-code"></i>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Budi Santoso</h3>
              <p className="text-secondary mb-1">Lead Developer</p>
              <p>Penggemar teknologi dengan keahlian di bidang pengembangan web. Budi memimpin tim teknologi untuk memastikan platform BookStore berjalan tanpa hambatan.</p>
              <div className="d-flex mt-3">
                <a href="#" className="text-decoration-none me-2"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="text-decoration-none me-2"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" className="text-decoration-none"><i className="fa-brands fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i className="fa-solid fa-bullhorn"></i>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Maya Putri</h3>
              <p className="text-secondary mb-1">Marketing Manager</p>
              <p>Strategis dengan keahlian di bidang pemasaran digital. Maya mengembangkan strategi untuk menjangkau lebih banyak pembaca di seluruh Indonesia.</p>
              <div className="d-flex mt-3">
                <a href="#" className="text-decoration-none me-2"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="text-decoration-none me-2"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" className="text-decoration-none"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i className="fa-solid fa-book"></i>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Rini Kusuma</h3>
              <p className="text-secondary mb-1">Content Curator</p>
              <p>Editor berpengalaman yang memiliki keahlian dalam menemukan buku-buku berkualitas. Rini memastikan koleksi BookStore selalu relevan dan bermanfaat.</p>
              <div className="d-flex mt-3">
                <a href="#" className="text-decoration-none me-2"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="text-decoration-none me-2"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" className="text-decoration-none"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i className="fa-solid fa-headset"></i>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Dani Pratama</h3>
              <p className="text-secondary mb-1">Customer Support</p>
              <p>Berdedikasi untuk memberikan pengalaman terbaik kepada pelanggan. Dani memimpin tim yang siap membantu semua pertanyaan dan kebutuhan pembaca.</p>
              <div className="d-flex mt-3">
                <a href="#" className="text-decoration-none me-2"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="text-decoration-none me-2"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" className="text-decoration-none"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}