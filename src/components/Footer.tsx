import LogoFooter from "../assets/logo-footer.png";
import EmailIcon from "../icons/EmailIcon";
import LocationIcon from "../icons/LocationIcon";
import MobileIcon from "../icons/MobileIcon";
import PhoneIcon from "../icons/PhoneIcon";

const Footer = () => {
  return (
    <section className="bg-slate-900 text-white">
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex justify-between items-start">
          <div className="p-8">
            <span className="text-xl">PAGE SITE</span>
            <div className="p-2 flex flex-col">
              <span>Guest Book</span>
              <span>Deluxe Room</span>
              <span>Standard Room</span>
              <span>Gallery</span>
            </div>
          </div>
          <div className="p-8">
            <span className="text-xl">ABOUT</span>
            <div className="p-2 flex flex-col">
              <span>About 55b</span>
              <span>Kolkata The Cuty of Joy</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="p-8 flex justify-center items-center">
            <img src={LogoFooter} />
          </div>
          <div className="p-8">
            <div className="p-2 flex flex-col">
              <span className="p-2 flex justify-center items-center gap-1">
                <LocationIcon />
                55B, Hindustan Park, Kolkata 700029
              </span>
              <div className="p-2 flex flex-wrap justify-center items-center gap-2">
                <span className="flex justify-center items-center gap-1">
                  <PhoneIcon />
                  +91 33 2419 7604 / 7605
                </span>
                <span className="flex justify-center items-center gap-1">
                  <MobileIcon />
                  +91 98300 21206
                </span>
              </div>

              <span className="p-2 flex justify-center items-center gap-1">
                <EmailIcon />
                55b.hindustanpark@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 text-sm flex justify-center items-center font-semibold bg-amber-100 text-black">
        &copy; 2016 55B Hotel All Rights Reserved.
      </div>
    </section>
  );
};

export default Footer;
