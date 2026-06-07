import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";
import "swiper/css/autoplay";
import { Autoplay, EffectCoverflow } from "swiper/modules";

// CustomerReview Swiper component
const ReviewSection = () => {
  const reviews = [
    {
      name: "Shamir Shoykot",
      role: "Frontend Developer",
      comment:
        "Rakib is an extremely talented developer. His portfolio projects are top-notch and very professional.",
    },
    {
      name: "Rafin Muttakim",
      role: "Project Manager",
      comment:
        "Working with Rakib was a pleasure. He delivers clean and efficient code on time.",
    },
    {
      name: "MD. Gias Uddin",
      role: "UI/UX Designer",
      comment:
        "Rakib has a great eye for design. His front-end skills are impressive and polished.",
    },
    {
      name: "Emily Davis",
      role: "Backend Developer",
      comment:
        "Rakib’s code is clean, modular, and easy to understand. Collaborating with him was seamless.",
    },
    {
      name: "Nadim Hasan Nayem",
      role: "CEO, Startup Inc.",
      comment:
        "Rakib transformed our web ideas into reality. His designs are modern, responsive, and user-friendly.",
    },
  ];

  return (
    <section className="w-full mx-auto px-2 py-20 bg-linear-to-b from-[#0f0f2f] via-[#0c0c1e] to-[#0a0a1a]">
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-white mb-6 tracking-tight relative inline-block">
          What People <span className="text-purple-400">Say</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "98%" }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-1 bg-linear-to-r from-purple-500 rounded-full"
          />
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Reviews from people I've worked with or clients I've assisted.
        </p>
      </div>
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          stretch: "50%",
          rotate: 30,
          depth: 200,
          modifier: 1,
          scale: 0.75,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            // Mobile
            slidesPerView: 1,
          },
          640: {
            // Small devices
            slidesPerView: 2,
          },
          1024: {
            // Desktop
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-x-1 hover:shadow-2xl">
                <p className="italic text-white mb-4">"{item.comment}"</p>
                <p className="font-semibold text-white">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default ReviewSection;
