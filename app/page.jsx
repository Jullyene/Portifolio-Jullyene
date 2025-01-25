"use client"


import Banner from "@/public/components/Mobile/Banner/Banner";
import SobreMim from "@/public/components/Mobile/SobreMim/SobreMim";
import Projects from "@/public/components/Mobile/Projects/Projects";
import Header from "@/public/components/Mobile/header/Header";
import HeaderDesk from "@/public/components/Desktop/HeaderDesk/HeaderDesk";
import BannerDesk from "@/public/components/Desktop/BannerDesk/BannerDesk";
import ProjectsDesk from "@/public/components/Desktop/ProjectsDesk/ProjectsDesk";
import AboutMeDesk from "@/public/components/Desktop/AboutMeDesk/AboutMeDesk";
import ContactDesk from "@/public/components/Desktop/ContactDesk/ContactDesk";
import Contact from "@/public/components/Mobile/Contact/Contact";
import { useEffect, useState } from "react";

export default function Home() {

  const [renderizarJanela, setrenderizarJanela] = useState(false);

  useEffect(() => {
    const altura = window.innerHeight;
    const largura = window.innerWidth;

    setrenderizarJanela(altura > largura);
  },)



  return (
    <>
      { renderizarJanela ?(

        <>
          <Header/>
          <Banner />
          <SobreMim />
          <Projects/>
          <Contact />
        </>

      ):(
       <>
         <HeaderDesk/>
         <BannerDesk/>
         <AboutMeDesk />
         <ProjectsDesk/>
         <ContactDesk/>
       </>
      )}

    </>
  );
}
