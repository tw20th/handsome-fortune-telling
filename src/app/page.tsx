"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/handsome1.jpg",
    "/images/handsome2.jpg",
    "/images/handsome3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]); // 依存関係配列に images.length を追加

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* サイト紹介 */}
      <h1 style={{ marginBottom: "20px", fontSize: "2.5rem" }}>
        イケメン占いサイトへようこそ！
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
        あなたの運命を導く、魅力的なイケメンたちと一緒に運勢を占いましょう。
      </p>

      {/* 画像スライダー */}
      <div
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          position: "relative",
        }}
      >
        <Image
          src={images[currentSlide]}
          alt="スライダー画像"
          width={400}
          height={300}
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      </div>

      {/* 人気占いリンク */}
      <div style={{ marginTop: "20px" }}>
        <h2>人気の占い</h2>
        <p>
          <a
            href="/fortune"
            style={{
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
              display: "inline-block",
              marginTop: "10px",
            }}
          >
            占いを始める
          </a>
        </p>
        <p>
          <a
            href="/contact"
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff5722",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
              display: "inline-block",
              marginTop: "10px",
            }}
          >
            お問い合わせはこちら
          </a>
        </p>
      </div>
    </div>
  );
}
