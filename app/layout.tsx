import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Provider from "@/app/context/Provider";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Dbjsystem - Soluciones Tecnológicas y Desarrollo a Medida",
  description: "Dbjsystem ofrece servicios profesionales de desarrollo de software, soluciones tecnológicas " +
    "personalizadas y asesorías expertas para impulsar tu negocio. Transformando ideas en realidad y llevando" +
    " empresas al siguiente nivel.",
  keywords: "desarrollo de software, soluciones tecnológicas, asesorías tecnológicas, servicios IT, " +
    "innovación tecnológica",
  robots: "index, follow"
};
export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`dark:bg-black ${inter.className}`}>
    <Provider>
      {children}
    </Provider>
    <GoogleAnalytics gaId="G-FYN9V45R53" />
    <Script type="text/javascript">
      {
        ` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "m7lquzn7mg");`
      }
    </Script>
    </body>
    </html>
  );
}
