import Image from "next/image";
interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  overlayText: string;
}

export default function Overlaymagazine({
  src,
  alt,
  width,
  height,
  overlayText,
}: Props) {
  return (
    <div className="group relative ">
      <Image
        className="group-hover:rounded-lg"
        src={src}
        alt={alt}
        width={width}
        height={height}></Image>
      <div className="p-10 opacity-0 group-hover:opacity-100 group-hover:rounded-lg  transition-all absolute inset-0 flex items-center justify-center bg-Transparentwhite30 text-amber-800 backdrop-blur-sm">
        <div className="bg-Transparentwhite60 text-xl font-semibold leading-8 p-2 rounded-lg">
          {overlayText}
        </div>
      </div>
    </div>
  );
}
