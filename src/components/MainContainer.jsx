import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer"
import { useStateValue } from "../context/StateProvider";
import CartContainer from "./CartContainer";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
