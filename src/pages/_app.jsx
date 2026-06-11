import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@/styles/scss/main.scss";
import Layout from "@/components/layout";

function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
