import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				</Head>

				<body>
					<Main />
					<NextScript />
					<script src="https://reservations.tablebooker.com/tbkr-widget-import.min.js" />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
