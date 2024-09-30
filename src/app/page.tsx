import Image from "next/image";
import profile from "./profile.jpg";
import "./globals.css";
export default function Home() {
  return (
    <div>
      {/* Below Code Is With CSS */}
      <div className="homeContainer">
        <div className="childContainer">
          Hey,
          <br />
          My Name is <span className="pinkColor">Areeba</span>
          <br />I am a Student of <span className="pinkColor">GIAIC</span>
        </div>
        <div className="childContainer"></div>
  
          <img src={"profile.jpg"} alt="profile.pic" height={200}  width={200}/>
          </div>
  
    </div>
  );
}