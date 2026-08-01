import { useState } from "react";
import githubIcon from '../assets/github_icon.jpg';
import linkedinIcon from '../assets/linkedin_icon.jpg';
import emailIcon from '../assets/gmail_icon.jpg';
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
                
                <div className =  "contacto-container" style ={{ marginTop: '15px' }} style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                <h3 style={{ margin: 0,fontSize:'0.5rem',paddingRight:'5px',paddingBottom:'5px'  }}>Contact </h3>
                
                <p >
                    
                    
                    <a href="mailto:lnlietzgg@gmail.com">
                         <img src={emailIcon} alt="Email" style={{ width: '20px', height: '20px' ,padding:'2px'}} />
                    </a>
                </p>

                <p >
                    
                    
                    <a 
                    href="https://www.linkedin.com/in/nahuel-lietz-4b2933217/" 
                    target="_blank" 
                    rel="noreferrer"
                    >
                        <img src={linkedinIcon} alt="LinkedIn" style={{ width: '20px', height: '20px',padding:'2px' }} />
                    </a>
                </p>

                <p >
                    
                    
                    <a 
                    href="https://github.com/NahuelLietz" 
                    target="_blank" 
                    rel="noreferrer"
                    >
                        <img src={githubIcon} alt="GitHub" style={{ width: '20px', height: '20px',padding:'2px' }} />
                    </a>
                </p>
                </div>
            )}
        </div>

        </>

    )



}
export {SeeMore}