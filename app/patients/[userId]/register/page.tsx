import RegisterForm from "@/components/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import { HeartPulse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  if (!user) {
    return (
      <div className="flex items-center justify-center text-2xl">
        User not found
      </div>
    );
  }
  return (
    <div className="h-full max-h-screen">
      <div className="h-full flex flex-col md:flex-row justify-center lg:justify-between">
        <div className="flex md:w-[90%] md:mx-4 flex-col items-center md:justify-center gap-4 lg:gap-8 mt-8 lg:mt-16 p-4">
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
          <h2 className="text-3xl lg:text-4xl text-center font-semibold tracking-wider">
            Welcome{" "}
            <span className="text-wrap text-green-400">{user.name}</span>
          </h2>
          <p className="text-xs tracking-wider text-center font-extralight lg:text-sm w-[50%] md:w-[80%] opacity-80">
            Give us more information about yourself to get started.
          </p>
          <RegisterForm user={user} />
        </div>

        <Image
          src={"/registrationFormImage.png"}
          alt="images"
          className="hidden md:block min-h-screen h-[100%] rounded object-cover md:w-[45vw] lg:w-[40vw]"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Register;
