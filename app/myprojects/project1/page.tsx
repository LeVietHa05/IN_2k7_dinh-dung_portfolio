import Projectheader from "@/app/ui/projectheader";
import Projectback from "@/app/ui/projectback";
import Image from "next/image";

const finalImages = [
  { src: "/myprojects/1_10.png", width: 552, height: 200 },
  { src: "/myprojects/1_11.png", width: 552, height: 200 },
  { src: "/myprojects/1_12.png", width: 552, height: 280 },
  { src: "/myprojects/1_13.png", width: 552, height: 280 },
  { src: "/myprojects/1_14.png", width: 362, height: 210 },
  { src: "/myprojects/1_15.png", width: 362, height: 210 },
  { src: "/myprojects/1_16.png", width: 362, height: 210 },
];
export default function Project1() {
  return (
    <div className="my-[135px]">
      <Projectback to="/myprojects" text="TA_TÔ" />
      <div className="w-[1120px] m-auto py-10">
        <div>
          <Image
            src={"/myprojects/1_1.png"}
            width={1120}
            height={340}
            alt=""></Image>
          <div className="px-20 pt-2 text-amber-800 font-semibold">
            From the childhood joy of drawing purple ink patterns on my desk
            mate’s hand to a heartfelt conversation with my mother about
            tattoos, I realized I wanted to do something greater for this unique
            art form - and perhaps that’s the most fitting way to describe how
            TA_TÔ came into being.
            <br />
            <br />
            TA_TÔ is simply the blend of my casual passion for sketching and
            doodling on the skin of friends, paired with a burning desire to
            reshape societal perspectives on tattoos. I believe that no tattoo
            inherently represents negativity; rather, there are only tattoos
            that have yet to be infused with a special meaning or story.
          </div>
        </div>
        <Projectheader text="TA_TÔ - from the dark shade of old Vietnamese society to the pattern of bold identity" />
        <div>
          <ul className="list-disc ml-5 text-amber-800 text-xl font-semibold leading-9">
            <li> OUR STORY</li>
          </ul>
          <div className="flex gap-6 mb-4">
            <div className="shrink-0">
              <Image
                src={"/myprojects/1_2.png"}
                width={548}
                height={548}
                alt=""></Image>
            </div>
            <div className="text-gray-700 font-medium leading-8 flex flex-col items-center justify-center">
              <div className="text-amber-800 text-lg">
                “Mom, next Nov I will turn 18.”
                <br /> “Then, what?”
                <br /> “Then I would dye my hair, pierce my ears and… get a
                tattoo on the left arm.” <br />
                With an astounding, standstill face - “WHAT? I would never let
                you do the last one. It was bỏn for the evils of society only.”{" "}
              </div>
              <div>
                At that moment, I felt the weight of an orthodox conception that
                has long overshadowed the true meaning of tattoos. Tattoos, a
                vibrant and deeply personal art form, are often misunderstood in
                our culture—a dark label unfairly cast upon an act of
                self-expression. I realized that this perception needed to
                change.
              </div>
            </div>
          </div>
          <div className="flex gap-6 mb-4">
            <div className="text-gray-700 font-medium leading-8 flex flex-col items-center justify-center">
              This realization sparked the creation of TA_TO, a temporary tattoo
              shop dedicated to reshaping societal attitudes. TA_TO doesn’t just
              offer tattoos; it offers a story—a narrative that bridges cultural
              heritage and individuality. Every design is infused with cultural
              values, transforming tattoos into bold representations of
              identity, not stigmatized marks of rebellion. <br />
              <br />
              Through TA_TO, I aim to reframe tattoos as an art form that
              celebrates personal and cultural identity. By popularizing
              temporary tattoos, I seek to introduce a fresh perspective to
              those hesitant to embrace the idea. TA_TO is not merely a
              business—it’s a movement to dismantle misconceptions, honor
              traditions, and celebrate self-expression in its most vivid and
              empowering form.
            </div>
            <div className="shrink-0">
              <Image
                src={"/myprojects/1_3.png"}
                width={548}
                height={548}
                alt=""></Image>
            </div>
          </div>
        </div>

        <div>
          <ul className="list-disc ml-5 text-amber-800 text-xl font-semibold leading-9 mt-10">
            <li>HOW WE ACTUALIZE IT </li>
          </ul>
          <div className="flex gap-10 py-4">
            <div className="flex gap-2 shrink-0">
              <div className="shrink-0">
                <Image
                  src={"/myprojects/1_4.png"}
                  width={270}
                  height={380}
                  alt=""></Image>
              </div>
              <div className="shrink-0">
                <Image
                  src={"/myprojects/1_5.png"}
                  width={270}
                  height={380}
                  alt=""></Image>
              </div>
            </div>
            <div className="text-gray-700 font-medium leading-8 flex flex-col items-start justify-center">
              <div className="text-lg text-amber-800 font-semibold">
                Phase 1:
              </div>
              We turn culture into art and art into identity. Our journey begins
              with the rich cultural resources of Hanoi’s inner city and the
              exotic Northern Delta. We collect patterns, symbols, and stories
              rooted in the region’s heritage, then reimagine them with the
              vibrant energy of today’s youth. <br /> These inspirations are
              transformed into one-of-a-kind illustrated designs, blending
              tradition with modernity. TA_TO brings culture to life, turning
              every tattoo into a bold representation of identity that bridges
              the past and the future.
            </div>
          </div>
          <div className="flex gap-10 py-4">
            <div className="text-gray-700 font-medium leading-8 flex flex-col items-start justify-center">
              <div className="text-lg text-amber-800 font-semibold">
                Phase 2:
              </div>
              We firmly believe that tattoos are a visualized expression of
              personal stories. At this stage, we provide our customers with an
              online platform where they can share their unique narratives - be
              it cherished memories, meaningful moments, or aspects of their
              identity they wish to proudly showcase. <br /> From there, the
              TA_TÔ team collaborates with advisors to create a custom tattoo
              design, transforming fleeting words and rigid text into
              beautifully illustrated patterns that bring each story to life.
            </div>
            <div className="flex gap-2 shrink-0">
              <div className="shrink-0">
                <Image
                  src={"/myprojects/1_6.png"}
                  width={270}
                  height={380}
                  alt=""></Image>
              </div>
              <div className="shrink-0">
                <Image
                  src={"/myprojects/1_7.png"}
                  width={270}
                  height={380}
                  alt=""></Image>
              </div>
            </div>
          </div>
          <div className="flex gap-10 py-4">
            <div className="flex gap-2 shrink-0">
              <div className="shrink-0">
                <Image
                  src={"/myprojects/1_8.png"}
                  width={270}
                  height={380}
                  alt=""></Image>
              </div>
              <div className="shrink-0">
                <Image
                  src={"/myprojects/1_9.png"}
                  width={270}
                  height={380}
                  alt=""></Image>
              </div>
            </div>
            <div className="text-gray-700 font-medium leading-8 flex flex-col items-start justify-center">
              <div className="text-lg text-amber-800 font-semibold">
                Phase 3:
              </div>
              In the final phase, TA_TÔ partners with a local Vietnamese artist
              whose talents and achievements deserve greater recognition.
              Together, we’ll create a unique collection of tattoo stickers
              inspired by the artist’s original works. Additionally, we’ll host
              a series of talk shows to explore diverse perspectives on
              traditional art, reimagined through the lens of the modern age.
            </div>
          </div>
        </div>
        <div>
          <ul className="list-disc ml-5 text-amber-800 text-xl font-semibold leading-9">
            <li> OUR COLLECTIVE GALLERY</li>
          </ul>
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
