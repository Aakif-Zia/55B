import { useEffect, useState } from "react";

const guests = [
  {
    name: "Pawan Chugh",
    location: "Delhi, India",
    comment:
      "I always prefer to stay here whenever I am on a visit to Kolkata for my business meets. 55b is centrally located, hence easy access from all parts of the city...plus, I like the homely feeling and professional services",
  },
  {
    name: "Roshan Thapa",
    location: "Gurgaon, India",
    comment:
      "The staff at 55b are professional and warm hosts...rooms are spacious, neat and tidy...the special on-demand services is the icing on the cake",
  },
];

const GuestCard = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = (current + 1) % guests.length;
    const id = setTimeout(() => setCurrent(next), 4000);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <section className="p-4 h-64 flex justify-center items-center bg-slate-800 text-white">
      {guests.map((guest, index) => {
        return (
          <div
            key={index}
            className={index == current ? "ease-in duration-700" : "hidden"}
          >
            <div className="p-4 border w-fit  rounded-xl m-4">
              <span className="p-2">{guest.comment}</span>
              <div className="text-right">{guest.name}</div>
              <div className="text-right text-xs">{guest.location}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default GuestCard;
