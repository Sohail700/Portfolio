import { Provider } from "@/components/ui/provider";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import { Inter, Poppins } from "next/font/google";

// Load fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <div
        className={`${inter.variable} ${poppins.variable}`}
        style={{
          fontFamily: "var(--font-inter)", // default body font
        }}
      >
        <Navbar />
        <Component {...pageProps} />
        <style jsx global>{`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: var(--font-poppins); // stylish headings
            letter-spacing: 0.5px;
          }
        `}</style>
      </div>
    </Provider>
  );
}
