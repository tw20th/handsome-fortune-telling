"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function FortunePage() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [results, setResults] = useState<{
    love: string;
    work: string;
    health: string;
  } | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // ランダムな結果を生成する関数
    const generateRandomResult = () => {
      const outcomes = ["大吉", "中吉", "小吉", "末吉", "凶"];
      return outcomes[Math.floor(Math.random() * outcomes.length)];
    };

    // カテゴリごとに結果を生成
    const loveResult = generateRandomResult();
    const workResult = generateRandomResult();
    const healthResult = generateRandomResult();

    // ランダムなイケメン画像を選択
    const images = [
      "/images/handsome1.jpg",
      "/images/handsome2.jpg",
      "/images/handsome3.jpg",
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    setResults({
      love: loveResult,
      work: workResult,
      health: healthResult,
    });
    setImage(randomImage);

    // フェードイン開始
    setVisible(true);
  };

  const resetForm = () => {
    setName("");
    setBirthday("");
    setResults(null);
    setImage(null);
    setVisible(false);
  };

  const shareOnTwitter = () => {
    const text = `${name}さんの占い結果\n恋愛運: ${results?.love}\n仕事運: ${results?.work}\n健康運: ${results?.health}`;
    const url = encodeURIComponent("http://localhost:3000/fortune");
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${url}&hashtags=イケメン占い`;

    window.open(tweetUrl, "_blank");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>占いページ</h1>
      {!results ? (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <label>
            名前:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="あなたの名前を入力"
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>
          <label>
            生年月日:
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            占う
          </button>
        </form>
      ) : (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: visible ? "#e0f7fa" : "#f0f8ff",
            border: visible ? "2px solid #00796b" : "1px solid #0070f3",
            borderRadius: "10px",
            maxWidth: "400px",
            margin: "auto",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 2s ease-in-out, transform 2s ease-in-out, background-color 1.5s ease, border 1.5s ease",
          }}
        >
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
              style={{
                marginTop: "20px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          )}
          <button
            onClick={shareOnTwitter}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#1da1f2",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            結果をTwitterで共有
          </button>
          <button
            onClick={resetForm}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#ff5722",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            もう一度占う
          </button>
        </div>
      )}
    </div>
  );
}
