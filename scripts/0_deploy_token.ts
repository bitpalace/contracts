import { ethers } from 'hardhat'

async function main() {
  const Token = await ethers.getContractFactory('BPTToken')

  const name = 'BitPalace Token'
  const symbol = 'BPT'

  // init deploy
  const token = await Token.deploy(name, symbol)

  // waitting contract deployed
  await token.deployed()

  console.log(`Token deployed! Token name:${name}, deployed to: ${token.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
