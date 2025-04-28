export default function Hero() {
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
        </>
    )
}