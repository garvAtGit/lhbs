"use client";
import React, { useEffect } from 'react';
import './coursesCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from "next/navigation";

const CoursesCard = (props) => {
    const router = useRouter();
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const handleExplore = () => {
        // extract course slug only (remove "coursename/" prefix if needed)
        const slug = props.link.replace("coursename/", "");

        // Pass slug and amount in the URL
        router.push(`/checkout/${slug}?amount=${props.amount}`);
    };

    return (
        <div className="courseCard" data-aos="fade-up">
            <div className="courseCardContent">
                <img className="courseCardImage" src={props.img} alt="Course Banner" height="200px" />
                <div className="courseCardTitle">{props.title}</div>
                <div className="courseCardDescription">{props.description}</div>
                <button className="explorebutton" onClick={handleExplore}>
                   Explore ➢
                </button>


            </div>
        </div>
    );
}

{/* //https://media.istockphoto.com/id/1413914723/vector/sun-wukong-the-monkey-king-rides-flying-nimbus.jpg?s=612x612&w=0&k=20&c=wFsQwFbvseZ0lckmfxqjeMRgYvbcXxRhb6WR8XPvBdM= */ }
export default CoursesCard
