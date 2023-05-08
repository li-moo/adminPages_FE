import { fetcher } from "@/client/base";
import { IDefaultLayoutPage } from "@/components/layout/default-layout";
import SeoHead from "@/components/layout/seo-head";
import AuthProvider from "@/lib/auth/auth-provider";
import "@/styles/globals.css";
import localFont from "@next/font/local";
import { ConfigProvider } from "antd";
import koKR from "antd/locale/ko_KR";
import { NextComponentType } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SWRConfig } from "swr";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const getLayout =
    (Component as IDefaultLayoutPage).getLayout ||
    ((Page: NextComponentType, props: Record<string, unknown>) => <Page {...props} />);

  return (
    <>
      <SeoHead />
      <Head>
      <script src="https://buttr.dev/butter.js" data-site-id="svyqcbtszj" async></script>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2696f3",
            colorLink: "#2696f3",
            colorLinkHover: "#7f68a6",
          },
        }}
        locale={koKR}
      >
        <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
          <SessionProvider session={session}>
            <AuthProvider>
              <main className={`${pretendard.variable} font-sans`}>{getLayout(Component, pageProps)}</main>
            </AuthProvider>
          </SessionProvider>
        </SWRConfig>
      </ConfigProvider>
    </>
  );
}