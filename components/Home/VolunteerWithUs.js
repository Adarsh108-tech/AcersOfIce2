"use client";

import Image from "next/image";

export default function VolunteerWithUs({ id }) {
  return (
    <section
      id={id}
      className="relative w-full py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/volunteers/village.mp4" type="video/mp4" />
      </video>

      {/* 🖤 Black Tint Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left Side – Image Collage */}
        <div className="md:w-1/2 w-full relative h-[460px]">

          {/* Image 1 */}
          <div className="absolute top-0 left-6 w-[55%] z-10 rotate-[-4deg]">
            <Image
              src="/volunteers/volunteers.jpeg"
              alt="Volunteers working"
              width={400}
              height={300}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="absolute top-20 right-2 w-[50%] z-20 rotate-[3deg]">
            <Image
              src="/volunteers/founder1.jpg"
              alt="Community support"
              width={400}
              height={300}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="absolute bottom-0 left-12 w-[45%] z-30 rotate-[-2deg]">
            <Image
              src="/volunteers/3team.jpg"
              alt="Team collaboration"
              width={400}
              height={300}
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Image 4 */}
          <div className="absolute bottom-16 right-10 w-[35%] z-40 rotate-[2deg]">
            <Image
              src="/volunteers/founder1Solo.jpg"
              alt="Field work"
              width={300}
              height={220}
              className="rounded-xl shadow-xl object-cover"
            />
          </div>

          {/* Image 5 */}
          <div className="absolute top-36 left-0 w-[30%] z-0 rotate-[-6deg] opacity-90">
            <Image
              src="/volunteers/exploreHorizontal.jpg"
              alt="Community interaction"
              width={280}
              height={200}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Right Side – Text */}
        <div className="md:w-1/2 w-full flex flex-col gap-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6ED6FF]">
            Volunteer With Us: Be Part of the Change
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed">
            Are you passionate about climate action, community development, or the
            great outdoors? Join us as a volunteer and become part of a growing
            movement bringing water security and resilience to some of the most
            remote and awe-inspiring places on Earth.
          </p>

          <button className="bg-[#4CAF50] w-36 text-white font-semibold px-6 py-3 text-sm rounded-lg hover:bg-[#24A9FC] transition">
            Apply Now
          </button>
        </div>

      </div>
    </section>
  );
}
