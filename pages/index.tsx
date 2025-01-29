import { Layout } from '../layout/Layout';
import { MainPage } from '../layout/Home/Home';

export default function Home(): JSX.Element {
	return (
		<Layout
			title='Model Nova MID'
			description='Delicious and inexpensive rolls. Cooking quality is guaranteed.'
		>
			<MainPage />
		</Layout>
	);
}
