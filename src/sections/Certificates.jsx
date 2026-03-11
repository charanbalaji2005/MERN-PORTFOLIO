import Certificate from "../components/Certificate.jsx";
import { certificates } from "../constants";

const Certificates = () => {
  return (
    <section className="relative c-space section-spacing">
      <h2 className="text-heading">My Certificates</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {certificates.map((cert) => (
        <Certificate key={cert.id} {...cert} />
      ))}
    </section>
  );
};

export default Certificates;
