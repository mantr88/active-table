import { IAccount } from "./Types/accountTypes";
import { ICampaign } from "./Types/campaignTypes";
// import { IOneCompaign } from "./Types/oneCompaignTypes";
import { IProfile } from "./Types/profileTypes";

// const randomStringForGivenLength = (length = 10) => {
//   let result = "";
//   while (result.length < length) {
//     result += Math.random().toString(36).slice(2);
//   }

//   return result.slice(0, length);
// };

// const accountsData: IAccount[] = Array.from({ length: 20 }, (_, index) => ({
//   accountId: `account${index + 1}`,
//   email: `email${index + 1}@example.com`,
//   authToken: randomStringForGivenLength(28),
//   creationDate: new Date().toISOString(),
// }));

// const profilesData = Array.from({ length: 20 }, (_, index) => ({
//   profileId: `profile${index + 1}`,
//   country: `Country${index + 1}`,
//   marketplace: `Marketplace${index + 1}`,
// }));

// const campaignsData = Array.from({ length: 20 }, (_, index) => ({
//   campaignId: `campaign${index + 1}`,
//   clicks: Math.floor(Math.random() * 100),
//   cost: Number(Math.random() * 1000).toFixed(2),
//   date: new Date().toISOString(),
// }));

// const campaignsDescription: IOneCompaign[] = Array.from(
//   { length: 20 },
//   (_, index) => ({
//     campaignId: `campaign${index + 1}`,
//     name: randomStringForGivenLength(12),
//     location: `location${index + 1}`,
//     staff: Math.floor(Math.random() * 10000),
//     products: `products${index + 1}`,
//     profit: Math.floor(Math.random() * 1000000),
//     operatingСosts: Math.floor(Math.random() * 10000),
//   })
// );

// const campaignsDescription: IOneCompaign[] = [
//   {
//     campaignId: "campaign1",
//     name: "kaeh4x5tzyax",
//     location: "location1",
//     staff: 7863,
//     products: "products1",
//     profit: 472412,
//     operatingСosts: 4216,
//   },

//   {
//     campaignId: "campaign2",
//     name: "j8tbmmg6kgao",
//     location: "location2",
//     staff: 6347,
//     products: "products2",
//     operatingСosts: 7665,
//     profit: 869661,
//   },

//   {
//     campaignId: "campaign3",
//     name: "ywdanbkznmga",
//     location: "location3",
//     staff: 4250,
//     products: "products3",
//     operatingСosts: 4103,
//     profit: 61917,
//   },

//   {
//     campaignId: "campaign4",
//     name: "6i8vv114d4ce",
//     location: "location4",
//     staff: 5415,
//     products: "products4",
//     operatingСosts: 1611,
//     profit: 368674,
//   },

//   {
//     campaignId: "campaign5",
//     name: "9mcji9i7wj55",
//     location: "location5",
//     staff: 2132,
//     products: "products5",
//     operatingСosts: 100,
//     profit: 345640,
//   },

//   {
//     campaignId: "campaign6",
//     name: "mj8jsz3avosa",
//     location: "location6",
//     staff: 9285,
//     products: "products6",
//     operatingСosts: 6118,
//     profit: 696452,
//   },

//   {
//     campaignId: "campaign7",
//     name: "6xpqfucbx3fv",
//     location: "location7",
//     staff: 7619,
//     products: "products7",
//     operatingСosts: 5865,
//     profit: 631379,
//   },

//   {
//     campaignId: "campaign8",
//     name: "t269m7orcpbp",
//     location: "location8",
//     staff: 925,
//     products: "products8",
//     operatingСosts: 8372,
//     profit: 449614,
//   },

//   {
//     campaignId: "campaign9",
//     name: "8wd9t8roo23j",
//     location: "location9",
//     staff: 3891,
//     products: "products9",
//     operatingСosts: 9557,
//     profit: 581966,
//   },

//   {
//     campaignId: "campaign10",
//     name: "xl7z9jfcsnid",
//     location: "location10",
//     staff: 3700,
//     products: "products10",
//     operatingСosts: 4369,
//     profit: 504538,
//   },

//   {
//     campaignId: "campaign11",
//     name: "d02tqr2lsvak",
//     location: "location11",
//     staff: 9647,
//     products: "products11",
//     profit: 219126,
//     operatingСosts: 4799,
//   },

//   {
//     campaignId: "campaign12",
//     name: "go07aar9dklt",
//     location: "location12",
//     staff: 5796,
//     products: "products12",
//     operatingСosts: 8441,
//     profit: 940767,
//   },

//   {
//     campaignId: "campaign13",
//     name: "o0u5irjtm2jm",
//     location: "location13",
//     staff: 2491,
//     products: "products13",
//     operatingСosts: 3240,
//     profit: 437640,
//   },

