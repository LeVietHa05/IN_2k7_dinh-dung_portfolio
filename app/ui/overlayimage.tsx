import Image from "next/image";

interface OverlayimageProps {
  imgSrc: string;
  paintingNameText: string;
  paintingSizeText: string;
  paintingResource: string;
  imgWidth: number;
  imgHeight: number;
}

export default function Overlayimage({
  imgSrc,
  imgHeight,
  imgWidth,
  paintingNameText,
  paintingResource,
  paintingSizeText,
}: OverlayimageProps) {
  return (
    <div className={`group relative w-[${imgWidth}px] h-[${imgHeight}px]`}>
      <Image
        src={imgSrc}
        height={imgHeight}
        width={imgWidth}
        alt={paintingNameText}></Image>
      <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 h-full  w-full p-5 bg-[#242F414D] flex flex-col justify-end">
        <div className=" absolute inset-x-0 bottom-0 bg-[#1D1708CC] h-[180px] blur-[32px] rounded-tr-[200px]"></div>
        <div className="absolute pb-5 bottom-0 text-amber-800 text-lg font-medium">
          <div className="text-amber-100 text-2xl font-semibold">
            {paintingNameText}
          </div>
          <div>{paintingSizeText}</div>
          <div>{paintingResource}</div>
        </div>
      </div>
    </div>
  );
}
