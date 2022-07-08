import "./assets/styles/App.css";
import CourseCard from "./components/CourseCard/CourseCard";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import TeacherCard from "./components/TeacherCard/TeacherCard";
import Search from "./components/Search/Search";

//images:
import art from "./assets/img/art.jpg";
import blockchain from "./assets/img/blockchain.jpg";
import digital_marketing from "./assets/img/digital_marketing.jpg";
import graphic_design from "./assets/img/graphic_design.jpg";
import programming from "./assets/img/programming.jpg";
import stock_marketing from "./assets/img/stock_market.jpg";
//coach images

import coach1 from "./assets/img/coach1.png";
import coach2 from "./assets/img/coach2.jpeg";
import coach3 from "./assets/img/coach3.jpeg";
import Footer from "./components/Footer/Footer";

//scroll reveal effect
import LightSpeed from "react-reveal/LightSpeed";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* hero section  */}
      <HeroSection />
      {/* courses section  */}
      <LightSpeed left>
        <h1 className="courses-heading1">Our Courses:</h1>
        <h1 className="courses-heading2">
          Our Courses are categorized into different categories according to the
          specialization
        </h1>
      </LightSpeed>
      <section className="courses_section">
        <CourseCard
          src={art}
          title="Arts"
          desc="Learn skill of art from here!"
        />
        <CourseCard
          src={blockchain}
          title="BlockChain"
          desc="BlockChain is the future technology"
        />
        <CourseCard
          src={digital_marketing}
          title="Digital Marketing"
          desc="Be able to sell your products online with us"
        />
        <CourseCard
          src={graphic_design}
          title="Graphics Designing"
          desc="Different skills like photoshop taught here"
        />
        <CourseCard
          src={programming}
          title="Programming"
          desc="Learn how to build your own apps, website and games"
        />
        <CourseCard
          src={stock_marketing}
          title="Stock Marketing"
          desc="Compound your wealth by learning the skill of investing"
        />
      </section>

      {/* search courses  */}
      <Flip bottom>
        <Search />
      </Flip>
      {/* About us  */}
      <h1>About Us</h1>
      <section className="teacher-section">
        <Bounce left>
          <TeacherCard
            img_src={coach1}
            role="Founder"
            title="Saran Pariyar"
            desc="Saran Pariyar is the founder and CEO of learn&fun. He is a very skilled software engineer who also claimed to fixed a typo of tensorflow repo"
          />
        </Bounce>
        <Bounce>
          <TeacherCard
            img_src={coach2}
            role="CEO"
            title="Saran Sharma"
            desc="He is the smartest teacher and his moustache is the pride of our online education website. He only let is barber touch his moustache)"
          />
        </Bounce>
        <Bounce right>
          <TeacherCard
            img_src={coach3}
            role="All In One"
            title="Savage Pariyar"
            desc="He is a 19 year old programmer who has 10 years of experience in blockchain and 24 years experience in react"
          />
        </Bounce>
      </section>
      <Footer />
    </div>
  );
}

export default App;
