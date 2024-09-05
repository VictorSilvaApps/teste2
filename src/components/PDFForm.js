import React, { useState } from 'react';

const PDFForm = ({ onGeneratePDF }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => setText(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGeneratePDF(text, image);
  };

  return (
    <form onSubmit={handleSubmit}>
    
            <div>
        <label>Texto:</label>
        <textarea value={text} onChange={handleTextChange} />
      </div>
      <div>
        <label>Imagm:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <button type="submit" >Gerar PDF</button>
    </form>
  );
};

export default PDFForm;