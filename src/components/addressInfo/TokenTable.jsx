import React, { useContext } from 'react'

import InfoContext from '../../context/infoContext';

const TokenTable = () => {
    const ctx = useContext(InfoContext);

    function separator(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }

    return (
        <>
        <div className="">
            <div className="item-list">
                {ctx.addressInfo.cryptocurrencyData.map( data => (
                    <div className="item  p-6 rounded-lg flex flex-col space-y-6 items-center justify-between mb-8 bg-gray-900 text-white dark:bg-cyan-800 md:flex-row md:space-y-0">
                        <div className="token-info flex space-x-3 items-center">
                            <img src={data.logo_url} className="w-[10%]" alt="" />
                            <h3 className='text-xl md:text-4xl'>{data.contract_ticker_symbol}</h3>
                        </div>
                        <div className="token-balance flex justify-between space-x-12">
                            <div className="balance text-xl">Balance: <span className='text-red-400'>{separator((data.balance / 1000000000000000000).toFixed(5))}</span></div>
                            <div className="value text-xl">Value: <span className='text-green-400'>${separator(data.quote.toFixed(2))}</span></div>
                        </div>
                    </div>
                ) )}
                
            </div>
        </div>
        </>
        
    )
}

export default TokenTable