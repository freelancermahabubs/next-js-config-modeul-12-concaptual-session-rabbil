import Menu from "./components/Menu";
import "./globals.css";
import Script from "next/script";
import {Hind_Siliguri, Roboto} from "next/font/google";

const Roboto = Roboto({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});
const Siliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-siliguri",
});

// import localFont from "next/font/local";

// const Siliguri = localFont({
//   src: "./fonts/my.ttf",
//   // subsets: ["bengali"],
//   // weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-siliguri",
// });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className={`${Siliguri.variable} ${Roboto.variable}`}>
      <body>
        <Menu />
        {children}
      </body>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      />
    </html>
  );
}
