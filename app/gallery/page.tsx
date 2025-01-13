import Overlayimage from "../ui/overlayimage";
const images1 = [
  {
    imgSrc: "/gallery/1.png",
    paintingNameText: "The Orchid (2024)",
    paintingSizeText: "390 x 295 ",
    paintingResource: "Acrylics on canvas",
    imgWidth: 427,
    imgHeight: 320,
  },
  {
    imgSrc: "/gallery/6.png",
    paintingNameText: "Purple, blue and green (2021)",
    paintingSizeText: "295 x 190",
    paintingResource: "Acrylic on canvas",
    imgWidth: 427,
    imgHeight: 644,
  },
  {
    imgSrc: "/gallery/2.png",
    paintingNameText: "Blue Butterfly (2019)",
    paintingSizeText: "295 x 190 ",
    paintingResource: "Acrylics on canvas",
    imgWidth: 427,
    imgHeight: 280,
  },
  {
    imgSrc: "/gallery/9.png",
    paintingNameText:
      "Rung vang Bien bac - “Golden Jungles, Silver Seas” (2025)",
    paintingSizeText: "390 x 295 ",
    paintingResource: "Many materials combined: acrylic, glue and pearl mosaic",
    imgWidth: 427,
    imgHeight: 320,
  },
  {
    imgSrc: "/gallery/8.png",
    paintingNameText: "Frayed cactus landscape (2020)",
    paintingSizeText: "390 x 295",
    paintingResource: "Acrylics on canvas",
    imgWidth: 427,
    imgHeight: 426,
  },
];
const images2 = [
  {
    imgSrc: "/gallery/3.png",
    paintingNameText: "TULIP N LEMON",
    paintingSizeText: "390 x 295",
    paintingResource: "Oil paints on canvas",
    imgWidth: 464,
    imgHeight: 637,
  },
  {
    imgSrc: "/gallery/4.png",
    paintingNameText: "Rideau, Cruchon et Compotier: The Recreation (2024)",
    paintingSizeText: "390 x 295",
    paintingResource: "Oil paints on canvas",
    imgWidth: 464,
    imgHeight: 342,
  },
  {
    imgSrc: "/gallery/7.png",
    paintingNameText: "Lemon sky (2021)",
    paintingSizeText: "295 x 190",
    paintingResource: "Acrylics on canvas",
    imgWidth: 464,
    imgHeight: 733,
  },
  {
    imgSrc: "/gallery/5.png",
    paintingNameText: "Koi fish (2022)",
    paintingSizeText: "295 x 190 ",
    paintingResource: "Acrylic embossed on canvas",
    imgWidth: 464,
    imgHeight: 302,
  },
];

export default function Gallery() {
  return (
    <div className=" min-h-screen pt-[135px] m-auto w-[915px]">
      <div className=" flex gap-6">
        <div className="gap-6 flex flex-col">
          {images1.map((image) => {
            return <Overlayimage key={image.imgSrc} {...image} />;
          })}
        </div>
        <div className="gap-6 flex flex-col">
          {images2.map((image) => {
            return <Overlayimage key={image.imgSrc} {...image} />;
          })}
        </div>
      </div>
    </div>
  );
}
