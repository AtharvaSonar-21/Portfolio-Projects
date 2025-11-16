import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card'; // Ensure you import the correct component
import Loader from './Loader';

function CountryNews() {
  const { iso } = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const pageSize = 6;

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => prev + 1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://news-aggregator-dusky.vercel.app/country/${iso}?page=${page}&pageSize=${pageSize}`
        );

        if (!response.ok) throw new Error('Network response was not ok');

        const result = await response.json();

        if (result.success) {
          setData(result.data.articles || []);
          setTotalResults(result.data.totalResults || 0);
        } else {
          setError(result.message || 'An error occurred');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to fetch news. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, iso]);

  return (
    <>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3">
        {isLoading ? (
          <Loader />
        ) : data.length > 0 ? (
          data.map((element, index) => (
            <Card
              key={index}
              title={element.title}
              description={element.description}
              imgUrl={element.urlToImage}
              publishedAt={element.publishedAt}
              url={element.url}
              author={element.author}
              source={element.source?.name}
            />
          ))
        ) : (
          <p>No news articles found for this country.</p>
        )}
      </div>

      {!isLoading && data.length > 0 && (
        <div className="pagination flex justify-center gap-14 my-10 items-center">
          <button
            disabled={page <= 1}
            className="pagination-btn"
            onClick={handlePrev}
          >
            &larr; Prev
          </button>
          <p className="font-semibold opacity-80">
            {page} of {Math.ceil(totalResults / pageSize)}
          </p>
          <button
            disabled={page >= Math.ceil(totalResults / pageSize)}
            className="pagination-btn"
            onClick={handleNext}
          >
            Next &rarr;
          </button>
        </div>
      )}
    </>
  );
}

export default CountryNews;
