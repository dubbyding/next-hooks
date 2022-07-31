import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render(): JSX.Element {
		return (
			<Html>
				<Head></Head>
				<body>
					<Main></Main>
					<NextScript></NextScript>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
