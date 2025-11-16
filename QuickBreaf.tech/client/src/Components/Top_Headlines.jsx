import React, { useState, useEffect } from 'react';
import Card from './Card';
import Loader from './Loader';
import { useParams } from 'react-router-dom';

function Top_Headlines() {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const pageSize = 6;
  const lang = 'en'; // define language if needed

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => prev + 1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const categoryParam = category ? `&category=${category}` : '';
        const response = await fetch(
          `http://localhost:3000/top-headlines?language=${lang}${categoryParam}&page=${page}&pageSize=${pageSize}`
        );

        if (!response.ok) throw new Error('Failed to fetch data');

        const result = await response.json();
        setData(result.data.articles || []);
        setTotalResults(result.data.totalResults || 0);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load top headlines. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, category]);

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
          <p>No articles found for this category or criteria.</p>
        )}
      </div>

      {!isLoading && data.length > 0 && (
        <div className="pagination flex justify-center gap-14 my-10 items-center">
          <button disabled={page <= 1} className="pagination-btn" onClick={handlePrev}>
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

export default Top_Headlines;
