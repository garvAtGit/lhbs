import '../components/coursesCard.css';
import CoursesCard from '../components/CoursesCard.jsx';
const Courses = () => {
  return (
    <><div className="coursesuniversal">
      <div className="header" data-aos="fade-right">
        <div className="titlecontent">
          <h1 className="courses-title">
            LEARN FROM THE BEST, BE YOUR BEST.
          </h1>
          <div className="titlebox"></div>
          <h2 className="titlefont">
            Learn on your mobile, without going anywhere, without paying high fees, without time boundaries and
            get training from the Bharat’s best coach. Different levels and styles available step by step.
          </h2>
          <div className="list">
            <ul className="tick">
              <li>24X7 Course Access</li>
              <li>Class Group Chat</li>
              <li>10 Year Community ship</li>
              <li>Live Classes on Zoom</li>
              <li>Certification Through Test</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      <div className="cards">
        <CoursesCard title="Muay Thai" description="Learn one of the world’s deadliest martial arts to protect yourself with confidence and precision." link="coursename/muaythai" img="https://ik.imagekit.io/lhbs/muay-thai.png?updatedAt=1751458719255" amount="10"/>
        <CoursesCard title="Kung-fu" description="Master traditional Kung-fu techniques, tricks, and styles from Bharat’s top coach—right from your phone." link="coursename/kungfu" img="https://ik.imagekit.io/lhbs/kung-fu.png?updatedAt=1751458720326" amount="47000"/>
        <CoursesCard title="Krav Maga" description="Train in real-life combat techniques to fight off attackers using proven science and psychology." link="coursename/kravmaga" img="https://ik.imagekit.io/lhbs/krav-maga.png?updatedAt=1751458718291" amount="47000"/>
        <CoursesCard title="Capoeira" description="Blend rhythm, movement, and defense with this dynamic Brazilian martial art—taught step by step." link="coursename/capoeira" img="https://ik.imagekit.io/lhbs/capoeira.png?updatedAt=1751458719046" amount="47000"/>
        <CoursesCard title="Tai-chi" description="Balance body and mind while gaining powerful internal strength with calming Tai-chi techniques." link="coursename/taichi" img="https://ik.imagekit.io/lhbs/tai-chi.png?updatedAt=1751458718173" amount="47000"/>
        <CoursesCard title="Muscles Building" description="Build real muscle at home with daily challenges—no gym, no excuses, just results in 25 days." link="coursename/musclesbuilding" img="MAEP.jpg" amount="47000"/>
        <CoursesCard title="Diet & Nutrition" description="Reboot your body with a 25-day detox, home remedies, and nutrition plans that suit every lifestyle." link="coursename/dietandnutrition" img="MAEP.jpg" amount="47000"/>
        <CoursesCard title="Road Fight" description="Don’t have time for full training? Learn effective, easy-to-remember moves for real-world self-defense." link="coursename/roadfight" img="MAEP.jpg" amount="47000"/>
        <CoursesCard title="Tiger Style Kung-fu" description="Unleash your inner strength and emotional control with this fierce and disciplined animal style." link="coursename/tigerstylekungfu" img="https://ik.imagekit.io/lhbs/tiger-style.png?updatedAt=1751458718375" amount="47000"/>
        <CoursesCard title="Eagle Style Kung-fu" description="Focused, fast, and brutal—train to react quickly and powerfully in emergency situations." link="coursename/eaglestylekungfu" img="https://ik.imagekit.io/lhbs/eagle-style.png?updatedAt=1751458716362" amount="47000"/>
        <CoursesCard title="Snake Style Kung-fu" description="Perfect your agility and precision to counter group attacks with snake-like speed and strategy." link="coursename/snakestylekungfu" img="https://ik.imagekit.io/lhbs/snake-style%20.png?updatedAt=1751458718560" amount="47000"/>
        <CoursesCard title="Height Grow Formula" description="Naturally increase your height in 90 days with a proven, organic method—no medicine involved." link="coursename/heightgrowformula" img="MAEP.jpg" amount="47000"/>
        <CoursesCard title="Weight Loss Formula" description="Shed 15% of your body weight in just 25 days—guaranteed—through customized diet and training." link="coursename/weightlossformula" img="MAEP.jpg" amount="47000"/>
        <CoursesCard title="Eye Healing Formula" description="Restore your eye health naturally in just 25 days, without medication—designed for screen users." link="coursename/eyehealingformula" img="MAEP.jpg" amount="47000"/>
        <CoursesCard title="Spirituality Guide" description="Discover inner peace and alignment of mind, body, and nature through a 25-day spiritual transformation." link="coursename/spirituality" img="MAEP.jpg" amount="47000"/>
      </div>
      
    </>
  );
};

export default Courses;