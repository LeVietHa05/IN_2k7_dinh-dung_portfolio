import Overlaymagazine from "../ui/overlayMagazine";
import Link from "next/link";

export default function MyProject() {
  return (
    <div className="flex mt-[135px] justify-evenly">
      <Link href={"/myprojects/project1"}>
        <Overlaymagazine
          src="/myprojects/project1.png"
          alt="ta to"
          height={400}
          width={580}
          overlayText="Ta_Tô"
        />
      </Link>
      <Link href={"/myprojects/project2"}>
        <Overlaymagazine
          src="/myprojects/project2.png"
          alt="ta to"
          height={400}
          width={580}
          overlayText="Chu May Project"
        />
      </Link>
    </div>
  );
}
