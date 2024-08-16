export const genderOptions = ["male", "female", "other"];

export const Doctors = [
  {
    image: "/doctorImages/dr-green.png",
    name: "John Green",
  },
  {
    image: "/doctorImages/dr-cameron.png",
    name: "Leila Cameron",
  },
  {
    image: "/doctorImages/dr-livingston.png",
    name: "David Makarov",
  },
  {
    image: "/doctorImages/dr-peter.png",
    name: "Evan Peter",
  },
  {
    image: "/doctorImages/dr-powell.png",
    name: "Jane Powell",
  },
  {
    image: "/doctorImages/dr-ramirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/doctorImages/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/doctorImages/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/doctorImages/dr-sharma.png",
    name: "Charles Smith",
  },
];

export const patientFormDefaultValues = {
  name: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "" as Gender,
  address: "",
  primaryPhysician: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  allergies: "",
  currentMedication: "",
  occupation: "",
  pastMedicalHistory: "",
  identificationType: "",
  identificationNumber: "",
  identificationDocument: [],
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];
