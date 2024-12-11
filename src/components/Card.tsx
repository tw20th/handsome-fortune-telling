import React from "react";
import Image from "next/image";
import "../styles/card.css";

export default function Card({
  name,
  results,
  image,
}: {
  name: string;
  results: { love: string; work: string; health: string };
  image: string | null;
}) {
  return (
    <div className="card fade-in">
      <h2>{name}さんの占い結果</h2>
      <p>恋愛運: {results.love}</p>
      <p>仕事運: {results.work}</p>
      <p>健康運: {results.health}</p>
      {image && (
        <Image
          src={image}
          alt="イケメン画像"
          width={300}
          height={300}
          className="card-image"
        />
      )}
    </div>
  );
}
