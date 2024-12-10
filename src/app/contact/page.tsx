import React from 'react';

export default function ContactPage() {
    return (
        <main style={{ padding: '20px' }}>
            <h1>お問い合わせ</h1>
            <form>
                <label>
                    メールアドレス:
                    <input type="email" name="email" placeholder="メールアドレスを入力してください" />
                </label>
                <br />
                <label>
                    コメント:
                    <textarea name="comments" placeholder="お問い合わせ内容を入力してください"></textarea>
                </label>
                <br />
                <button type="submit">送信</button>
            </form>
        </main>
    );
}
