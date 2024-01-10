import httpx
import os
import asyncio
from dotenv import load_dotenv
import re
from typing import Optional, Literal
dotenv_path = os.path.join(os.path.dirname(__file__), '..', '..', '.env')
load_dotenv(dotenv_path)


class HttpxGecko:
    class Pools:
        def __init__(self, client):
            self.client = client

        async def serach_pools(self, ticker_or_address_or_contract, page):
            res = await self.client.get("/search/pools", params={"query": ticker_or_address_or_contract, "page": page})
            return res.json()["data"]

    class Tokens:
        def __init__(self, client):
            self.client = client

        async def get_token_info(self, network: str, token_address: str):
            # network = network
            # token_address = token_address
            res = await self.client.get(f"/networks/{network}/tokens/{token_address}/info")
            return res.json()['data']

    class OHLCVS:
        def __init__(self, client):
            self.client = client

        async def get_ohlcv(self, network: str, pool_address: str, time_frame: Literal["1day", "1hour", "4hour", "12hour", "1minute", "5minute", "15minute"], currency: Literal["token", "usd"], is_invert_chart: bool = False, time_stamp_before_seconds: Optional[int] = None):
            match = re.match(r'(\d+)(\D+)', time_frame)
            number, unit = match.groups()
            mode = 'base'
            if is_invert_chart == True:
                mode = 'quote'
            if time_stamp_before_seconds is None:
                res = await self.client.get(f"/networks/{network}/pools/{pool_address}/ohlcv/{unit}", params={"aggregate": number, "limit": 100, 'currency': currency, 'token': mode})
                # //为了减少token的数量
                return res.json()['data']
            else:
                res = await self.client.get(f"/networks/{network}/pools/{pool_address}/ohlcv/{unit}", params={"aggregate": number, "limit": 100, 'currency': currency, 'token': mode, 'before_timestamp': time_stamp_before_seconds})
                # //为了减少token的数量
                return res.json()['data']

    def __init__(self):
        self.client = httpx.AsyncClient(
            base_url="https://api.geckoterminal.com/api/v2", headers={"Accept": "application/json;version=20230302"})
        self.pools = HttpxGecko.Pools(self.client)
        self.tokens = HttpxGecko.Tokens(self.client)
        self.ohlcvs = HttpxGecko.OHLCVS(self.client)

    async def close(self):
        await self.client.aclose()


async def main():
    gecko = HttpxGecko()
    # print(await gecko.pools.serach_pools("weth", 1))
    print(await gecko.tokens.get_token_info("eth", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"))
    await gecko.close()

asyncio.run(main())
