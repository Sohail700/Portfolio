import { Provider } from "@/components/ui/provider";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      {/* <BackgroundGrid /> */}
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}
