// PDFConfig.js
import { GlobalWorkerOptions } from 'pdfjs-dist';

GlobalWorkerOptions.workerSrc = `../../public/pdfjs-dist/build/pdf.worker.mjs`;

// Optionally, you can export GlobalWorkerOptions or any additional configuration
export default GlobalWorkerOptions;
