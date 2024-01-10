import struct

data = "cbb23d99400551bda1abfa6133e4a7a5de680cdd7798439930c720eec4e7aa3a"

# 检查输入数据是否是32个字节
if len(data) != 64:
    print("Input data should be 64 characters (32 bytes)")
else:
    # 使用struct模块解码recipient数据
    decoded_data = struct.unpack('20sQH32s', bytes.fromhex(data))

    # 解析解码后的数据
    address = decoded_data[0].hex()  # 20字节地址，以十六进制表示
    uint256_value = decoded_data[1]  # uint256整数
    uint16_value = decoded_data[2]  # uint16整数
    bytes32_hash = decoded_data[3].hex()  # 32字节哈希，以十六进制表示

    print("Address:", address)
    print("Uint256 Value:", uint256_value)
    print("Uint16 Value:", uint16_value)
    print("Bytes32 Hash:", bytes32_hash)
