import React, { useRef, useState } from "react";
import FooterCards from "./FooterCards";
import { images } from "../utils/constant";

const Footer = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplied by 2 for faster scrolling
    containerRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <div className="flex flex-col ">
      <p className="font-bold text-4xl">Customer Review </p>
      <p className="font-medium mb-4 text-lg text-gray-400">
        Eum fuga consequuntur utadsjn et.{" "}
      </p>
      <div
        className="w-full overflow-x-auto  cursor-grab no-scrollbar"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex space-x-24 ">
          <FooterCards
            customerName={"John Sena"}
            reviewTime="2 days ago"
            customerImage={images.customerOne}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            tempore minus beatae dicta alias, sint nulla eos eaque, blanditiis,
            rem voluptate itaque sequi maiores fugiat.`}
            foodImage={images.soupImage}
            userRating={5}
          />
          <FooterCards
            customerName={"Sofia"}
            reviewTime="1 days ago"
            customerImage={images.profileImage}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            tempore minus beatae dicta alias, sint nulla eos eaque, blanditiis,
            rem voluptate itaque sequi maiores fugiat.`}
            foodImage={images.breakfastImage}
            userRating={4}
          />
          <FooterCards
            customerName={"John Sena"}
            reviewTime="2 days ago"
            customerImage={images.customerOne}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            tempore minus beatae dicta alias, sint nulla eos eaque, blanditiis,
            rem voluptate itaque sequi maiores fugiat.`}
            foodImage={images.soupImage}
            userRating={5}
          />
          <FooterCards
            customerName={"Sofia"}
            reviewTime="1 days ago"
            customerImage={images.profileImage}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            tempore minus beatae dicta alias, sint nulla eos eaque, blanditiis,
            rem voluptate itaque sequi maiores fugiat.`}
            foodImage={images.breakfastImage}
            userRating={5}
          />
          <FooterCards
            customerName={"John Sena"}
            reviewTime="2 days ago"
            customerImage={images.customerOne}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            tempore minus beatae dicta alias, sint nulla eos eaque, blanditiis,
            rem voluptate itaque sequi maiores fugiat.`}
            foodImage={images.soupImage}
            userRating={3}
          />
          <FooterCards
            customerName={"Sofia"}
            reviewTime="1 days ago"
            customerImage={images.profileImage}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            tempore minus beatae dicta alias, sint nulla eos eaque, blanditiis,
            rem voluptate itaque sequi maiores fugiat.`}
            foodImage={images.breakfastImage}
            userRating={5}
          />
          <FooterCards
            customerName={"John Sena"}
            reviewTime="2 days ago"
            customerImage={images.customerOne}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            tempore minus beatae dicta alias, sint nulla eos eaque, blanditiis,
            rem voluptate itaque sequi maiores fugiat.`}
            foodImage={images.soupImage}
            userRating={4}
          />
          <FooterCards
            customerName={"Sofia"}
            reviewTime="1 days ago"
            customerImage={images.profileImage}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            tempore minus beatae dicta alias, sint nulla eos eaque, blanditiis,
            rem voluptate itaque sequi maiores fugiat.`}
            foodImage={images.breakfastImage}
            userRating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
