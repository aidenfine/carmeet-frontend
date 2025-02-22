import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/Router";
import { ConfigProvider, theme } from "antd";

function App() {
  const queryClient = new QueryClient();

  return (
    <ConfigProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
