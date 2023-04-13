import {
    ThirdwebNftMedia,
    useAddress,
    useMetamask,
    useTokenBalance,
    useOwnedNFTs,
    useContract,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import Link from 'next/link'

import { useRouter } from "next/router";


import Homestyles from "../styles/Home.module.css";

const nftDropContractAddress = "0x68225df7c4df4d82ded8478daa74c2138da1f85b";
const stakingContractAddress = "0xFAaa8258bB2a324498F203BAB77655bd1Bc1D7D0";
const tokenContractAddress = "0x847fCadf5102Fa9E79F3c1D398Cf4275Ba781524";

const UserBalance: NextPage = () => {
    const address = useAddress();

    // Contract Hooks
    const { contract: nftDropContract } = useContract(
        nftDropContractAddress,
        "nft-drop"
    );

    const { contract: tokenContract } = useContract(
        tokenContractAddress,
        "token"
    );

    const { contract, isLoading } = useContract(stakingContractAddress);

    // Load Unstaked NFTs

    // Load Balance of Token
    const { data: tokenBalance } = useTokenBalance(tokenContract, address);

    ///////////////////////////////////////////////////////////////////////////
    // Custom contract functions
    ///////////////////////////////////////////////////////////////////////////
    const [stakedNfts, setStakedNfts] = useState<any[]>([]);
    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();

    // useEffect(() => {
    //     if (!contract || !address) return;

    //     async function loadClaimableRewards() {
    //         const stakeInfo = await contract?.call("getStakeInfo", address);
    //         setClaimableRewards(stakeInfo[1]);
    //     }

    //     loadClaimableRewards();
    // }, [address, contract]);

    // useEffect(() => {
    //     if (!contract || !address) return;

    //     async function loadClaimableRewards() {
    //         const cr = await contract?.call("availableRewards", address);
    //         console.log("Loaded claimable rewards", cr);
    //         setClaimableRewards(cr);
    //     }

    //     loadClaimableRewards();
    // }, [address, contract]);

    const [closeBtn1, setcloseBtn1] = useState(true);
    const [closeBtn, setcloseBtn] = useState(true);


    const [changeColor, setchangeColor] = useState(1);

    const router = useRouter();


    function LilListing() {
        // setchangeColor(5);
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

    function DownloadLbac() {
        // router.push("/DownloadLbac")
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
        stakesetOpen(false)
        coinsetOpen(!coinopen);
    };


    if (isLoading) {
        return <div>Loading</div>;
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
                                            ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25  po0"
                                            : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500 po0"
                                    }
                                >
                                    <span className="font-hand text-xl hover:text-red-500 fg">LISTING</span>
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

                                <div className="dropdown hover:bg-opacity-25 hover:bg-coal-light" onClick={coinhandleOpen}>
                                    <button className="fg" >SWAP</button>
                                    {coinopen ? (
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
                                                    <span className="font-hand text-xl fg">Swap Coin</span>
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
                                        </ul>
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
                                    <span className="font-hand text-xl fg fgg1">DownloadLbac</span>
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
                                    <span className="font-hand text-xl fg fgg1">DownloadLbac</span>
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
            <h3 className="user-frs swap-frs">USER BALANCE</h3>
            <Link href="/Marketplace">
                <div className={Homestyles.dflex + " " + Homestyles.dfl + " " + Homestyles.userfrs}>
                    <button>Back to Homepage</button>
                </div>
            </Link>

            <section className="relative left-5">

                <div className="container container--narrow pb-16">
                    {/* <div className="border-b-2 border-coal-light">
            <ul className="flex flex-col sm:flex-row flex-wrap -mb-2px font-hand text-lg md:text-xl lg:text-2xl text-gray-300 text-center">
              <li className="sm:w-1/3 border-t-2 sm:border-0 border-coal-light">
                <a href="/me/wallet/" className="block p-4 rounded-t-lg border-b-2 transition text-xenos-500 border-xenos-500">
                  Overview
                </a>
              </li>
              <li className="sm:w-1/3 border-t-2 sm:border-0 border-coal-light">
                <a href="/me/wallet/activity" className="block p-4 rounded-t-lg border-b-2 transition border-transparent hover:text-white hover:border-gray-500">
                  Wallet Activity
                </a>
              </li>
              <li className="sm:w-1/3 border-t-2 sm:border-0 border-coal-light">
                <a href="/me/wallet/earnings" className="block p-4 rounded-t-lg border-b-2 transition border-transparent hover:text-white hover:border-gray-500">
                  Earnings Log
                </a>
              </li>
            </ul>
          </div> */}
                    <div className="mt-10">
                        <div>
                            <div className="flex flex-wrap -m-4 font-hand1 text-center">
                                <div className="w-full sm:w-1/2 p-4">
                                    <div className="p-8 border-2 border-coal-light rounded-2xl bg-coal-dark">
                                        <div className="text-xl font-semibold uppercase tex-18">
                                            Total Balance + Claimable Rewards
                                        </div>
                                        <div className="inline-flex items-center mt-4">
                                            <img src="https://gateway.pinata.cloud/ipfs/QmVgAZjazqRrETC4LFhA3t4sZt6VyesVisEqCvgRmd4gHZ" width={50} height={50} className="mr-6" />
                                            <span className="text-xl">
                                                {/* <b>
                                                    {!claimableRewards
                                                        ? "Loading..."
                                                        : ethers.utils.formatUnits(claimableRewards, 18)}
                                                </b>{" "}
                                                {tokenBalance?.symbol} */}
                                                <b>{tokenBalance?.displayValue.substring(0, 4)}</b> {tokenBalance?.symbol}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-4">
                                    <div className="p-8 border-2 border-coal-light rounded-2xl bg-coal-dark">
                                        <div className="text-xl font-semibold uppercase tex-18">
                                            Current earnings
                                        </div>
                                        <span className="inline-flex items-center mt-4">
                                            <img src="https://gateway.pinata.cloud/ipfs/QmVgAZjazqRrETC4LFhA3t4sZt6VyesVisEqCvgRmd4gHZ" width={50} height={50} className="mr-6" />
                                            <span className="text-xl">
                                                <b>{tokenBalance?.displayValue.substring(0, 4)}</b> {tokenBalance?.symbol}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 p-8 border-2 font-hand1 border-coal-light rounded-2xl bg-coal-dark">
                                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between -m-4 text-center sm:text-left">
                                    <div className="w-full sm:w-auto text-lg p-4">
                                        You are  eligible to earn coins!
                                    </div>
                                    <div className="w-full sm:w-auto p-4">
                                        <a href="http://lilbabyapeclub.com/learn" className="af-button--xenos whitespace-nowrap af-button ">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default UserBalance;