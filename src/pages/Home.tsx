import illustrationImg from '../assets/images/illustration.svg';
import logoimg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
export function Home()
{
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
                    <button className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                        <input
                         type="text"
                         placeholder = "Digite o codigo da sala"
                        />
                        <button type="submit">
                          Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}