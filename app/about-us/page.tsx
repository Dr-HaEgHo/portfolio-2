import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen text--colors_default bg--default">
      <Navbar />
      <h1 className="text-3xl font-bold underline text--colors_primary px-20 py-12">
        This is the About page
      </h1>
    </main>
  );
};

export default page;
