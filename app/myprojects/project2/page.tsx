import Projectheader from "@/app/ui/projectheader";
import Projectback from "@/app/ui/projectback";
import Image from "next/image";

const finalImages = [
  { src: "/myprojects/2_6.png", width: 362, height: 300 },
  { src: "/myprojects/2_7.png", width: 362, height: 300 },
  { src: "/myprojects/2_8.png", width: 362, height: 300 },
  { src: "/myprojects/2_9.png", width: 552, height: 300 },
  { src: "/myprojects/2_10.png", width: 552, height: 300 },
  { src: "/myprojects/2_11.png", width: 362, height: 300 },
  { src: "/myprojects/2_12.png", width: 362, height: 300 },
  { src: "/myprojects/2_13.png", width: 362, height: 300 },
];
export default function Project1() {
  return (
    <div className="my-[135px]">
      <Projectback to="/myprojects" text="Chu May Project" />
      <div className="w-[1120px] m-auto py-10">
        <div className="flex">
          <div className="text-amber-800 font-semibold leading-8">
            Founded in July 2022, the Chữ Mây Project is dedicated to organizing
            library donations and fostering cultural development in the northern
            mountainous regions of Vietnam. The project&#39;s primary focus is
            on the H’Mong ethnic community—one of the most renowned yet
            underserved minority groups with limited access to modern society.
            <br />
            <br />
            The mission of Chữ Mây is to organize book donation trips and
            establish libraries in remote schools across Hà Giang, providing
            educational resources for H’Mong students. Notably, Chữ Mây Project
            is also the pioneer in publishing a cultural compendium about
            Vietnam’s Northern Delta in three languages: Vietnamese, H’Mong, and
            English.
          </div>
          <Image
            src={"/myprojects/2_1.png"}
            width={548}
            height={384}
            alt=""></Image>
        </div>
        <Projectheader text="CHU MAY PROJECT - From the voices of Northern culture to the letters of cloudy mountains." />
        <div>
          <ul className="list-disc ml-5 text-amber-800 text-xl font-semibold leading-9">
            <li> OUR STORY</li>
          </ul>
          <div className="flex gap-6 mb-4">
            <div className="shrink-0">
              <Image
                src={"/myprojects/2_2.png"}
                width={548}
                height={326}
                alt=""></Image>
            </div>
            <div className="text-gray-700 font-medium leading-8 flex flex-col items-center justify-center">
              <div className="text-amber-800 text-lg"></div>
              <div>
                It all began as a faint spark during a family trip to Hà Giang
                when I had just started secondary school. At first, I treated it
                as an aimless journey, a chance to relax and lose myself in the
                curves of Hà Giang’s mountain passes. The purpose of the trip -
                our family’s mission to donate supplies - barely crossed my
                mind. But that changed the moment I noticed a group of H’Mong
                children sitting on the pavement by the roadside.
              </div>
            </div>
          </div>
          <div className="flex gap-6 mb-4">
            <div className="text-gray-700 font-medium leading-8 flex flex-col items-center justify-center">
              They were children just like me - innocent and wide-eyed - but
              with muddier clothes and a natural simplicity. They struggled to
              pronounce Vietnamese as they greeted our packed coach, their
              smiles earnest and unguarded. That was when I truly saw the stark
              contrast between their world and mine. It wasn’t just the lush
              mountains, the fresh air, or the sparse roads that set Hà Giang
              apart from the bustling city I called home. It was the people -
              the resilient and vibrant H’Mong community.
              <br />
              From that moment, the vivid impression of Hà Giang and its people
              carved itself into my memory. It kindled a lifelong fascination
              with mountainous cultures and, more importantly, a profound
              respect for the H’Mong way of life.
            </div>
            <div className="shrink-0">
              <Image
                src={"/myprojects/2_3.png"}
                width={548}
                height={348}
                alt=""></Image>
            </div>
          </div>
        </div>

        <div>
          <ul className="list-disc ml-5 text-amber-800 text-xl font-semibold leading-9 mt-10">
            <li>THE BEGINNING OF CHU MAY</li>
          </ul>
          <div className="flex gap-10 py-4">
            <div className="flex gap-2 shrink-0">
              <div className="shrink-0">
                <Image
                  src={"/myprojects/2_4.png"}
                  width={548}
                  height={380}
                  alt=""></Image>
              </div>
            </div>
            <div className="text-gray-700 font-medium leading-8 flex flex-col items-start justify-center">
              Growing up, keeping the whole-hearted passion for culture and the
              novel love of media, I have worked and discovered diligently on
              the life of the H&#39;Mong community, dwelling deeper into the
              invisible gap between ethnicity and gradually building up a
              passion for culture and ethical embracing. That’s how I crafted
              “Chu May” - the letters harvested from the high clouds of deserted
              Ha Giang. <br />
              The Chu May Project began with a burning mission: to fundraise
              books and build private libraries for schools across Ha Giang,
              creating better educational opportunities for H’Mong children.
            </div>
          </div>
          <ul className="list-disc ml-5 my-4 text-amber-800 text-xl font-semibold leading-9">
            <li> OUR UNIQUE APPROACH</li>
          </ul>
          <div className="text-gray-700 font-medium leading-8 px-20">
            What makes Chu May different from other charitable organizations is
            our dedication to publishing materials in the H’Mong language.
            <br /> <br />I realized that most donated resources provided to
            H’Mong children were written exclusively in Vietnamese. This raised
            a critical question in my mind: “Are we truly helping these children
            access knowledge, or are we forcing them to navigate it on terms
            that aren’t their own?” The question became even more pressing as I
            witnessed young H’Mong children struggling to learn Vietnamese
            before they could even master their mother tongue.
            <br /> <br />
            This realization inspired a new vision: instead of expecting the
            H’Mong community to adapt to us, why not embrace their identity and
            support their growth on their terms?
            <br /> <br />
            This vision gave birth to Mông Publication - a trilingual cultural
            resource written in H’Mong, Vietnamese, and English. It is designed
            to introduce H’Mong children to the rich cultures of regions they
            may never have visited while preserving and celebrating their
            linguistic heritage.
            <br /> <br />
            Now, Chu May Project is a book fundraiser, a library builder and a
            H’Mong publication publisher.
          </div>
          <ul className="list-disc ml-5 my-4 text-amber-800 text-xl font-semibold leading-9">
            <li>OUR LASTING IMPACT</li>
          </ul>
          <div className="px-20 text-gray-700 font-medium leading-8">
            <ul>
              <li>
                - Building 3 libraries in Ha Giang over 4 years of operating:
                <ul className="list-disc ml-10">
                  <li>
                    1st library in Lang Chu village, Lung Ho commune, Yen Minh
                    district, Ha Giang.
                  </li>
                  <li>
                    2nd library in Tia Cu Si, Giang Chu Phin commune, Meo Vac
                    district, Ha Giang
                  </li>
                  <li>
                    3rd library in Hua Tat village, Van Ho commune, Moc Chau
                    district, Son La.
                  </li>
                </ul>
              </li>
              <li>
                - Fundraise a total of 2,000 books and 40,000,000 VND of
                scholarship fees for H’Mong children in 4 years.
              </li>
              <li>
                - Publish the first-ever trilingual cultural publication written
                in Vietnamese, H’Mong and English.
              </li>
            </ul>
          </div>
        </div>
        <Projectheader text="OUR GALLERY" />

        <div>
          <ul className="list-disc ml-5 my-4 text-amber-800 text-xl font-semibold leading-9">
            <li> The Mong Publication</li>
          </ul>
          <div className="flex gap-6 mb-4">
            <div className="shrink-0">
              <Image
                src={"/myprojects/2_5.png"}
                width={548}
                height={380}
                alt=""></Image>
            </div>
            <div className="text-gray-700 font-medium leading-8 flex flex-col items-center justify-center">
              <div>
                The Mông Publication is a heartfelt creation that embodies my
                passion for the intersection of culture and media. It serves as
                a pragmatic initiative to bridge the gap between ethnic
                communities within my country. With the support of nearly 50
                dedicated high school students from my area, a collaboration
                with Mông language specialist Ms. Thào Thị Xí and guidance from
                advisors specializing in ethnography, Asian culture, and media,
                the Mông Publication has successfully been brought to life.
              </div>
            </div>
          </div>
          <div className="px-20 mb-10 text-gray-700 font-medium leading-8">
            Focusing on the rich cultural heritage of the Northern Delta region,
            the publication explores diverse multi-perspectives such as
            traditional costumes, cuisine to even festivals and rituals. Each
            cultural aspect is presented in an accessible and engaging
            manner—through simplified language, vivid illustrations, and
            authentic photographs—to provide H’Mông children with the optimal
            conditions to absorb new knowledge.
            <br />
            <br />
            The content is thoughtfully divided into two primary languages:
            Vietnamese and H’Mông, ensuring accessibility for the target
            audience. Additionally, English is incorporated to a lesser extent,
            expanding the publication’s reach while maintaining its focus on
            cultural preservation and education.
          </div>
          <ul className="list-disc ml-5 my-4 text-amber-800 text-xl font-semibold leading-9">
            <li> Recapping materials</li>
          </ul>
          <div className="px-20 text-gray-700 font-medium leading-8 flex flex-col items-center justify-center">
            <div>
              Diligently working for 4 years with the dusty winds of Ha Giang
              mountain, Chữ Mây Project has captured more than just images of
              our community service or the natural beauty of the H’Mong ethnics.
              All of these valuable moments have been transformed into a core
              memory of our organization - an unchangeable value of us for the
              community.
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            {finalImages.map((img) => {
              return (
                <Image
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt=""
                  key={img.src}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
