import React from 'react';
import AAS from '../../../images/P_photo/aas electronics.png'
import Accounted from '../../../images/P_photo/accounted.png'
import Bread from '../../../images/P_photo/breadfactoru.png'

const Service = () => {
    return (
        <div>
            <h2 class="text-3xl font-bold uppercase text-center no-underline hover:underline">My Projects</h2>
            <div class="lg:grid grid-cols-3">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={Accounted} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Accounted web is my first website!</h2>
                        <p>● A Accounted web where you will see the products
                            List andCustomers Feedbacks.<br />
                            ● Users also can add a product to the cart or remove
                            it from thecart. </p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-accent"><a href='https://accounted-web-layout.firebaseapp.com/' target="_blank" rel="noreferrer">Live Demo</a></button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={Bread} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Bread Factory is my second website!</h2>
                        <p>● This is a bread selling Shop site.<br />
                            ● On Cover page users will see a list of breads they
                            can orderanyone from them.<br />
                            ● No spammer will be able to use the full features of
                            thewebsite. </p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-accent"><a href='https://roaring-kangaroo-7c0712.netlify.app/' target="_blank" rel="noreferrer" >Live demo</a></button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={AAS} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">AASElectronics is my third website!</h2>
                        <p>● This site is Mainly an Electronics site.<br/>
                            ● You will get 3 types of view for (local user, logged in
                            users, adminpanel) <br/>
                            ● Logged in users can purchase item by Credit
                            card, Admin can manage site other
                            functionalities. </p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-accent"><a href='https://aas-electronics.web.app/' target="_blank" rel="noreferrer">Live demo</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;