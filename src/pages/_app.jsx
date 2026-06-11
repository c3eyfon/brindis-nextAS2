import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as ga from "../lib/google-analytics";

import "@/styles/scss/main.scss";
import Layout from "@/components/layout";

function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  // C. SETUP OF GA PAGE VIEWS
  const router = useRouter();
  useEffect(() => {
    // C1: Declare function which passes clicked page url to GA4 "event" config function
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    // C2: Subscribe to the change event when component mounts
    router.events.on("routeChangeComplete", handleRouteChange);
    // C3: Unsubscribe from change event on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>

      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default App;
