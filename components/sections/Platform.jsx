const Platform = () => {
  const logos = [
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/Google_Cloud_Logo.svg",
      alt: "Image 1",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2021/10/aws-partnernetwork.svg",
      alt: "logo",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2021/10/microsoft-partner-logo-new.svg",
      alt: "logo",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/salesforce_logo.svg",
      alt: "logo",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/servicenow-1-1.svg",
      alt: "logo",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/sap-ariba-vector-logo-1.svg",
      alt: "logo",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/Microsoft_Azure_Logo.svg",
      alt: "logo",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/11/Adobe_logo_and_wordmark_2017.svg",
      alt: "logo",
    },
  ];
  return (
    <div className="bg-[#F8F9FA] mt-20">
      <div className="p-10 max-w-[1240px] mx-auto">
        <div>
          <h2 className="text-xl font-semibold text-[#0045A6] mb-16 ">
            TECHNOLOGY PLATFORMS
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-12">
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
