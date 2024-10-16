import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const useCertificateData = (csvUrl) => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Papa.parse(csvUrl, {
      download: true,
      header: true,
      complete: (result) => {
        setCertificates(result.data);
        setLoading(false);
      },
    });
  }, [csvUrl]);

  return { certificates, loading };
};

export default useCertificateData;
