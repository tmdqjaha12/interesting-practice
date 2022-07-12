import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@libs/apollo/apolloClient";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "public/styles/globals.css";
import "public/styles/leaflet.css";
import "public/styles/override.css";

/**
 * 페이지 이동 감지
 */
Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient: any = useApollo(pageProps, "");

  if (process.env.GRAPHQL_RUN) {
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }

  return <Component {...pageProps} />;
}

export default MyApp;
