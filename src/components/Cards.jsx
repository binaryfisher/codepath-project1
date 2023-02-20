import React from "react";
import Card from "./Card";

const Cards = () =>{

    return(
        <div className="Cards">
            
            <Card name='Central Park' address='Midtown Manhattan' href='https://www.centralpark.com/' img='https://s3.amazonaws.com/assets.centralparknyc.org/media/images/_1650x767_crop_center-center_none/Pilgrim-Hill_20190410_007.jpg' />
            <Card name='The Metropolitan Museum of Art' address='1000 5th Ave, New York, NY 10028' href='https://www.metmuseum.org/' img='https://www.metmuseum.org/-/media/images/visit/plan-your-visit/individual-locations/fifth-avenue/fifthave_1520x1520.jpg?as=1&mh=1520&mw=1520&sc_lang=en&hash=58D8A06FCA4D575DC8B811E9DBDA4129'/>
              
            <Card name='Status of Liberty' address='Downtown Manhattan' href='https://www.nps.gov/stli/index.htm' img='https://i.natgeofe.com/n/7267c8a1-a2af-4caa-af0f-ec4ad3b20637/NationalGeographic_185379_LR.jpg?w=636&h=947'/>        
            <Card name='Times Square' address='Midtown Manhattan' img='https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcROoS5bvc9obK1XL8ufXPAWjLUMnyPubvlOlWJgShoQz7fzH-Nbpb_b2rmFpv4e8MP7puPv-FctPxjbN9pRvPXj8Q'/>
                
                
            <Card name='Empire State Building' address='20W 34th St, New York, NY 10001' href='https://www.esbnyc.com/' img='https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg'/>
            <Card name='Grand Central Terminal' address='Middown Manhattan' href='' img='https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4ODE0MzA5NjU1MTkzMDkz/grand-central-terminal-gettyimages-176608565.jpg'/>
            <Card name='Brooklyn Bridge' address='Downtown Manhattan' href='https://en.wikipedia.org/wiki/Brooklyn_Bridge' img='https://www.nycgo.com/images/venues/158/brooklyn-bridge-photo-julienne-schaer-nyc-and-company-003-2__large.jpg'/>
                
            <Card name='The Museum of Modern Art' address='11W 53rd St,New York,NY 10019' href='https://www.moma.org/' img='https://www.parisinsidersguide.com/image-files/musee-de-art-modern-de-la-ville-de-paris-mural-800-2x1.jpg'/>
            <Card name='Museum of Natural History' address='Midtown Manhattan' href='https://www.amnh.org/' img='https://media.cntraveler.com/photos/5a7746e0aeb19b5730310bf7/16:9/w_2560,c_limit/Museum-of-Natural-History_AMNHD.-Finnin_2018_4.-Afr.jpg'/>
            <Card name='The High Line' address='Downtown Manhattan' href='https://www.thehighline.org/' img='https://www.newyorkbyrail.com/wp-content/uploads/2018/04/The-High-Line-NYC-NY-New-York-By-Rail-Francois-Roux.jpg.webp'/>
                
            
        </div>
    )
}

export default Cards;