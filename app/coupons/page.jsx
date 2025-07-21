
"use client";
import React, { useState } from 'react';
import './coupons.css';
import Link from 'next/link';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], weight: '400', display: 'swap' });

const Coupons = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className={`universal-coupons ${manrope.className}`}>
      <div className={`title-coupons`} data-aos="zoom-in">
        Feel Free To Select Anyone Offer And Use Your Code After Selection of your Service
      </div>
      <div className="titleboxcoupon"></div>
      <div className="buttons" data-aos="fade-right">
        <a className="coupon-links" href="https://api.whatsapp.com/send?phone=919713600085&text=Applying%20For%20Free%20Camp%20%0ACoupon%20Code%20Is%3A%20.............%0APlease%20Give%20Access%20of%20Free%20Camp%20of%20Martial%20Arts">Free Camp</a>
        <a className="coupon-links" href="https://api.whatsapp.com/send?phone=919713600085&text=Hello%2C%20Sir%0AI%20am%20Interested%20to%20Join%20A%20Free%20Online%20Martial%20Arts%20Workshop%20And%20My%20Coupon%20is%20..........%0A">Free Workshop</a>
        <a className="coupon-links" href="https://api.whatsapp.com/send?phone=919713600085&text=Applying%20For%20Free%20Counselling%0ACoupon%20Code%20Is%3A%20.............%0APlease%20Book%20A%20Free%20Appointment%20With%20Coach">Free Counselling</a>
        <a className="coupon-links" href="https://api.whatsapp.com/send?phone=919713600085&text=Applying%20For%20Free%20Quiz%20Of%203%20questions%0ACoupon%20Code%20Is%3A%20.............%0APlease%20Book%20A%20Free%20Quiz%20of%20Martial%20Arts">Free Quiz</a>
        <a className="coupon-links" href="https://api.whatsapp.com/send?phone=919713600085&text=Applying%20For%20Free%20Warrior%20Eligibility%20Test%0ACoupon%20Code%20Is%3A%20.............%0APlease%20Book%20A%20Live%20Test">Free Test</a>
        <a className="coupon-links" href="https://api.whatsapp.com/send?phone=919713600085&text=Applying%20For%20Free%20Martial%20Arts%20Webinar%0ACoupon%20Code%20Is%3A%20.............%0APlease%20Book%20A%20Live%20Webinar%20of%20Martial%20Arts%20Expert%20Program">Free Webinar</a>
        <a className="coupon-links" href="https://api.whatsapp.com/send?phone=919713600085&text=Applying%20For%20Five%20Days%20Free%20Course%0ACoupon%20Code%20Is%3A%20.............%0APlease%20Give%20Access%20of%20Five%20Days%20Free%20Martial%20Arts%20Course">Five Days Course</a>
        <a className="coupon-links" href="https://api.whatsapp.com/send?phone=919713600085&text=Applying%20For%20Martial%20Arts%20Event%20Pass%0ACoupon%20Code%20Is%3A%20.............%0APlease%20Generate%20an%20Event%20Pass%20on%20My%20Name">Free Event Pass</a>
        <a className="coupon-links" href="https://api.whatsapp.com/send?phone=919713600085&text=Applying%20For%20Warrior%27s%20Test%0ACoupon%20Code%20Is%3A%20.............%0APlease%20Book%20An%20Appointment%20With%20Warrior%20coach%20for%20Live%20Warrior%20Test">Free Warrior's Test</a>
        <a className="coupon-links" href="https://api.whatsapp.com/send?phone=919713600085&text=I%20am%20interested%20to%20collaborate%20on%20YouTube%2C%20please%20guide%20me%20for%20further%20process%20%0Amy%20Code%20is%20.......">Collaboration on YT</a>
        <a className="coupon-links" href="https://api.whatsapp.com/send?phone=919713600085&text=Sir%20I%20need%20your%20personal%20Guidance%20on%20a%20topic%2C%20please%20give%20me%20a%20time%20slot.%0AMy%20Code%20is%20.................">Personal Guidance</a>
        <a className="coupon-links" href="https://api.whatsapp.com/send?phone=919713600085&text=Please%20book%20my%20one%20slot%20for%20a%20coffee%20with%20Pramod%20Goswami%20(ninjapramod)%20sir%0ACode%20is%20..........">A coffee with NinjaPramod sir</a>
        <a className="coupon-links" href="https://api.whatsapp.com/send?phone=919713600085&text=I%20am%20interested%20to%20become%20a%20Great%20Martial%20Arts%20Expert%20and%20want%20to%20build%20my%20career%20in%20this%20field%2C%20please%20guide%20me%20to%20get%20maximum%20discount%20for%20one%20year%20diploma%20program%0Amy%20Coupon%20Code%20Is%20............">Maximum Discount for Martial Arts Diploma</a>
      </div>
    </div>
  );
};

export default Coupons;
