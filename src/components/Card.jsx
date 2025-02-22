import Image from 'next/image';
import React from 'react';

export default function Card({ result }) {
  return (
    <div className="bg-black w-56 h-[500px] m-4 rounded-b-3xl rounded-tr-3xl">
      <div
        style={{
          position: "relative",
          height: "300px",
          overflow: "hidden",
          borderTopRightRadius: "1.5rem",
        }}
      >
        <Image
          alt="poster"
          src={`https://image.tmdb.org/t/p/original${
            result.backdrop_path || result.poster_path
          }`}
          layout="fill" // This makes the image fill the container, allowing it to crop
          objectFit="cover" // This crops the image to fit the container
          objectPosition="center" // Center the image within the container
        />
      </div>
      <p>{result.title}</p>
    </div>
  );
}
