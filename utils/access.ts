type Session = {
  data: {
    role?: string;
    id: string;
    project?: string;
  };
};

export const isSignedIn = ({ session }: { session?: Session }) => !!session;

export const permissions = {
  // isStudent: ({ session }: { session?: Session }) => session?.data.role === "Student",

  // isProjectMentor: ({ session }: { session?: Session }) => session?.data.role === "Project Mentor",

  // isLeadMentor: ({ session }: { session?: Session }) => session?.data.role === "Lead Mentor",

  //isExternalPartner: ({ session }: { session?: Session }) =>
  // session?.data.role === "External Partner",

  //isAdminLike: ({ session }: { session?: Session }) =>
  //["Admin", "Lead Mentor", "Project Mentor"].includes(session?.data.role ?? ""),
  //isProjectMember: ({ session }: { session?: Session }) => session?.data.project === "",

  // UNCOMMENT FOR TESTING PURPOSES

  isStudent: () => true,
  isProjectMentor: () => true,
  isLeadMentor: () => true,
  isExternalPartner: () => true,
  isAdminLike: () => true,
};
