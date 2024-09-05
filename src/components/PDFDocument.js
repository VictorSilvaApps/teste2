import React from 'react';
import { Document, Page, Text, Image, StyleSheet, pdf } from '@react-pdf/renderer';
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
  const pdfDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text>{text}</Text>
      </Page>
      {image && (
        <Page size="A4" style={styles.page}>
          <Image src={URL.createObjectURL(image)} style={styles.image} />
        </Page>
      )}
    </Document>
  );

  return (
    <div>
      <ReactPDFViewer width="100%" height="600px">
        {pdfDocument}
      </ReactPDFViewer>
    </div>
  );
};

export default PDFViewer;
