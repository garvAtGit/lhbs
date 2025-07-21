"use client"
import React from 'react'
import Head from 'next/head'
import './joinus.css'

const JoinUs = () => {
  return (
    <>
      <Head>
        <title>Join Martial Arts Expert & VIP Training Program</title>
        <meta name="description" content="Join our Martial Arts Expert Program 2.0 or VIP Training program. Get certified, trained, and supported throughout your martial arts journey." />
        <link rel="canonical" href="https://yourdomain.com/joinus" />
        <link rel="preconnect" href="https://ik.imagekit.io" crossOrigin="true" />
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/lhbs/MAEP2.0.png?updatedAt=1751458697819"
        />
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/lhbs/vip-training.png?updatedAt=1751533731431"
        />
      </Head>

      <section className="joinus">
        <h1 className="joinustitle" data-aos="zoom-in">JOIN US</h1>

        <article className="coursedetails" data-aos="fade-right">
          <img
            src="https://ik.imagekit.io/lhbs/MAEP2.0.png?updatedAt=1751458697819"
            alt="Martial Arts Expert Program (MAEP 2.0) logo"
          />
          <div className="maep2content">
            <h2 className="coursetitle">Martial Arts Expert Program 2.0</h2>
            <div className="line" aria-hidden="true"></div>
            <p className="coursedescription">
              Martial Arts Expert Program covers more than 12 different courses which is
              path to become a Martial Arts Expert. This course is an online course with:
            </p>
            <ul className="tick" aria-label="Course features">
              <li>WhatsApp group support</li>
              <li>24×7 Call Support</li>
              <li>Live Classes</li>
              <li>12+ Martial Arts Courses</li>
              <li>12+ Counselings</li>
              <li>1 Diet Course</li>
              <li>1 Weight Loss Course</li>
              <li>Live Exams</li>
              <li>3 Days Training at Indore</li>
              <li>2+ Events</li>
              <li>Career Support</li>
              <li>Certification</li>
            </ul>
            <a
              className="joinusbutton"
              href="/checkout/maep2.0?amount=236000"
              aria-label="Join Martial Arts Expert Program for ₹2,36,000"
            >
              Join Now
            </a>
          </div>
        </article>

        <article className="coursedetails" data-aos="fade-left">
          <img
            className="coursedetailsimage"
            src="https://ik.imagekit.io/lhbs/vip-training.png?updatedAt=1751533731431"
            alt="VIP Martial Arts Training logo"
          />
          <div className="viptrainingcontent">
            <h2 className="coursetitle">VIP Training</h2>
            <div className="line" aria-hidden="true"></div>
            <p className="coursedescription">
              VIP Training is a special training program for those who want to become a Martial Arts Trainer.
              This program also provides comprehensive certification for the course, along with psychological training and in-depth fight science. Participants receive detailed notes, road fight preparation, and Kung-fu based training focused on real-life self-defense.
              No belt exams or tournament prep—only real-world skills.
              Includes:
            </p>
            <ul className="tick" aria-label="VIP Training schedule">
              <li>25–45 Minutes Class</li>
              <li>Day 1–20: Practical Lessons</li>
              <li>Day 21: Guru Diksha</li>
              <li>Day 22: Inner Power Activation</li>
              <li>Day 23: Blind Test for Muscle Memory</li>
              <li>Day 24: Pre-Test</li>
              <li>Day 25: Main Test by Guest Examiners</li>
            </ul>
            <a
              className="joinusbutton"
              href="/checkout/vip-training?amount=236000"
              aria-label="Join VIP Training Program for ₹2,36,000"
            >
              Join Now
            </a>
          </div>
        </article>
      </section>
    </>
  )
}

export default JoinUs
