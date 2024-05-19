import React from 'react';

function Worklist() {
  //const history = useHistory(); // Inisialisasi useHistory untuk navigasi

  // Fungsi untuk menambahkan list kegiatan yang baru
  const addWork = () => {
    //history.push('/add'); // Navigasi ke halaman 'add' saat tombol 'Add work' ditekan
  };

  // Fungsi untuk menghapus list kegiatan
  const deleteWork = () => {
    //history.push('/delete'); // Navigasi ke halaman 'delete' saat tombol 'Delete work' ditekan
  };

  // Fungsi untuk mengedit list kegiatan
  const editWork = () => {
    //history.push('/edit'); // Navigasi ke halaman 'edit' saat tombol 'Edit work' ditekan
  };

  return (
    <div>
      <h1 className='text-blue-900 text-3xl font-bold py-5'>Welcome! Is there anything you want to do today?</h1>
      <button className="bg-purple-700 hover:bg-purple-600 rounded-lg px-2 py-1 text-white mr-4" onClick={addWork}>Add work</button>
      <p className='py-1'></p>
      <button className="bg-purple-700 hover:bg-purple-600 rounded-lg px-2 py-1 text-white mr-4" onClick={deleteWork}>Delete work</button>
      <p className='py-1'></p>
      <button className="bg-purple-700 hover:bg-purple-600 rounded-lg px-2 py-1 text-white mr-4" onClick={editWork}>Edit work</button>
    </div>
  );
}

export default Worklist;
