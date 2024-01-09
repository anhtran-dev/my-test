import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:3010', {
      withCredentials: true,
});


const ERP = (props) => {
      let [status , setStatus] = useState('unlike')

      socket.on("connect_error", (err) => {
            console.log(err);
            console.log(err.message); // prints the message associated with the error
      });

      const readMessage = () => {
            let user_id = 461
            let group_id = 450
            let status = 'unread'
            socket.emit('read-message', {user_id, group_id, status});
      }

      useEffect(() => {
            // client listen event like feed
            socket.on('read-message', (data) => {
                  console.log('read-message', data);
            });
      }, [])

      const unsentMessage = () => {
            let user_id = 461
            let group_id = 450
            let chat_id = 1712
            let type = 2
            socket.emit('unsent-message', {user_id, group_id, chat_id, type});
      }

      const disconnect = () => {
            socket.emit('disconnect');
      }

      useEffect(() => {
            // client listen event like feed
            socket.on('unsent-message', (data) => {
                  console.log('unsent-message', data);
            });
      }, [])


      const showListGroup = () => {
            let user_id = 461
            let num_per_page = 10
            let page = 1
            let search = ''
            socket.emit('show-group', {user_id, num_per_page , page, search});
      }

      useEffect(() => {
            // client listen event display typing
            socket.on('show-group', (data) => {
                  console.log('show-group', data);
            });
      }, [])


      // client emit join room
      const handleJoin = () => {

            let id = 12
            let name = 'id12'
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg'
            let room = 'GC_smf0f_1704251356267'
            socket.emit('join-room', {id, name, avatar, room});
      }

      const handleJoin2 = () => {
            let id = 1
            let name = 'id1'
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg'
            let room = 'GC_smf0f_1704251356267'
            socket.emit('join-room', {id, name, avatar, room});
      }

      // client emit send message
      const handleChat = () => {
            let id = 12
            let name = 'id12'
            let avatar = 'https://fantick.kan-tek.com/storage/users/avatars/2021_12_19_21_42_51-61bfedab809d8.jpg'
            let room = 'GC_smf0f_1704251356267'
            let message = '12 test 1'
            let type = 'text'
            let thumbnail = null
            socket.emit('send-message', {id, name, avatar, room, message, type, thumbnail});
      }

      const handleChat1 = () => {
            let id = 1
            let name = 'id1'
            let avatar = 'https://fantick.kan-tek.com/storage/users/avatars/2021_12_19_21_42_51-61bfedab809d8.jpg'
            let room = 'GC_smf0f_1704251356267'
            let message = '1 test 1'
            let type = 'text'
            let thumbnail = null
            socket.emit('send-message', {id, name, avatar, room, message, type, thumbnail});
      }

      // client emit typing message
      const handleChange = (e, id, name) => {
            let room = 'cream-team-x-x-1644921667150'
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan.jpg'
            let typing = e.target.value.length > 0
            socket.emit('typing', {id, name, avatar, room, typing});
      }

      useEffect(() => {
            // client listen event display typing
            socket.on('display-typing', (data) => {
                  console.log('typing', data);
            });
      }, [])

      // client emit leave room
      const leaveRoom = (name) => {
            let room = 'bb-1646735568136'
            let id = 716
            socket.emit('leave-room', {id, name, room});
      }

      // client like post

      useEffect(() => {
            // client listen event join room
            socket.on('join-room', (data) => {
                  console.log('join-room', data);
            });
      }, [])

      useEffect(() => {
            // client listen event join room
            socket.on('leave-room', (data) => {
                  console.log('leave-room', data);
            });
      }, [])

      useEffect(() => {
            // client listen event join room
            socket.on('message', (data) => {
                  console.log('message', data);
            });
      }, [])

      return (
            <>
                  <div style={{paddingBottom : 100 , borderBottom : '1px solid red'}}>
                        <p>A</p>
                        <button onClick={() => handleJoin(1, 'a')}>Join</button>
                        <button onClick={() => handleJoin2(1, 'a')}>Join2</button>
                        <button onClick={() => handleChat(1, 'a')}>Chat</button>
                        <button onClick={() => handleChat1(1, 'a')}>Chat 11</button>
                        <input type="text" onChange={(e) => handleChange(e, 1 , 'a')}/>
                        <button onClick={() => leaveRoom('a')}>Leave</button>
                        <button onClick={readMessage}>Read Message</button>
                        <button onClick={unsentMessage}>Unsent Message</button>
                        <button onClick={disconnect}>Disconnect</button>
                  </div>
                  <div className='aa'>
                        <p>B</p>
                        <button onClick={() => handleJoin(2, 'b')}>Join</button>
                        <button onClick={() => handleChat(2, 'b')}>Chat</button>
                        <input type="text" onChange={(e) => handleChange(e, 2 , 'b')}/>
                        <button onClick={() => leaveRoom('b')}>Leave</button>
                  </div>

            </>
      );
}

export default ERP;