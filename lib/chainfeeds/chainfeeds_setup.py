import httpx
import asyncio
from typing import List
from chainfeeds_iface import DetailItem, SearchedItem, Literal


class ChainFeedsHttpx:
    # hBkzkrQmzEoNYG4aQXYag
    class Search:
        def __init__(self, cilent):
            self.client = cilent

        async def search(self, token, article_type: Literal[1, 2, 3]) -> List[SearchedItem]:
            res = await self.client.get('feed/searchv2', params={'page': 1, 'page_size': 20, 'query': token, 'sort_type': 'time', 'article_type': article_type})
            return res.json()['data']['list']
# //只返回近期的20条
    # class List:
    #     def __init__(self, client):
    #         self.client = client
    #     async def get_list(self,)

    class Detail:
        def __init__(self, client):
            self.client = client

        async def get_detail(self, uuid: str) -> DetailItem:
            res = await self.client.get(f'_next/data/hBkzkrQmzEoNYG4aQXYag/feed/detail/{uuid}.json', params={'uuid': uuid})
            return res.json()['pageProps']['detail']

    def __init__(self):
        self.client = httpx.AsyncClient(base_url='https://api.chainfeeds.xyz/')
        self.pageProps_client = httpx.AsyncClient(
            base_url='https://www.chainfeeds.xyz/')
        self.search = self.Search(self.client)
        self.detail = self.Detail(self.pageProps_client)

    async def close(self):
        await self.client.aclose()


async def main():
    chainfeeds = ChainFeedsHttpx()
    # print(await chainfeeds.search.search('weth', 1))
    print(await chainfeeds.detail.get_detail('d4f8ca07-a614-49fa-9300-da2f8ae54cd0'))
    await chainfeeds.close()


asyncio.run(main())
