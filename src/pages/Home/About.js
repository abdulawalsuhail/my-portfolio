import React from 'react';
import { Link } from 'react-router-dom';
import GitHub from '../../images/web/GitHub.png'
import LinkedIn from '../../images/web/Liked.png'
import html from '../../images/icon/html.png'
import css from '../../images/icon/css.png'
import js from '../../images/icon/js.png'
import bootstrap from '../../images/icon/Bootstrap.png'
import node from '../../images/icon/node.png'
import mongodb from '../../images/icon/mongodb.png'
import react from '../../images/icon/react.png'
import tailwind from '../../images/icon/tailwind.png'


const About = () => {
    return (
        <div>
            <h1 className='text-center uppercase text-4xl font-bold'>About <span className='text-accent'>Me</span></h1>
            <div class="hero ">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold mt-8">Hello! I am <span className='text-accent'>Abdul Awal Suhail</span></h1>
                        <p class="py-6">I am (Md. Abdul Awal Suhail) a young and energetic boy. My academic background is Science. Now I have studying in B. Sc- Computer Science and Engineering (CSE), in the institute of Dhaka City College.
                            Besides, I have successfully completed frontend and full stack web development course from a renowned company in Programming Hero. As a result, I am capable to learn sound knowledge about : <br />
                            ● Language as like-JavaScript, ES6, REST API, React, React Router, React Hook, SPA, HTML5, CSS3, Bootstrap-5, Tailwind.<br />
                            ● Also, I have used to comfort data base as like- Node. js, Mongo DB, Firebase, Express Js, Stripe<br />
                            ● And used tools as like- Git Hub, VS Code, Brackets, Chrome Dev Tools, Heroku, Netlify, Photoshop, Figma.</p>


                        <div className='flex cursor-pointer'>
                            <a href="https://www.linkedin.com/in/abdulawalsuhail01/" target="_blank"><img src={LinkedIn} alt='' /></a>
                            <a href="https://github.com/abdulawalsuhail" target="_blank"><img src={GitHub} alt='' /></a>

                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm">
                        <div class="card-body">
                            <h1 className='text-accent font-bold text-3xl mb-3'>PERSONAL INFO</h1>
                            <h2>Name: Abdul Awal Suhail</h2>
                            <h2>Email: abdullahsuhail43@gmail.com</h2>
                            <p>Phone: (+880) - 01403858029</p>
                            <p>From: Dhaka, Bangladesh</p>
                            <p>Language: Bangla, English</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <div class="hero my-12">
                    <div class="grid grid-cols-1 lg:grid grid-cols-2">
                        <div>
                            <h1 class="text-3xl font-bold text-accent">Education</h1>
                            <p class="py-6"><span>Education Level : </span>
                                Computer Science and Engineering (CSE) Study on going.
                                
                            </p>
                            
                            <p ><span>Exam/Degree Title : </span>
                                HSC
                            </p>
                            <p class="py-3"><span>Institution Name : </span>
                                City College
                            </p>
                            <p class="py-3"><span>Passing Year : </span>
                                HSC'2021
                            </p>
                        </div>
                        <div class="pl-44">
                            <h1 class="text-3xl font-bold text-accent">Skill</h1>
                            <div class="grid gap-2 lg:grid grid-cols-3 gap-4 w-64 my-5">
                                <img src={html} alt=''/>
                                <img src={css} alt=''/>
                                <img src={js} alt=''/>
                                <img src={bootstrap} alt=''/>
                                <img src={react} alt=''/>
                                <img src={tailwind} alt=''/>
                                <img src={node} alt=''/>
                                <img src={mongodb} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h1 className='text-center uppercase text-3xl font-bold  mt-4'>LICENSEE & <span className='text-accent'>CERTIFICATIONS</span></h1>
                <div className='mt-4 pl-10'>
                    <h1 className='text-accent font-bold text-2xl'>Complete Web Development Course</h1>
                    <p>Programming Hero</p>
                    <p>January 2022 - May 2022</p>
                </div>
            </div>
        </div>
    );
};

export default About;