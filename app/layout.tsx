import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Provider from "@/app/context/Provider";


export const metadata = {
    title: 'Dbjsystem - Soluciones Tecnológicas y Desarrollo a Medida',
    description: 'Dbjsystem ofrece servicios profesionales de desarrollo de software, soluciones tecnológicas ' +
        'personalizadas y asesorías expertas para impulsar tu negocio. Transformando ideas en realidad y llevando' +
        ' empresas al siguiente nivel.',
    keywords: 'desarrollo de software, soluciones tecnológicas, asesorías tecnológicas, servicios IT, ' +
        'innovación tecnológica',
    robots: 'index, follow'
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <Provider >
          {children}
        </Provider>
      </body>
    </html>
  );
}
