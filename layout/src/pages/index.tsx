import { Banner } from "@/components/Banner";
import { FullBanner } from "@/components/FullBanner";
import { Header } from "@/components/Header";
import { Newsletter } from "@/components/Newsletter";
import NewsletterPopup from "@/components/NewsletterPopup";
import { Tipbar } from "@/components/Tipbar";
import { TipbarMarca } from "@/components/TipbarMarca";
import { Title } from "@/components/Title";
import { Marcas } from "@/components/Title/marcas";
import { Vitrine } from "@/components/Vitrine";
import { Footer } from "@/components/footer";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    function handleOutsideClick(event: any) {
      if (event.target.className === "newsletter-popup") {
        setShowPopup(false);
      }
    }

    if (showPopup) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [showPopup]);
  function handleNewsletterSubmit(event: any) {
    event.preventDefault();
    // Lógica para enviar o e-mail do usuário para o seu servidor aqui
    setShowPopup(false);
  }
  return (
    <div className="principal">
      <ChakraProvider>
        {showPopup && (
          <NewsletterPopup
            onClose={() => setShowPopup(false)}
            onSubmit={handleNewsletterSubmit}
          />
        )}
      </ChakraProvider>

      <ChakraProvider>
        <Header />
        <FullBanner />
        <Title />
        <Tipbar />
        <Marcas></Marcas>
        <TipbarMarca></TipbarMarca>
        <Vitrine></Vitrine>
        <Banner></Banner>
        <Newsletter />
        <Footer></Footer>
      </ChakraProvider>
    </div>
  );
}
