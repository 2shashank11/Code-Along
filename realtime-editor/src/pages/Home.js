import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()
  const [roomId, setRoomId] = useState('')
  const [userName, setUserName] = useState('')

  const createNewRoom = (e) => {
    e.preventDefault()
    const id = uuidv4()
    console.log(id)
    setRoomId(id)
    toast.success('New room created')
  }

  const joinRoom = () => {
    if (roomId === '' || userName === '') {
      toast.error('ROOM ID and USERNAME is required')
      return
    }
    navigate(`editor/${roomId}`, { state: { username: userName } }) 
  }

  const handleInputEnter = (e) => {
    if(e.code === 'Enter'){
      joinRoom()
    }
  }

  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img src="code-along.png" alt='logo' className='homePageLogo' />
        <h4 className='mainLabel'>Paste invitation ROOM ID</h4>
        <div className='inputGroup'>

          <input
            type='text'
            className='inputBox'
            placeholder='ROOM ID'
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onKeyUp={handleInputEnter}
          />

          <input
            type='text'
            className='inputBox'
            placeholder='USERNAME'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyUp={handleInputEnter}
          />

          <button className='btn joinBtn' onClick={joinRoom}>Join</button>

          <span className='createInfo'>If you dont have an invite then create &nbsp;
            <a
              onClick={createNewRoom}
              href=""
              className='createNewBtn'>new room
            </a>
          </span>

        </div>
      </div>
      <footer>
        <h4>Built with ❤️ by &nbsp; <a href='http://www.github.com/2shashank11' target='__blank'>Shashank</a></h4>
      </footer>
    </div>
  )
}

export default Home