import { useState } from "react";
import IconLink from "./IconLink.jsx";
import contactLinks from "../data/contactLinks.js";
import '../styles/body.css'

function SeeMore(){
    const [seeMoreButton, setSeeMoreButton] = useState(false)
    return(
        <> 
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className="letter-density">
            <button
                className="see-more-button"
                onClick={ () => setSeeMoreButton(!seeMoreButton)}
                style={{width:'70px', border:'none'}}
                >
                { seeMoreButton? 'See less':'See more' }
            </button>

            {seeMoreButton && (
                <div className="contacto-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '15px'}}>
                <h3 style={{ margin: 0,fontSize:'0.5rem',paddingRight:'5px',paddingBottom:'5px'  }}>Contact </h3>

                {contactLinks.map((link) => (
                    <IconLink key={link.href} {...link} />
                ))}
                </div>
            )}
        </div>

        </>

    )
}

export {SeeMore}
export default SeeMore
