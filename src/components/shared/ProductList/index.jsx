export default function ProductList() {
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
    )
}