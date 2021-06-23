import {useHistory} from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoimg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';


export function Home()
{
    const history = useHistory();

    function navegateToNewRoom(){
        history.push('/rooms/new');
    }

    return (
        <div id="page-auth">
            <aside>
              <img src={illustrationImg} alt="Ilustração"></img>
              <strong>Crie Salas de Q&amp;A ao vivo</strong>
              <p>Tire as dúvidas de suas audiências em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoimg} alt="Letmeask" />
                    <button onClick={navegateToNewRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                        <input
                         type="text"
                         placeholder = "Digite o codigo da sala"
                        />
                        <Button type="submit">
                          Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}