//   {
//     campaignId: "campaign14",
//     name: "1987jl0empck",
//     location: "location14",
//     staff: 5749,
//     products: "products14",
//     operatingСosts: 9594,
//     profit: 95258,
//   },

//   {
//     campaignId: "campaign15",
//     name: "wdd825fduwfg",
//     location: "location15",
//     staff: 8535,
//     products: "products15",
//     operatingСosts: 1715,
//     profit: 357265,
//   },

//   {
//     campaignId: "campaign16",
//     name: "wqoaf5yutbch",
//     location: "location16",
//     staff: 6069,
//     products: "products16",
//     operatingСosts: 4598,
//     profit: 467283,
//   },

//   {
//     campaignId: "campaign17",
//     name: "6j42i7uaf2hz",
//     location: "location17",
//     staff: 2594,
//     products: "products17",
//     operatingСosts: 8486,
//     profit: 205504,
//   },

//   {
//     campaignId: "campaign18",
//     name: "tpv2hxhbyoq9",
//     location: "location18",
//     staff: 1476,
//     products: "products18",
//     operatingСosts: 8673,
//     profit: 830359,
//   },

//   {
//     campaignId: "campaign19",
//     name: "4vpn9wnd3g5e",
//     location: "location19",
//     staff: 410,
//     products: "products19",
//     operatingСosts: 2518,
//     profit: 162644,
//   },

//   {
//     campaignId: "campaign20",
//     name: "w9a592t7h37o",
//     location: "location20",
//     staff: 6613,
//     products: "products20",
//     operatingСosts: 2518,
//     profit: 481363,
//   },
// ];

// const accountsData: IAccount[] = [
//   {
//     accountId: "account1",
//     email: "email1@example.com",
//     authToken: "ctfkjpn0tj57p2zfsj4j8xupe6bu",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account2",
//     email: "email2@example.com",
//     authToken: "y1d0rq42mhkxbkztgpmdgwsxh6xa",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account3",
//     email: "email3@example.com",
//     authToken: "er9lni9mr2isc3rklog0yfln7mu9",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account4",
//     email: "email4@example.com",
//     authToken: "hb5vj1zrm8hq50zzxmpome7e6bgv",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account5",
//     email: "email5@example.com",
//     authToken: "jpkwm5hbumqzyxd1ak9lj6s3n7nq",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account6",
//     email: "email6@example.com",
//     authToken: "elocz7buu7fpszybhiuqhufw0hyi",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account7",
//     email: "email7@example.com",
//     authToken: "z4oej6m5r84up0rbv5uwvr55o5qo",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account8",
//     email: "email8@example.com",
//     authToken: "btzcevfz945mj5vqpoh5aze3u0ct",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account9",
//     email: "email9@example.com",
//     authToken: "j6n8auo8qy4wfeybpbtq8mr0tzxv",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account10",
//     email: "email10@example.com",
//     authToken: "aiwpthyjtufk64yw81v8i78ola47",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account11",
//     email: "email11@example.com",
//     authToken: "2dxexhqu67qpwz1o4qcqxnp3rpop",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account12",
//     email: "email12@example.com",
//     authToken: "vjyg8s41cfvh1bav9hwo0nhol0pf",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account13",
//     email: "email13@example.com",
//     authToken: "rt0o1hkig5h796h5w0jx5u8mmeej",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account14",
//     email: "email14@example.com",
//     authToken: "r3tnr0l88ac9kwhp5txzjtejw8kj",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account15",
//     email: "email15@example.com",
//     authToken: "00rtyhbexfpanhptsy9qzrvs9hel",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },
//   {
//     accountId: "account16",
//     email: "email16@example.com",
//     authToken: "ixkhm29imeep0nk03mnccnmjdapw",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account17",
//     email: "email17@example.com",
//     authToken: "esy3bgfodscq3p62mgfkobdfi9gu",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account18",
//     email: "email18@example.com",
//     authToken: "68ecd8eyzakfqf3dflrkaaqfo2ob",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account19",
//     email: "email19@example.com",
//     authToken: "5wufpy3bxoqcb7t283kj8lns6a3o",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },

//   {
//     accountId: "account20",
//     email: "email20@example.com",
//     authToken: "32i88udfcr93q1s6lrn32q6ewpya",
//     creationDate: "2024-01-17T09:17:04.890Z",
//   },
// ];

// const profilesData: IProfile[] = [
//   { profileId: "profile1", country: "Country1", marketplace: "Marketplace1" },

//   { profileId: "profile2", country: "Country2", marketplace: "Marketplace2" },

//   { profileId: "profile3", country: "Country3", marketplace: "Marketplace3" },

//   { profileId: "profile4", country: "Country4", marketplace: "Marketplace4" },

