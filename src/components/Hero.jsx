import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl">
              Kha Phong
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <span className="my-2 max-w-xl py-6 font-light tracking-tight">
              {HERO_CONTENT}
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="img-profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
