 🏗 Scaffold-ETH - 🟣 Polygon NFT Example

hybridized copy pasted, violated, juggled and generally messed with to serve a purpose

what purpose? a first step in creating a launchpad to rapidly send any number of nfts out in to the ether

how???

using hashlips regenerative art repository then uploading the generated images to the web 
then we deploy the contract and site

after that we run the mint function.  now we have 100 unique NFTs



check it out

generate your art first!!! in the folder generative art node main there are instructions.

once you have uploaded them somewhere  (HINT-even a folder on your own pc served by serve -s /path/to/folder)



yarn install

generate a **deployer** account:

```
yarn generate
```

🙎 This will create a new mnemonic and you can get this **deployer** address using the command:

```
yarn account
```

Go to https://faucet.matic.network to get some Mumbai-MATIC (testnet currency).

Confirm that your account has the funds needed for the rest of the tutorial: (check on https://mumbai.polygonscan.com)

> Compile and deploy your NFT contract:

```
yarn deploy
```

To point the frontend at `mumbai` we will also need to edit `targetNetwork` in `packages/react-app/src/App.jsx`:

![image2](https://user-images.githubusercontent.com/76530366/127909020-6cd40a05-c28a-4791-9493-307a615c7dc4.png)

Start the frontend with:

```
yarn start
```

📱 Open http://localhost:3000 to see the app

---

### Minting:

> ✏️ Edit the mint script mint.js in packages/hardhat/scripts and update the `toAddress` to your frontend address (wallet address in the top right or localhost:3000).


> in a new terminal window run the mint script:
```
cd matic-nft-tutorial
yarn mint
```


👀 You should see your collectibles show up on the frontend if you minted to the correct address:

526558/124386983-48965300-dcb3-11eb-88a7-e88ad6307976.png)
tp://localhost:3000 (You'll notice it has a new wallet address).

526558/124387008-58ae3280-dcb3-11eb-920d-07b6118f1ab2.png)
 what address is the `owner` of `ArtburnproNFT`?
kages/hardhat/scripts`
 `packages/hardhat/contracts`
-app/src`
eed to `cd packages/react-app` and then `yarn add PACKAGE`


/hardhat.config.js` to `matic`
m/76530366/127909096-82f262ee-9052-4b80-9298-6a14dd3d5b2e.png) 
 to ensure you have some Matic. (You can exchange for Matic tokens on UniSwap dge).
526558/124387068-8004ff80-dcb3-11eb-9d0f-43fba2b3b791.png)




ct-app/src` to change the `targetNetwork` to `Matic`:
m/76530366/127909153-c14713f7-c225-4016-9c69-430ced009f3a.png)
:
m/76530366/127909563-a695d94b-5a87-4d76-84ac-9c819f36a3f7.png)

hat/scripts and update the `toAddress` to your MetaMask address (or other 



r Frontend.
/526558/124387132-b04c9e00-dcb3-11eb-95d1-03b8c272e52f.png)

r (Under "My Collections")
m/76530366/127909246-dc3ae4a5-70b7-4867-aabd-c5bc28d94588.png)

 Polygonscan (extractible from the terminal where you deployed the contract).

url with your friends...








/526558/124387203-fe61a180-dcb3-11eb-8d68-82a76a514e43.png)
m for their address to send them a collectible :)
/526558/124387205-00c3fb80-dcb4-11eb-9e2f-29585e323037.gif)



 sure that your chainID for your desired chain to deploy to is correct. The tive chain folders. For Matic, the correct chainID is 134. For Mumbai, the 

heck if you do have enough gas to deploy on your various networks. Then, try to `packages/hardhat/hardhat.config.js`.
m/76530366/127909315-623f2f7b-c8f0-4b30-b406-29821b716895.png)
# Documentation

For a more in-depth explanation, documentation, quick start guide, tutorials, tips and many more resources, visit our documentation site: [docs.scaffoldeth.io](https://docs.scaffoldeth.io) 

# 💬 Support Chat

Join the telegram [support chat 💬](https://t.yarme/joinchat/KByvmRe5wkR-8F_zz6AjpA) to ask questions and find others building with 🏗 scaffold-eth!
