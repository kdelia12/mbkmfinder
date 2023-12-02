import { useState } from 'react';
import Card from '../components/Card';

export default function Home() {
  const [mitra, setmitra] = useState('');
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  // console.log(results)
  async function handleSubmit(event) {
    event.preventDefault();
    // Disable SSL/TLS certificate validation
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const url = `https://api.kampusmerdeka.kemdikbud.go.id/magang/browse/position?offset=0&limit=1000&location_key=&mitra_key=${encodeURIComponent(mitra)}&keyword=${encodeURIComponent(keyword)}&sector_id=&sort_by=published_time&order=desc`;
    try {
      const response = await fetch(url);
      // console.log(response);
      const data = await response.json();
      const datas =  data.data;
      // console.log(datas)
      setResults(datas);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">MBKM</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-wrap gap-4">
          <div className="flex-1">
              <label htmlFor="keyword" className="sr-only">KataKunci:</label>
              <input type="text" name="keyword" id="keyword" value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="Enter a keyword and press Search" className="w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex-2">
            <label htmlFor="mitra" className="sr-only">Mitra:</label>
              <input type="text" name="mitra" id="mitra" value={mitra} onChange={(event) => setmitra(event.target.value)} placeholder="Enter a keyword and press Search" className="w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            
            <div className="flex-none">
              <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Search</button>
            </div>
          </div>
        </form>
        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((result) => (
              <Card
                key={result.id}
                name={result.name}
                activity_name={result.activity_name}
                total={result.total}
                location={result.location}
                mitra_name={result.mitra_name}
                // quantity={result.quantity}
                // collateral={result.collateral}
                link = {`https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/${result.mitra_id}/${result.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}