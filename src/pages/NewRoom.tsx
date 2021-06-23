import illustrationImg from '../assets/images/illustration.svg';
import logoimg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom()
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
                    <h2>Criar uma nova sala</h2>
                    
                    <form>
                        <input
                         type="text"
                         placeholder = "Nome da sala"
                        />
                        <Button type="submit">
                          Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <a href="#">Clique aqui</a></p>
                </div>
            </main>
        </div>
    )
}