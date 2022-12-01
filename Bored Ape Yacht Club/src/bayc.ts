import { Transfer as TransferEvent, BAYC as BAYC_Contract } from "../generated/BAYC/BAYC"
import { Ape, User } from '../generated/schema'


export function handleTransfer(event: TransferEvent): void {
  let ape = Ape.load(event.params.tokenId.toString())
  if (!ape) {
    ape = new Ape(event.params.tokenId.toString())
    ape.creator = event.params.to.toHexString()
    ape.createdAtTimestamp = event.block.timestamp

    let apeContract = BAYC_Contract.bind(event.address)
    ape.contentURI = apeContract.tokenURI(event.params.tokenId)
  }

  ape.owner = event.params.to.toHexString()
  ape.save()

  let user = User.load(event.params.to.toHexString())
  if (!user) {
    user = new User(event.params.to.toHexString())
    user.save()
  }
}