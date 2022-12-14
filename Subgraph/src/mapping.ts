import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import {
    ERC721,
    Transfer,
} from "../generated/NFT_Bellecour/ERC721"
import { Owner, Token } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
    const id = event.params.tokenId.toString()
    const to = event.params.to.toHex()
    let token = Token.load(id)
    let contract = ERC721.bind(event.address)
    let owner = Owner.load(to)

    if (owner === null) {
        owner = new Owner(to)
        owner.save()
    }

    if (token === null) {
        token = new Token(id)
        token.tokenURI = contract.tokenURI(event.params.tokenId);
    }
    token.owner = to
    token.save()
}