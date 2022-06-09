import React from 'react';
import Profile from '../../images/profile/profile.png'
import Google from '../../images/web/Google.png'
import Linkedin from '../../images/web/Linked.png'
import Spotify from '../../images/web/spotify.png'
import Amazon from '../../images/web/amazon.png'
import Microsoft from '../../images/web/microsoft.png'

const Banner = () => {
    return (

        <div>
            <div class="hero min-h-screen bg-neutral text-white rounded-lg p-16 my-8">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Profile} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Hey, I’m Abdul Awal Suhail
                            Frontend Developer.</h1>
                        <p class="py-6">Full Stack Frontend Developer and Content Writing Based on LA. I specialize in Bug Fixing, Responsive Web Design, and Visual Development.</p>
                        <button class="btn btn-primary">View Project </button>
                    </div>
                </div>
            </div>

            <div>
                <div class="hero min-h-screen  p-24">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="grid grid-cols-1 gap-3 lg: grid grid-cols-3 gap-6 rounded-lg"> 
                            <img className='rounded-lg h-24' src={Google} alt=''/>
                            <img className='rounded-lg h-24' src={Linkedin} alt=''/>
                            <img className='rounded-lg h-24' src={Spotify} alt=''/>
                            <img className='rounded-lg h-24' src={Amazon} alt=''/>
                            <img className='rounded-lg h-24' src={Microsoft} alt=''/>
                        </div>
                        <div>
                            <h1 class="text-4xl font-bold ">I work with over 279+ happy
                                clients all over the world.</h1>
                            <p class="py-6">Suspendisse eget ultricies felis, in lacinia lectus. Morbi accumsan dapibus tortor, in fermentum odio malesuada in aliquam sed ipsum tristique.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;