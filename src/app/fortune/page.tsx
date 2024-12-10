"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function FortunePage() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [result, setResult] = useState("");
  const [image, setImage] = useState("");
  const [luckyColor, setLuckyColor] = useState("");
  const [luckyItem, setLuckyItem] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const fortunes = ["大吉", "中吉", "小吉", "末吉", "凶"];
    const colors = ["赤", "青", "緑", "黄", "紫"];
    const items = ["スマホ", "本", "ペン", "時計", "バッグ"];

    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomItem = items[Math.floor(Math.random() * items.length)];

    const images = [
      "/images/handsome1.jpg",
      "/images/handsome2.jpg",
      "/images/handsome3.jpg",
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    setResult(`${name}さんの運勢は…${randomFortune}です！`);
    setLuckyColor(`ラッキーカラー: ${randomColor}`);
    setLuckyItem(`ラッキーアイテム: ${randomItem}`);
    setImage(randomImage);
  };

  const shareOnTwitter = () => {
    const text = `${result}\n${luckyColor}\n${luckyItem}`;
    const url = encodeURIComponent("http://localhost:3000/fortune");
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${url}&hashtags=イケメン占い`;

    window.open(tweetUrl, "_blank");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>占いページ</h1>
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
      {result && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#f0f8ff",
            border: "1px solid #0070f3",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            margin: "20px auto",
          }}
        >
          <p style={{ fontSize: "1.2rem", color: "#333" }}>{result}</p>
          <p style={{ fontSize: "1rem", color: "#0070f3" }}>{luckyColor}</p>
          <p style={{ fontSize: "1rem", color: "#0070f3" }}>{luckyItem}</p>
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
        </div>
      )}
    </div>
  );
}
