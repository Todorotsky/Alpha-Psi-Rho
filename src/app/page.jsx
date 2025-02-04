import ImageWithOverlay from "../components/ImageWithOverlay";
import ImageWithOverlay2 from "../components/ImageWithOverlay2";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="w-full sm:w-[72%] mx-auto">
      <div>
        <ImageWithOverlay
          imageUrl="/first_hero_picture.jpg"
          headerText="Alpha Psi Rho"
          subheaderText="Delta ▵ Chapter"
          centerText="The premier Asian-Pacific Islander Interest Fraternity of UNLV"
        />
      </div>
      <div className="static pb-12">
        <div className="flex justify-center py-6 sm:py-10 font-bold text-5xl">
          <h2 className="text-4xl sm:text-[4vw]">
            What We Offer <br />
          </h2>
        </div>
        <div className="flex flex-wrap sm:justify-center">
          <div className="bg-gray-200 w-full sm:w-[28%] m-4 flex justify-center flex-grow">
            <div className="text-center font-bold text-2xl sm:text-[1.7vw] pt-7">
              Academics
              <div className="pt-2 flex space-evenly justify-center">
                <img
                  className="mr-4 w-[21%]"
                  src="/academics.svg"
                  alt="Academics Written in Tagalog"
                />
                <img
                  className="ml-4 w-[21%]"
                  src="/academic_2.svg"
                  width={75}
                  height={75}
                  alt="Academic Graphic"
                />
              </div>
              <div className="font-normal text-base py-4 px-1 overflow-auto">
                • Access to brhothers who can offer advice, share experiences,
                and provide resources to help you excel in your studies and
                beyond.
              </div>
            </div>
          </div>
          <div className="bg-gray-200 w-full sm:w-[28%] m-4 flex justify-center flex-grow">
            <div className="text-center font-bold text-2xl sm:text-[1.7vw] pt-7">
              Brotherhood
              <div className="pt-2 flex space-evenly justify-center">
                <img
                  className="mr-4 w-[21%]"
                  src="/brotherhood.svg"
                  alt="Brotherhood Written in Japanese"
                />
                <img
                  className="sm:ml-4 w-[21%]"
                  src="/brotherhood_2.svg"
                  alt="Brotherhood Graphic"
                />
              </div>
              <div className="font-normal text-base py-4 px-1 overflow-auto">
                • Join a tight-knit community where bonds last a lifetime,
                creating a sense of belonging and camaraderie that extends far
                beyond your college years.
              </div>
            </div>
          </div>
          <div className="bg-gray-200 w-full sm:w-[28%] m-4 flex justify-center flex-grow">
            <div className="text-center font-bold text-2xl sm:text-[1.7vw] pt-7">
              Prosperity and Strength
              <div className="pt-2 flex space-evenly justify-center">
                <img
                  className="mr-4 w-[21%]"
                  src="/prosperity.svg"
                  alt="Prosperity Written in Korean"
                />
                <img
                  className="ml-4 w-[21%]"
                  src="/strength.svg"
                  alt="Strength Written in Mandarin"
                />
              </div>
              <div className="font-normal text-base py-4 px-1 overflow-auto text-center">
                • Challenge yourself to step out of your comfort zone, explore
                new interests, and discover your potential in a supportive and
                empowering environment.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#09243F] flex items-center justify-between text-white py-11">
        <div className="sm:hidden flex flex-col">
          <div className="text-center text-4xl pb-4 font-bold">RUSH RHO</div>
          <div>
            <video className="w-full sm:w-[45%] h-[30%] px-5" controls>
              <source src="/spring2024_rush.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div className="pt-3 px-5">
            <div className="text-center text-4xl pb-4 font-bold">
              Who We Are
            </div>

            <p className="py-3">
              Alpha Psi Rho (ΑΨΡ, also known as APsiRho) is an Asian/Pacific
              Islander-Interest Fraternity. Alpha Psi Rho is a part of the
              Multicultural Greek Council at UNLV. Although we are an
              Asian-Pacific Islander Interest Fraternity, we are all inclusive.
            </p>

            <p>
              Click the button below to view a powerpoint presentation to learn
              what this fraternity is about. APSiRho 101 covers both the
              business and social aspects of what it means to be a part of Alpha
              Psi Rho.
            </p>
          </div>
          <div className="pt-4 flex justify-center">
            <Button
              as={Link}
              className="text-2xl font-bold w-[70%]"
              color="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeE7k9E0oweC9APcmSWvnFHIo9nQ2WiD0H3aYQRySa7lg3ATw/viewform"
              variant="flat"
              style={{ backgroundColor: "#FFD700", color: "black" }}
            >
              APSIRHO101
            </Button>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="flex space-between">
            <video className="w-[45%] h-[30%] pl-[6vb]" controls>
              <source src="/spring2024_rush.mp4" type="video/mp4"></source>
            </video>
            <div></div>
            <div className="pl-20 flex text-center flex-col">
              <h2 className="text-6xl font-bold pb-10 pr-10">
                Who We Are
                <br />
              </h2>
              <div className="pr-10 text-3xl text-left">
                <p>
                  Alpha Psi Rho (ΑΨΡ, also known as APsiRho) is an Asian/Pacific
                  Islander-Interest Fraternity. Alpha Psi Rho is a part of the
                  Multicultural Greek Council at UNLV. Although we are an
                  Asian-Pacific Islander Interest Fraternity, we are all
                  inclusive.
                </p>
                <p className="pt-20">
                  Click the button below to view a powerpoint presentation to
                  learn what this fraternity is about. APSiRho 101 covers both
                  the business and social aspects of what it means to be a part
                  of Alpha Psi Rho.
                </p>
                <div className="pt-20 text-center">
                  <Button
                    as={Link}
                    className="text-2xl font-bold w-[70%]"
                    color="primary"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeE7k9E0oweC9APcmSWvnFHIo9nQ2WiD0H3aYQRySa7lg3ATw/viewform"
                    variant="flat"
                    style={{ backgroundColor: "#FFD700", color: "black" }}
                  >
                    APSIRHO101
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <ImageWithOverlay2
          imageUrl="/second_hero_picture.jpg"
          headerText="Want to Rush?"
          subheaderText="Sign our interest form and come out to the rush events at the start of the semester!"
          link="https://docs.google.com/forms/d/e/1FAIpQLSeE7k9E0oweC9APcmSWvnFHIo9nQ2WiD0H3aYQRySa7lg3ATw/viewform"
        />
      </div>
    </main>
  );
}
