// import React from "react";

// import styles from "../styles/Theme1.module.css";

// import Link from "next/link";

// import styles1 from "../styles/Home.module.css";

// import { ArrowBackIcon } from "@chakra-ui/icons";

// export default function preSale() {
//   var test = true;
//   var contractAddressSale = "0x44f83bBcAa75EAE6fb2DF77F04EEe3C686AA9401";
//   var contractAddressToken = "0xfD34194C3d78fea42E62d09f2199374D27C9321b";

//   return (
//     <div>
//       <Link href="/listings">
//         <div className={styles1.dflex}>
//           <button>Back to Homepage</button>
//         </div>
//       </Link>

//       <div className={styles.container}>
//         <div className={styles.heading + " " + styles.head}>
//           <div className={styles.hideit}>
//             <center>
//               <div style={{ textAlign: "center" }}>
//                 <button
//                   className={styles.button}
//                   id="connect"
//                   style={{ fontSize: "12px" }}
//                 >
//                   Connect
//                 </button>{" "}
//                 <button
//                   className={styles.switch}
//                   id="addTestBSC"
//                   style={{ fontSize: "12px" }}
//                 >
//                   To BSC Testnet
//                 </button>
//                 <span
//                   id="nometamask"
//                   className={styles.err}
//                   style={{ display: "none" }}
//                 >
//                   Please install Metamask first...
//                 </span>
//                 <div className={styles.network + " " + styles.small}>
//                   <span id="curnet">
//                     <span className={styles.err}>
//                       Please use DApp browser/extension (e.g.{" "}
//                       <a href="https://metamask.io">Metamask</a>)
//                     </span>
//                   </span>{" "}
//                   <span id="myAddr" />
//                 </div>
//               </div>
//               <div style={{ textAlign: "center" }}>
//                 <p>Token info</p>
//                 <p>
//                   <span id="tokenName">BIGBUCKS</span> (
//                   <span className={styles.tokenSymbol}>BUCKS</span>)
//                 </p>
//                 <p>
//                   <a
//                     href="https://testnet.bscscan.com/token/0xfD34194C3d78fea42E62d09f2199374D27C9321b"
//                     id="tokenAddress"
//                   >
//                     0xfD34194C3d78fea42E62d09f2199374D27C9321b
//                   </a>
//                 </p>
//                 <p>Do not send BNB to the token contract!</p>
//                 <p>
//                   <button id="addToken" style={{ textAlign: "center" }}>
//                     Add to Metamask
//                   </button>{" "}
//                   <button id="copyToken" style={{ textAlign: "center" }}>
//                     Copy address
//                   </button>
//                 </p>
//               </div>
//             </center>
//           </div>
//           <center>
//             <h2 className={styles.prt}>PRESALE</h2>
//           </center>
//         </div>
//         <div className={styles.cont}>
//           <div className={styles.heading + " " + styles.hea}>
//             <center>
//               <p className={styles.Mec}>MEC COIN (MECCO)</p>
//             </center>
//           </div>
//           <div className={styles.line}>
//             <span className={styles.left}> Network </span>
//             <span className={styles.right}> Binance Smart Chain </span>
//             <hr className={styles.hr} />
//           </div>
//           <div className={styles.line}>
//             <span className={styles.left}> Total Supply </span>
//             <span className={styles.right}> 10.0000.000 MECC </span>
//             <hr className={styles.hr} />
//           </div>
//           <div className={styles.line}>
//             <span className={styles.left}> Presales </span>
//             <span className={styles.right}> 5.0000.000 MECC </span>
//             <hr className={styles.hr} />
//           </div>
//           <div className={styles.line}>
//             <span className={styles.left}> Exchange Rate </span>
//             <span className={styles.right}> 1 BNB = 10.0000 MECC </span>
//             <hr className={styles.hr} />
//           </div>
//           <div className={styles.line}>
//             <span className={styles.left}> Min Purchase </span>
//             <span className={styles.right}> 0.01 BNB </span>
//             <hr className={styles.hr} />
//           </div>
//           <div className={styles.line}>
//             <span className={styles.left}> Max Purchase </span>
//             <span className={styles.right}> 5 BNB </span>
//             <hr className={styles.hr} />
//           </div>
//           <br />
//           <div style={{ textAlign: "center" }}>
//             <p>
//               1 BNB = <span className={styles.rate}>10000.0</span>{" "}
//               <span className={styles.tokenSymbol}>BUCKS</span>
//             </p>
//             <p className={styles.mtbi}>
//               <input
//                 className={styles.input}
//                 type="number"
//                 id="buyAmount"
//                 defaultValue={0}
//                 min={0}
//               />{" "}
//               BNB
//             </p>
//             <div className={styles.uppercase}>
//               <p>
//                 You get: <span id="get">0</span>{" "}
//                 <span className={styles.tokenSymbol}>BUCKS</span>
//               </p>
//             </div>
//             <p>
//               <button
//                 id="buyBtn"
//                 className={styles.btn + " " + styles.block}
//                 style={{ textAlign: "center" }}
//               >
//                 BUY
//               </button>
//             </p>
//             <div className={styles.uppercase + " " + styles.hideit}>
//               <p>
//                 In my wallet: <span id="myTokens" />{" "}
//                 <span className={styles.tokenSymbol}>BUCKS</span>
//               </p>
//             </div>
//           </div>
//           <br />

