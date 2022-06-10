import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const Result = () => {
    return(
        <p>Your message has been successfully sent. I will contact you soon..</p>
    )
}

const Contact = () => {
    const [result, showResult] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6nka8pi', 'template_u77uwqp', e.target, 'a1yjNkJwm9rupwNZB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        showResult(true)
    };

    setTimeout(()=>{
        showResult(false)
    },5000)


    return (
        <div>
            <div className='px-10 py-14 '>
                <div className='text-center pb-14'>
                    <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent'>
                        Contact Us
                    </p>
                    <h1 className='text-4xl text-secondary font-bold'>Stay connected with us</h1>
                </div>
                <form className='grid grid-cols-1 justify-items-center gap-4' onSubmit={sendEmail}>
                        <input
                            type='text'
                            name='fullName'
                            placeholder='Your Name'
                            className='input w-full max-w-md input-bordered'
                        />
                        <input
                            type='text'
                            name='email'
                            placeholder='Email Address'
                            className='input w-full max-w-md input-bordered'
                        />
                        <input
                            type='number'
                            name='phone'
                            placeholder='Phone'
                            className='input w-full max-w-md input-bordered'
                        />
                        <textarea
                            className='textarea w-full max-w-md input-bordered'
                            name='message'
                            placeholder='Your message'
                            rows={5}
                        ></textarea>
                        <button class="btn-accent p-3 rounded-lg text-xl ">Submit</button>

                        <div className='row'>
                            {
                                result ? <Result /> : null
                            }
                        </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;