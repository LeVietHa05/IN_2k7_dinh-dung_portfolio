import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <Link
        style={linkStyle}
        href={"https://www.instagram.com/dung_dinh.ococ/"}>
        <Image
          className="shink-1"
          src={"/instagram.png"}
          width={24}
          height={24}
          alt=""></Image>
        dung_dinh.ococ
      </Link>
      <div className="w-0.5 h-8 bg-gray-300 rounded-sm"></div>
      <Link
        style={linkStyle}
        href={"https://www.facebook.com/nguyendinh.dung.9822"}>
        <Image src={"/facebook.png"} width={24} height={24} alt=""></Image>
        nguyendinh.dung.9822
      </Link>
      <div className="w-0.5 h-8 bg-gray-300 rounded-sm"></div>
      <div style={linkStyle}>
        <Image src={"/google.png"} width={24} height={24} alt=""></Image>
        nddung29@gmail.com
      </div>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "32px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "16px",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(10px)",
  padding: "8px 16px",
  borderRadius: "10px",
  zIndex: 1000,
};

const linkStyle: React.CSSProperties = {
  textDecoration: "underline",
  color: "black",
  display: "flex",
  gap: "8px",
  justifyContent: "center",
  alignItems: "center",
};

export default Footer;
