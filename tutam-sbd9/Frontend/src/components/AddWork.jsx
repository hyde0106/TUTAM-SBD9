/*import React, { useState } from 'react';

function AddWork() {
  const [newWork, setNewWork] = useState('');

  const handleChange = (event) => {
    setNewWork(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Kirim data ke server untuk menambahkan kegiatan baru
    console.log('New work:', newWork);
    // Reset nilai input setelah dikirim
    setNewWork('');
  };

  return (
    <div>
      <h1>Add Work Page</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newWork} 
          onChange={handleChange} 
          placeholder="Enter new work" 
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddWork;*/
