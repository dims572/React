import { useState } from 'react';

// Mock data untuk genre dan author
const initialGenres = [
  { id: 1, name: 'Fiction', description: 'Imaginative or invented stories' },
  { id: 2, name: 'Non-Fiction', description: 'Factual and informative content' },
  { id: 3, name: 'Science Fiction', description: 'Futuristic and scientific themes' },
  { id: 4, name: 'Romance', description: 'Love stories and relationships' },
  { id: 5, name: 'Mystery', description: 'Suspenseful and puzzle-solving stories' }
];

const initialAuthors = [
  { id: 1, name: 'Jane Austen', birthYear: 1775, nationality: 'British', biography: 'English novelist known for her wit and social commentary' },
  { id: 2, name: 'George Orwell', birthYear: 1903, nationality: 'British', biography: 'English novelist and critic famous for dystopian fiction' },
  { id: 3, name: 'Agatha Christie', birthYear: 1890, nationality: 'British', biography: 'English writer known for detective novels' },
  { id: 4, name: 'Stephen King', birthYear: 1947, nationality: 'American', biography: 'American author of horror, supernatural fiction, and fantasy' },
  { id: 5, name: 'J.K. Rowling', birthYear: 1965, nationality: 'British', biography: 'British author best known for the Harry Potter series' }
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('genres');
  
  // Genre state
  const [genres, setGenres] = useState(initialGenres);
  const [newGenre, setNewGenre] = useState({ name: '', description: '' });
  const [showGenreForm, setShowGenreForm] = useState(false);
  const [editingGenre, setEditingGenre] = useState(null);
  
  // Author state
  const [authors, setAuthors] = useState(initialAuthors);
  const [newAuthor, setNewAuthor] = useState({ 
    name: '', 
    birthYear: new Date().getFullYear(), 
    nationality: '', 
    biography: '' 
  });
  const [showAuthorForm, setShowAuthorForm] = useState(false);
  const [editingAuthor, setEditingAuthor] = useState(null);

  // Genre handlers
  const handleGenreSubmit = () => {
    if (!newGenre.name || !newGenre.description) {
      alert('Semua field genre harus diisi!');
      return;
    }
    
    if (editingGenre) {
      // Update existing genre
      const updatedGenres = genres.map(genre => 
        genre.id === editingGenre.id 
          ? { ...genre, name: newGenre.name, description: newGenre.description }
          : genre
      );
      setGenres(updatedGenres);
      setEditingGenre(null);
    } else {
      // Add new genre
      const updatedGenres = [...genres, { ...newGenre, id: Date.now() }];
      setGenres(updatedGenres);
    }
    
    setNewGenre({ name: '', description: '' });
    setShowGenreForm(false);
  };

  const handleGenreInputChange = (e) => {
    const { name, value } = e.target;
    setNewGenre({ ...newGenre, [name]: value });
  };

  const handleEditGenre = (genre) => {
    setEditingGenre(genre);
    setNewGenre({ name: genre.name, description: genre.description });
    setShowGenreForm(true);
  };

  const handleDeleteGenre = (genreId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus genre ini?')) {
      const updatedGenres = genres.filter(genre => genre.id !== genreId);
      setGenres(updatedGenres);
    }
  };

  const cancelGenreEdit = () => {
    setEditingGenre(null);
    setNewGenre({ name: '', description: '' });
    setShowGenreForm(false);
  };

  // Author handlers
  const handleAuthorSubmit = () => {
    if (!newAuthor.name || !newAuthor.nationality || !newAuthor.biography) {
      alert('Semua field author harus diisi!');
      return;
    }
    
    if (editingAuthor) {
      // Update existing author
      const updatedAuthors = authors.map(author => 
        author.id === editingAuthor.id 
          ? { ...author, ...newAuthor }
          : author
      );
      setAuthors(updatedAuthors);
      setEditingAuthor(null);
    } else {
      // Add new author
      const updatedAuthors = [...authors, { ...newAuthor, id: Date.now() }];
      setAuthors(updatedAuthors);
    }
    
    setNewAuthor({ name: '', birthYear: new Date().getFullYear(), nationality: '', biography: '' });
    setShowAuthorForm(false);
  };

  const handleAuthorInputChange = (e) => {
    const { name, value } = e.target;
    setNewAuthor({ ...newAuthor, [name]: value });
  };

  const handleEditAuthor = (author) => {
    setEditingAuthor(author);
    setNewAuthor({ 
      name: author.name, 
      birthYear: author.birthYear, 
      nationality: author.nationality, 
      biography: author.biography 
    });
    setShowAuthorForm(true);
  };

  const handleDeleteAuthor = (authorId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus author ini?')) {
      const updatedAuthors = authors.filter(author => author.id !== authorId);
      setAuthors(updatedAuthors);
    }
  };

  const cancelAuthorEdit = () => {
    setEditingAuthor(null);
    setNewAuthor({ name: '', birthYear: new Date().getFullYear(), nationality: '', biography: '' });
    setShowAuthorForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Kelola Genre dan Author</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Admin Panel
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('genres')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'genres'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                📚 Genre Management
              </button>
              <button
                onClick={() => setActiveTab('authors')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'authors'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                ✍️ Author Management
              </button>
            </nav>
          </div>
        </div>

        {/* Genre Management */}
        {activeTab === 'genres' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Manajemen Genre</h2>
              <button
                onClick={() => {
                  if (showGenreForm && editingGenre) {
                    cancelGenreEdit();
                  } else {
                    setShowGenreForm(!showGenreForm);
                  }
                }}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  showGenreForm
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {showGenreForm ? '❌ Tutup Form' : '➕ Tambah Genre'}
              </button>
            </div>

            {/* Genre Form */}
            {showGenreForm && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {editingGenre ? 'Edit Genre' : 'Tambah Genre Baru'}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Genre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newGenre.name}
                      onChange={handleGenreInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan nama genre..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Deskripsi
                    </label>
                    <textarea
                      name="description"
                      value={newGenre.description}
                      onChange={handleGenreInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan deskripsi genre..."
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    {editingGenre && (
                      <button
                        onClick={cancelGenreEdit}
                        className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
                      >
                        ❌ Batal
                      </button>
                    )}
                    <button
                      onClick={handleGenreSubmit}
                      className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                    >
                      💾 {editingGenre ? 'Update Genre' : 'Simpan Genre'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Genre List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Daftar Genre ({genres.length})</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {genres.map((genre) => (
                  <div key={genre.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-gray-900">{genre.name}</h4>
                        <p className="text-gray-600 mt-1">{genre.description}</p>
                        <div className="mt-2 text-sm text-gray-500">ID: {genre.id}</div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button 
                          onClick={() => handleEditGenre(genre)}
                          className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                        >
                          ✏️ Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteGenre(genre.id)}
                          className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                        >
                          🗑️ Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Author Management */}
        {activeTab === 'authors' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Manajemen Author</h2>
              <button
                onClick={() => {
                  if (showAuthorForm && editingAuthor) {
                    cancelAuthorEdit();
                  } else {
                    setShowAuthorForm(!showAuthorForm);
                  }
                }}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  showAuthorForm
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {showAuthorForm ? '❌ Tutup Form' : '➕ Tambah Author'}
              </button>
            </div>

            {/* Author Form */}
            {showAuthorForm && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {editingAuthor ? 'Edit Author' : 'Tambah Author Baru'}
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Author
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={newAuthor.name}
                        onChange={handleAuthorInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Masukkan nama author..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tahun Lahir
                      </label>
                      <input
                        type="number"
                        name="birthYear"
                        value={newAuthor.birthYear}
                        onChange={handleAuthorInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        min="1800"
                        max={new Date().getFullYear()}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kebangsaan
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      value={newAuthor.nationality}
                      onChange={handleAuthorInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan kebangsaan author..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Biografi
                    </label>
                    <textarea
                      name="biography"
                      value={newAuthor.biography}
                      onChange={handleAuthorInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan biografi author..."
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    {editingAuthor && (
                      <button
                        onClick={cancelAuthorEdit}
                        className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
                      >
                        ❌ Batal
                      </button>
                    )}
                    <button
                      onClick={handleAuthorSubmit}
                      className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                    >
                      💾 {editingAuthor ? 'Update Author' : 'Simpan Author'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Author List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Daftar Author ({authors.length})</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {authors.map((author) => (
                  <div key={author.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-medium text-gray-900">{author.name}</h4>
                      <span className="text-sm text-gray-500">ID: {author.id}</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <span className="font-medium">📅 Lahir:</span>
                        <span className="ml-2">{author.birthYear}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">🌍 Kebangsaan:</span>
                        <span className="ml-2">{author.nationality}</span>
                      </div>
                      <div className="mt-3">
                        <span className="font-medium text-gray-700">📝 Biografi:</span>
                        <p className="mt-1 text-gray-600 text-sm leading-relaxed">{author.biography}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4 pt-3 border-t border-gray-200">
                      <button 
                        onClick={() => handleEditAuthor(author)}
                        className="flex-1 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                      >
                        ✏️ Edit
                      </button>
                      <button 
                        onClick={() => handleDeleteAuthor(author.id)}
                        className="flex-1 px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                      >
                        🗑️ Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}