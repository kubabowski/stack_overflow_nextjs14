import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidbar from "@/components/shared/RightSidbar";
import NavBar from "components/shared/navbar/NavBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <NavBar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-12">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidbar />
      </div>
      Toaster
    </main>
  );
};

export default Layout;
