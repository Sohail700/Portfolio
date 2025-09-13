import { Provider } from "@/components/ui/provider";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}
