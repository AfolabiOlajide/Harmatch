import React, { useContext } from 'react'

import InfoContext from '../../context/infoContext'

const NftInfo = () => {
    const ctx = useContext(InfoContext)
    const nftData = ctx.addressInfo.nftData

    return (
        <div className='nft-infos text-black dark:text-white'>
            {nftData.map(data => (
                <div key={data.contract_address} className="w-full bg-gray-900 text-white dark:bg-cyan-800 flex flex-col space-y-6">
                    <div className="name-addy">
                        <h3 className='text-xl md:text-4xl'>{data.contract_ticker_symbol} {data.nft_data ? `#${data.nft_data[0].token_id}` : ""}</h3>
                        { data.nft_data ? <a href={`https://opensea.io/assets/klaytn/${data.contract_address}/${data.nft_data[0].token_id}`} target="_blank" rel="noreferrer noopener"><span className="material-icons-sharp text-xl md:text-4xl">open_in_new</span></a> :"" }
                    </div>
                    <div className="more-info flex flex-col space-y-3">
                        <h5 className='text-xl'>Name: <span className=''>{data.contract_name}</span></h5>
                        <h5 className='text-xl'>Balance: <span className='text-red-400'>{data.balance}</span></h5>
                        <h5 className='text-xl'>Price:  <span className='text-green-400'>{data.quote}</span></h5>
                    </div>
                </div>
            ) )}
            
        </div>
    )
}

export default NftInfo