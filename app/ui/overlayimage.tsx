"use client";
import Image from "next/image";
import { useState } from "react";

interface OverlayimageProps {
  imgSrc: string;
  paintingNameText: string;
  paintingSizeText: string;
  paintingResource: string;
  imgWidth: number;
  imgHeight: number;
  overoverlayText: string[];
}

export default function Overlayimage({
  imgSrc,
  imgHeight,
  imgWidth,
  paintingNameText,
  paintingResource,
  paintingSizeText,
  overoverlayText,
}: OverlayimageProps) {
  const [isOverlayOverlayVisible, setOverlayOverlayVisible] = useState(false);

  const handleImageClick = () => {
    setOverlayOverlayVisible(true);
  };

  return (
    <div
      className={`group relative w-[${imgWidth}px] h-[${imgHeight}px]`}
      onClick={handleImageClick}>
      <Image
        src={imgSrc}
        height={imgHeight}
        width={imgWidth}
        alt={paintingNameText}></Image>
      <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 h-full  w-full p-5 bg-[#242F414D] flex flex-col justify-end">
        <div className=" absolute inset-x-0 bottom-0 bg-[#1D1708CC] h-[180px] blur-[30px] rounded-tr-[200px]"></div>
        <div className="absolute pb-5 bottom-0 text-amber-800 text-lg font-medium">
          <div className="text-amber-100 text-2xl font-semibold">
            {paintingNameText}
          </div>
          <div>{paintingSizeText}</div>
          <div>{paintingResource}</div>
        </div>
      </div>
      {isOverlayOverlayVisible && (
        <div
          className={`flex fixed inset-0 bg-black bg-opacity-75 items-center justify-center z-50`}>
          <div className="relative bg-gray-800 p-4 gap-10 rounded-lg shadow-lg flex w-[1120px] p-6 pr-20">
            <div
              className="absolute top-2 right-2 text-gray-600 hover:cursor-pointer"
              onClick={() => {
                // setOverlayOverlayVisible(false);
                setTimeout(() => {
                  setOverlayOverlayVisible(false);
                  console.log(isOverlayOverlayVisible);
                }, 1);
              }}>
              <Image src={"/close.png"} width={44} height={44} alt=""></Image>
            </div>
            <div className="relative shrink-0 ">
              <div className="shrink-0">
                <Image
                  src={imgSrc}
                  height={imgHeight}
                  width={imgWidth}
                  alt={paintingNameText}
                />
              </div>
              <div className=" opacity-100 absolute bottom-0 left-0 right-0 h-full  w-full p-5 bg-[#242F414D] flex flex-col justify-end">
                <div className=" absolute inset-x-0 bottom-0 bg-[#1D1708CC] h-[180px] blur-[30px] rounded-tr-[200px]"></div>
                <div className="absolute pb-5 bottom-0 text-amber-800 text-lg font-medium">
                  <div className="text-amber-100 text-2xl font-semibold">
                    {paintingNameText}
                  </div>
                  <div>{paintingSizeText}</div>
                  <div>{paintingResource}</div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-gray-50 font-medium flex flex-col justify-center">
              {overoverlayText.map((text, i) => {
                return (
                  <div key={i} className="pb-4">
                    {text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
