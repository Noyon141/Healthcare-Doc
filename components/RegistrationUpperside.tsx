"use client";

import { easeInOut, motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import Link from "next/link";

const RegistrationUpperside = async ({ user }: { user: User }) => {
  const animateParent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
        ease: easeInOut,
      },
    },
  };
  const animateChild = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };
  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center gap-2 lg:gap-4"
        variants={animateParent}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className=""
          variants={animateChild}
          initial="hidden"
          whileInView={animateChild.visible}
        >
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
        </motion.div>
        <motion.h2
          className="text-xl lg:text-2xl text-center font-semibold tracking-wider"
          variants={animateChild}
          initial="hidden"
          whileInView={animateChild.visible}
        >
          Welcome{" "}
          <span className="text-wrap text-green-400 capitalize">
            {user.name}
          </span>
        </motion.h2>
        <motion.p
          className="text-xs tracking-wider text-center font-extralight lg:text-sm w-[100%] md:w-[80%] opacity-80"
          variants={animateChild}
          initial="hidden"
          whileInView={animateChild.visible}
        >
          Give us more information about yourself to get started.
        </motion.p>
      </motion.div>
    </>
  );
};

export default RegistrationUpperside;
