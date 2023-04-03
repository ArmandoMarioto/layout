import { ImagemBanner } from "./ImagemBanner";
import { TextoBanner } from "./TextoBanner";

export function Banner() {
  return (
    <>
      <div className="banner">
        <TextoBanner></TextoBanner>
        <ImagemBanner></ImagemBanner>
      </div>
    </>
  );
}
