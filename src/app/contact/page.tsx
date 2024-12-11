"use client";

import React, { useState } from "react";

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

  // スタイルをオブジェクトで定義
  const styles = {
    container: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "center" as const, // 型を明示
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column" as const, // 型を明示
      gap: "15px",
    },
    label: {
      fontSize: "1rem",
      textAlign: "left" as const, // 型を明示
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "1rem",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "1rem",
      height: "100px",
      resize: "none" as const, // 型を明示
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#0070f3",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
    },
    thankyou: {
      fontSize: "1.2rem",
      color: "#0070f3",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>お問い合わせ</h1>
      {!submitted ? (
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>
            名前:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              placeholder="お名前を入力してください"
            />
          </label>
          <label style={styles.label}>
            メールアドレス:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="メールアドレスを入力してください"
            />
          </label>
          <label style={styles.label}>
            お問い合わせ内容:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={styles.textarea}
              placeholder="お問い合わせ内容を入力してください"
            />
          </label>
          <button
            type="submit"
            style={styles.button}
          >
            送信する
          </button>
        </form>
      ) : (
        <p style={styles.thankyou}>
          お問い合わせいただきありがとうございます！
        </p>
      )}
    </div>
  );
}
