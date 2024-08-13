"use client";

import { Form, FormDescription } from "@/components/ui/form";
import { createUser } from "@/lib/actions/patient.actions";
import { userFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import CustomFormField, { FormFieldTypes } from "./CustomFormField";
import SubmitButton from "./SubmitButton";

const PatientForm = () => {
  const router = useRouter();
  // Define  form.
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof userFormSchema>) {
    setIsLoading(true);

    try {
      const user = { name, email, phone };

      const newUser = await createUser(user);

      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error: any) {
      toast.error("Something went wrong!", {
        style: {
          borderRadius: "10px",
          background: "#4ADE7D",
          color: "#fff",
        },
      });
      console.error("ERROR_FORM SUBMISSION", error);
    }
    setIsLoading(false);
  }
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          control={form.control}
          fieldTypes={FormFieldTypes.INPUT}
          name="name"
          placeholder="John Marston"
          label="Full Name"
        />
        <CustomFormField
          control={form.control}
          fieldTypes={FormFieldTypes.INPUT}
          name="email"
          placeholder="johnmarston@gmail.com"
          label="Email"
        />
        <CustomFormField
          control={form.control}
          fieldTypes={FormFieldTypes.PHONE_INPUT}
          name="phone"
          placeholder="(555) 123-4567"
          label="Phone Number"
        />
        <FormDescription className="text-xs lg:text-sm cursor-default">
          Book your appointment with us today and get the best{" "}
          <span className="text-green-400">healthcare</span>.
        </FormDescription>
        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
