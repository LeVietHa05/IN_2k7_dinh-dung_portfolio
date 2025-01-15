// components/BookPage.js
import React from "react";
import Image from "next/image";

export default function BookPage({
  frontImage,
  backImage,
  currentPage,
}: {
  frontImage: string;
  backImage: string | undefined;
  currentPage: number;
}) {
  return (
    <div className={`page `} id={`page${currentPage + 1}`}>
      <div className={`front-page  `}>
        <Image src={frontImage} alt="page " width={600} height={860} />
        <label
          htmlFor={`checkbox-page${currentPage + 1}`}
          className="next"></label>
      </div>
      {backImage && (
        <div className={`back-page `}>
          <Image src={backImage} alt="page " width={600} height={860} />
          <label
            htmlFor={`checkbox-page${currentPage + 1}`}
            className="prev"></label>
        </div>
      )}
    </div>
  );
}
