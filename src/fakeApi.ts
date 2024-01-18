import { IAccount } from "./Types/accountTypes";
import { ICampaign } from "./Types/campaignTypes";
import { IOneCampaign } from "./Types/oneCampaignTypes";
import { IProfile } from "./Types/profileTypes";

const randomStringForGivenLength = (length = 10) => {
  let result = "";
  while (result.length < length) {
    result += Math.random().toString(36).slice(2);
  }

  return result.slice(0, length);
};

const accountsData: IAccount[] = Array.from({ length: 100 }, (_, i) => ({
  accountId: `acc${i + 1}`,
  email: `email${i + 1}@example.com`,
  authToken: `token${i + 1}`,
  creationDate: new Date(),
}));

const profilesData: IProfile[] = Array.from({ length: 5000 }, (_, i) => ({
  profileId: `prof${i + 1}`,
  country: `Country ${(i % 50) + 1}`,
  marketplace: `Marketplace ${Math.floor(i / 50) + 1}`,
  accountId: `acc${Math.floor(i / 50) + 1}`,
}));

const campaignsData: ICampaign[] = Array.from({ length: 30000 }, (_, i) => ({
  campaignId: `camp${i + 1}`,
  clicks: Math.floor(Math.random() * 300),
  cost: Math.floor(Math.random() * 3000),
  date: new Date(),
  profileId: `prof${Math.floor(i / 30) + 1}`,
}));

const campaignDescription: IOneCampaign = {
  name: randomStringForGivenLength(12),
  location: randomStringForGivenLength(12),
  products: randomStringForGivenLength(12),
  staff: Math.floor(Math.random() * 10000),
  profit: Math.floor(Math.random() * 1000000),
  operatingСosts: Math.floor(Math.random() * 100000),
};

export { accountsData, profilesData, campaignsData, campaignDescription };
