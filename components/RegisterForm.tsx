"use client";

import { Form, FormControl, FormDescription } from "@/components/ui/form";
import { Doctors, genderOptions, IdentificationTypes } from "@/constants";
import { createUser } from "@/lib/actions/patient.actions";
import { userFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomFormField, { FormFieldTypes } from "./CustomFormField";
import FileUploader from "./FileUploader";
import SubmitButton from "./SubmitButton";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { SelectItem } from "./ui/select";

const RegisterForm = ({ user }: { user: User }) => {
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
      console.error("ERROR_FORM SUBMISSION", error);
    }
    setIsLoading(false);
  }
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 md:w-[90%] lg:w-[80%] mx-auto"
      >
        {/* Personal Information */}

        <section className="flex flex-col gap-3 lg:gap-6">
          <h1 className="text-xl font-semibold text-slate-300">
            Personal Information
          </h1>
          <CustomFormField
            control={form.control}
            fieldTypes={FormFieldTypes.INPUT}
            name="name"
            placeholder="John Marston"
            label="Full Name"
          />
          <div className="flex flex-col lg:flex-row gap-4">
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
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <CustomFormField
              control={form.control}
              fieldTypes={FormFieldTypes.DATE_PICKER}
              name="birthDate"
              label="Date of Birth"
            />
            <CustomFormField
              control={form.control}
              fieldTypes={FormFieldTypes.SKELETON}
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-4 lg:gap-8 items-center"
                  >
                    {genderOptions.map((option) => (
                      <div
                        className="space-x-2 flex items-center mt-2"
                        key={option}
                      >
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
              name="gender"
              label="Gender"
            />
          </div>
        </section>

        {/* Medical Information */}

        <section className="flex flex-col gap-3 lg:gap-6">
          <h1 className="text-xl font-semibold text-slate-300">
            Medical Information
          </h1>
          <CustomFormField
            control={form.control}
            fieldTypes={FormFieldTypes.INPUT}
            name="address"
            placeholder="13th Street, New York"
            label="Address"
          />
          <div className="flex flex-col lg:flex-row gap-4">
            <CustomFormField
              control={form.control}
              fieldTypes={FormFieldTypes.INPUT}
              name="emergencyContactName"
              placeholder="henry marston"
              label="Emergency Contact Name"
            />
            <CustomFormField
              control={form.control}
              fieldTypes={FormFieldTypes.PHONE_INPUT}
              name="emergencyContactNumber"
              placeholder="(111) 123-4567"
              label="Emergency Contact Number"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <CustomFormField
              control={form.control}
              fieldTypes={FormFieldTypes.INPUT}
              name="occupation"
              placeholder="Software Engineer"
              label="Occupation"
            />
            <CustomFormField
              control={form.control}
              fieldTypes={FormFieldTypes.INPUT}
              name="allergies"
              placeholder="Peanuts, Seafood (if any)"
              label="Allergies (If any)"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <CustomFormField
              control={form.control}
              fieldTypes={FormFieldTypes.SELECT}
              name="primaryPhysician"
              placeholder="Select Physician"
              label="Primary Physician"
            >
              {Doctors.map((doctor) => (
                <SelectItem className="" key={doctor.name} value={doctor.name}>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                      src={doctor.image}
                      alt="docImage"
                      className="rounded-full border border-green-500/[0.5]"
                      width={32}
                      height={32}
                    />
                    <span className="text-sm lg:text-base">{doctor.name}</span>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              fieldTypes={FormFieldTypes.INPUT}
              name="currentMedication"
              placeholder="Paracetamol, Aspirin"
              label="Current Medication (If any)"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:min-w-[60%] lg:mx-auto lg:text-center">
            <CustomFormField
              control={form.control}
              fieldTypes={FormFieldTypes.INPUT}
              name="pastMedicalHistory"
              placeholder="Diabetes, Hypertension"
              label="Past Medical History (If any)"
            />
          </div>
        </section>

        {/* Identification Information */}

        <section className="flex flex-col gap-3 lg:gap-6">
          <h1 className="text-xl font-semibold text-slate-300">
            Identification Information
          </h1>
          <div className="flex flex-col lg:flex-row gap-4">
            <CustomFormField
              control={form.control}
              fieldTypes={FormFieldTypes.SELECT}
              name="identificationType"
              placeholder="Select Identification Type"
              label="Identification Type"
            >
              {IdentificationTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              fieldTypes={FormFieldTypes.INPUT}
              name="identificationNumber"
              placeholder="123456789"
              label="Identification Number"
            />
          </div>
          <CustomFormField
            control={form.control}
            name="identificationDocument"
            label="Upload Identification Document"
            fieldTypes={FormFieldTypes.SKELETON}
            renderSkeleton={(field) => (
              <FormControl>
                <FileUploader onChange={field.onChange} files={field.value} />
              </FormControl>
            )}
          />
        </section>

        {/* Submit Button & Form description */}

        <div className="flex flex-col items-center justify-center gap-5 md:py-20 py-10">
          <FormDescription className="text-xs lg:text-sm text-center cursor-default">
            Let us know about you, that will help us to give you the best{" "}
            <span className="text-green-400">healthcare</span>.
          </FormDescription>
          <SubmitButton isLoading={isLoading} className="w-full lg:w-[70%]">
            Book Appointment
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
