import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:3003', {
      withCredentials: true,
});

const LOL = (props) => {
      let [status , setStatus] = useState('like')
      // client emit join room
      const handleJoin = () => {
            let id = 712
            let name = 'test'
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg'
            let room = 'group-chat-1647220607895'
            socket.emit('join-room', {id, name, avatar, room});
      }
      // client emit send message
      const handleChat = () => {
            // console.log(socket.room);
            let id = 712;
            let name = 'test'
            let avatar = 'https://fantick.kan-tek.com/storage/users/avatars/2021_12_19_21_42_51-61bfedab809d8.jpg'
            let room = 'group-chat-1647220607895'
            let message = 'test'
            let type = 'text'
            let thumbnail = null
            socket.emit('send-message', {id, name, avatar, room, message, type, thumbnail});
      }

      // useEffect(() => {
      //       // client listen event message
      //       socket.on('message', (data) => {
      //             console.log('message', data);
      //       });
      // }, [])

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
            let room = 'group-chat-1645496795331'
            let id = 123
            socket.emit('leave-room', {id, name, room});
      }

      // client like post



      const addComment = () => {
            let user_id = 461;
            let name = 'demo name';
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan.jpg'
            let content_id = 32
            let message = 'lorem  ipsum'
            socket.emit('add-comment', {user_id, name, avatar, content_id, message});
      }
      const updateComment = (user_id, name, comment_id) => {
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan.jpg'
            let message = 'loremmmmmmmmmmmmm'
            let content_id = 10
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
            let user_id = 66;
            let content_id = 1245
            let post_type = status === 'like' ? 'unlike' : 'like'
            let post_owner_id = 661
            socket.emit('like-feed', {user_id, content_id, post_owner_id , post_type});
            setStatus(post_type)
      }

      useEffect(() => {
            // client listen event like feed
            socket.on('show-like', (data) => {
                  console.log('show-like', data);
            });
      }, [])


      const likeComment = () => {
            let user_id = 66;
            let comment_id = 14169
            let post_type = status === 'like' ? 'unlike' : 'like'
            socket.emit('like-comment', {user_id, comment_id, post_type});
            setStatus(post_type)
      }
      useEffect(() => {
            // client listen event like feed
            socket.on('like-comment', (data) => {
                  console.log('like-comment', data);
            });
      }, [])


      const deleteComment = (user_id, content_id,  comment_id) => {
            socket.emit('delete-comment', {user_id, content_id,  comment_id});
      }

      useEffect(() => {
            // client listen event like feed
            socket.on('delete-comment', (data) => {
                  console.log('delete-comment', data);
            });
      }, [])



      const replyComment = () => {
            let user_id = 461
            let content_id = 1112
            let comment_id = 14758
            let user_tag_id = null
            let name = 'Zizuu'
            let avatar = 'https://fantick.kan-tek.com/storage/users/avatars/2021_12_15_20_59_34-61ba9d86bb047.jpg'
            let message = 'reply demo'
            socket.emit('reply-comment', {user_id, name, avatar, content_id, comment_id, user_tag_id,  message});
      }
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
                        <button onClick={() => handleChat(1, 'a')}>Chat</button>
                        <input type="text" onChange={(e) => handleChange(e, 1 , 'a')}/>
                        <button onClick={() => leaveRoom('a')}>Leave</button>
                        <button onClick={() => likePost('a')}>Like Post</button>
                        <button onClick={() => addComment('a')}>Add comment</button>
                        <button onClick={() => updateComment(167, 'a' , 64)}>Update comment</button>
                        <button onClick={() => deleteComment(1, 10, 2)}>Delete comment</button>
                        <button onClick={replyComment}>Reply comment</button>
                        <button onClick={likeComment}>Like comment</button>
                  </div>
                  <div>
                        <p>B</p>
                        <button onClick={() => handleJoin(2, 'b')}>Join</button>
                        <button onClick={() => handleChat(2, 'b')}>Chat</button>
                        <input type="text" onChange={(e) => handleChange(e, 2 , 'b')}/>
                        <button onClick={() => leaveRoom('b')}>Leave</button>
                  </div>
            </>
      );
}

export default LOL;