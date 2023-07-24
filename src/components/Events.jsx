import React from "react";
import sampleMusicianPhoto from "../assets/musician.jpeg"; // Replace this with your musician's photo

const EventsPage = () => {
  return (
    <section className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 active">
          Events
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Event Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src={sampleMusicianPhoto}
                alt="Sample Musician"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 bg-gray-800 p-4">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Concert Under the Stars
                </h3>
                <p className="text-white text-sm">Date: August 15, 2023</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700">
                Join us for a magical night of music under the stars as I
                perform some of my favorite compositions. Be prepared to be
                mesmerized by soulful melodies and captivating performances.
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Get Tickets
              </button>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src={sampleMusicianPhoto}
                alt="Sample Musician"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 bg-gray-800 p-4">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Songwriting Workshop
                </h3>
                <p className="text-white text-sm">Date: September 5, 2023</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700">
                Calling all aspiring songwriters! Join me for an interactive
                songwriting workshop where we'll dive into the creative process,
                explore different song structures, and unleash your musical
                potential.
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Reserve Your Spot
              </button>
            </div>
          </div>

          {/* Add more event cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
