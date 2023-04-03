import Image from "next/image";
import Link from "next/link";

export function ImagemBanner() {
  return (
    <div className="bannerImage">
      <Link href="/novacolecao" className="bannerImageLink">
        <Image
          src="https://i.imgur.com/1vLCv01.png"
          alt="novacolecao"
          objectFit="contain"
          layout="responsive"
          width={1200} // Adicione a largura da imagem aqui
          height={800} // Adicione a altura da imagem aqui
        />
      </Link>
    </div>
  );
}
