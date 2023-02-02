import Link from "next/link";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";

const Footer = () => {
  const footerLinks = [
    { text: "Insights", page: "get-cozy" },
    { text: " Industries", page: "about-us" },
    { text: "Services", page: "our-work" },
    { text: "News", page: "blog" },
    { text: "About us", page: "say-hi" },
    { text: "contact", page: "contact" },
  ];
  const countries = [
    { text: "USA (HQ in Wash DC)" },
    { text: "Costa Rica" },
    { text: "Pakistan" },
    { text: "Canada" },
    { text: "Colombia" },
    { text: "Peru" },
    { text: "UK" },
    { text: "UAE" },
  ];
  return (
    <div className="bg-[#202022] text-white font-semibold">
      <div className=" flex justify-between max-w-[1240px] mx-auto pt-20 border-b border-white pb-8">
        <div className="flex flex-col gap-6 max-w-[533px] border-white border-r px-8">
          <img
            className="w-40 cursor-pointer"
            src="https://10pearls.com/wp-content/uploads/2020/06/10P-Logo.svg"
            alt="logo"
          />
          <p className="text-lg">
            10Pearls is an award winning digital development company, helping
            business with product design, development and technology
            acceleration.
          </p>
        </div>
        <div className="grid grid-cols-2 cursor-pointer gap-y-1 gap-x-6 border-white border-r max-w-[320px] px-20 pt-4">
          {footerLinks.map((link, index) => (
            <Link key={index} href={`/${link.page}`}>
              <div className="text-sm">{link.text}</div>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6 max-w-[427px] pt-4">
          {countries.map((country, index) => (
            <p className="text-sm" key={index}>
              {country.text}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-6 cursor-pointer max-w-[1240px] mt-8 mx-auto items-center">
        <p>+1-703-935-1919</p>
        <p>info@10pearls.com</p>
        <CgFacebook className="border border-white rounded-full w-10 h-10 p-2" />
        <AiOutlineTwitter className="border border-white rounded-full w-10 h-10 p-2" />
        <GrLinkedinOption className="border border-white rounded-full w-10 h-10 p-2" />
      </div>
    </div>
  );
};

export default Footer;
