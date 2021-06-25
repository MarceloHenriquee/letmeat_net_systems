import {useHistory} from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoimg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';

export function Home()
{
    const history = useHistory();
    const { user, signInWithGoogle} = useAuth();
    const [roomCode, setRoomCode] = useState('');
    

    async function hundleCreateRoom(){
        if (!user){
           await signInWithGoogle();
        }
        
        history.push('/rooms/new');
    }
    async function handleJoinRoom(event: FormEvent){
      event.preventDefault();

      if (roomCode.trim() === ''){
          return;
      }

      const roomRef = await database.ref(`rooms/${roomCode}`).get();

      if (!roomRef.exists()){
         alert('Room does not exists.');
         return;
      }

      history.push(`/rooms/${roomCode}`);
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
                    <button onClick={hundleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                         type="text"
                         placeholder = "Digite o codigo da sala"
                         onChange={event => setRoomCode(event.target.value)}
                         value={roomCode}
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