import { NameProfileFounder } from '../NameTitleCreator'
import imagePerfil from './img/perfil.jpg'
import './styles.css'

export const PhotoPerfil = () => {
    return (
        <>
        <div className="perfil-box">
            <img src={imagePerfil} alt="foto do perfil Felipe Moreira" />
            <NameProfileFounder/>
        </div>
        </>
    )
}