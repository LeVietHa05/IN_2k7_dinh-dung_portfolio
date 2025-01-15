"use client";

import BookPage from "../ui/bookpage";
import Image from "next/image";
const bookPages = [
  //   {
  //     front: { link: "/publics/cover-front.png", isCover: true },
  //     back: { link: "/publics/cover-back.png", isCover: true },
  //   },
  {
    front: { link: "/publics/1.png", isCover: false },
    back: { link: "/publics/2.png", isCover: false },
  },
  {
    front: { link: "/publics/3.png", isCover: false },
    back: { link: "/publics/4.png", isCover: false },
  },
  {
    front: { link: "/publics/5.png", isCover: false },
    back: { link: "/publics/6.png", isCover: false },
  },
  {
    front: { link: "/publics/7.png", isCover: false },
    back: { link: "/publics/8.png", isCover: false },
  },
  {
    front: { link: "/publics/9.png", isCover: false },
    back: { link: "/publics/10.png", isCover: false },
  },
  {
    front: { link: "/publics/11.png", isCover: false },
    back: { link: "/publics/12.png", isCover: false },
  },
  {
    front: { link: "/publics/13.png", isCover: false },
    back: null,
  },
];

export default function Publics() {
  return (
    <div className="min-h-screen pt-[135px] m-auto w-[1360px]">
      <div className="p-2 border-b-2 border-amber-600 text-amber-800 text-2xl font-semibold">
        Writing, poetry and wordplay
      </div>
      <div className="flex justify-center items-center my-10">
        <input type="checkbox" id="checkbox-cover"></input>
        {bookPages.map((_, i) => {
          return <input key={i} type="checkbox" id={`checkbox-page${i + 1}`} />;
        })}
        <div className={`book`}>
          {/* front cover */}
          <div className="cover page">
            <label htmlFor="checkbox-cover"></label>
            <div className="front-cover">
              <Image
                src={"/publics/cover-front.png"}
                alt="cover front"
                width={600}
                height={860}></Image>
            </div>
            <div className="front-cover2">
              <Image
                src={"/publics/cover-back.png"}
                alt="cover back"
                width={600}
                height={860}></Image>
            </div>
          </div>
          {/* pages */}
          {bookPages.map((bookpage, i) => {
            return (
              <BookPage
                key={i}
                backImage={bookpage.back?.link}
                frontImage={bookpage.front.link}
                currentPage={i}
              />
            );
          })}
          {/* back cover */}
          <div className="back-cover">
            <Image
              src={"/publics/cover-end.png"}
              width={600}
              height={860}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="p-2 border-b-2 border-amber-600 text-amber-800 text-2xl font-semibold">
        FLSS Magazine
      </div>
    </div>
  );
}
