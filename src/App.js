import React, { useState } from 'react';
import PDFForm from './components/PDFForm';
import PDFViewer from './components/PDFDocument';

const App = () => {
  const [data, setData] = useState(null);

  const handleGeneratePDF = (formData) => {
    setData(formData);
  };

  return (
    <div>
      <PDFForm onGeneratePDF={handleGeneratePDF} />
      {data && (
        <div>
          <h2>Visualização do PDF:</h2>
          <PDFViewer text={data.text} image={data.image}/>
        </div>
      )}
    </div>
  );
};

export default App;
