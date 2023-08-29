import type { AppProps } from 'next/app'
import install from "@twind/with-next/app";
import config from "../../twind.config";
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default install(config, App);