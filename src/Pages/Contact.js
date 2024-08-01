import React, { useRef } from "react";
import Layout from "../component/Layout";
import AnimatedText from "../component/AnimatedText";
import TransitionEffect from "../component/TransitionEffect";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_64tm62y",
        "template_jnizrna",
        form.current,
        "z8JBxi7b6etIvQ0pC"
      )
      .then(
        (result) => {
          if ((result.text = "OK")) {
            Swal.fire({
              title: "Thank You !!",
              confirmButtonText: "Ok",
              icon: "success",
            }).then((result) => {
              if (result.isConfirmed) {
                e.target.reset();
              }
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <head>
        <title> {(document.title = "Contact Page")}</title>
        <meta name="description" content="any description" />
      </head>
      <TransitionEffect />
      <Layout className="pt-16">
        <AnimatedText
          text="Get In Touch"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <article
          className="bg-white border border-purple-600 border-solid lg:flex-col lg:p-8 mx-auto p-12 relative rounded-3xl
         rounded-br-2xl shadow-2xl w-2/3 xs:p-4 xs:rounded-2xl xs:rounded-br-3xl"
        >
          <div
            className="absolute top-0 -right-3 -z-10 w-[109%] h-[105%] rounded-[2.5rem] bg-purple-600 rounded-br-3xl 
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
          />

          <form
            className="h-auto mr-4 text-xl w-auto pb-8 "
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-row pt-5">
              <label className="w-1/2">Name</label> &nbsp;
              <input
                name="user_name"
                type="text"
                className="rounded text-black border border-black w-full "
                required
              />
            </div>
            <div className="flex flex-row pt-5">
              <label className="w-1/2">Email</label>
              <input
                name="user_email"
                type="email"
                className="rounded text-black border border-black w-full"
                required
              />
            </div>

            <div className="flex flex-row pt-5">
              <label className="w-1/2">Message</label>
              <textarea
                name="message"
                type="text"
                className="rounded text-black border border-black w-full"
                rows={5}
                required
              />
            </div>
            <button
              value="send"
              className=" float-right mt-5 mb-2.5 rounded-lg bg-purple-600 text-white p-2 px-6 text-lg font-semibold
            dark:bg-white dark:text-black hover:border border-purple-600 hover:bg-white hover:text-purple-600
            sm:px-4 sm:text-base"
            >
              Submit
            </button>
          </form>
        </article>
      </Layout>
    </div>
  );
};

export default Contact;
