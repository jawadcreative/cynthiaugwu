import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


const Work = () => {
  const imageBox = useRef(null);
  const data = [
    { title: "Lucid Motors", year: "2023", img: "/img/lucid-motors.webp" },
    { title: "Baron Capital", year: "2023", img: "/img/baron-capital.webp" },
    { title: "NFL", year: "2024", img: "/img/nfl.webp" },
    { title: "Placenew", year: "2024", img: "/img/placenew.webp" },
    { title: "Somos", year: "2023", img: "/img/somos.webp" },
  ];

  useGSAP(() => {
    const box = gsap.utils.toArray(".box");
    const image = imageBox.current.querySelector("img");

    const moveImage = (e) =>
      gsap.to(imageBox.current, {
        x: e.clientX - imageBox.current.offsetWidth / 2,
        y: e.clientY - imageBox.current.offsetHeight / 2,
        duration: 0.4,
        ease: "power3.out",
        overwrite: 'auto',
      });

    box.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        image.src = item.dataset.image;
        gsap.to(imageBox.current, { opacity: 1, duration: 0.3 });
      });

      item.addEventListener("mousemove", moveImage);

      item.addEventListener("mouseleave", () => {
        gsap.to(imageBox.current, { opacity: 0, duration: 0.3 });
      });

      gsap.from([item.querySelector("h1"), item.querySelector("p")], {
        yPercent: 100,
        opacity: (i) => (i ? 0 : 1),
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  });

  return (
    <section className="work relative h-[240vh] flex flex-col items-start justify-center">
      <div
        ref={imageBox}
        className="imageBox fixed top-0 left-0 w-[30vw] h-[60vh] pointer-events-none rounded-lg z-30 overflow-hidden opacity-0"
      >
        <img
          className="w-full h-full object-cover object-center"
          alt=""
        />
      </div>

      {data.map((item, index) => (
        <div
          key={item.title}
          data-image={item.img}
          className={`box relative flex items-center justify-between h-[40vh] w-full px-[2em] ${index === 0 ? "border-y" : "border-b"
            } border-border`}
        >
          <div className="w-full flex justify-between items-center overflow-hidden">
            <h1 className="text-[clamp(2rem,6vw,6rem)]  uppercase">
              {item.title}
            </h1>
            <p className=" text-xl">{item.year}</p>
          </div>
        </div>
      ))}

      <Link
        to="/work"
        className="m-8 px-6 py-3 border rounded-full">
        View all work <sup>8</sup>
      </Link>
    </section>
  );
};

export default Work;