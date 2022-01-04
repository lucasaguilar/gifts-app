/* eslint-disable @typescript-eslint/naming-convention */
export interface Gift {
  id: number;
  type: string;
  url: string;
  title: string;
  images?: any[];
  embed_url: string;
  pagination: { count: number };
}
