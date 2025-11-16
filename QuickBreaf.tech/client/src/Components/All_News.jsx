import React, { useState, useEffect } from 'react';
import Card from './Card';
import Loader from './Loader';

function All_News() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const pageSize = 6;

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => prev + 1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/all-news?page=${page}&pageSize=${pageSize}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result.data.articles || []);
        setTotalResults(result.data.totalResults || 0);
      } catch (error) {
        console.error(error);
        setData([]);
        setTotalResults(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, pageSize]);
  
  fetch("/api/hello")
  .then(r => r.json())
  .then(console.log);

  return (
    <>
      <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3">
        {isLoading ? (
          <Loader />
        ) : (
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
        )}
      </div>

      {!isLoading && data.length > 0 && (
        <div className="pagination flex justify-center gap-14 my-10 items-center">
          <button disabled={page <= 1} className="pagination-btn text-center" onClick={handlePrev}>
            &larr; Prev
          </button>
          <p className="font-semibold opacity-80">
            {page} of {Math.ceil(totalResults / pageSize)}
          </p>
          <button
            className="pagination-btn text-center"
            disabled={page >= Math.ceil(totalResults / pageSize)}
            onClick={handleNext}
          >
            Next &rarr;
          </button>
        </div>
      )}
    </>
  );
}

export default All_News;
