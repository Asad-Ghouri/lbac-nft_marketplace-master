import {
  MediaRenderer,
  useContract,
  useNetwork,
  useNetworkMismatch,
  useListing,
  useContractRead,
  useContractEvents,
  useAddress,
} from "@thirdweb-dev/react";

import { ThirdwebSDK } from "@thirdweb-dev/sdk";

import styles1 from "../../styles/Theme.module.css";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Input,
  Button,
  // Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Spinner,
  Portal,
} from "@chakra-ui/react";
import { ChainId, ListingType, NATIVE_TOKENS } from "@thirdweb-dev/sdk";

import { useRouter } from "next/router";
import React, { useContext, useState, useRef, useEffect } from "react";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
} from "../../const/contractAddresses";
import { ChainName } from "../../const/aLinks";
import styles from "../../styles/Theme.module.css";
import TwitterLogo from "../../public/icons/Img.png";

import Image from "next/image";

const activeChainId = parseInt(`${process.env.NEXT_PUBLIC_CHAIN_ID}`);
const contracAddress = NFT_COLLECTION_ADDRESS;
const contractType = "ERC-721";
const networkName = ChainName();

import { useOffers } from "@thirdweb-dev/react";

import { useMakeBid, Web3Button } from "@thirdweb-dev/react";


export default function ListingPage() {
  // const contractAddress = "0x0e7B309Ba44d42f978655aE51789619AD7e1E2d9";
  // const { contract } = useContract(contractAddress, "marketplace");

  // const [offers, setOffers] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const [events, setEvents] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const contractAddress = "0x0e7B309Ba44d42f978655aE51789619AD7e1E2d9";
  // const { contract } = useContract(contractAddress, "marketplace");

  // const web3 = new Web3('https://my-thirdweb-provider.com');
  // const contractAddress = '0x123456789abcdef...';
  // const contract = new web3.eth.Contract(ContractABI, contractAddress);

  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [bidValue, setbidValue] = useState(2);

  const address = useAddress();
  // useEffect(() => {

  // }, []);

  // useEffect(() => {
  //   async function fetchListings() {
  //     try {
  //       console.log("inside fetching data");
  //       // Get all the listing IDs from the contract
  //       const listingIds = await contract.methods.getAllListingIds().call();

  //       // Fetch offers for each listing ID
  //       const listingPromises = listingIds.map((listingId) =>
  //         useOffers(contract, listingId)
  //       );
  //       const listingOffers = await Promise.all(listingPromises);

  //       // Combine the listing IDs and offers into an array of objects
  //       const newListingData = listingIds.map((listingId, index) => ({
  //         id: listingId,
  //         offers: listingOffers[index].data,
  //       }));

  //       // Update state with the new listing data

  //       setListings(newListingData);
  //       console.log("fetching data is " + newListingData);
  //     } catch (err) {
  //       setError(err);
  //       alert(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchListings();
  // }, []);


  // const {
  //   data: events,
  //   isLoading,
  //   error,
  // } = useContractEvents(contract, "MyEvent", {
  //   fromBlock: 0,
  //   toBlock: "latest",
  // });

  function LilListing() {
    // setchangeColor(1);
    router.push("/Listing");
  }

  function MutantListing() {
    setchangeColor(8);
    router.push("/ListMutant");
  }

  function LilStake() {
    setchangeColor(2);
    router.push("/StakingBaby");
    // alert("contract address is not deployed yet");
  }

  function MutantStaking() {
    // setchangeColor(5);
    router.push("/Nana");
  }

  function raffel() {
    // setchangeColor(6);
    router.push("/Raffle");
  }

  function swapcoin() {
    // setchangeColor(3);
    router.push("/SwapCoin");
  }

  function swapnft() {
    // setchangeColor(4);
    router.push("/SwapNFT");
  }

  function presale() {
    // setchangeColor(7);
    router.push("/EthToNana");
  }

  const { bidVal, setbidVal } = useState(0);

  const [copySuccess, setCopySuccess] = useState("");
  const TextRef = useRef(null);

  const [closeBtn, setcloseBtn] = useState(true);
  // const [changeColor, setchangeColor] = useState(1);

  function copyToClipboard(e) {
    TextRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Berhasil di salin");
  }

  const router = useRouter();
  const { listingId } = router.query;
  const ref = React.useRef();

  const networkMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace"
  );
  const { data: listing, isLoading: loadingListing } = useListing(
    marketplace,
    listingId
  );

  // const {
  //   data: offers,
  //   isLoading: offerIsLoading,
  //   error: offerError,
  // } = useOffers(contract, listingId);
  useEffect(() => {
    async function fetchOffers() {
      const sdk = ThirdwebSDK.fromPrivateKey("a9989eac22d991004ab35dee67aa78e68070accf4fcdea46a6aefa69adff8f8e", "ethereum");

      const contractAddress = "0x0e7B309Ba44d42f978655aE51789619AD7e1E2d9";

      // const { contract } = useContract(contractAddress, "marketplace");

      const contract = await sdk.getContract(contractAddress, "marketplace");


    }
    fetchOffers();
  }, []);

  if (listing?.secondsUntilEnd === 0) {
  }

  const [bidAmount, setBidAmount] = useState("");

  const [changeColor, setchangeColor] = useState(1);

  if (loadingListing) {
    return (
      <div className={styles.loading}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  }

  if (!listing) {
    return <div className={styles.loading}>Listing not found</div>;
  }

  async function createBidOrOffer() {
    try {
      // Ensure user is on the correct network
      if (networkMismatch) {
        switchNetwork &&
          switchNetwork(Number(process.env.NEXT_PUBLIC_CHAIN_ID));
        return;
      }

      // If the listing type is a direct listing, then we can create an offer.
      if (listing?.type === ListingType.Direct) {
        await marketplace?.direct.makeOffer(
          listingId, // The listingId of the listing we want to make an offer for
          1, // Quantity = 1
          NATIVE_TOKENS[activeChainId].wrapped.address, // Wrapped Ether address on Goerli
          bidValue // The offer amount the user entered
        );
      }

      // If the listing type is an auction listing, then we can create a bid.
      if (listing?.type === ListingType.Auction) {
        // await marketplace?.auction.makeBid(listingId, bidValue);
        // const tx = await marketplace?.auction.makeBid(listingId, bidValue).prepare(1);
        const tx = await marketplace.auction.makeBid(listingId, bidValue);
        console.log("tx is " + tx);
        tx.setGasLimit(1000000);
        console.log("gas is " + tx.setGasLimit)
        tx.setGasPrice(1000000000);
        console.log("gas is " + tx.setGasPrice)

        const txReceipt = await tx.execute();
      }

      alert(
        `${listing?.type === ListingType.Auction ? "Bid" : "Offer"
        } created successfully!`
      );
    } catch (err) {
      console.error(err.message || "something went wrong");
      alert(err.message || "something went wrong");
    }
  }

  async function buyNft() {
    try {
      // Ensure user is on the correct network
      if (networkMismatch) {
        switchNetwork &&
          switchNetwork(Number(process.env.NEXT_PUBLIC_CHAIN_ID));
        return;
      }

      // Simple one-liner for buying the NFT
      await marketplace?.buyoutListing(listingId, 1);
      alert("NFT bought successfully!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  return (
    <>
      <hr className="new4" />

      <div className="chawal">
        <div className="max-h-full px-3 space-y-5 overflow-y-auto bsbs">
          <div className="lg:block hfmm">
            <div className="bg-coal-dark border-2 border-coal-light rounded-xl fmm">
              <ul className="bg-coal-light bg-opacity-25 rounded-xl divide-y divide-coal-light fmm1">
                {/* <li role="button" className="p-1 ucc">
                  <button
                    onClick={LilListing}
                    className={
                      changeColor != 5
                        ? "flex items-center hover:bg-opacity-25 hover:bg-coal-light asa justify-between py-2 px-3 rounded-md cursor-pointer transition bg-coal-light bg-opacity-75 mk"
                        : "flex items-center justify-between py-2 px-3 rounded-md cursor-pointer asa text-xenos-500 bg-opacity-25   bg-coal-light mk"
                    }
                  >
                    <span className="font-hand text-xl fg fgg2">
                      LISTING
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    >
                      <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                    </svg>
                  </button>
                </li> */}

                <li role="button" className="p-1 ucc">
                  <button
                    onClick={MutantListing}
                    className={
                      changeColor != 8
                        ? "flex items-center hover:bg-opacity-25 hover:bg-coal-light asa justify-between py-2 px-3 rounded-md cursor-pointer transition bg-coal-light bg-opacity-75 mk"
                        : "flex items-center justify-between py-2 px-3 rounded-md cursor-pointer asa text-xenos-500 bg-opacity-25   bg-coal-light mk"
                    }
                  >
                    <span className="font-hand text-xl fg fgg2">
                      CLAIM NANA
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    >
                      <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                    </svg>
                  </button>
                </li>

                <li className="p-1 ucc">
                  <a
                    onClick={swapcoin}
                    className={
                      changeColor != 2
                        ? "flex items-center justify-between py-2 px-3 rounded-md asa cursor-pointer transition  hover:bg-opacity-25 hover:bg-coal-light mk"
                        : "flex items-center justify-between py-2 px-3 rounded-md asa cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light  text-xenos-500 mk"
                    }
                  >
                    <span className="font-hand text-xl fg">SWAP COIN</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    // style={{ display: "none" }}
                    >
                      <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                    </svg>
                  </a>
                </li>

                <li className="p-1 ucc">
                  <a
                    onClick={swapnft}
                    className={
                      changeColor != 5
                        ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light po0"
                        : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500 po0"
                    }
                  >
                    <span className="font-hand text-xl fg">SWAP NFT</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    // style={{ display: "none" }}
                    >
                      <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                    </svg>
                  </a>
                </li>

                {/* <li className="p-1 ucc">
                  <a
                    onClick={swapcoin}
                    className={
                      changeColor != 3
                        ? "flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition asa hover:bg-opacity-25 hover:bg-coal-light mk"
                        : "flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition asa hover:bg-opacity-25 hover:bg-coal-light text-xenos-500 mk"
                    }
                  >
                    <span className="font-hand text-xl fg">Swap Coin</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    // style={{ display: "none" }}
                    >
                      <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                    </svg>
                  </a>
                </li> */}

                {/* <li className="p-1 ucc">
                  <a
                    onClick={swapnft}
                    className={
                      changeColor != 4
                        ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light"
                        : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500"
                    }
                  >
                    <span className="font-hand text-xl fg fgg1">Swap NFT</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                      style={{ display: "none" }}
                    >
                      <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                    </svg>
                  </a>
                </li> */}

                <li className="p-1 ucc">
                  <a
                    onClick={presale}
                    className={
                      changeColor != 5
                        ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light po0"
                        : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500 po0"
                    }
                  >
                    <span className="font-hand text-xl fg">Eth To Nana</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    // style={{ display: "none" }}
                    >
                      <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                    </svg>
                  </a>
                </li>

                <li className="p-1 ucc">
                  <a
                    onClick={raffel}
                    className={
                      changeColor != 6
                        ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light"
                        : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500"
                    }
                  >
                    <span className="font-hand text-xl fg fgg1">RAFFLE</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                      style={{ display: "none" }}
                    >
                      <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <img
        className="iimg l-img"
        src="https://gateway.pinata.cloud/ipfs/QmaG5foqVJSoxfVHofoD2Pa4RLHSUcmrQ7Nw1vM5mL1Gqn?_gl=1*oov2r*_ga*MTM0NzM3MDM2OC4xNjczNjQ0MzY4*_ga_5RMPXG14TE*MTY3NzI0NzE2Ny4xMy4xLjE2NzcyNDcyMzEuNjAuMC4w"
        alt=""
      />

      <Container maxW={"5xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"auto"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <MediaRenderer
                src={listing.asset.image}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                className="fetImg"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  margin: "auto",
                }}
              />
            </Box>
            <div className="links links1">
              <h2>Link</h2>
              <a href="https://twitter.com/LilBabyApeClub?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                {" "}
                <Image src={TwitterLogo} alt="" height={30} width={30} />{" "}
              </a>
            </div>
          </Flex>
          <Stack
            flex={1}
            spacing={{ base: 5, md: 10 }}
            style={{ marginBottom: "35px" }}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            >
              <Text as={"span"} position={"relative"} className="tg">
                LIL BABY APE CLUB
              </Text>
              <br />
            </Heading>
            <Box
              bg="white.400"
              color="white"
              textAlign="left"
              padding="10px"
              className={styles.portalW}
            >
              <Text color={"gray.500"} style={{ fontSize: 15 }}>
                <b>{listing.asset.description}</b>
              </Text>
              <br />
              <Portal containerRef={ref}></Portal>
              <Box ref={ref} className="detail-box">
                {/* Wallet Detail: */}
                <Text fontSize={"sm"} style={{ marginTop: "20px" }}>
                  <b> ID token: {listing.asset.id}</b>
                  <br />
                  <br />
                  <b> Type: {contractType}</b>
                  <br />
                  <br />
                  <b> Chain: {networkName}</b>

                  {/* <b>Description: Baby apes live on ethereum chain</b> */}
                </Text>
                {document.queryCommandSupported("copy") && (
                  <div>
                    <Text>
                      <br />
                      <b>Contract:</b>{" "}
                      <Button
                        onClick={copyToClipboard}
                        variant={"link"}
                        colorScheme={"blue"}
                        title={"Salin"}
                      >
                        {" "}
                        {contracAddress
                          .slice(0, 3)
                          .concat("...")
                          .concat(contracAddress.slice(-4))}
                      </Button>
                    </Text>
                    {copySuccess}
                  </div>
                )}
                <form style={{ position: "fixed", bottom: "-9999px" }}>
                  <input
                    style={{ height: "0px" }}
                    ref={TextRef}
                    value="0xd928c0977ae3dbc6561e4731d388e4335c24ed5a"
                  />
                </form>
              </Box>

              <div className="detail-box">
                <b>Description: Baby apes live on ethereum chain</b>
              </div>

              {
                !(listing?.type === ListingType.Direct) ?
                  <div className="makebid">
                    <form>
                      <input
                        type="text"
                        onChange={(e) => {
                          setbidValue(e.target.value);
                        }}
                        className="makeInput"
                        placeholder="Your Offer For Nana To Enter The Raffle"
                      />
                    </form>

                    {/* <button
                      onClick={createBidOrOffer}
                      className="af-button  af-button--xenos mb-btn"
                    >
                      ENTER RAFFLE
                    </button> */}
                    <Web3Button
                      className="af-button  af-button--xenos mb-btn"
                      contractAddress="0x0e7B309Ba44d42f978655aE51789619AD7e1E2d9"
                      action={(marketplace) => marketplace.auction.makeBid(listingId, bidValue)}
                      overrides={{
                        accessList: [], // The AccessList to include; only available for EIP-2930 and EIP-1559 transactions.
                        blockTag: "latest", // A BlockTag specifies a specific block location in the Blockchain.
                        ccipReadEnabled: false, // https://eips.ethereum.org/EIPS/eip-3668#use-of-ccip-read-for-transactions
                        customData: {}, // The transaction data.
                        from: address, // The address this transaction is from.
                        gasLimit: 700000, // The maximum amount of gas this transaction is permitted to use.
                        gasPrice: 700000, // The price (in wei) per unit of gas this transaction will pay.
                        maxFeePerGas: 700000, // The maximum price (in wei) per unit of gas this transaction will pay
                        maxPriorityFeePerGas: 1, // The price (in wei) per unit of gas this transaction will allow in addition to the block's base fee
                        nonce: 2, // The nonce used as part of the proof-of-work to mine this block.
                        type: 0, // The EIP-2718 type of this transaction envelope, or undefined for to use the network default
                        // send 0.1 ether with the contract call
                      }}
                    >
                      ENTER RAFFLE
                    </Web3Button>
                  </div> :
                  console.log("not listing")
              }
            </Box>
            <Box></Box>
          </Stack>
        </Stack>
      </Container>
      <div className="pb-2rem">
        <div className="block bg-coal-light bg-coal-light1 bg-opacity-50 rounded-2xl border-2 border-coal-light overflow-hidden ffl">
          <div className="py-6 px-6">
            <div className="flex flex-wrap items-start -m-3">
              <div className="flex items-start w-full lg:w-1/2">
                <div className="flex justify-between  p-3">
                  <div className="inline-flex items-center mt-2">
                    {/* <img
                      src="https://gateway.pinata.cloud/ipfs/QmVgAZjazqRrETC4LFhA3t4sZt6VyesVisEqCvgRmd4gHZ?_gl=1*1junjl0*_ga*MTM0NzM3MDM2OC4xNjczNjQ0MzY4*_ga_5RMPXG14TE*MTY3NDA3NDI0OS41LjAuMTY3NDA3NDI1MC41OS4wLjA."
                      // src="https://ik.imagekit.io/alienfrens/tr:w-64,h-64,q-100/coin/fren-coin_11BlmRl48.png"
                      // src={Coin}
                      width={72}
                      height={72}
                      className="mr-3 mt-1 imgprice"
                    /> */}
                    {/* <span className="inline-flex text-3xl font-semibold font-hand mt-10px">
                      1.00
                    </span> */}
                  </div>
                  {(listing?.type === ListingType.Direct) ?
                    <button
                      onClick={buyNft}
                      className="w-full af-button  af-button--xenos b-nft"
                    >
                      Buy NFT
                    </button>
                    :
                    console.log("")

                  }
                </div>
              </div>
              <div className="flex-1 p-3 me-f-m">
                <div className="flex flex-wrap items-center -m-3">
                  <div className="w-full xs:w-28 p-3"></div>
                  <div className="flex-1 p-3">
                    <button
                      onClick={raffel}
                      className="w-full af-button  af-button--xenos en-mt"
                    >
                      RAFFLE MENU
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block py-5 px-5 md:px-6 bg-coal-dark border-t-2 border-coal-light">
            <div className="flex flex-col md:flex-row justify-between md:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <div className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 w-6 h-6 text-gray-300 fill-current icon sprite-icons"
                >
                  <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-clock"></use>
                </svg>
                <span className="text-gray-300 tt">Ticket sale ends at</span>
              </div>
              <span className="tt1">June 27, 2023 12:00 AM (UTC)</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="py-6 px-6 ssl">
        <div className="flex flex-col md:flex-row -m-3 ssl1">
          <div className="w-full md:w-1/4 p-3">
            <div className="text-sm text-gray-300">
              Tickets supply
            </div>
            <div className="mt-3 text-sm font-bold">
              unlimited
            </div>
          </div>
          <div className="w-full md:w-1/4 p-3">
            <div className="text-sm text-gray-300">
              Raffle winners
            </div>
            <div className="mt-3 text-sm font-bold">
              20
            </div>
          </div>
          <div className="w-full md:w-1/2 p-3">
            <div className="text-sm text-gray-300">
              Raffle draw
            </div>
            <div className="mt-3 text-sm font-bold">
              after sale end
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="border-2 border-coal-light rounded-2xl bg-coal-dark ttl">
        <div className="border-b-2 border-coal-light">
          <ul className="flex flex-col sm:flex-row flex-wrap -mb-2px font-hand text-lg md:text-xl text-gray-300 text-center">
            <li className="flex-1 border-t-2 sm:border-0 border-coal-light ic">
              <button onClick={() => setchangeColor(1)} className={changeColor != 1 ? "block py-4 px-6 rounded-t-lg  transition snipcss0-4-4-5" : "block py-4 px-6 rounded-t-lg border-b-2 transition snipcss0-4-4-5 text-xenos-500 border-xenos-500"}>
                Raffle winners
                <span className="inline-block ml-1 text-base">
                  (0)
                </span>
              </button>
            </li>
            <li className="flex-1 border-t-2 sm:border-0 border-coal-light ic">
              <button onClick={() => setchangeColor(2)} className={changeColor != 2 ? "block py-4 px-6 rounded-t-lg border-b-2 transition border-transparent hover:text-white hover:border-gray-500 snipcss0-4-7-8" : "block py-4 px-6 rounded-t-lg border-b-2 transition text-xenos-500 border-xenos-500"}>
                All entries
                <span className="inline-block ml-1 text-base">
                  (0)
                </span>
              </button>
            </li>
            <li className="flex-1 border-t-2 sm:border-0 border-coal-light ic">
              <button onClick={() => setchangeColor(3)} className={changeColor != 3 ? "block py-4 px-6 rounded-t-lg border-b-2 transition border-transparent hover:text-white hover:border-gray-500 snipcss0-4-10-11" : "block py-4 px-6 rounded-t-lg border-b-2 transition  text-xenos-500 border-xenos-500"} >
                Your entries
                <span className="inline-block ml-1 text-base">
                  (0)
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className="py-4">
          <div className="py-2 px-5 md:px-6 relative">
            <div className="py-6 text-center">
              <p className="text-gray-300">
                At this moment there are no winners.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div>
        {listings.map((listing) => (
          <div key={listing.id}>
            <h2>Listing ID: {listing.id}</h2>
            <ul>
              {listing.offers.map((offer) => (
                <li key={offer.offerId}>Offer ID: {offer.offerId}</li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </>
  );
}
