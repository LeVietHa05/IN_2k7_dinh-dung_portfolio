import Link from "next/link";
import Image from "next/image";
export default function Projectback({
  to,
  text,
}: {
  to: string;
  text: string;
}) {
  return (
    <Link href={to} className="flex gap-2 justify-start items-center border-b-2 border-amber-500 text-amber-800 text-2xl font-semibold leading-9">
      <Image src={"/Arrow-Left.png"} width={44} height={44} alt=""></Image>
      <div>{text}</div>
    </Link>
  );
}
