/*import React, { useState } from 'react';

function EditWork() {
  const [editedWork, setEditedWork] = useState('');

  const handleChange = (event) => {
    setEditedWork(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Kirim data ke server untuk mengubah kegiatan yang ada
    console.log('Edited work:', editedWork);
    // Reset nilai input setelah dikirim
    setEditedWork('');
  };

  return (
    <div>
      <h1>Edit Work Page</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={editedWork} 
          onChange={handleChange} 
          placeholder="Edit work" 
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default EditWork;*/
