export default function Projectheader({ text }: { text: string }) {
  return (
    <div className=" text-amber-800 text-[28px] font-bold text-center border-b-2 border-amber-500 my-10 p-2">
      <div className="max-w-[900px] m-auto">{text}</div>
    </div>
  );
}
