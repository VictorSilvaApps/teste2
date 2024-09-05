import React, { useState } from 'react';
import Form from './components/PDFForm';
import PDFDocument from './/components/PDFDocument';
import { PDFDownloadLink } from '@react-pdf/renderer';

const App = () => {
  const [data, setData] = useState(null);

  const handleGeneratePDF = (formData) => {
    setData(formData);
  };

  return (
    <div>
      <Form onGeneratePDF={handleGeneratePDF} />
      {data && (
        <div>
          <h2>Visualização do PDF:</h2>
          <PDFDownloadLink
            document={<PDFDocument text={data.text} image={data.image[0]} />}
            fileName="document.pdf"
          >
            {({ loading }) =>
              loading ? 'Gerando PDF...' : 'Baixar PDF'
            }
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
};

export default App;