import React, { useContext } from "react";

import { Manufacturers, Cars } from "../data";

import { useNavigate } from "react-router-dom";

import { Context } from "../App";

import ReactGA from "react-ga4";

ReactGA.initialize("G-D0MV7Q0YR9");

const Main = () => {
  const [selectedCar, selectCar] = useContext(Context);

  const navigate = useNavigate();

  const chooseCar = (car) => {
    selectCar(car);
    navigate("/carmod");
    // Event tracking, Button Click, selected car for modification
    // gtag("event", "button_click", {
    //   event_category: "interactions with car models",
    //   event_label: `user selected ${car.manufacturer} ${car.model} for further modifications`,
    //   value: 1,
    // });
    ReactGA.event({
      category: "interactions with car models",
      action: "button_click",
      label: `user selected ${car.manufacturer} ${car.model} for further modifications`,
      value: 1,
    });
    console.log(
      `user selected ${car.manufacturer} ${car.model} for further modifications`
    );
  };

  return (
    <div className="max-w-[1280px] min-w-[560px] mx-auto">
      <section>
        <ul className="flex flex-row justify-between px-32">
          {Manufacturers.map((manufacturer, index) => (
            <li
              key={index}
              className="cursor-pointer font-bold italic hover:text-[#27dfff]"
            >
              {manufacturer.name}
            </li>
          ))}
        </ul>
        <div className="px-32">
          <div className="w-full h-[2px] mt-2 bg-[#27dfff]" />
        </div>
      </section>
      <section className="mt-2 px-32">
        <ul className="flex flex-wrap gap-4">
          {Cars.map((car, index) => (
            <div
              key={index}
              className="w-[330px] h-[480px] py-4 bg-[#b4b4b4] hover:border-[4px] border-[#27dfff] cursor-pointer"
              onClick={() => chooseCar(car)}
            >
              <section>
                <p className=" relative text-[24px] font-thin italic ml-[32px]">
                  {car.manufacturer}
                </p>
                <p className="relative text-[34px] font-bold ml-[32px]">
                  {car.model}
                </p>
                <img
                  src={car.image}
                  className="relative mt-[-40px] ml-[15px]"
                />
              </section>
              <section className="ml-[32px] font-light flex flex-col gap-2">
                <p className="relative text-[24px] font-normal mb-[20px]">
                  From: ${car.price}
                </p>
                <p>Year: {car.year}</p>
                <p>Formfactor: {car.type}</p>
                <p>Consumption: {car.consumption}</p>
                <p>Range: {car.range}</p>
              </section>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Main;
