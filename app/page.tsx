import PatientForm from "@/components/PatientForm";
import { HeartPulse, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="h-screen">
      {/* OTP VERIFICATION */}

      <div className="h-full flex flex-col md:flex-row justify-center lg:justify-between">
        <div className="flex md:w-[50%] md:mx-4 flex-col items-center md:justify-center gap-4 lg:gap-8 mt-8 lg:mt-16 p-4">
          <Link href={"/"} className="cursor-pointer uppercase">
            <h1 className="flex gap-2 lg:text-4xl text-3xl font-bold tracking-wider ">
              Healthcare
              <span className="flex items-center justify-center text-green-400">
                D
                <span>
                  <HeartPulse />
                </span>
                c
              </span>
            </h1>
          </Link>
          <p className="text-xs tracking-wider text-center font-extralight lg:text-sm w-[50%] md:w-[80%] opacity-75">
            A Healthcare website where patients can book appointments.
          </p>
          <PatientForm />
          <div className="flex text-sm lg:text-base items-center justify-between gap-8 mt-10 w-full">
            <div className="flex flex-col items-center select-none justify-between">
              Copyright © {getCurrentYear()}{" "}
              <span className="text-green-400">Healthcare Doc</span>
            </div>
            <Link
              href={"/admin?=true"}
              className="flex items-center gap-1 text-green-400 hover:underline"
            >
              Admin
              <Shield className="" size={16} />
            </Link>
          </div>
        </div>

        <Image
          src={"/heroimage.jpeg"}
          alt="images"
          className="hidden md:block h-[100%] rounded object-cover md:w-[50vw]"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default HomePage;
