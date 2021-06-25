import { FormEvent, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoimg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
/*  import { useAuth } from '../hooks/useAuth';  */ 


export function NewRoom()
{
     /*  const {user} = useAuth();  */
     const {user} = useAuth();
     const history = useHistory();
     const [newRoom, setNewRoom] = useState('');

     async function hundleCreateRoom(event: FormEvent){
       event.preventDefault();
       
       if(newRoom.trim() === ''){
           return;
       }

       const roomRef = database.ref('rooms');

       const firebaseRoom = await roomRef.push({
           title: newRoom,
           authorId: user?.id,

       })

       history.push(`/rooms/${firebaseRoom.key}`)
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
                    
                    <h2>Criar uma nova sala</h2>
                    
                    <form onSubmit={hundleCreateRoom}>
                        <input
                         type="text"
                         placeholder = "Nome da sala"
                         onChange = {event => setNewRoom(event.target.value)}
                         value = {newRoom}
                        />
                        <Button type="submit">
                          Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}