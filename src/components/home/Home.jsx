import React from 'react';


const Home = (props) => {
    return (
        <div className='w-[80%] mx-auto py-12 text-gray-800 dark:text-white'>
            <div className="heading ">
                <h1 className='text-2xl md:text-4xl mb-6 text-cyan-600'>Harmatch</h1>
            </div>
            <div className="about-klaytn-watch text-2xl mb-12">
                <p className='mb-5 text-[1rem] md:text-2xl'>Harmatch is a Defi portfolio dashboard created to help users to be able to track thier Token or NFT balance. This application enables users to have a set portfolio where they can at anytime come and view thier available balance.</p>
                <p className=' text-[1rem] md:text-2xl'><span className='font-bold text-cyan-600'>How to Use</span>, Paste your 0x.. Address in the Search Bar Above, Then Click Enter to Search and your account details will be displayed.</p>
            </div>
            <div className="about-klaytn text-2xl mb-12">
                <h2 className='text-2xl md:text-4xl mb-6 text-cyan-600'>Future Plans</h2>
                <p className=' text-[1rem] md:text-2xl'>
                We at Harmatch plan on integrating a transactions page where users can seamlessly track thier past transactions in a well arranged manner. (More features coming soon).
                </p>
            </div>
            <div className="about-covalent text-2xl">
                <h2 className='text-2xl md:text-4xl mb-6 text-cyan-600'>Major Information</h2>
                <p className='mb-5 text-[1rem] md:text-2xl'>This application feeds from Covalent API which was used to query and get data relevant only to the Harmony Chain.</p>
                <p className=' text-[1rem] md:text-2xl'>The birth of this project was as a result of the Encode x Harmony Hackathon, but we're working on making the project bigger</p>
            </div>
        </div>
    )
}

export default Home