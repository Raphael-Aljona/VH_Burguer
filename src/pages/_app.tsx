import type { AppProps } from "next/app";
// import "./login/login.module.css"
import "../../styles/globals.css"
import "./../components/button/button.css";

import {Fredoka} from "next/font/google";

const fredoka = Fredoka({
  variable: "--font-padrao",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
      <main className={fredoka.variable}>
        <Component {...pageProps} />
      </main>
  )
}
