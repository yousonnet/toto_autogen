import { Axios } from "axios";
let cli = new Axios({ baseURL: "https://twitter.com/AlfaDAO_" });

async function main() {
  let res = await cli.get("");
  console.log(res.data);
}
main();
