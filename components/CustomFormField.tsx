import Image from "next/image";
import { Control } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "./ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";

export enum FormFieldTypes {
  INPUT = "input",
  TEXTAREA = "textarea",
  LABEL = "label",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  PHONE_INPUT = "phone_input",
  SELECT = "select",
  SKELETON = "skeleton",
}

interface CustomFormFieldProps {
  control: Control<any>;
  fieldTypes: FormFieldTypes;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  altSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

export const RenderField = ({
  props,
  field,
}: {
  field: any;
  props: CustomFormFieldProps;
}) => {
  const { fieldTypes, iconSrc, placeholder, altSrc, name, label } = props;

  switch (fieldTypes) {
    case FormFieldTypes.INPUT:
      return (
        <div className="flex rounded-md border-none ">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt={altSrc || "icon"}
              height={24}
              width={24}
            />
          )}
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
        </div>
      );
    case FormFieldTypes.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="">{props.children}</SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldTypes.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            placeholder={placeholder}
            defaultCountry="US"
            {...field}
            withCountryCallingCode
            international
            onChange={field.onChange}
            className="input-phone"
            value={field.value}
          />
        </FormControl>
      );
    case FormFieldTypes.DATE_PICKER:
      return (
        <div className="flex items-center gap-4">
          <Calendar className="text-green-400" size={20} />
          <FormControl className="">
            <DatePicker
              className=""
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat={props.dateFormat || "dd/MM/yyyy"}
            />
          </FormControl>
        </div>
      );
    case FormFieldTypes.SKELETON:
      return props.renderSkeleton && props.renderSkeleton(field);
    case FormFieldTypes.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4 cursor-pointer">
            <Checkbox
              value={field.value}
              onCheckedChange={field.onChange}
              id={name}
            />
            <Label
              className="text-xs lg:text-base cursor-pointer text-white/[0.7]"
              htmlFor={name}
            >
              {label}
            </Label>
          </div>
        </FormControl>
      );
    default:
      break;
  }
};
const CustomFormField = (props: CustomFormFieldProps) => {
  const { name, control, label, placeholder, fieldTypes } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldTypes !== FormFieldTypes.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField props={props} field={field} />

          <FormMessage className="" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
