"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const renderError = () => {
    if (errors.name?.type === "required") {
      return <p className="text-red-700">Name is required</p>;
    } else if (errors.name?.type === "minLength") {
      return <p className="text-red-700">Name is too short</p>;
    } else if (errors.name?.type === "maxLength") {
      return <p className="text-red-700">Name is too long</p>;
    } else if (errors.email?.type === "required") {
      return <p className="text-red-700">Email is required</p>;
    } else if (errors.email?.type === "minLength") {
      return <p className="text-red-700">Email is too short</p>;
    } else if (errors.email?.type === "maxLength") {
      return <p className="text-red-700">Email is too long</p>;
    } else if (errors.email?.type === "pattern") {
      return <p className="text-red-700">Invalid email</p>;
    }

    return null;
  };

  const onSubmit: SubmitHandler<FormData> = async (data, event) => {
    event?.preventDefault();

    console.log(data);

    const requestBody = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (res.status === 200) {
      // SUCCESS STATE
      alert("OK");
    } else {
      // ERROR STATE
      alert("ERROR");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl flex flex-col md:gap-8 gap-4 w-full bg-lime-300 text-black p-8 md:py-16"
    >
      <div className="flex flex-col gap-4 mb-4">
        <h1 className="leading-1 text-4xl">
          Got ideas? We&apos;ve got the skills. Let&apos;s team up.
        </h1>
        <p>Tell us more about yourself and what you have in mind.</p>
      </div>
      {renderError()}
      <input
        {...register("name", {
          required: true,
          minLength: 2,
          maxLength: 30,
        })}
        placeholder="Your name"
        className="border-b border-black py-2 placeholder:text-black focus:outline-none bg-transparent"
      />
      <input
        {...register("email", {
          required: true,
          minLength: 2,
          maxLength: 30,
          pattern: /^\S+@\S+$/i,
        })}
        placeholder="you@email.com"
        className="border-b border-black py-2 placeholder:text-black focus:outline-none bg-transparent"
      />
      <textarea
        {...register("message", {
          required: true,
        })}
        rows={6}
        maxLength={500}
        placeholder="Tell us a little about your project..."
        className="border-b border-black resize-none py-2 placeholder:text-black focus:outline-none bg-transparent"
      />
      <div className="flex flex-col gap-4"></div>
      <button className="w-full font-bold px-4 py-3 hover:bg-slate-900 transition-colors duration-200 ease-in-out rounded-lg bg-slate-950 text-white">
        Let&apos;s get started
      </button>
    </form>
  );
};

export default ContactForm;
