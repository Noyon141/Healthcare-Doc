/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type Gender = "male" | "female" | "other";
declare type Status = "pending" | "scheduled" | "cancelled";

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}
declare interface User extends CreateUserParams {
  $id: string;
}

declare interface RegisterUserParams extends CreateUserParams {
  userId: string; //done
  birthDate: Date; //done
  gender: Gender;//done
  address: string;//done
  occupation: string;//done
  emergencyContactName: string;//done
  emergencyContactNumber: string;//done
  primaryPhysician: string;//done
  allergies: string | undefined;//done
  currentMedication: string | undefined;//done
  pastMedicalHistory: string | undefined;//done
  identificationType: string | undefined;//done
  identificationNumber: string | undefined;//done
  identificationDocument: FormData | undefined;//done
  privacyConsent: boolean;
}

declare type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
};

declare type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  appointment: Appointment;
  type: string;
};
