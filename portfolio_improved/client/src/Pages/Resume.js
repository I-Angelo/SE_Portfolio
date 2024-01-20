// ResumePage.js
import React from 'react';
import { Document, Page } from 'react-pdf';
import GlobalWorkerOptions from '../config/PDFConfig'; // Update the path based on your project structure

function PDFViewer() {

    const pdfURL = '../../public/PDF/UPD_Ivan_Angulo_Engineer2.pdf';

  return (
    <div>
        <h1>PDF FILE</h1>
      <Document file={pdfURL}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}


export default PDFViewer;
