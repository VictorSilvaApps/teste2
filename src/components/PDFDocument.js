import React, { useEffect, useState } from 'react';
import { Document, Page, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer as ReactPDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
  },
  image: {
    width: '100%',
    height: 'auto',
  },
});

const PDFViewer = ({ text, image }) => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setImageURL(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [image]);

  const pdfDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text>{text}</Text>
      </Page>
      {imageURL && (
        <Page size="A4" style={styles.page}>
          <Image src={imageURL} style={styles.image} />
        </Page>
      )}
    </Document>
  );

  return (
    <ReactPDFViewer width="100%" height="600px">
      {pdfDocument}
    </ReactPDFViewer>
  );
};

export default PDFViewer;
