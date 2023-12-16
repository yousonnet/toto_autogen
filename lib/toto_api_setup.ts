import axios from "axios";
import { Axios } from "axios";
import "dotenv/config";

let totoapi_axios_cli = axios.create({
  baseURL: "https://toto.oz.xyz/api",
  headers: {
    "x-api-key": process.env.toto_api_key,
    "Content-Type": "application/json",
  },
});
class Axios_Toto {
  readonly metadata!: {
    getLatestMetadata(userid: string): Promise<any>;
    getFollowerCount(userid: string): Promise<number>;
    getUserID(username: string): Promise<string>;
    getLatestTweets(userid: string): Promise<any>;
    getMetadataHistory(userid: string, page: number): Promise<any>;
    getPastUserNames(userid: string, page: number): Promise<any>;
    getTweets(userid: string, page: number): Promise<any>;
  };
  readonly axios!: Axios;
  constructor(axios_: Axios) {
    this.axios = axios_;
    this.metadata = {
      getTweets: async (userid: string, page: number) => {
        let res = await this.axios.post(`/metadata/get_tweets`, {
          user: userid,
          how: "userid",
          page: page,
        });
        return res.data.data!;
      },
      getPastUserNames: async (userid: string, page: number) => {
        let res = await this.axios.post(`/metadata/get_past_usernames`, {
          user: userid,
          how: "userid",
          page: page,
        });
        return res.data.data!;
      },
      getMetadataHistory: async (userid: string, page: number) => {
        let res = await this.axios.post(`/metadata/get_metadata_history`, {
          user: userid,
          how: "userid",
          page: page,
        });
        return res.data.data!;
      },
      getLatestTweets: async (userid: string) => {
        let res = await this.axios.post(`/metadata/get_latest_tweets`, {
          user: userid,
          how: "userid",
          page: 1,
        });
        return res.data.data!;
      },
      getLatestMetadata: async (userid: string) => {
        let res = await this.axios.post(`/metadata/get_latest_metadata`, {
          user: userid,
          how: "userid",
          page: 1,
        });
        return res.data.data!;
      },
      getFollowerCount: async (userid: string) => {
        let res = await this.axios.post(`/metadata/get_follower_count`, {
          user: userid,
          how: "userid",
          page: 1,
        });
        return res.data.data!;
      },
      getUserID: async (username: string) => {
        let res = await this.axios.post(`/metadata/get_userid`, {
          user: username,
          how: "username",
          page: 1,
        });
        if (isNumeric(res.data.data)) {
          return res.data.data;
        } else {
          return "-1";
        }
      },
    };
  }
}
// let toto_api_cli = new Axios_Toto("381c630723468c6b07fa6f0456a61d31");
let toto_api_cli = new Axios_Toto(totoapi_axios_cli);
toto_api_cli.getUserID("oz_dao").then((res) => {
  toto_api_cli.getLatestMetadata(res).then((res) => {
    console.log(res);
  });
});
function isNumeric(str: string): boolean {
  return Number.isFinite(Number(str));
}
