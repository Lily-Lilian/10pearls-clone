const Ready = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://10pearls.com/wp-content/uploads/2020/06/Hexagon_BG_2-2-scaled_063b389aa8188d59802490cc51e87e5f-1.jpg')`,
      }}
      className="bg-cover"
    >
      <div className="flex flex-col justify-center text-center mt-20">
        <div className="py-16">
          <h2 className="mb-6 text-3xl text-[#757575]">
            Ready to get started?
          </h2>
          <button className="border  text-[#0045A6] max-w-[153px] border-[#0045A6] px-4 py-2 hover:bg-[#0045A6] hover:text-white">
            contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ready;
