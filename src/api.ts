import { IAccount } from "./components/AccountsTable";

const randomStringForGivenLength = (length = 10) => {
  let result = "";
  while (result.length < length) {
    result += Math.random().toString(36).slice(2);
  }

  return result.slice(0, length);
};
// console.log(randomStringForGivenLength(12));

// Fake data for Table [Accounts]
const accountsData: IAccount[] = Array.from({ length: 20 }, (_, index) => ({
  accountId: `account${index + 1}`,
  email: `email${index + 1}@example.com`,
  authToken: randomStringForGivenLength(28),
  creationDate: new Date().toISOString(), // You can use a fake date library for better simulation
}));

// Fake data for Table [Profiles of selected account]
const profilesData = Array.from({ length: 20 }, (_, index) => ({
  profileId: `profile${index + 1}`,
  country: `Country${index + 1}`,
  marketplace: `Marketplace${index + 1}`,
}));

// Fake data for Table [Campaigns of selected profile]
const campaignsData = Array.from({ length: 20 }, (_, index) => ({
  campaignId: `campaign${index + 1}`,
  clicks: Math.floor(Math.random() * 100),
  cost: Math.random() * 1000,
  date: new Date().toISOString(), // You can use a fake date library for better simulation
}));

export { accountsData, profilesData, campaignsData };