//   { profileId: "profile5", country: "Country5", marketplace: "Marketplace5" },

//   { profileId: "profile6", country: "Country6", marketplace: "Marketplace6" },

//   { profileId: "profile7", country: "Country7", marketplace: "Marketplace7" },

//   { profileId: "profile8", country: "Country8", marketplace: "Marketplace8" },

//   { profileId: "profile9", country: "Country9", marketplace: "Marketplace9" },
//   {
//     profileId: "profile10",
//     country: "Country10",
//     marketplace: "Marketplace10",
//   },

//   {
//     profileId: "profile11",
//     country: "Country11",
//     marketplace: "Marketplace11",
//   },
//   {
//     profileId: "profile12",
//     country: "Country12",
//     marketplace: "Marketplace12",
//   },

//   {
//     profileId: "profile13",
//     country: "Country13",
//     marketplace: "Marketplace13",
//   },

//   {
//     profileId: "profile14",
//     country: "Country14",
//     marketplace: "Marketplace14",
//   },

//   {
//     profileId: "profile15",
//     country: "Country15",
//     marketplace: "Marketplace15",
//   },

//   {
//     profileId: "profile16",
//     country: "Country16",
//     marketplace: "Marketplace16",
//   },

//   {
//     profileId: "profile17",
//     country: "Country17",
//     marketplace: "Marketplace17",
//   },

//   {
//     profileId: "profile18",
//     country: "Country18",
//     marketplace: "Marketplace18",
//   },

//   {
//     profileId: "profile19",
//     country: "Country19",
//     marketplace: "Marketplace19",
//   },

//   {
//     profileId: "profile20",
//     country: "Country20",
//     marketplace: "Marketplace20",
//   },
// ];

// const campaignsData: ICompaign[] = [
//   {
//     campaignId: "campaign1",
//     clicks: 99,
//     cost: "577.95",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign2",
//     clicks: 91,
//     cost: "150.46",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign3",
//     clicks: 15,
//     cost: "154.10",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign4",
//     clicks: 28,
//     cost: "636.46",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign5",
//     clicks: 10,
//     cost: "116.17",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign6",
//     clicks: 8,
//     cost: "701.56",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign7",
//     clicks: 86,
//     cost: "73.27",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign8",
//     clicks: 30,
//     cost: "223.93",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign9",
//     clicks: 90,
//     cost: "818.74",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign10",
//     clicks: 13,
//     cost: "606.59",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign11",
//     clicks: 4,
//     cost: "933.77",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign12",
//     clicks: 78,
//     cost: "946.07",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign13",
//     clicks: 95,
//     cost: "211.45",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign14",
//     clicks: 78,
//     cost: "958.49",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign15",
//     clicks: 90,
//     cost: "92.09",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign16",
//     clicks: 20,
//     cost: "427.90",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign17",
//     clicks: 8,
//     cost: "651.40",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign18",
//     clicks: 62,
//     cost: "230.14",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign19",
//     clicks: 70,
//     cost: "389.75",
//     date: "2024-01-17T09:26:06.385Z",
//   },

//   {
//     campaignId: "campaign20",
//     clicks: 95,
//     cost: "315.28",
//     date: "2024-01-17T09:26:06.385Z",
//   },
// ];

// Define types for the data
// interface IAccount {
//   accountId: string;
//   email: string;
//   authToken: string;
//   creationDate: Date;
// }

// interface IProfile {
//   profileId: string;
//   country: string;
//   marketplace: string;
//   accountId: string; // Foreign key referencing an account
// }

// interface ICampaign {
//   campaignId: string;
//   clicks: number;
//   cost: number;
//   date: Date;
//   profileId: string; // Foreign key referencing a profile
// }

// Generate sample data
const accountsData: IAccount[] = Array.from({ length: 100 }, (_, i) => ({
  accountId: `acc${i + 1}`,
  email: `email${i + 1}@example.com`,
  authToken: `token${i + 1}`,
  creationDate: new Date(),
}));

const profilesData: IProfile[] = Array.from({ length: 1000 }, (_, i) => ({
  profileId: `prof${i + 1}`,
  country: `Country ${(i % 10) + 1}`,
  marketplace: `Marketplace ${Math.floor(i / 10) + 1}`,
  accountId: `acc${Math.floor(i / 10) + 1}`,
}));

const campaignsData: ICampaign[] = Array.from({ length: 10000 }, (_, i) => ({
  campaignId: `camp${i + 1}`,
  clicks: Math.floor(Math.random() * 100),
  cost: Math.floor(Math.random() * 1000),
  date: new Date(),
  profileId: `prof${Math.floor(i / 10) + 1}`,
}));

export { accountsData, profilesData, campaignsData };
