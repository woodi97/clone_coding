import PageLayout from "@src/components/layout/PageLayout";
import "@src/styles/globals.scss";
import axios from "axios";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
