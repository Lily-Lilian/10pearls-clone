const Innovation = () => {
  const cards = [
    {
      src: "https://10pearls.com/wp-content/uploads/2021/10/Innovation.png",
      title: "Innovation",
      paragraph:
        "We design transformational digital products and experiences that drive real business value and customer impact—so you can create innovative products faster and at scale",
      link: "learn more",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2021/10/Modernization.png",
      title: " Modernization",
      paragraph:
        "We design transformational digital products and experiences that drive real business value and customer impact—so you can create innovative products faster and at scale",
      link: "learn more",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2021/10/Digitalization.png",
      title: "Innovation",
      paragraph:
        "We design transformational digital products and experiences that drive real business value and customer impact—so you can create innovative products faster and at scale",
      link: "learn more",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2021/10/Augmentation.png",
      title: "Innovation",
      paragraph:
        "We design transformational digital products and experiences that drive real business value and customer impact—so you can create innovative products faster and at scale",
      link: "learn more",
    },
  ];
  return (
    <div className="flex- flex-col- gap-40 space-y-40">
      {cards.map((item, index) => (
        <div
          key={index}
          className={` ${
            index == 1 || index == 3 ? "flex flex-row-reverse" : "flex"
          } max-w-[1310px] mx-auto bg-[#FAFAFA]`}
        >
          <div className="flex flex-col space-y-8 py-16 px-10">
            <h2 className="text-3xl text-[#757575]">{item.title}</h2>
            <p className="text-lg">{item.paragraph}</p>
            <a
              href={item.link}
              className="text-base text-[#0045A6] hover:underline font-semibold"
            >
              {item.link}
            </a>
          </div>
          <img className="max-w-[583px]" src={item.src} />
        </div>
      ))}
    </div>
  );
};

export default Innovation;
