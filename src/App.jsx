import React from 'react';

function App() {
  // State untuk mengelola tampilan halaman
  const [currentPage, setCurrentPage] = React.useState('home');
  
  // Fungsi untuk mengubah halaman saat menu diklik
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Render konten berdasarkan halaman yang dipilih
  const renderContent = () => {
    switch(currentPage) {
      case 'home':
        return renderHomePage();
      case 'book':
        return renderBookPage();
      case 'team':
        return renderTeamPage();
      case 'contact':
        return renderContactPage();
      default:
        return renderHomePage();
    }
  };

  // Halaman Home
  const renderHomePage = () => {
    return (
      <>
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Atomic Habits: Perubahan Kecil, Hasil Luar Biasa</h1>
              <p className="lead">Buku bestseller karya James Clear yang mengajarkan cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Beli Sekarang</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Lihat Detail</button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img className="rounded-lg-3" src="https://picsum.photos/id/24/720/600" alt="Cover buku Atomic Habits" width="720" />
            </div>
          </div>
        </div>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Buku Terlaris Bulan Ini</h1>
              <p className="lead text-body-secondary">Temukan koleksi buku terbaik yang telah menginspirasi ribuan pembaca. Dari pengembangan diri hingga fiksi terbaik, semua tersedia di BookStore.</p>
              <p>
                <a href="#" className="btn btn-primary my-2 m-2">Lihat Semua</a>
                <a href="#" className="btn btn-secondary my-2">Rekomendasi Khusus</a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://picsum.photos/id/100/400/225" className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Book cover"/>
                  <div className="card-body">
                    <h5>The Psychology of Money</h5>
                    <p className="card-text">Buku tentang bagaimana kita berpikir tentang uang dan bagaimana pemikiran kita mempengaruhi pengambilan keputusan finansial.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                        <button type="button" className="btn btn-sm btn-primary">Beli</button>
                      </div>
                      <small className="text-body-secondary">Rp 159.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://picsum.photos/id/20/400/225" className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Book cover"/>
                  <div className="card-body">
                    <h5>Deep Work</h5>
                    <p className="card-text">Menjelajahi konsep kerja dalam dan bagaimana fokus intensif dapat menghasilkan produktivitas maksimal.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                        <button type="button" className="btn btn-sm btn-primary">Beli</button>
                      </div>
                      <small className="text-body-secondary">Rp 145.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://picsum.photos/id/180/400/225" className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Book cover"/>
                  <div className="card-body">
                    <h5>Sapiens</h5>
                    <p className="card-text">Sebuah sejarah singkat tentang umat manusia, menyoroti perkembangan peradaban dan budaya manusia.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                        <button type="button" className="btn btn-sm btn-primary">Beli</button>
                      </div>
                      <small className="text-body-secondary">Rp 189.000</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://picsum.photos/id/167/400/225" className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Book cover"/>
                  <div className="card-body">
                    <h5>The Power of Habit</h5>
                    <p className="card-text">Menjelaskan mengapa kebiasaan ada, bagaimana cara kerjanya dan bagaimana mengubahnya.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                        <button type="button" className="btn btn-sm btn-primary">Beli</button>
                      </div>
                      <small className="text-body-secondary">Rp 155.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://picsum.photos/id/24/400/225" className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Book cover"/>
                  <div className="card-body">
                    <h5>Think Again</h5>
                    <p className="card-text">Tentang kekuatan untuk mengetahui apa yang tidak kita ketahui dan bagaimana meragukan pengetahuan kita.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                        <button type="button" className="btn btn-sm btn-primary">Beli</button>
                      </div>
                      <small className="text-body-secondary">Rp 149.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://picsum.photos/id/76/400/225" className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Book cover"/>
                  <div className="card-body">
                    <h5>Educated</h5>
                    <p className="card-text">Memoir tentang perjuangan untuk mengeksplorasi pendidikan dan pengertian akan diri sendiri.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                        <button type="button" className="btn btn-sm btn-primary">Beli</button>
                      </div>
                      <small className="text-body-secondary">Rp 172.000</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // Halaman Book (menggunakan layout yang sama dengan home)
  const renderBookPage = () => {
    return (
      <div className="container my-5">
        <h2 className="text-center mb-5">Koleksi Buku</h2>
        <p className="text-center mb-4">Halaman ini sedang dalam pengembangan. Silahkan kembali ke halaman utama.</p>
        <div className="text-center">
          <button onClick={() => handlePageChange('home')} className="btn btn-primary">Kembali ke Home</button>
        </div>
      </div>
    );
  };

  // Halaman Team
  const renderTeamPage = () => {
    return (
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
    );
  };

  // Halaman Contact
  const renderContactPage = () => {
    return (
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
    );
  };

  return (
    <>
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
          <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
          <span className="ms-2 fs-4">BookStore</span>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" 
                 className={`nav-link px-3 ${currentPage === 'home' ? 'fw-bold text-primary' : ''}`} 
                 onClick={() => handlePageChange('home')}>Home</a></li>
          <li><a href="#" 
                 className={`nav-link px-3 ${currentPage === 'book' ? 'fw-bold text-primary' : ''}`} 
                 onClick={() => handlePageChange('book')}>Book</a></li>
          <li><a href="#" 
                 className={`nav-link px-3 ${currentPage === 'team' ? 'fw-bold text-primary' : ''}`} 
                 onClick={() => handlePageChange('team')}>Team</a></li>
          <li><a href="#" 
                 className={`nav-link px-3 ${currentPage === 'contact' ? 'fw-bold text-primary' : ''}`} 
                 onClick={() => handlePageChange('contact')}>Contact</a></li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Register</button>
        </div>
      </header>
      
      {/* Render konten berdasarkan halaman yang aktif */}
      {renderContent()}
      
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" onClick={() => handlePageChange('home')}>Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQ</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Privacy Policy</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Terms</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" onClick={() => handlePageChange('contact')}>Contact</a></li>
        </ul>
        <p className="text-center text-body-secondary">&copy; 2025 BookStore - Menyebarkan Pengetahuan ke Seluruh Indonesia</p>
      </footer>
    </div>
    </>
  )
}

export default App