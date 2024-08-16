import RegisterForm from "@/components/RegisterForm";
import RegistrationUpperside from "@/components/RegistrationUpperside";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";

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
        <div className="flex md:w-[90%] flex-col items-center md:py-10 gap-4 lg:gap-8 mt-8 md:mt-16 p-4">
          <RegistrationUpperside user={user} />
          <RegisterForm user={user} />
        </div>

        <Image
          src={"/registrationFormImage.png"}
          alt="images"
          className="hidden md:block md:min-h-[222vh] h-[100%] rounded object-cover  md:w-[50vw] lg:w-[40vw]"
          width={4000}
          height={4000}
        />
      </div>
    </div>
  );
};

export default Register;
