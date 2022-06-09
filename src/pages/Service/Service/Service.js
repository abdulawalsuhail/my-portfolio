import React from 'react';
import AAS from '../../../images/P_photo/aas electronics.png'
import Accounted from '../../../images/P_photo/accounted.png'
import Bread from '../../../images/P_photo/breadfactoru.png'

const Service = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center pb-8'>My Project</h1>
            <div className='grid grid-cols-1 lg:grid grid-cols-3 gap-4'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Accounted} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Accounted web is my first website!</h2>
                        <p>● A Accounted web where you will see the products
                            List andCustomers Feedbacks.<br />
                            ● Users also can add a product to the cart or remove
                            it from thecart.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><a href='https://accounted-web-layout.firebaseapp.com/'target='_blank'>View Project</a></button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Bread} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Bread Factory is my second website!</h2>
                        <p>● This is a bread selling Shop site.<br />
                            ● On Cover page users will see a list of breads they
                            can orderanyone from them.<br />
                            ● No spammer will be able to use the full features of
                            thewebsite.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><a href='https://roaring-kangaroo-7c0712.netlify.app/' target='_blank'>View Project</a></button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={AAS} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">AAS Electronics is my third website!</h2>
                        <p>● This site is Mainly an Electronics site.<br />
                            ● You will get 3 types of view for (local user, logged in
                            users, adminpanel)<br />
                            ● Logged in users can purchase item by Credit
                            card, Admin can manage site other
                            functionalities.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><a href='https://aas-electronics.web.app/' target='_blank'>View Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;