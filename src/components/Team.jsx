import React from "react";

// Import local images if available (adjust paths as needed)
// import member1Image from "../assets/team/member1.jpg";
// import member2Image from "../assets/team/member2.jpg";
// import member3Image from "../assets/team/member3.jpg";
// import member4Image from "../assets/team/member4.jpg";

const Team = () => {
    const teamMembers = [
        {
            name: "Alice Johnson",
            role: "Frontend Developer",
            image: "https://via.placeholder.com/150", // Replace with local image if needed
            bio: "Alice specializes in creating responsive and interactive web interfaces with React.",
        },
        {
            name: "Bob Smith",
            role: "Backend Developer",
            image: "https://via.placeholder.com/150", // Replace with local image if needed
            bio: "Bob is an expert in building scalable server-side applications using Node.js and Express.",
        },
        {
            name: "Clara Lee",
            role: "Full Stack Developer",
            image: "https://via.placeholder.com/150", // Replace with local image if needed
            bio: "Clara has a strong background in both frontend and backend development, with a focus on React and MongoDB.",
        },
        {
            name: "David Kim",
            role: "UI/UX Designer",
            image: "https://via.placeholder.com/150",
            bio: "David is a creative designer focused on creating intuitive and user-friendly interfaces.",
        },
    ];

    return (
        <section id="team" className="bg-white py-12 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Ons Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-600 mb-2">{member.role}</p>
                            <p className="text-gray-600">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
