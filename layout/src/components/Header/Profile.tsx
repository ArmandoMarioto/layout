import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

export function Profile() {
  return (
    <div className="Profile">
      <div className="ProfileUser">
        <CiUser className="IconUser" />
        <span className="UserConta">Minha Conta</span>
      </div>
      <div className="ProfileHeart">
        <AiOutlineHeart className="IconHeart" />
        <span className="UserHeart">Minha Conta</span>
      </div>
      <div className="ProfileCart">
        <BsHandbag className="IconBag" />
        <span className="UserCart">Meu Carrinho</span>
      </div>
    </div>
  );
}
