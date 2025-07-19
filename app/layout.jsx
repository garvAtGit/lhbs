import Navbar from "./components/Navbar.jsx";
import { Inter } from 'next/font/google'
import Providers from "./providers"; // import your Providers component
import AOSInitializer from "./components/AOSInitializer";
import Footer from "./components/footer.jsx";
// Google Fonts: Inter, Lato, Roboto, Playfair Display
import { Inter, Lato, Roboto, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });
const lato = Lato({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });
const roboto = Roboto({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });


export default function RootLayout({ children }) {
  // Add all font classNames to <body> so all Google Fonts are loaded and available for CSS font-family usage
  return (
    <html lang="en">
      <body className={`${inter.className} ${lato.className} ${roboto.className} ${playfair.className}`}>
        <Providers>
          <Navbar />
          <AOSInitializer />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}