import LogoHeader from "../assets/logo-header.png";
import MenuIcon from "../icons/MenuIcon";

const Navbar = () => {
  // const [room, setRoom] = useState(false);

  return (
    <nav className="flex justify-between items-center p-2 bg-slate-900">
      <div className="">
        <img src={LogoHeader} />
      </div>

      <div className="text-white sm:hidden">
        <MenuIcon />
      </div>

      <div className="hidden sm:flex justify-end items-center gap-4 text-white">
        <span className="text-xs font-bold hover:underline underline-offset-8 hover:decoration-amber-100">
          ROOMS
        </span>
        {/* <div className="text-xs font-bold">
          <div className="peer flex items-center gap-0.5">
            <span className="z-50 underline-offset-8 hover:underline hover:decoration-amber-100">
              RESERVATION
            </span>
            <Chevron />
          </div>
          <div className="hidden peer-hover:block hover:block list fixed z-50 p-6 bg-slate-900">
            <div className="px-3 py-2 hover:underline underline-offset-8 hover:decoration-amber-100">
              ENQUIRY
            </div>
            <div className="px-3 py-2 hover:underline underline-offset-8 hover:decoration-amber-100">
              OFFERS
            </div>
          </div>
        </div> */}
        <span className="text-xs font-bold hover:underline underline-offset-8 hover:decoration-amber-100">
          RESERVATION
        </span>
        <span className="text-xs font-bold hover:underline underline-offset-8 hover:decoration-amber-100">
          CONTACT
        </span>
        <div className="rounded-lg px-4 py-2 bg-orange-200 hover:bg-amber-100">
          <span className="font-bold text-black">Reserve Now</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
