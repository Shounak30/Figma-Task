import React, { memo } from "react";
import { images } from "../utils/constant";
import Rating from "./Rating";

const FooterCards = ({
  customerName,
  reviewTime,
  customerImage,
  foodImage,
  description,
  userRating,
}) => {
  return (
    <div className="flex relative flex-col p-[30px] rounded-lg border-2 min-w-[550px] shadow-lg cursor-pointer">
      <div className="flex flex-col w-1/2 gap-4">
        {/* header */}
        <div className="flex gap-4">
          <div className="h-[54px] w-[54px] rounded-full">
            <img
              src={customerImage}
              alt="customer-pic"
              height={54}
              width={54}
            />
          </div>
          <div className="flex flex-col">
            <p>{customerName}</p>
            <p>{reviewTime}</p>
          </div>
        </div>
        {/* body */}
        <div className="flex flex-wrap flex-shrink">{description}</div>
        {/* Footer */}
        <Rating rating={userRating} />
      </div>
      {/* right-side */}
      <div className="absolute right-[-6rem]  top-1/2 transform -translate-y-1/2">
        <img src={foodImage} alt="food_image" width={250} height={260} />
      </div>
    </div>
  );
};

export default memo(FooterCards);
