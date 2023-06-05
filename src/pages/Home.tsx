import Carousel from "../components/Carousel";

import HowrahBridge from "../assets/bg-1.webp";
import Building from "../assets/bg-2.jpg";
import Breakfast from "../assets/breakfast.jpg";
import RoomDeluxe from "../assets/room-deluxe.jpg";
import RoomStandard from "../assets/room-standard.jpg";
import Footer from "../components/Footer";
import GuestCard from "../components/GuestCard";

const roomImages = [
  { link: RoomDeluxe, price: 3600, text: "DELUXE ROOM" },
  { link: RoomStandard, price: 3600, text: "STANDARD ROOM" },
];

const amenities = [
  "Widescreen LCD TV",
  "Air-Conditioning",
  "Intercom Facility",
  "Elevators",
  "Hi-Speed Internet Access",
  "Spacious Washroom with Hair Dryers",
  "Lounge area for relaxation",
  "Large Front Balcony",
  "Refrigerator (deluxe rooms only)",
  "Running Hot and Cold Water",
  "Parking Space (subject to availability)",
  "24 Hrs Power Backup",
  "Daily Housekeeping & Room Service",
  "Complimentary Breakfast for all",
];

const demandAmenities = [
  "Morning Newspaper",
  "Premium Cuisine Meals",
  "Car Rentals, City Guide",
  "Laundry/Pressing Facility",
  "Locker Facility(Subject to Availability)",
  "Medical Aid for Emergency",
];

