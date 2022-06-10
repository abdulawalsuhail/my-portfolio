import React from 'react';
import { Link } from 'react-router-dom';
import AAS from '../../../images/P_photo/aas electronics.png'
import Accounted from '../../../images/P_photo/accounted.png'
import Bread from '../../../images/P_photo/breadfactoru.png'

const Service = () => {
    return (
        <div>
            <h2 class="text-3xl font-bold uppercase text-accent text-center no-underline hover:underline">My Projects</h2>
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
                            <button class="btn btn-accent"><Link to="/details">Details</Link></button>
                            <button class="btn btn-accent"><a href='https://accounted-web-layout.firebaseapp.com/' target="_blank" rel="noreferrer">Live</a></button>
                            {/* <button class="btn btn-neutral"><a href='https://github.com/abdulawalsuhail/service-provider-assign-auth' target="_blank" rel="noreferrer">Git Hub</a></button> */}
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={Bread} alt="" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Bread Factory is my second website!</h2>
                        <p>● This is a bread selling Shop site.<br />
                            ● On Cover page users will see a list of breads they
                            can orderanyone from them.<br />
                            ● No spammer will be able to use the full features of
                            thewebsite. </p>
                        <div class="card-actions justify-end">
                            {/* <button class="btn btn-neutral"><a href='https://github.com/abdulawalsuhail/warehouse-client-assign' target="_blank" rel="noreferrer" >Git Hub(C)</a></button>
                            <button class="btn btn-neutral"><a href='https://github.com/eliyas700/gadget-world-server' target="_blank" rel="noreferrer" >Git Hub(S)</a></button> */}
                            <button class="btn btn-accent"><Link to="/details">Details</Link></button>
                            <button class="btn btn-accent"><a href='https://roaring-kangaroo-7c0712.netlify.app/' target="_blank" rel="noreferrer" >Live</a></button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={AAS} alt="" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">AAS Electronics is my third website!</h2>
                        <p>● This site is Mainly an Electronics site.<br />
                            ● You will get 3 types of view for (local user, logged in
                            users, adminpanel) <br />
                            ● Logged in users can purchase item by Credit
                            card, Admin can manage site other
                            functionalities. </p>
                        <div class="card-actions justify-end">
                            {/* <button class="btn btn-neutral"><a href='https://github.com/abdulawalsuhail/manufactural-assign' target="_blank" rel="noreferrer">Git Hub(C)</a></button>
                            <button class="btn btn-neutral"><a href='https://github.com/abdulawalsuhail/manufact-server-assign' target="_blank" rel="noreferrer">Git Hub(s)</a></button> */}
                            <button class="btn btn-accent"><Link to="/details">Details</Link></button>
                            <button class="btn btn-accent"><a href='https://aas-electronics.web.app/' target="_blank" rel="noreferrer">Live</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;