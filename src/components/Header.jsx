/* eslint-disable jsx-a11y/img-redundant-alt */
import doctor from "../assets/doctorsariq.svg";

const Header = () => {
  return (
    <div className="w-[40%] m-auto h-[100px] mt-[80px]">
      <img
        src={doctor}
        alt="First Image"
        className="w-[100px] m-auto object-cover animate-rotate-y"
      />
    </div>
  );
};
export default Header;
