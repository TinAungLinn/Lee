import React from "react";

const teamMembers = [
  {
    name: "Harvey Spector",
    designation: "Founder - CEO",
    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team2-free-img.png",
  },
  {
    name: "Jessica Pearson",
    designation: "COO",
    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team1-free-img.png",
  },
  {
    name: "Rachel Zain",
    designation: "Marketing Head",
    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team3-free-img.png",
  },
  {
    name: "Luise Litt",
    designation: "Lead Developer",
    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team4free-img.png",
  },
  {
    name: "Katrina Bennett",
    designation: "Intern Designer",
    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team5-free-img.png",
  },
  {
    name: "Mike Ross",
    designation: "Intern Designer",
    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team6-free-img.png",
  },
];

const OurTeams = () => {
  return (
    <div className=" mb-32 flex flex-col justify-center items-center">
      <div className="my-20 w-[600px] flex flex-col justify-center items-center p-7 ">
        <h1 className=" text-6xl text-slate-700 font-semibold mb-3">Our Team</h1>
        <p className=" text-center text-xl leading-relaxed text-slate-700">We are comprised of experienced with passion for technology and commitment to customer satisfaction.</p>
      </div>
      <div className=" flex justify-center items-center gap-10 flex-wrap">
        {teamMembers.map((teamMember) => {
          return (
            <div
              key={teamMember.id}
              className=" w-80 h-96 flex flex-col justify-center gap-3 items-center p-5"
              style={{ backgroundColor: "#F9FAFB" }}
            >
              <div className=" w-32 rounded-full">
                <img src={teamMember.img} alt="" />
              </div>
              <h1 className=" text-3xl font-semibold text-slate-700">
                {teamMember.name}
              </h1>
              <p className=" text-xl text-slate-700">
                {teamMember.designation}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeams;
