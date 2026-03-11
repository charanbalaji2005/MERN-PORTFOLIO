import { mySocials } from "../constants";
const Footer = () => {
  return (
    <footer className="w-full pb-6 text-sm text-neutral-400 px-5 md:px-16 lg:px-24 xl:px-32">
      <div className="mb-6 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
        <div className="flex gap-2">
          <p className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</p>
          <p>|</p>
          <p className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
        </div>
        <div className="flex items-center gap-4">
          {mySocials.map((social, index) => (
            <a href={social.href} key={index} className="transition-transform hover:-translate-y-1">
              <img src={social.icon} className="w-6 h-6 hover:brightness-125" alt={social.name} />
            </a>
          ))}
        </div>
        <p>© 2025 CB7. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
