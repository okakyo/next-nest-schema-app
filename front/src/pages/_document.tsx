import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            property="description"
            content="Next.js と Nest.js を用いたスキーマ駆動開発のサンプルリポジトリです。"
          />
          <meta property="og:title" content="Next.js Sample Site" />
          <meta
            property="og:description"
            content="Next.js と Nest.js を用いたスキーマ駆動開発のサンプルリポジトリです。"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
