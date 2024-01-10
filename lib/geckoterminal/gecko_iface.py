from typing import TypedDict, Optional

class Pool:
    id:str,
    type:str,
    attributes:{
        name:str;
        
        address:str;
        
        base_token_price_usd: Optional[str];
        quote_token_price_usd: Optional[str];
        base_token_price_native_currency: Optional[str];
        quote_token_price_native_currency: Optional[str];
        base_token_price_quote_token: Optional[str];
        quote_token_price_base_token: Optional[str];
        pool_created_at: Optional[str];  # $datetime 格式的字符串
        reserve_in_usd: Optional[str];
        fdv_usd: Optional[str];
        market_cap_usd: Optional[str];
    }