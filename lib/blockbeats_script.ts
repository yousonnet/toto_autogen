import { Axios } from "axios";

let blockbeats_axios = new Axios({
  baseURL:
    // "https://api.theblockbeats.info/v5//Search/all?keyword=vitalik&type=1&start_time=&end_time=&sort=1",
    // "https://api.chainfeeds.xyz/feed/searchv2?page=1&page_size=20&query=vitalik&sort_type=score&article_type=1",
    "https://twitter.com/AlfaDAO_",
  //   headers: {
  //     Accept: "application/json, text/plain, */*",
  //     Lang: "zh",
  //     Origin: "https://www.theblockbeats.info",
  //     Referer: "https://www.theblockbeats.info/",
  //     "User-Agent":
  //       "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  //   },


https://api.chainfeeds.xyz/feed/searchv2?page=1&page_size=20&query=vitalik&sort_type=score&article_type=1&start_time=2023-12-17T07:43:34.016Z&end_time=2023-12-24T07:43:34.017Z

  chainfeeds有两种 type 1和2和3
  1有commet 2没有

  1
  {
    "uuid": "a6addbda-4a8d-4bb9-ac73-38f91a9249db",
    "title": "【英文】如何通过 zkSync 的 State Diff 模型降低账户抽象数据调用成本？",
    "abstract": "高额的数据成本是账户抽象发展面临的一个巨大挑战。智能合约钱包 Clave 研究员 Dogan 撰文分享了一个解决方案，通过 zkSync 的 State Diff 在 Clave 的账户抽象模型上降低验证机制复杂的数据成本。",
    "source_url": "https:\/\/mirror.xyz\/0x8958D0c419BCDFB8A86b8c0089552bE015fbe364\/K_w27ODCDzdbOqu-jBOYfILBA-nMEzo3naqgd_eBgHY",
    "author_name": "Dogan",
    "type": 1,
    "is_star": 1,
    "show_time": "2023-12-18T04:27:53Z",
    "view_count": 19,
    "avatar_url": "https:\/\/images.chainfeeds.xyz\/image\/642a4ef79823d.jpg",
    "author_title": null,
    "opinion": [
        {
            "uuid": "586b168f-2a9c-4af4-bec2-7dfb13fb24cb",
            "comment": "State Diff 是将数据发布至 Base Layer 的另一种方式，不过在最终性方面需要进行一些权衡。对于将所有交易数据发布至以太坊的 Rollup，运行全节点的用户可以更快完成交易，他们可以直接验证自己的交易是否包含在批次中，但 State Diff 用户需要在 Layer1 等待最终结果。不过，State Diff 现进行了重大改进，用户只需为更改 L2 在 L1 中的存储槽功能付费，而无需为所有事务数据付费。State Diff 只发布一批事务的整体状态变化。【原文为英文】\n\nERC-4337 和 4337 类似的协议级改进引入了一种新的交易类型，其中包括两种功能： 验证和执行。在 State Diff Rollup 中，验证过程不会改变 L1 的任何插槽。因此，用户只需支付 L2 的执行成本，而无需为所有交易数据付费。此外，用户还能从与交易执行侧的状态差相关的成本改进中获益。Clave 作为专注于支付的应用程序，zkSync 的 State Diff 能够帮助其降低基于 Secure Enclave 签名器带来的数据成本。此外，EIP-7212 即将实施，Clave 账户将成为 ZK Stack 链中的一等公民。【原文为英文】\n\n归根结底，我们正在努力解决 Gas 问题。 EIP-7212 合约是一种预编译合约，专为在 secp256r1 曲线上实现 Gas 效率和安全操作而设计。由于 zkSync 目前不支持 modexp，在不使用 EIP-7212 的情况下，r1 验证的 Gas 量估计约为 200 万。因此，zkSync 团队正在努力整合 EIP-7212，以提高基于硬件签名器的密钥和钱包可用性。此外，正如前面提到的，State Diff 对于减少账户抽象带来的数据开销非常有效。【原文为英文】",
            "source_url": "https:\/\/mirror.xyz\/0x8958D0c419BCDFB8A86b8c0089552bE015fbe364\/K_w27ODCDzdbOqu-jBOYfILBA-nMEzo3naqgd_eBgHY",
            "author_name": "Dogan",
            "avatar_url": "https:\/\/images.chainfeeds.xyz\/image\/642a4ef79823d.jpg",
            "author_title": null,
            "show_time": "2023-12-18T04:29:40Z",
            "link_source": {
                "name": "Mirror",
                "link": "https:\/\/mirror.xyz\/",
                "logo_url": "https:\/\/images.chainfeeds.xyz\/image\/62922f5a73072.png",
                "english_name": null,
                "traditional_name": null
            }
        }
    ],
    "tags": [
        {
            "tag_id": "131",
            "tag_alias": "zksync",
            "tag_name": "zkSync"
        },
        {
            "tag_id": "1656",
            "tag_alias": "accountabstraction",
            "tag_name": "账户抽象"
        },
        {
            "tag_id": "6623",
            "tag_alias": "",
            "tag_name": "State Diff"
        }
    ],
    "link_source": {
        "name": "Mirror",
        "link": "https:\/\/mirror.xyz\/",
        "logo_url": "https:\/\/images.chainfeeds.xyz\/image\/62922f5a73072.png",
        "english_name": null,
        "traditional_name": null
    },
    "reaction": []
},
2
{
    "uuid": "a7ce0558-20b9-4ccd-850e-6593627d74b0",
    "title": "TON 生态 Launchpad 平台 TonUP 完成私募轮融资",
    "abstract": "TON 生态 Launchpad 平台 TonUP 宣布完成私募轮融资，Antalpha、MEXC Venture、Waterdrip Capital、New Tribe Capital、nxgen capital、MixMarvel DAO Venture、y2z Venture 及行业个人投资者参投。",
    "source_url": "https:\/\/twitter.com\/TonUP_io\/status\/1738466685622100226",
    "author_name": "ChainFeeds",
    "type": 2,
    "is_star": 1,
    "show_time": "2023-12-24T02:16:30Z",
    "view_count": 12,
    "avatar_url": "https:\/\/images.chainfeeds.xyz\/image\/628dca2c7fe69.png",
    "author_title": null,
    "opinion": [],
    "tags": [
        {
            "tag_id": "21",
            "tag_alias": "Financing",
            "tag_name": "融资"
        },
        {
            "tag_id": "22",
            "tag_alias": "Investment",
            "tag_name": "投资"
        },
        {
            "tag_id": "1831",
            "tag_alias": "ton",
            "tag_name": "TON"
        },
        {
            "tag_id": "6657",
            "tag_alias": "",
            "tag_name": "TonUP"
        }
    ],
    "link_source": {
        "name": "Twitter",
        "link": "https:\/\/twitter.com\/",
        "logo_url": "https:\/\/images.chainfeeds.xyz\/image\/62922f78e7a79.png",
        "english_name": null,
        "traditional_name": null
    },
    "reaction": []
},
3专题
"uuid": "2928c79a-7d6f-487e-bc38-618c8964b3b7",
                "title": "PRO 前沿｜EIP-1559 在 MEV-PBS 下的有效性、<em>Vitalik<\/em> 最新论文中的实现原理、PBS 促进以太坊去中心化",
                "author_name": "0xNatalie",
                "show_time": "2023-09-11T07:38:19Z",
                "is_star": 0,
                "type": 3,
                "source_url": "",
                "abstract": "更高效的签名执行系统 Bulletproofs++、大型质押即服务（staking-as-a-service）提供商降低权重的方案等",
                "tags": [],
                "banner": "https:\/\/images.chainfeeds.xyz\/image\/proeip-1559-mev-pbs-vitalik-pbs.png",
                "avatar_url": "https:\/\/images.chainfeeds.xyz\/image\/64eef51d7dbb4.jpg",
                "author_title": "",
                "link_source": []
            },
});

async function main() {
  let res = await blockbeats_axios.get("");
  console.log(res.data);
}
main();
