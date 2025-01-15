import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen pt-[135px]">
      <div className="flex justify-evenly items-center">
        <div className="w-[442px] flex flex-col">
          <div className="text-amber-800 text-[44px] leading-10">
            Personal Portfolio
          </div>
          <div className="text-amber-800 text-2xl font-semibold leading-9">
            Nguyen Dinh Dung
          </div>
          <ul className="text-gray-700 font-medium text-xl leading-9 list-disc ml-4">
            <li>Hanoian, Sagitarius</li>
            <li>English Major at Foreign Language Specialized School</li>
            <li>
              Engross into fine arts, Vietnamese cultures and
              mass-media-creating
            </li>
          </ul>
          <div className="p-3 w-fit mt-6 text-amber-900 border border-amber-900 rounded-lg text-xl font-medium leadin-9">
            More about me
          </div>
        </div>
        <div>
          <Image
            src={"/about1.png"}
            width={423}
            height={524}
            alt="about me 1"
          />
        </div>
      </div>

      <div className="flex justify-evenly items-center pt-10">
        <div className="shrink-0">
          <Image
            src={"/about2.png"}
            width={297}
            height={596}
            alt="about me 2"
          />
        </div>
        <div className="w-[768px]">
          <ul className="list-disc ml-4 text-amber-900 text-xl font-semibold leading-9">
            <li>My story</li>
          </ul>
          <div className="text-gray-700 text-base leading-9">
            “Hey, sell me this fish for 80000 VNĐ! - There is no such price,
            you’re crazy!”
            <br />
            “Dung! Have you burned the incense yet?”
            <br />
            “Dung, come here and help with the chung cake for the feast -
            quickly”
            <br />
            “Don’t forget to cover the well, Dung!”
            <br />
            From the chaotic bustle of the local market to the gentle waft of
            agarwood incense, I was born into the heart of a cultural cradle - a
            traditional Hanoian family. Unlike typical nuclear households, the
            rich and intricate connection between three generations in my house
            is the perfect foundation for fostering a deep sense of belonging
            and a profound awareness of cultural identity in mine.
            <br />
            In a place where every fragmented aspect of life was deeply
            intertwined with Vietnamese culture, I soon came to realize that
            culture is the very air we breathe - an integral force shaping my
            existence and identity.
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center pt-10 relative w-[1280px] m-auto">
        <div className="w-[768px]">
          <div className=" text-amber-900 text-xl font-semibold leading-9">
            Yet, culture remains abstract, vast, and silent. 
          </div>
          <div className="text-gray-700 text-base leading-9">
            The only way to truly engage with it is through personal and
            human-centered expression. For me, this took form in art and media -
            my most dedicated pursuits.
            <br />
            Since then, I have used art and media as powerful tools for
            articulating my perceptions of culture, shedding light on its
            often-overlooked dimensions and celebrating the hidden narratives
            embedded within. It all started with the Chữ Mây Project - my
            whole-hearted mission of embracing the cultural beauty of the H’Mong
            and bridging the gap between majority and minority ethnics within
            Vietnam. Otherwise, TA_TO hits differently: this small business
            tends to exploit an uncommon aspect of Vietnamese culture - the folk
            street tattoo artistry - and freshen the perception of it in
            generations, giving it a rebirth. Recently, I have been diligently
            working on pearl mosaic, reserved rhyme or traditional literary play
            - all of these fragments keep deepening my sense of cultural
            belonging, while spontaneously contributing to actively reshape the
            view of society on culture.
            <br />
            Perhaps that is why I often see myself as a cartographer,
            reconstructing the abstract definition of Vietnamese culture through
            my unique sense and perception, navigating it in a positive,
            adaptive way.
          </div>
        </div>
        <div className="absolute right-0">
          <Image
            src={"/about3.png"}
            width={490}
            height={560}
            alt="about me 3"
          />
        </div>
      </div>
    </div>
  );
}
