import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
const socket = io('https://find-stars.kendemo.com:3009', {
      withCredentials: true,
});


const FIND_STAR = (props) => {
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

            let id = 2
            let name = 'id2'
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg'
            let room = '7'
            socket.emit('join-room', {id, name, avatar, room});
      }

      const handleJoin2 = () => {
            let id = 3
            let name = 'id3'
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg'
            let room = 'zhHL2oiehT'
            socket.emit('join-room', {id, name, avatar, room});
      }

      // client emit send message
      const handleChat = () => {
            let id = 2
            let name = 'id2'
            let avatar = 'https://fantick.kan-tek.com/storage/users/avatars/2021_12_19_21_42_51-61bfedab809d8.jpg'
            let room = '7'
            let message = 'id2 chat room 7'
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



      const addComment = () => {
            let user_id = 7;
            let name = 'test';
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan.jpg'
            // let post_id = 1
            let content_id = 1305
            let message = 'vloz'
            socket.emit('add-comment', {user_id, name, avatar, content_id, message});
      }

      const replyComment = () => {
            let user_id = 12
            let content_id = 1305
            let comment_id = 17284
            let user_tag_id = null
            let name = 'demo 2'
            let avatar = 'https://fantick.kan-tek.com/storage/users/avatars/2021_12_15_20_59_34-61ba9d86bb047.jpg'
            let message = 'má mày'
            socket.emit('reply-comment', {user_id, name, avatar, content_id, comment_id, user_tag_id,  message});
      }

      const updateComment = () => {
            let user_id = 1
            let name = 'aaa'
            let comment_id = 17120
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan.jpg'
            let message = 'goood'
            let content_id = 90
            socket.emit('update-comment', {user_id, name, avatar, content_id, comment_id, message});
      }
      useEffect(() => {
            // client listen event add comment
            socket.on('add-comment', (data) => {
                  console.log('add comment', data);
            });
      }, [])
      useEffect(() => {
            // client listen event update comment
            socket.on('update-comment', (data) => {
                  console.log('update comment', data);
            });
      }, [])


      const likePost = () => {
            let user_id = 1
            let post_id = 2
            let post_owner_id = 2
            socket.emit('like-post', {user_id, post_id, post_owner_id});
      }

      useEffect(() => {
            // client listen event like feed
            socket.on('like-post', (data) => {
                  console.log('like-post', data);
            });
      }, [])


      const likeComment = () => {
            let user_id = 3;
            let comment_id = 2
            socket.emit('like-comment', {user_id, comment_id});
      }
      useEffect(() => {
            // client listen event like feed
            socket.on('like-comment', (data) => {
                  console.log('like-comment', data);
            });
      }, [])


      const deleteComment = () => {
            let user_id = 461
            let content_id = 2126
            let comment_id = 17303
            socket.emit('delete-comment', {user_id, content_id,  comment_id});
      }

      useEffect(() => {
            // client listen event like feed
            socket.on('delete-comment', (data) => {
                  console.log('delete-comment', data);
            });
      }, [])




      useEffect(() => {
            // client listen event like feed
            socket.on('reply-comment', (data) => {
                  console.log('reply-comment', data);
            });
      }, [])



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
                        <input type="text" onChange={(e) => handleChange(e, 1 , 'a')}/>
                        <button onClick={() => leaveRoom('a')}>Leave</button>
                        <button onClick={() => likePost('a')}>Like Post</button>
                        <button onClick={() => addComment('a')}>Add comment</button>
                        <button onClick={() => updateComment(167, 'a' , 64)}>Update comment</button>
                        <button onClick={() => deleteComment(1, 10, 2)}>Delete comment</button>
                        <button onClick={replyComment}>Reply comment</button>
                        <button onClick={likeComment}>Like comment</button>
                        <button onClick={showListGroup}>Show list group</button>
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

export default FIND_STAR;