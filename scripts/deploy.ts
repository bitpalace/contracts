import { ethers } from 'hardhat'

async function main() {
  const Token = await ethers.getContractFactory('BPTToken')

  const name = 'BitPalace Token'
  const symbol = 'BPT'
  // const amount = 10000000000e18

  // 初始化部署
  const token = await Token.deploy(name, symbol)

  // 等待部署完成
  await token.deployed()

  // 打印一下关键信息
  console.log(`Token deployed! Token name:${name}, deployed to: ${token.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
