import React, { useContext } from 'react';
import { BiWalletAlt } from "react-icons/bi"

import NftInfo from './NftInfo';
import TokenTable from './TokenTable';
import InfoContext from '../../context/infoContext';

const AddressInfo = () => {
    const ctx = useContext(InfoContext);
    const link = `https://explorer.harmony.one/address/${ctx.addressInfo.address}`

    let tokenContent = <TokenTable />
    let nftContent = <NftInfo />

    if (ctx.addressInfo.cryptocurrencyData.length !== 0){
        tokenContent = <TokenTable />
    }else{
        tokenContent = <div className='no-token-data'>No Token Info for this address</div>
    }
    if (ctx.addressInfo.nftData.length !== 0){
        nftContent = <NftInfo />
    }else{
        nftContent = <div className='no-token-data'>No NFT Info for this address</div>
    }

    return (
        <div className='address-info text-black dark:text-white w-[80%] mx-auto py-12'>
            <section className='mb-[5rem]'>
                {/* <h3 className=''><span className="material-icons-sharp">account_balance</span> Address</h3> */}
                <div className="flex space-x-3 md:space-x-5">
                    <h4 className='text-[.7rem] md:text-2xl'>{ctx.addressInfo.address}</h4>
                    <a href={link} target="_blank" rel="noreferrer noopener" title='view in explorer'>
                        <span className="material-icons-sharp text-[.7rem] md:text-2xl">open_in_new</span>
                    </a>
                </div>
            </section>
            <section className='mb-[5rem]'>
                <h3 className='flex items-center space-x-6 mb-5 text-xl md:text-4xl'><BiWalletAlt /> <span>Tokens Available</span></h3>
                { tokenContent }
            </section>
            <section className=''>
                <h3 className='text-xl md:text-4xl mb-5'><span className="material-icons-sharp">palette</span> NFTs</h3>
                { nftContent }
            </section>
        </div>
    )
}

export default AddressInfo