//         </div>
//         <div className={styles.hideit}>
//           <hr className={styles.hr} />
//           <div style={{ textAlign: "center" }}>
//             <h1>Sale contract</h1>
//             <p>
//               You can also buy tokens by sending BNB directly from your wallet
//               to this contract
//               <br />
//               (please increase gas limit to 200,000 or even more for tokens with
//               special functions like autoLP, swaps, etc.)
//             </p>
//             <p>
//               <a
//                 href="https://testnet.bscscan.com/address/0x44f83bBcAa75EAE6fb2DF77F04EEe3C686AA9401"
//                 // target="_blank"
//                 id="saleAddress"
//               >
//                 0x44f83bBcAa75EAE6fb2DF77F04EEe3C686AA9401
//               </a>{" "}
//               <button id="copySale" style={{ textAlign: "center" }}>
//                 Copy address
//               </button>
//             </p>
//             <div style={{ textAlign: "center" }} id="saleqr" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

import Link from "next/link";

import Homestyles from "../styles/Home.module.css";

import { Web3Button } from "@thirdweb-dev/react";

import { useContract, useContractWrite, useAddress } from "@thirdweb-dev/react";

import { ethers } from 'ethers';

import { useState } from "react";
import { useRouter } from "next/router";
export default function PreSale() {
  const [closeBtn1, setcloseBtn1] = useState(true);
  const [closeBtn, setcloseBtn] = useState(true);

  const [changeColor, setchangeColor] = useState(1);

  const router = useRouter();

  function LilListing() {
    // setchangeColor(1);
    router.push("/Listing");
  }

  function MutantListing() {
    setchangeColor(8);
    router.push("/ListMutant");
  }

  function DownloadLbac() {
    // router.push("/DownloadLbac");
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

  const [open, setOpen] = useState(false);

  const [stakeopen, stakesetOpen] = useState(false);

  const [coinopen, coinsetOpen] = useState(false);

  const coinhandleOpen = () => {
    setOpen(false);
    stakesetOpen(false);
    coinsetOpen(!coinopen);
  };

  const address = useAddress();
  const [getInputvalue, setgetInputvalue] = useState("2");
  const { contract } = useContract("0x8CBDcDd8E2310D3591Ad33e0B087d1Db717956E5");
  const { mutateAsync: deposit, isLoading } = useContractWrite(contract, "deposit")

  const { mutateAsync: claim, isLoading: claimIsLoading } = useContractWrite(contract, "claim")

  const _claim = async () => {
    try {
      const data = await claim();
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  const call = async () => {
    try {
      const data = await deposit();
      console.info("contract call successs", data);
      _claim();
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  return (
    <>
      <div className="max-h-full px-3 space-y-5 overflow-y-auto bsbs dfs">
        <div className="lg:block hfmm">
          <div className="bg-coal-dark border-2 border-coal-light rounded-xl fmm">
            <ul className="bg-coal-light bg-opacity-25 rounded-xl divide-y divide-coal-light fmm1">
              {/* <li role="button" className="p-1 ucc menu-item">
                <a
                  onClick={LilListing}
                  className={
                    changeColor != 5
                      ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:text-xenos-500 hover:bg-coal-light po0"
                      : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500 po0"
                  }
                >
                  <span className="font-hand text-xl hover:text-red-500 fg">
                    LISTING
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    // style={{ display: "none" }}
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li> */}

              <li role="button" className="p-1 ucc menu-item">
                <a
                  onClick={MutantStaking}
                  className={
                    changeColor != 5
                      ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light po0"
                      : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500 po0"
                  }
                >
                  <span className="font-hand text-xl fg">CLAIM NANA</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li>
              <li role="button" className="">
                <div
                  className="dropdown hover:bg-opacity-25 hover:bg-coal-light"
                  onClick={coinhandleOpen}
                >
                  <button className="fg">SWAP</button>
                  {coinopen ? (
                    <div className="i-z-i">
                      <ul className="menuss">
                        <li className="menu-item p-1 ucc">
                          <a
                            onClick={swapcoin}
                            className={
                              changeColor != 3
                                ? "flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition asa hover:bg-opacity-25 hover:bg-coal-light mk"
                                : "flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition asa hover:bg-opacity-25 hover:bg-coal-light text-xenos-500 mk"
                            }
                          >
                            <span className="font-hand text-xl fg">
                              Swap Coin
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                            >
                              <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                            </svg>
                          </a>
                        </li>
                        <li role="button" className="p-1 ucc menu-item">
                          <a
                            onClick={swapnft}
                            className={
                              changeColor != 4
                                ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light"
                                : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500"
                            }
                          >
                            <span className="font-hand text-xl fg fgg1">
                              Swap NFT
                            </span>
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
                  ) : null}
                </div>
              </li>

              {/* <li className="p-1 ucc">
                <a
                  onClick={raffel}
                  className={
                    changeColor != 6
                      ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light"
                      : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500"
                  }
                >
                  <span className="font-hand text-xl fg fgg1">Raffle</span>
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
                    changeColor != 7
                      ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light"
                      : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500"
                  }
                >
                  <span className="font-hand text-xl fg fgg1">Eth To Nana</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    style={{ display: "none" }}
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li>

              {/* <li className="p-1 ucc">
                <a
                  onClick={DownloadLbac}
                  className={
                    changeColor != 7
                      ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light"
                      : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500"
                  }
                >
                  <span className="font-hand text-xl fg fgg1">
                    DownloadLbac
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    style={{ display: "none" }}
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div>
          <div className="bg-coal-dark border-2 border-coal-400 md:border-coal-light rounded-xl pt-pb dddn">
            <div className="flex items-center justify-between py-3 px-4 border-b border-coal-light">
              <span className="text-sm">Listing type</span>
            </div>
            <div>
              <ul className="">
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm rounded-md cursor-pointer text-gray-400 hover:bg-opacity-25 hover:bg-coal-light">
                    <span>All types</span>
                    <input
                      type="checkbox"
                      className="bg-coal-light fill-coal-dark transition duration-100 srg ease-in-out shadow-sm border-2 focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 text-xenos-500 !border-coal-light sr"
                    />
                  </label>
                </li>
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm rounded-md cursor-pointer text-gray-400 hover:bg-opacity-25 hover:bg-coal-light">
                    <span>Buy now</span>
                    <input
                      defaultValue="buy_now"
                      // type="radio"
                      type="checkbox"
                      className="bg-coal-light fill-coal-dark transition duration-100 ease-in-out shadow-sm border-2 focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 text-xenos-500 !border-coal-light"
                    />
                  </label>
                </li>
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm rounded-md cursor-pointer bg-coal-light bg-opacity-75 text-white">
                    <span>Raffle</span>
                    <input
                      defaultValue="raffle"
                      // type="radio"
                      type="checkbox"
                      className="bg-coal-light fill-coal-dark transition duration-100 ease-in-out shadow-sm border-2 focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 text-xenos-500 !border-coal-light"
                    />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-coal-dark border-2 border-coal-400 md:border-coal-light rounded-xl dddn">
            <div>
              <ul className="divide-y divide-coal-light">
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm hover:bg-opacity-25 hover:bg-coal-light rounded-md cursor-pointer text-gray-400">
                    <span>Show out of stock</span>
                    <span
                      role="checkbox"
                      aria-checked="true"
                      tabIndex={0}
                      className="-mr-1 relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 p-1 bg-coal-light rounded-full border-2 border-transparent focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50"
                    >
                      {/* <input type="hidden" /> */}
                      <span className="inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"></span>

                      <span
                        onClick={() => setcloseBtn1(!closeBtn1)}
                        className={
                          closeBtn1 == true
                            ? "inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"
                            : "inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs bg-xenos-500"
                        }
                      ></span>
                      <span
                        onClick={() => setcloseBtn1(!closeBtn1)}
                        className={
                          closeBtn1 == true
                            ? "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full bg-xenos-500 shadow flex items-center justify-center text-xenos-500 text-xs"
                            : "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full  shadow flex items-center justify-center text-xenos-500 text-xs"
                        }
                      ></span>
                    </span>
                  </label>
                </li>
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm hover:bg-opacity-25 hover:bg-coal-light rounded-md cursor-pointer text-white">
                    <span>Show ended sales</span>
                    <span
                      tabIndex={0}
                      className="-mr-1 relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 border-2 border-transparent focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 p-1 bg-coal-light rounded-full"
                    >
                      <input type="hidden" defaultValue="true" />
                      <span
                        aria-checked="true"
                        className="inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"
                      ></span>
                      <span
                        onClick={() => setcloseBtn(!closeBtn)}
                        className={
                          closeBtn == true
                            ? "inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"
                            : "inline-block rounded-full bg-xenos-500 h-3 w-3 flex items-center justify-center text-xenos-500 text-gray-400 text-xs"
                        }
                      ></span>
                      <span
                        onClick={() => setcloseBtn(!closeBtn)}
                        className={
                          closeBtn == true
                            ? "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full bg-xenos-500 shadow flex items-center justify-center text-xenos-500 text-xs"
                            : "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full shadow flex items-center justify-center text-xenos-500 text-xs"
                        }
                      ></span>
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-h-full px-3 space-y-5 overflow-y-auto bsbs d-fm">
        <div className="lg:block hfmm">
          <div className="bg-coal-dark border-2 border-coal-light rounded-xl fmm">
            <ul className="bg-coal-light bg-opacity-25 rounded-xl divide-y divide-coal-light fmm1">
              {/* <li role="button" className="p-1 ucc">
                <button
                  onClick={LilListing}
                  className={
                    changeColor == 1
                      ? "flex items-center hover:bg-opacity-25 hover:bg-coal-light asa justify-between py-2 px-3 rounded-md cursor-pointer transition bg-coal-light bg-opacity-75 mk"
                      : "flex items-center justify-between py-2 px-3 rounded-md cursor-pointer asa text-xenos-500 bg-opacity-25   bg-coal-light mk"
                  }
                >
                  <span className="font-hand text-xl fg fgg2">LISTING</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </button>
              </li> */}

              <li className="p-1 ucc">
                <a
                  onClick={MutantStaking}
                  className={
                    changeColor != 5
                      ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light po0"
                      : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500 po0"
                  }
                >
                  <span className="font-hand text-xl fg">CLAIM NANA</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li>
              <li className="p-1 ucc">
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
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li>
              <li className="p-1 ucc">
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
              </li>

              {/* <li className="p-1 ucc">
                <a
                  onClick={raffel}
                  className={
                    changeColor != 6
                      ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light"
                      : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500"
                  }
                >
                  <span className="font-hand text-xl fg fgg1">Raffle</span>
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
                    changeColor != 7
                      ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light"
                      : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500"
                  }
                >
                  <span className="font-hand text-xl fg fgg1">Eth To Nana</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    style={{ display: "none" }}
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li>
              {/* <li className="p-1 ucc">
                <a
                  onClick={DownloadLbac}
                  className={
                    changeColor != 7
                      ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light"
                      : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500"
                  }
                >
                  <span className="font-hand text-xl fg fgg1">
                    DownloadLbac
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    style={{ display: "none" }}
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div>
          <div className="bg-coal-dark border-2 border-coal-400 md:border-coal-light rounded-xl pt-pb dddn">
            <div className="flex items-center justify-between py-3 px-4 border-b border-coal-light">
              <span className="text-sm">Listing type</span>
            </div>
            <div>
              <ul className="">
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm rounded-md cursor-pointer text-gray-400 hover:bg-opacity-25 hover:bg-coal-light">
                    <span>All types</span>
                    <input
                      // onClick={() => setradiochangeColor(false)}
                      // type="radio"
                      type="checkbox"
                      // onChange={this.handleCheck} defaultChecked={this.state.checked}
                      className="bg-coal-light fill-coal-dark transition duration-100 srg ease-in-out shadow-sm border-2 focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 text-xenos-500 !border-coal-light sr"
                    />
                  </label>
                </li>
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm rounded-md cursor-pointer text-gray-400 hover:bg-opacity-25 hover:bg-coal-light">
                    <span>Buy now</span>
                    <input
                      defaultValue="buy_now"
                      // type="radio"
                      type="checkbox"
                      className="bg-coal-light fill-coal-dark transition duration-100 ease-in-out shadow-sm border-2 focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 text-xenos-500 !border-coal-light"
                    />
                  </label>
                </li>
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm rounded-md cursor-pointer bg-coal-light bg-opacity-75 text-white">
                    <span>Raffle</span>
                    <input
                      defaultValue="raffle"
                      // type="radio"
                      type="checkbox"
                      className="bg-coal-light fill-coal-dark transition duration-100 ease-in-out shadow-sm border-2 focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 text-xenos-500 !border-coal-light"
                    />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-coal-dark border-2 border-coal-400 md:border-coal-light rounded-xl dddn">
            <div>
              <ul className="divide-y divide-coal-light">
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm hover:bg-opacity-25 hover:bg-coal-light rounded-md cursor-pointer text-gray-400">
                    <span>Show out of stock</span>
                    <span
                      role="checkbox"
                      aria-checked="true"
                      tabIndex={0}
                      className="-mr-1 relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 p-1 bg-coal-light rounded-full border-2 border-transparent focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50"
                    >
                      {/* <input type="hidden" /> */}
                      <span className="inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"></span>

                      <span
                        onClick={() => setcloseBtn1(!closeBtn1)}
                        className={
                          closeBtn1 == true
                            ? "inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"
                            : "inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs bg-xenos-500"
                        }
                      ></span>
                      <span
                        onClick={() => setcloseBtn1(!closeBtn1)}
                        className={
                          closeBtn1 == true
                            ? "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full bg-xenos-500 shadow flex items-center justify-center text-xenos-500 text-xs"
                            : "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full  shadow flex items-center justify-center text-xenos-500 text-xs"
                        }
                      ></span>
                    </span>
                  </label>
                </li>
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm hover:bg-opacity-25 hover:bg-coal-light rounded-md cursor-pointer text-white">
                    <span>Show ended sales</span>
                    <span
                      tabIndex={0}
                      className="-mr-1 relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 border-2 border-transparent focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 p-1 bg-coal-light rounded-full"
                    >
                      <input type="hidden" defaultValue="true" />
                      <span
                        aria-checked="true"
                        className="inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"
                      ></span>
                      <span
                        onClick={() => setcloseBtn(!closeBtn)}
                        className={
                          closeBtn == true
                            ? "inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"
                            : "inline-block rounded-full bg-xenos-500 h-3 w-3 flex items-center justify-center text-xenos-500 text-gray-400 text-xs"
                        }
                      ></span>
                      <span
                        onClick={() => setcloseBtn(!closeBtn)}
                        className={
                          closeBtn == true
                            ? "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full bg-xenos-500 shadow flex items-center justify-center text-xenos-500 text-xs"
                            : "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full shadow flex items-center justify-center text-xenos-500 text-xs"
                        }
                      ></span>
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img
        className="iimg"
        src="https://gateway.pinata.cloud/ipfs/QmaG5foqVJSoxfVHofoD2Pa4RLHSUcmrQ7Nw1vM5mL1Gqn?_gl=1*oov2r*_ga*MTM0NzM3MDM2OC4xNjczNjQ0MzY4*_ga_5RMPXG14TE*MTY3NzI0NzE2Ny4xMy4xLjE2NzcyNDcyMzEuNjAuMC4w"
        alt=""
      />
      <h3 className="user-frs swap-frs">Eth To Nana</h3>
      <Link href="/Marketplace">
        <div
          className={
            Homestyles.dflex + " " + Homestyles.dfl + " " + Homestyles.userfrs
          }
        >
          <button>Back to Homepage</button>
        </div>
      </Link>

      <div className="ethTonana">
        {/* <iframe
          id="iframeNanaToEth"
          className="presaleIframe presaleIframeP"
          src="http://blackgate.xyz/"
          height="760px"
          width="70%"
        ></iframe> */}
        {/* <iframe className="ToS" src="https://ipfs.thirdwebcdn.com/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc20.html?contract=0xF049391E548bc379a9fA5DEfe53c665a81f39b1d&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fethereum.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%7D&theme=dark&primaryColor=red" width="600px" height="600px" style={{ maxWidth: '100%' }} frameBorder={0} /> */}
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-element-2550b475 elementor-widget elementor-widget-text-editor">
            <div className="elementor-widget-container">
              <style dangerouslySetInnerHTML={{ __html: "\n        /*! elementor - v3.12.1 - 02-04-2023 */\n        .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{\n          background-color:#69727d;\n          color:#fff}\n        .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{\n          color:#69727d;\n          border:3px solid;\n          background-color:transparent}\n        .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{\n          margin-top:8px}\n        .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{\n          width:1em;\n          height:1em}\n        .elementor-widget-text-editor .elementor-drop-cap{\n          float:left;\n          text-align:center;\n          line-height:1;\n          font-size:50px}\n        .elementor-widget-text-editor .elementor-drop-cap-letter{\n          display:inline-block}\n      " }} />
              <div className="twbs">
                <div className="container-fluid ethereum-ico-shortcode">
                  <div className="row">
                    <div className="col">
                      <h2 className="ethereum-ico-gaslimit">
                        Gas Limit: 200000
                      </h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 col-12">
                      <div className="ethereum-ico-quantity">
                        <input type="number" name="etherInput" id="etherInput" placeholder="Input ETH amount" className="ethereum-ico-bottom-input-one" onChange={(e) => {
                          setgetInputvalue(e.target.value)
                        }} />
                        <div className="quantity-nav">
                          <div className="quantity-button quantity-up">
                            <i className="fa fa-chevron-up">
                            </i>
                          </div>
                          <div className="quantity-button quantity-down">
                            <i className="fa fa-chevron-down">
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 d-lg-none d-md-none">
                      <span className="ethereum-ico-rate ethereum-ico-rate-eth">
                        0.10000
                      </span>
                    </div>
                    <div className="ethereum-ico-rate-eth col-6 d-lg-none d-md-none">
                      <span className="ethereum-ico-rate-coin">
                        ETH
                      </span>
                    </div>
                    <div className="ethereum-ico-rate-eth col-md-2 col-6 d-none d-md-block">
                      <span className="ethereum-ico-rate-coin">
                        ETH
                      </span>
                    </div>
                    <div className="ethereum-ico-bottom-button col-md-5 col-12">
                      <Web3Button
                        className="button ethereum-ico-bottom-button-two"
                        contractAddress="0x8CBDcDd8E2310D3591Ad33e0B087d1Db717956E5"
                        action={call}

                        overrides={{
                          accessList: [], // The AccessList to include; only available for EIP-2930 and EIP-1559 transactions.
                          blockTag: "latest", // A BlockTag specifies a specific block location in the Blockchain.
                          ccipReadEnabled: false, // https://eips.ethereum.org/EIPS/eip-3668#use-of-ccip-read-for-transactions
                          customData: {}, // The transaction data.
                          from: address, // The address this transaction is from.
                          gasLimit: 100000, // The maximum amount of gas this transaction is permitted to use.
                          gasPrice: 100000, // The price (in wei) per unit of gas this transaction will pay.
                          maxFeePerGas: 100000, // The maximum price (in wei) per unit of gas this transaction will pay
                          maxPriorityFeePerGas: 0, // The price (in wei) per unit of gas this transaction will allow in addition to the block's base fee
                          nonce: 0, // The nonce used as part of the proof-of-work to mine this block.
                          type: 0, // The EIP-2718 type of this transaction envelope, or undefined for to use the network default
                          value: ethers.utils.parseEther(getInputvalue), // send 0.1 ether with the contract call
                        }}
                      >
                        Buy token with Metamask
                      </Web3Button>

                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="ethereum-ico-description">
                        Make sure that you send Ether from a wallet that supports ERC20 tokens or from an address for which you control the private key. Otherwise you will not be able to interact with the NANA tokens received. Do not send Ether directly from an exchange to the ICO address.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="twbs">
                  <div className="container-fluid ethereum-ico-progress-shortcode">
                    <div className="row">
                      <div className="col-12">
                        <div className="progress">
                          <div className="style-2hV4a" id="style-2hV4a">
                            0
                          </div>
                          <div className="progress-bar style-CkoxS" id="style-CkoxS">
                            <span className="sr-only">
                              0.00% Complete
                            </span>
                          </div>
                        </div>
                        <div className="progress-meter">
                          <div className="meter meter-left style-mO2vo" id="style-mO2vo">
                            <span className="meter-text">
                              Ξ0
                            </span>
                          </div>
                          <div className="meter meter-left style-Oeo6B" id="style-Oeo6B">
                            <span className="meter-text">
                              Soft:&nbsp;
                              <span>
                                Ξ30
                              </span>
                            </span>
                          </div>
                          <div className="meter meter-right style-CnqAA" id="style-CnqAA">
                            <span className="meter-text">
                              Hard:&nbsp;
                              <span>
                                Ξ10K
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    #
                  </th>
                  <th>
                    Amount
                  </th>
                  <th>
                    Amount, NANA
                  </th>
                  <th>
                    Date
                  </th>
                  <th>
                    Tx
                  </th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </div>

        <div className="ethereum-ico-bottom-button col-md-5 col-12">
          <Web3Button
            className="button ethereum-ico-bottom-button-two"
            contractAddress="0x8CBDcDd8E2310D3591Ad33e0B087d1Db717956E5"
            action={_claim}
          >
            Claim
          </Web3Button>
        </div>
        <div className="text">Missed Claim?</div>
      </div>
    </>
  );
}