const Home = () => {
  // const [room, setRoom] = useState("");

  // useEffect(() => {
  //   const roomDiv = document.getElementById(room)?.classList;
  //   roomDiv?.remove("bg-rose-300", "text-white");
  //   roomDiv?.add("bg-rose-300", "text-white");
  // }, [room]);

  return (
    <>
      <Carousel />

      {/* <section className="absolute -mt-8 flex w-full justify-center z-50">
        <div className="flex justify-between items-center w-4/5 h-16 gap-1 bg-slate-800 rounded-xl">
          <div className="p-4 text-xs text-white font-extrabold">
            BOOK A ROOM
          </div>

          <div className="p-4 flex flex-1 justify-between items-center text-white">
            <div className="flex flex-1 items-center">
              <div>
                <label htmlFor="room" className="block text-xs font-medium">
                  ROOM TYPE
                </label>

                <select
                  name="room"
                  id="room"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="mt-1.5 w-full rounded-lg text-slate-800"
                >
                  <option value="">SELECT ROOM</option>
                  <option value="deluxe">DELUXE ROOM</option>
                  <option value="standard">STANDARD ROOM</option>
                </select>
              </div>
            </div>

            <div className="hidden sm:block rounded-lg px-4 py-2 bg-rose-200 hover:bg-rose-300">
              <span className="font-bold text-black">Reserve Now</span>
            </div>
          </div>
        </div>
      </section> */}

      <section
        className="px-4 pt-20 pb-4 text-white"
        style={{ backgroundImage: `url(${HowrahBridge})` }}
      >
        <div className="bg-slate-800 p-4 m-4 rounded-xl">
          <span className="text-xl font-extrabold">
            UNMATCHED ACCOMMODATIONS
          </span>
          <p className="text-sm font-semibold p-2">
            Enjoy your stay in one of Kolkata’s best kept secrets, the guest
            house at 55B. Experience a homely and cozy feeling every time you
            step in. Pick the room of your choice from Deluxe and Non-deluxe
            options. Spacious rooms, premium fitments, modern convenience
            coupled with on-demand services ensure that you experience the best
            accommodation on a budget.
          </p>
        </div>

        <div className="flex justify-evenly items-center flex-wrap gap-4 m-4">
          {roomImages.map((img, index) => {
            return (
              <div
                key={index}
                className="relative border-2 rounded-xl border-slate-800"
              >
                <img
                  src={img.link}
                  className="object-cover rounded-xl sm:h-72"
                />
                <div className="p-4 rounded-xl absolute inset-0 flex flex-col justify-end items-start text-white bg-rose-100 bg-opacity-0 hover:bg-opacity-25">
                  <div className="p-4 flex flex-col bg-slate-800 bg-opacity-40">
                    <span className="text-xl font-bold">{img.text}</span>
                    <span className="text-lg font-semibold">{img.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="p-8 flex justify-evenly items-center flex-wrap bg-slate-800 text-white">
        <div className="border rounded-xl border-white">
          <img src={Building} className="object-cover rounded-xl h-96" />
        </div>
        <div className="p-4 lg:flex-1 text-sm">
          <div className="p-2">
            In the midst of the hustle and bustle of city life, 55b is your
            peaceful oasis of luxury, a guesthouse with a complete home-like
            environment, isolated from the traffic and chaos, offering all the
            modern comforts to pamper the weary traveller.
          </div>
          <div className="p-2">
            Professional 24-hour housekeeping complements the luxuriously
            furnished and well-equipped rooms. 55b offers on-demand services
            including gourmet dining, car rental, city guides, Wi-Fi Internet
            access, emergency medical assistance and more.
          </div>
          <div className="p-2">
            One of the best things about our guesthouse is its location.
            Hindustan Park is located in the heart of the city, close to
            Kalighat Metro Station, a few kilometres from Gariahat Crossing and
            with excellent connectivity to the airport and railway station. This
            makes it a great place to stay if you are on a business trip. We
            wish you a pleasant stay.
          </div>
        </div>
      </section>

      <section className="p-8 flex justify-evenly items-center flex-wrap text-slate-800 bg-white">
        <div className="p-4 lg:flex-1 text-sm">
          <div className="p-4 text-4xl font-bold">
            ULTRA MODERN AMENITIES & SERVICES
          </div>
          <div className="p-2">
            Our lodge's services, amenities and hygienic environment are
            recognised as some of the best in the industry. First class
            interiors and all modern comforts are at your fingertips. Our
            trained staff will make you feel at home at all times.
          </div>
          <div className="p-2 grid grid-cols-2 gap-2">
            {amenities.map((item, index) => {
              return (
                <div key={index} className="">
                  &#8226;
                  <span className="p-1">{item}</span>
                </div>
              );
            })}
          </div>
          <div className="p-4 text-4xl font-bold">ON-DEMAND SERVICES</div>
          <div className="p-2 grid grid-cols-2 gap-2">
            {demandAmenities.map((item, index) => {
              return (
                <div key={index} className="">
                  &#8226;
                  <span className="p-1">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border rounded-xl border-slate-800">
          <img src={Breakfast} className="object-cover rounded-xl h-96" />
        </div>
      </section>

      <GuestCard />

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              STATISTICS
            </h2>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt
                  className="order-last text-lg font-medium text-slate-600
                "
                >
                  SATISFIED GUESTS
                </dt>

                <dd className="text-4xl font-extrabold text-slate-800 md:text-5xl">
                  16576
                </dd>
              </div>

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt
                  className="order-last text-lg font-medium text-slate-600
                "
                >
                  ROOMS BILLED
                </dt>

                <dd className="text-4xl font-extrabold text-slate-800 md:text-5xl">
                  7203
                </dd>
              </div>

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt
                  className="order-last text-lg font-medium text-slate-600
                "
                >
                  % OCCUPANCY
                </dt>

                <dd className="text-4xl font-extrabold text-slate-800 md:text-5xl">
                  90
                </dd>
              </div>
              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt
                  className="order-last text-lg font-medium text-slate-600
                "
                >
                  MEALS SERVED
                </dt>

                <dd className="text-4xl font-extrabold text-slate-800 md:text-5xl">
                  25340
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="p-8 flex flex-col justify-center items-center bg-slate-800 text-white">
        <span className="p-2 text-2xl">NEWS & OFFERS</span>
        <div className="flex flex-wrap justify-center items-center">
          <input
            type="text"
            className="w-64 border rounded-xl p-2 m-2 text-center"
            placeholder="EMAIL ADDRESS"
          />
          <div className="rounded-lg px-4 py-2 m-2 bg-rose-200 hover:bg-rose-300">
            <span className="font-bold text-black">SIGN UP</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
