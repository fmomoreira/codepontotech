import { BsGithub, BsInstagram, BsLinkedin } from  'react-icons/bs'
import './styles.css'

export const SocialBox = () => {
    return (
        <>
            <div className="box-social-links">
                <a href="https://www.linkedin.com/in/felipemoreirafrontend/" target="_blank" rel="Linkedin"><BsLinkedin /></a>
                <a href="https://www.instagram.com/fmomoreira/" target="_blank" rel="Intagram"><BsInstagram /></a>
                <a href="https://github.com/fmomoreira/" target="_blank" rel="Github"><BsGithub /></a>
            </div>
        </>
    )
}