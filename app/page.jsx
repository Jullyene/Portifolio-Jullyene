import Banner from "@/public/components/Mobile/Banner/Banner";
import SobreMim from "@/public/components/Mobile/SobreMim/SobreMim";
import Projects from "@/public/components/Mobile/Projects/Projects";

export default function Home() {
  return (
    <>
      <Banner/>
      <SobreMim/>
      
      <Projects
      success= {true}
      urlI= '/assets/images/png/centric.png'
      textoAlternativo= 'Centric'
      texto= 'Enquanto estagiava na Wecode criei o site da Centric em next.js, salientando que o design do site foi montado por um design do time.'
      />

      <Projects
      urlI= '/assets/images/png/loucos-santos-universo-da-marca.png'
      textoAlternativo= 'Loucos&Santos'
      texto= 'Durante o período do Estágio também criei a página Universo da Marca Loucos&Santos'
      />
      
      <Projects
      urlI= '/assets/images/png/stihl.png'
      textoAlternativo= 'STIHL'
      texto= 'Durante o período do Estágio atendendo o suporte  criei a página Exclusivo loja física  da Loja STHIL com VTEX IO.'
      />

      <Projects
      urlI= '/assets/images/png/anselmi.png'
      textoAlternativo= 'STIHL'
      texto= 'Durante o período de Estágio também fiz alterações nas páginas de categoria com nova estilização no breadcrumb nome da coleção e descrição da coleção., sendo possível cadastrar via Site Editor do VTEX IO um banner para a categoria.'
      />


    </>
  );
}
