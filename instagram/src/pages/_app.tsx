import PageLayout from "@src/components/layout/PageLayout";
import "@src/styles/globals.scss";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
}

export default MyApp;
