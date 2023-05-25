// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "./openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {

  uint256 public tokenCount;

  constructor() ERC721("BitPalace NFT", "DNFT") {}

  function mint(address to) public {
    tokenCount = tokenCount + 1;
    _safeMint(to, tokenCount);
  }
}
