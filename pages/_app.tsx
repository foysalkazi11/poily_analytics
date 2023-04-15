import "../app/styles/main.scss";
import "../app/styles/font.css";
import type { AppProps } from "next/app";
import LayoutWrapper from "@/app/components/layouts/container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />;
    </LayoutWrapper>
  );
}
