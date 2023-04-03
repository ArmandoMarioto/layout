import { useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import newsletterImg from "../../../public/newsletterImg.jpg";

type Props = {
  onClose: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

function NewsletterPopup({ onClose, onSubmit }: Props) {
  const [isActive, setIsActive] = useState(true);

  const handleClose = () => {
    setIsActive(false);
    onClose();
  };
  const isDesktop = useBreakpointValue(
    {
      base: false,
      lg: true,
    },
    { ssr: true }
  );

  return (
    <>
      {isDesktop ? (
        <>
          {isActive && (
            <>
              <div className="newsletter-backdrop"></div>
              <div className="newsletter-popup">
                <button className="close-button" onClick={handleClose}>
                  Fechar
                </button>
                <div className="newsletter-image">
                  <Image
                    src={newsletterImg}
                    alt="Newsletter"
                    width={308}
                    height={381}
                  />
                </div>
                <div className="divForm">
                  <CiMail className="IconMail" />
                  <h2>Bem Vindo à MAEZTRA</h2>
                  <div className="newsletter-form">
                    <form onSubmit={onSubmit}>
                      <label htmlFor="email">
                        Receba em Primeira mão <span>desconto e ofertas exclusivas</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        required
                      />
                      <button type="submit">Enviar</button>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="newsletter-backdrop"></div>
          <div className="newsletter-popup">
            <button className="close-button" onClick={handleClose}>
              Fechar
            </button>
            <div className="divForm">
              <CiMail className="IconMail" />
              <h2>Bem Vindo à MAEZTRA</h2>
              <div className="newsletter-form">
                <form onSubmit={onSubmit}>
                  <label htmlFor="email">
                  Receba em Primeira mão <span>desconto e ofertas exclusivas</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    required
                  />
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
      {isActive && <div className="newsletter-backdrop-blur"></div>}
    </>
  );
}

export default NewsletterPopup;
