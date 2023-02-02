const Partners = () => {
  const images = [
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/JohnsonandJohnsonLogo.svg",
      alt: "Image 1",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/PayPal-White.svg",
      alt: "Image 2",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/CNX.svg",
      alt: "Image 3",
    },

    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/Uber_logo_2018-2.svg",
      alt: "Image 1",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/Intuit_Logo.svg",
      alt: "Image 2",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/MedStar_Health_logo.svg",
      alt: "Image 3",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/Capital_One_logo.svg",
      alt: "Image 1",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/discovery-education.svg",
      alt: "Image 2",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/Survey-Monkey.svg",
      alt: "Image 3",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/Blackboard.svg",
      alt: "Image 1",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/National-Geographic.svg",
      alt: "Image 2",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/k12-logo.svg",
      alt: "Image 3",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/Decisiv.svg",
      alt: "Image 1",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/Docker.svg",
      alt: "Image 2",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/AARP.svg",
      alt: "Image 3",
    },
  ];

  return (
    <div className="relative">
      <div className="bg-[#FAFAFA]">
        <div className="pt-32 pb-40 max-w-[1148px] mx-auto">
          <h2 className="text-2xl mb-10 text-[#757575]">
            We partner with global enterprises and high-growth companies
          </h2>
          <div />
          <div className="absolute right-0 bottom-0 top-0">
            <img
              src="https://staging.10pearls.com/wp-content/themes/10p-child/assets/images/10p-icon.png"
              alt=""
            />
          </div>
          <div className="grid grid-cols-5 items-center gap-20 ">
            {images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
