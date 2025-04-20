import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/Router";
import { ConfigProvider } from "antd";

function App() {
  const queryClient = new QueryClient();

  return (
    <ConfigProvider theme={{ token: {} }}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
