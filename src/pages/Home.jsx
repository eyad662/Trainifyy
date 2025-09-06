import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useGetInternshipsQuery } from '../redux/internship';
import Card from "../components/Card";
import HeroImage from "../assets/hero-home.png";



export default function Home() {
    const companies = [
    { name: "NovaTech" },
    { name: "HexaLabs" },
    { name: "AlphaWave" },
    { name: "SmartCore" },
    { name: "GridFlow" },
    { name: "BrightPath" },
    { name: "NextEra" },
    { name: "FlexiSoft" },
    { name: "DeepLink" },
  ];


    const [isOpen, setIsOpen] = useState(false);
const { data, error, isLoading } = useGetInternshipsQuery('All');

  const text = "Discover more than";
  const textt = "300+ Internship";
  const [displayedText, setDisplayedText] = useState("");
  const [displayedTextt, setDisplayedTextt] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const delay = setTimeout(() => {
      let i = 0;
      const interval2 = setInterval(() => {
        setDisplayedTextt(textt.slice(0, i));
        i++;
        if (i > textt.length) clearInterval(interval2);
      }, 70);
    }, textt.length * 70 + 200);

    return () => clearTimeout(delay);
  }, []);
  return(
    <div className="">
    

    <section className="flex justify-between items-center pt-28 h-[93vh]">
      <div className="mt-8">
        <h1 className="text-6xl font-bold text-textp">{displayedText}<br /><span className="text-secondary">{displayedTextt}</span></h1>
        <p className="my-10 text-gray-600">  Great platform for students who are looking for internships, helping you<br /> discover opportunities, apply easily, and kickstart your career journey.</p>
          
          <a href="#latest"><button className="text-xl bg-primary rounded-xs px-5 py-2 cursor-pointer hover:bg-primary-hover transition-all duration-200 font-bold text-bgp">
            Explore
          </button></a>
        <p className="my-6 text-gray-600">Popular: .Net Developer, React.js /Next.js, UX/UI</p>
      
      </div>
      <div>
        <img src={HeroImage} alt="landing photo" className="sm:inline w-4/5 hidden" />
      </div>
    </section>

    {/*Companies oferring*/}

      <section id="latest" className="pb-16 w-full px-4 sm:mt-28">
      <h2 className="text-xl text-gray-600 font-bold mb-12">
        Companies Offering Internships
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {companies.map((company, index) => (
          <p
            key={index}
            className="text-center font-bold text-2xl text-gray-500 cursor-pointer"
          >
            {company.name}
          </p>
        ))}
      </div>
    </section>
    
    {/* Latestt */}
    <section>
      <div className="flex justify-between items-end my-16">
        <h1 className="text-4xl font-bold">Latest <span className="text-secondary">Internships</span></h1>
        <Link to="/internships">
        <button className="text-primary font-bold cursor-pointer transition-transform duration-300 hover:-translate-y-1">Show all Internships  ➡️</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data?.map((internship) => (
            <Card
              key={internship.id}
              internship={internship}
              setIsOpen={setIsOpen}
            />
          ))}
      </div>
    </section>

    <footer className="mt-16 bg-footer -mx-8 md:-mx-32 px-32 pt-16 pb-8">
      <div className="flex flex-col justify-between items-start mb-12 sm:flex-row">
        <div className="text-bgp">
            <h1 className="text-2xl font-bold my-4" >Trainify</h1>
            <p className="text-gray-200">Great platform for students who are looking for internships, <br /> helping you discover opportunities, apply easily, <br /> and kickstart your career journey.</p>
        </div>
        <div className="text-bgp">
            <h1 className="text-2xl font-bold my-5">About</h1>
            <p className=" my-5">Companies</p>
            <p className=" my-5">Pricing</p>
            <p className=" my-5">Terms</p>
            <p className=" my-5">Privacy Policy</p>
        </div>
        <div className="text-bgp">
            <h1 className="text-2xl font-bold my-2">Resources</h1>
            <p className=" my-5">Help Docs</p>
            <p className=" my-5">Guide</p>
            <p className=" my-5">Updates</p>
            <p className=" my-5">Contact Us</p>
        </div>
        <div className="text-bgp max-w-md">
            <h1 className="text-2xl font-bold my-2">Contact Us</h1>
            <p className=" my-2">Need Help!</p>

            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="p-3 rounded-sm border border-gray-300 bg-bgp focus:outline-none focus:ring-2 focus:ring-primary text-black"
                required
              />

              <textarea 
                placeholder="Your Message" 
                rows="3"
                className="p-3 bg-bgp rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-black"
                required
              ></textarea>

              <button 
                type="submit" 
                className="bg-primary text-white font-semibold py-2 rounded-sm hover:bg-primary-hover cursor-pointer duration-300"
              >
                Send Message
              </button>
            </form>

        </div>
      
      </div>

      <hr className="text-bgp" />

      <div className="flex justify-between items-start pt-8">
        <p className="text-gray-300">All rights reserved ©️ 2025</p>
        <div></div>
      </div>

    </footer>


    </div>
  );
}
