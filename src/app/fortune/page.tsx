"use client";

import React, { useState } from "react";
import Card from "../../components/Card";
import "../styles/global.css";

export default function FortunePage() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [results, setResults] = useState<{
    love: string;
    work: string;
    health: string;
  } | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const outcomes = ["大吉", "中吉", "小吉", "末吉", "凶"];
    const love = outcomes[Math.floor(Math.random() * outcomes.length)];
    const work = outcomes[Math.floor(Math.random() * outcomes.length)];
    const health = outcomes[Math.floor(Math.random() * outcomes.length)];
    const images = [
      "/images/handsome1.jpg",
      "/images/handsome2.jpg",
      "/images/handsome3.jpg",
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    setResults({ love, work, health });
    setImage(randomImage);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>占いページ</h1>
      {!results ? (
        <form onSubmit={handleSubmit}>
          <label>
            名前:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            生年月日:
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </label>
          <button type="submit">占う</button>
        </form>
      ) : (
        <Card name={name} results={results} image={image} />
      )}
    </div>
  );
}
