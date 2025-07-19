"use client";
import "./home.css";
import "./globals.css";

// Google Fonts: Inter, Lato, Roboto, Playfair Display
import { Inter, Lato, Roboto, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });
const lato = Lato({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });
const roboto = Roboto({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });
// import RazorpayButton from "./components/RazorpayButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";

export default function Home(props) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  //hello
  // Apply all font classes to the root div for maximum coverage
  return (
    <div>
      <Head>
        <title>Martial Arts School | Expert, Master & Business Training Programs</title>
        <meta
          name="description"
          content="Join our Martial Arts School with structured programs including Expert, Master, and Business tracks. Learn from the best, and train with purpose."
        />
        <meta property="og:title" content="Martial Arts School" />
        <meta
          property="og:description"
          content="Expert, Master & Business Martial Arts Programs. Culturally diverse styles, animal-inspired techniques, and professional training."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/lhbs/MAEP2.0.png?updatedAt=1751458697819"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <link rel="canonical" href="https://yourdomain.com/" />
        <link rel="preconnect" href="https://ik.imagekit.io" crossOrigin="true" />
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/your_id/banner.jpg?tr=w-1200,q-80"
        />
      </Head>

      <div className="universal">
        <h1 className="title" data-aos="zoom-in">
          Martial Arts School
        </h1>

        <div className="programs" data-aos="fade-up">
          <div className="expertProgram">
            <div className="contenteP">
              <h2 className="titleeP">Martial Arts Expert Program</h2>
              <p className="courseseP">12 Courses, 25 Days Each</p>
              <p className="mattereP">
                Martial arts expert Program is a professional course to become an Expert of Martial
                Arts. We train people from basic to advanced level in 12 Months. These 12 Months are
                almost like a rollercoaster ride. You will learn, enjoy, gain, and experience a new
                dimension every day during the class.
              </p>
              <p className="clickeP">
                <a href="/downloads/MAEP.pdf" aria-label="Download Martial Arts Expert PDF">
                  To get the free PDF, click here
                </a>
              </p>
            </div>
            <img
              src="https://ik.imagekit.io/lhbs/MAEP2.0.png?updatedAt=1751458697819"
              alt="Martial Arts Expert Program image"
            />
          </div>

          <div className="masterProgram" data-aos="fade-right">
            <img
              src="https://ik.imagekit.io/lhbs/MAMP.svg?updatedAt=1751533730804"
              alt="Martial Arts Master Program illustration"
            />
            <div className="contenteP">
              <h2 className="titlemP">Martial Arts Master Program</h2>
              <p className="coursesmP">18 Courses, 25 Days Each</p>
              <p className="mattermP">
                Martial Arts Master Program is the best course ever to become a Master of Martial
                Arts. In this course, we teach principles and train the maximum moves around those
                principles. This course requires basic training from the Expert Program.
              </p>
              <p className="clickmP">
                <a href="/downloads/MAMP.pdf" aria-label="Download Martial Arts Master PDF">
                  To get the free PDF, click here
                </a>
              </p>
            </div>
          </div>

          <div className="businessProgram" data-aos="fade-left">
            <div className="contentbP">
              <h2 className="titlebP">Martial Arts Business Program</h2>
              <p className="coursesbP">3 Courses, 25 Days Each</p>
              <p className="matterbP">
                We help you start your own Martial Arts School by building your skills, knowledge,
                experience, and technical training from scratch. We also guide you to run your
                organization smoothly with 24×7 support. This course provides a blueprint for a
                successful Martial Arts School Business Model—both offline and online. Very smooth
                steps. Anyone can start after completing the Expert & Master Programs.
              </p>
              <p className="clickbP">
                <a href="/downloads/BMP.pdf" aria-label="Download Martial Arts Business PDF">
                  To get the free PDF, click here
                </a>
              </p>
            </div>
            <img
              src="https://ik.imagekit.io/lhbs/business-program.png?updatedAt=1751533731419"
              alt="Martial Arts Business Program"
            />
          </div>
        </div>

        <h2 className="titleWhatWeTrain" data-aos="zoom-in">
          What We Train
        </h2>

        <div className="whatWeTrain">
          <div className="culture" data-aos="flip-left">
            Martial Arts Styles from Different Cultures
            <img
              src="https://ik.imagekit.io/lhbs/cultures.png?updatedAt=1751533730599"
              alt="Martial arts styles inspired by global cultures"
            />
          </div>
          <div className="animals" data-aos="flip-left">
            Martial Arts Styles from Different Animals
            <img
              src="https://ik.imagekit.io/lhbs/animals.png?updatedAt=1751533730596"
              alt="Animal-based martial arts techniques"
            />
          </div>
          <div className="weapons" data-aos="flip-left">
            Martial Arts Weapons from Different Martial Arts
            <img
              src="https://ik.imagekit.io/lhbs/weapons.png?updatedAt=1751533730786"
              alt="Weaponry used across martial arts disciplines"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
