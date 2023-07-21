import React from "react";
import sampleMusicianPhoto from "../assets/musician.jpeg";

import HandshakeIcon from "@mui/icons-material/Handshake";
import NotesIcon from "@mui/icons-material/Notes";
import { IconButton } from "@mui/material";
import { GraphicEq, Mic } from "@mui/icons-material";

const AboutPage = () => {
  return (
    <section className="p-8 bg-black-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 active">
          About Me
        </h2>
        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-1/2">
            <img
              src={sampleMusicianPhoto}
              alt="Sample Musician"
              className="w-full h-full object-cover rounded-full shadow-lg mb-6"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              I am a passionate musician who loves to create soulful melodies
              that touch the hearts of music lovers worldwide. Music has been my
              lifelong companion, and it has the power to express emotions
              beyond words.
            </p>
            <p className="text-lg mb-6">
              My musical journey began at a young age, and since then, I have
              honed my skills and embraced various genres. Whether it's
              performing live, composing, or producing, I always strive to bring
              something unique and heartfelt to every creation.
            </p>
            <p className="text-lg mb-6">
              Join me on this magical musical journey, and together, let's
              explore the beauty and power of music.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 active ">
          Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="bg-blue-900  p-5 rounded-md shadow-card hover:translate-y-1 transition-transform duration-300">
            <div>
              <IconButton
                className="bg-orange h-12 w-12 rounded-full"
                style={{ backgroundColor: "orange" }}
              >
                <NotesIcon style={{ fontSize: "28px" }} />
              </IconButton>
            </div>
            <div>
              <p className="text-black">Composing</p>
            </div>
          </div>
          <div className="bg-blue-900  p-5 rounded-md shadow-card hover:translate-y-1 transition-transform duration-300">
            <div>
              <IconButton
                className=" h-12 w-12 rounded-full"
                style={{ backgroundColor: "orange" }}
              >
                <GraphicEq style={{ fontSize: "28px" }} />
              </IconButton>
            </div>
            <div>
              <p className="text-black">Recording</p>
            </div>
          </div>
          <div className="bg-blue-900  p-5 rounded-md shadow-card hover:translate-y-1 transition-transform duration-300">
            <div>
              <IconButton
                className="bg-orange h-12 w-12 rounded-full"
                style={{ backgroundColor: "orange" }}
              >
                <HandshakeIcon style={{ fontSize: "28px" }} />
              </IconButton>
            </div>
            <div>
              <p className="text-black">Collaboration</p>
            </div>
          </div>
          <div className="bg-blue-900  p-5 rounded-md shadow-card hover:translate-y-1 transition-transform duration-300">
            <div>
              <IconButton
                className="bg-orange h-12 w-12 rounded-full"
                style={{ backgroundColor: "orange" }}
              >
                <Mic style={{ fontSize: "28px" }} />
              </IconButton>
            </div>
            <div>
              <p className="text-black">Perfomance</p>
            </div>
          </div>
          <div className="bg-blue-900  p-5 rounded-md shadow-card hover:translate-y-1 transition-transform duration-300">
            <div>
              <IconButton
                className="bg-orange h-12 w-12 rounded-full"
                style={{ backgroundColor: "orange" }}
              >
                <HandshakeIcon style={{ fontSize: "28px" }} />
              </IconButton>
            </div>
            <div>
              <p className="text-black">Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
