{
  // Problem 06: Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const partialData: Profile = {
    name: "Trishon",
    age: 25,
    email: "x@gmail.com",
  };
  const getUpdateProfile = (profile: Profile, updates: Profile): Profile => {
    return { ...profile, ...updates };
  };
  const updatedProfile = getUpdateProfile(partialData, {
    name: "Trishon Baidaya",
    age: 25,
    email: "shukanto@gmail.com",
  });
  console.log(
    "\n---------------- Solution of the Problem 06 ----------------\n"
  );
  console.log(
    `Partial Profile Values: \n{ Name: ${partialData.name},\nAge:${partialData?.age},\nEmail: ${partialData?.email} }`
  );
  console.log("\n------------------------------------------\n");
  console.log(
    `Updated Profile Value: \n{ Name: ${updatedProfile.name},\nAge:${updatedProfile?.age},\nEmail: ${updatedProfile?.email} }`
  );
  //   -----------------------------------------------------------------------------
}
