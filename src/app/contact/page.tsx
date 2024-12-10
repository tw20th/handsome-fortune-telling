"use client";

import React, { useState } from "react";
import "../styles/contact.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // フォーム送信処理（ここではデモ用）
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">お問い合わせ</h1>
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-label">
            名前:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contact-input"
              placeholder="お名前を入力してください"
            />
          </label>
          <label className="contact-label">
            メールアドレス:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contact-input"
              placeholder="メールアドレスを入力してください"
            />
          </label>
          <label className="contact-label">
            お問い合わせ内容:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contact-textarea"
              placeholder="お問い合わせ内容を入力してください"
            />
          </label>
          <button type="submit" className="contact-button">
            送信する
          </button>
        </form>
      ) : (
        <p className="contact-thankyou">
          お問い合わせいただきありがとうございます！
        </p>
      )}
    </div>
  );
}
