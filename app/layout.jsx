import Navbar from "./components/Navbar.jsx";
import { Inter } from 'next/font/google'
import Providers from "./providers"; // import your Providers component
import AOSInitializer from "./components/AOSInitializer";
import Footer from "./components/footer.jsx";
const inter = Inter({ 
  subsets: ['latin'],
  display: 'block',
  preload: true,
  weight: ['400', '700'],
  fallback: ['system-ui', 'arial']
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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