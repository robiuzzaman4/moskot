import Image from "next/image";

const Spinner = () => {
  return (
    <div className="spinner">
      <Image
        className="spinner-img"
        src="/spinner.svg"
        alt="Spinner Icon"
        height={24}
        width={24}
      />
    </div>
  );
};

export default Spinner;
