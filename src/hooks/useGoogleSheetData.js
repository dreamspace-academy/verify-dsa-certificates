import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const useGoogleSheetData = (csvUrl) => {
  const [sheetData, setsheetData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Papa.parse(csvUrl, {
      download: true,
      header: true,
      complete: (result) => {
        setsheetData(result.data);
        setLoading(false);
      },
    });
  }, [csvUrl]);

  return { sheetData, loading };
};

export default useGoogleSheetData;
