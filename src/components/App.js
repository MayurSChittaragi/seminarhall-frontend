import RequestForm from "./RequestForm";
import { MantineProvider, Text } from "@mantine/core";

function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<div className="App">
				<RequestForm />
			</div>
		</MantineProvider>
	);
}

export default App;
