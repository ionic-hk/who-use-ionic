export interface IProduct {
  name: string;
  image?: string;
  description?: string;
  websiteUrl?: string;
  author?: string;
  platform: {
    ios?: string;
    android?: string;
    web?: string;
  };
}
