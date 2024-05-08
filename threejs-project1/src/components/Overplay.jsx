import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl select-none">
            Hello, I'm Subhamay Dey
          </h1>
          <p className="text-gray-500 select-none">Welcome to my three js portfolio</p>
          <p className="mt-3 select-none">I know:</p>
          <ul className="leading-9 select-none">
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
            <li>📦 How to deliver</li>
          </ul>
          <p className="animate-bounce  mt-6 select-none">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl select-none">
            Here are my skillsets 🔥
          </h1>
          <p className="mt-6 select-none">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9 select-none">
            <li>ReactJS</li>
            <li>React Native</li>
            <li>Tailwind</li>
            <li>Scss & Less</li>
            <li>GSAP</li>
            <li>ThreeJS</li>
          </ul>
          <p className="mt-3 select-none">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9 select-none">
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDb</li>
            <li>PassportJS</li>
            <li>Firebase</li>
          </ul>
          <p className="animate-bounce  mt-6 select-none">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl flex select-none">
             U can Connect with me😄
          </h1>
          <p className="text-gray-500 mb-2 pt-1 select-none">
            I may help with your projects and learning.
          </p>
          <p className="mt-6 p-3 bg-slate-100 rounded-lg ">
            <section className="flex">
            🌐
            <a href="https://www.linkedin.com/in/subhamay-dey-5b8273292/" className="font-bold">My LinkedIn Profile</a>
              <p className="pl-4">⬅️ Click</p>
              </section>

            <section className="flex pt-4 ">
            📬  <p className="font-bold">ncdey1966@gmail.com</p>
            <p className="pl-4">⬅️ gmail</p>
            </section> 
          </p>
        </Section>
      </div>
    </Scroll>
  );
};