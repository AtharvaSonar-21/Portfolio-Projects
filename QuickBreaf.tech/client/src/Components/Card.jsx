import React from "react";

function Card({ title, description, imgUrl, url, source, author, publishedAt }) {
  return (
    <div className="everything-card mt-10 border rounded shadow-lg overflow-hidden p-5 flex flex-col gap-4">
      <h2 className="font-bold text-xl">{title}</h2>

      {imgUrl && (
        <div className="mx-auto">
          <img className="w-full max-h-64 object-cover rounded" src={imgUrl} alt={title} />
        </div>
      )}

      <p className="leading-7">
        {description ? description.substring(0, 200) : "No description available."}
      </p>

      <div className="flex flex-col md:flex-row justify-between mt-4 text-sm ">
        <div>
          <span className="font-semibold">Source:</span>{" "}
          <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
            {source || "Unknown"}
          </a>
        </div>

        <div>
          <span className="font-semibold">Author:</span> {author || "Unknown"}
        </div>

        <div>
          <span className="font-semibold">Published At:</span>{" "}
          {publishedAt ? new Date(publishedAt).toLocaleString() : "N/A"}
        </div>
      </div>
    </div>
  );
}

export default Card;
