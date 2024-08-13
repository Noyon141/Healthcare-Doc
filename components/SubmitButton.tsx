import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const SubmitButton = ({
  isLoading,
  className,
  children,
}: {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Button
      className={
        className ??
        "hover:text-white bg-transparent border border-green-400 text-green-400 hover:bg-green-500/[0.6] flex items-center justify-center gap-2 rounded-md px-4 py-2"
      }
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? (
        <Image src={"/spinner.svg"} alt="loading" width={24} height={24} />
      ) : (
        <>
          {children}
          <ArrowRight size={16} />
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
