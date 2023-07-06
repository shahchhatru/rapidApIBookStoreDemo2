"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import {VscAdd} from '@react-icons/all-files/vsc/VscAdd';
import {MdAddCircle} from '@react-icons/all-files/md/MdAddCircle';
import CustomButton from "./CustomButton";
import {CgDanger} from '@react-icons/all-files/cg/CgDanger';
import {TiTickOutline} from '@react-icons/all-files/ti/TiTickOutline';
import { CardDetails } from ".";

const BookCard = ({ book }) => {
  console.log(book);
  const { _id, title, description, price, author, isbn, availability, createdAt, updatedAt, __v } = book;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group relative">
      <span className="absolute -top-4 -left-8 "><MdAddCircle className="w-16 h-16 text-blue-600 cursor-pointer"/></span>
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {title} by {author}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {price}
        <span className="ml-4 self-end text-[14px] font-light">
          instock{availability?<TiTickOutline className="text-lime-500 w-7 h-7"/>:<CgDanger className="text-red-500 w-7 h-7"/>}
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src='/hero.png'
          alt={`${title} ${author}`}
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2 ">
        <div className="flex flex-col group-hover:invisible w-full justify-between text-gray">
          <p className="mt-8 px-4">{description}</p>
      
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
       <CardDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        book={book}
      /> 
    </div>
  );
};

export default BookCard;
