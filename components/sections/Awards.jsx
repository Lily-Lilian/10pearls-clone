const Awards = () => {
  const awards = [
    {
      src: "https://10pearls.com/wp-content/uploads/2022/05/ey-logo.png",
      paragraph:
        "EY Announced Imran Aftab as an Entrepreneur Of The Year® 2022 Mid-Atlantic Award Winner",
      link: "learn more",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/09/inc-500.svg",
      paragraph:
        "EY Announced Imran Aftab as an Entrepreneur Of The Year® 2022 Mid-Atlantic Award Winner",
      link: "learn more",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2022/08/ft-logo-12.png",
      paragraph:
        "EY Announced Imran Aftab as an Entrepreneur Of The Year® 2022 Mid-Atlantic Award Winner",
      link: "learn more",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/06/GARTNER-2.svg",
      paragraph:
        "EY Announced Imran Aftab as an Entrepreneur Of The Year® 2022 Mid-Atlantic Award Winner",
      link: "learn more",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/06/FORRESTER-2.svg",
      paragraph:
        "EY Announced Imran Aftab as an Entrepreneur Of The Year® 2022 Mid-Atlantic Award Winner",
      link: "learn more",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2022/04/MicrosoftTeams-image-63.png",
      paragraph:
        "EY Announced Imran Aftab as an Entrepreneur Of The Year® 2022 Mid-Atlantic Award Winner",
      link: "learn more",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2021/08/tmp_1629784342687.png",
      paragraph: "#1 Most Diverse Midsize Company in Greater DC",
      link: "learn more",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2020/06/THEWASHINGTON-POST-1.svg",
      paragraph:
        "EY Announced Imran Aftab as an Entrepreneur Of The Year® 2022 Mid-Atlantic Award Winner",
      link: "learn more",
    },
  ];
  return (
    <div className="max-w-[1240px] mx-auto mt-20">
      <h1 className="mb-12 text-[#0045A6] text-[22px] font-semibold">
        RECOGNITION & AWARDS
      </h1>
      <div className="grid grid-cols-2 gap-12">
        {awards.map((award, index) => (
          <div key={index} className="max-w-[540px] relative">
            <img
              className={`${
                index === 5 ? "max-w-[140px]" : ""
              } max-w-[280px] bg-white absolute -top-6 left-8`}
              src={award.src}
              alt="images"
            />
            <div className="border hover:border-[#0045A6] px-20 pt-20 pb-2 flex flex-col gap-8">
              <p className="text-xl">{award.paragraph}</p>
              <a href="#" className="text-[#0045A6] font-semibold">
                {award.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
