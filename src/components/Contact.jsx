import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { FcContacts } from "react-icons/fc";

function Contact() {
  const email = "hiteshkohle@25gmail.com";
  const phoneNumber = "+916266862339";
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  return (
    <div
      name="contact"
      className="pt-36 c w-full md:h-screen justify-center flex items-center p-4  
    "
    >
      <form
        data-aos="zoom-in-right"
        data-aos-duration="3000"
        action="https://getform.io/f/f8f540c6-4cc4-4c02-8047-f29ba87aa767"
        method="post"
        className="flex flex-col max-w-[600px] w-full "
      >
        <div className="pb-8 flex">
          <p className="text-4xl font-bold  border-b-4 inline border-pink-600 text-gray-300 justify-start ">
            Contact
          </p>
          <p className="ml-2 mt-2">
            <FcContacts size={30} />
          </p>
        </div>
        <p className="text-gray-300  py-4 text-xl">
          Let's connect and discuss how we can collaborate! -
          <a className="underline" href={`mailto:${email}`}>
            {email}
          </a>
        </p>

        <input
          className="bg-[#FEDEFF] p-2 rounded-md"
          type="text"
          placeholder="Name"
          name="Name"
        />
        <input
          className="my-4 p-2 bg-[#FEDEFF] rounded-md"
          type="text"
          placeholder="Email"
          name="Email"
        />
        <textarea
          className="bg-[#FEDEFF] p-2 rounded-md "
          placeholder="Message"
          name="message"
          rows="10"
        ></textarea>
        <div className="flex ">
          <button className="text-white border-2 rounded-lg whats hover:scale-110 duration:50 d hover:border-pink-600 px-2  py-3 my-6 mx-auto flex items-center">
            Let's Collaborate
          </button>

          <a
            className=" pt-8 whatsapp show hover:scale-110"
            href={`https://wa.me/${encodedPhoneNumber}`}
          >
            <SiWhatsapp size={35} color={"#25D366"} />
          </a>
        </div>
        {/* <div className='md:hidden flex  gap-3 fex-row justify-center items-center '> 
<a  className="hover:scale-125 duration-500 " href="https://github.com/Kolhehitesh25" ><FaGithub size={50} color={"white"} /></a>

<a  className="hover:scale-125 duration-500  bg-white" href="https://linkedin.com/in/hitesh-kolhe-86aab0210"><FaLinkedin size={50} color={"blue"}/></a>
</div> */}
      </form>
    </div>
  );
}

export default Contact;
