import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logofill.png" />
      </Head>
      <body className="bg-gradient-to-b from-primary via-secondary/60 to-secondary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
