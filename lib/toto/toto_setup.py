import httpx
import os
import asyncio
from dotenv import load_dotenv
from toto_iface import follower_data, following_item_data, user_metadata

dotenv_path = os.path.join(os.path.dirname(__file__), '..', '..', '.env')
load_dotenv(dotenv_path)


class HttpxToto:
    class Lists:
        def __init__(self, client):
            self.client = client

    async def get_latest_list_tweets(self, userid, page):
        res = await self.client.post("/lists/get_latest_list_tweets", json={"user": userid, "how": "userid", "page": page})
        return res.json()["data"]
    # //route coming soon

    async def get_list_members(self, userid, page):
        res = await self.client.post("/lists/get_list_members", json={"user": userid, "how": "userid", "page": page})
        return res.json()["data"]

    # //route coming soon
    class Graph:
        def __init__(self, client):
            self.client = client

        async def get_followers(self, userid, page) -> list[follower_data]:
            res = await self.client.post("/graph/get_followers", json={"user": userid, "how": "userid", "page": page})
            return res.json()["data"]
# // maximum_length = 500

        async def get_following(self, userid, page) -> list[following_item_data]:
            res = await self.client.post("/graph/get_following", json={"user": userid, "how": "userid", "page": page})
            return res.json()["data"]
            # 500

    class Metadata:
        def __init__(self, client):
            self.client = client

        async def get_tweets(self, userid, page):
            res = await self.client.post("/metadata/get_tweets", json={"user": userid, "how": "userid", "page": page})
            return res.json()["data"]
# //deprecated? 不能得到任何结果，空数组

        async def get_userid(self, username) -> str:
            res = await self.client.post("/metadata/get_userid", json={"user": username, "how": "username", "page": 1})
            return res.json()["data"]

        async def get_latest_metadata(self, userid) -> user_metadata:
            res = await self.client.post("/metadata/get_latest_metadata", json={"user": userid, "how": "userid", "page": 1})
            return res.json()["data"][0]
# //route coming soon

        async def get_follower_count(self, userid):
            res = await self.client.post("/metadata/get_follower_count", json={"user": userid, "how": "userid", "page": 1})
            return res.json()["data"]

        async def get_latest_tweets(self, userid):
            res = await self.client.post("/metadata/get_latest_tweets", json={"user": userid, "how": "userid", "page": 1})
            return res.json()
# //banned

        async def get_metadata_history(self, userid):
            res = await self.client.post("/metadata/get_metadata_history", json={"user": userid, "how": "userid", "page": 1})
            return res.json()["data"]
# //没什么用

        async def get_past_usernames(self, userid):
            res = await self.client.post("/metadata/get_past_usernames", json={"user": userid, "how": "userid", "page": 1})
            return res.json()["data"]
# //没什么用

    def __init__(self, api_key):
        if not isinstance(api_key, str) or not api_key:
            raise ValueError("API key must be a non-empty string.")

        self.client = httpx.AsyncClient(
            base_url="https://toto.oz.xyz/api",
            headers={
                "x-api-key": api_key,
                "Content-Type": "application/json"
            }
        )

        self.graph = self.Graph(self.client)
        self.metadata = self.Metadata(self.client)

    async def close(self):
        await self.client.aclose()


# async def main():
#     api_key = os.getenv("toto_api_key")
#     toto_api_cli = AxiosToto(api_key)

#     try:
#         user_id = await toto_api_cli.metadata.get_userid("RaccoonHKG")
#         print(type(user_id))
#         # followers_data = await toto_api_cli.metadata.get_latest_metadata(user_id)
#         # print(followers_data)
#         # for item in followers_data:
#         #     print(item)
#         #     # break;
#         # print(len(followers_data))
#     finally:
#         await toto_api_cli.close()  # 确保关闭客户端

# asyncio.run(main())
