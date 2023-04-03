import "@/styles/banner.css";
import "@/styles/footer.css";
import "@/styles/fullbanner.css";
import "@/styles/global.css";
import "@/styles/header.css";
import "@/styles/newsletter.css";
import "@/styles/newsletterpopup.css";
import "@/styles/principal.css";
import "@/styles/tipbar.css";
import "@/styles/tipbarmarca.css";
import "@/styles/title.css";
import "@/styles/vitrine.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
