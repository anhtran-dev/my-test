import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:3009', {
      withCredentials: true,
});


const LOL2 = (props) => {
      let [status , setStatus] = useState('unlike')

      socket.on("connect_error", (err) => {
            console.log(err);
            console.log(err.message); // prints the message associated with the error
      });

      const readMessage = () => {
            let user_id = 461
            let group_id = 450
            let status = 1  // 1 : read || 0 : unread
            socket.emit('read-message', {user_id, group_id, status});
      }

      useEffect(() => {
            // client listen event
            socket.on('read-message', (data) => {
                  console.log('read-message', data);
            });
      }, [])

      const disconnect = () => {
            socket.emit('disconnect');
      }

      useEffect(() => {
            // client listen event
            socket.on('unsent-message', (data) => {
                  console.log('unsent-message', data);
            });
      }, [])

      useEffect(() => {
            socket.on('show-group', (data) => {
                  console.log('show-group', data);
            });
      }, [])

      // client emit join room
      const handleJoin = () => {
            let id = 2
            let name = 'test'
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg'
            let room = 'a4mw4btql7-1681432116838'
            socket.emit('join-room', {id, name, avatar, room});
      }

      useEffect(() => {
            // client listen event join room
            socket.on('join-room', (data) => {
                  console.log('join-room', data);
            });
      }, [])

      // client emit send message
      const handleChat = () => {
            let id = 18;
            let name = 'aht'
            let avatar = 'https://fantick.kan-tek.com/storage/users/avatars/2021_12_19_21_42_51-61bfedab809d8.jpg'
            let room = 'a4mw4btql7-1681432116838'
            let message = 'test bbbbbbbbbbbbbbbbbbbbbbbbbbb'
            let type = 'text'
            let thumbnail = null
            socket.emit('send-message', {id, name, avatar, room, message, type, thumbnail});
      }

      useEffect(() => {
            // client listen event message
            socket.on('message', (data) => {
                  console.log('message', data);
            });
      }, [])

      // client emit typing message
      const handleChange = (e, id, name) => {
            let room = 'cream-team-x-x-1644921667150'
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan.jpg'
            let typing = e.target.value.length > 0
            socket.emit('typing', {id, name, avatar, room, typing});
      }

      useEffect(() => {
            // client listen event display typing
            socket.on('typing', (data) => {
                  console.log('typing', data);
            });
      }, [])

      // client emit leave room
      const leaveRoom = (name) => {
            let room = 'bb-1646735568136'
            let id = 716
            socket.emit('leave-room', {id, name, room});
      }

      useEffect(() => {
            // client listen event display typing
            socket.on('leave-room', (data) => {
                  console.log('leave-room', data);
            });
      }, [])


      const addComment = () => {
            let user_id = 461;
            let name = 'demo';
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan.jpg'
            let post_id = 2126
            let message = 'test cmt'
            socket.emit('add-comment', {user_id, name, avatar, post_id, message});
      }

      useEffect(() => {
            // client listen event
            socket.on('add-comment', (data) => {
                  console.log('add-comment', data);
            });
      }, [])

      const replyComment = () => {
            let user_id = 12
            let post_id = 2126
            let comment_id = 17297
            let user_tag_id = 461
            let name = 'demo 2'
            let avatar = 'https://fantick.kan-tek.com/storage/users/avatars/2021_12_15_20_59_34-61ba9d86bb047.jpg'
            let message = 'user id 10 test cmt reply user id 461'
            socket.emit('reply-comment', {user_id, name, avatar, post_id, comment_id, user_tag_id,  message});
      }

      useEffect(() => {
            // client listen event add comment
            socket.on('add-comment', (data) => {
                  console.log('add comment', data);
            });
      }, [])
      useEffect(() => {
            // client listen event update comment
            socket.on('reply-comment', (data) => {
                  console.log('reply-comment', data);
            });
      }, [])


      const likePost = () => {
            let user_id = 6
            let post_id = 2104
            let post_owner_id = 6
            socket.emit('like-post', {user_id, post_id, post_owner_id});
      }

      useEffect(() => {
            // client listen event like feed
            socket.on('like-post', (data) => {
                  console.log('like-post', data);
            });
      }, [])


      const likeComment = () => {
            let user_id = 461;
            let comment_id = 17120
            socket.emit('like-comment', {user_id, comment_id});
      }
      useEffect(() => {
            // client listen event like feed
            socket.on('like-comment', (data) => {
                  console.log('like-comment', data);
            });
      }, [])



      return (
            <>

            </>
      );
}

export default LOL2;