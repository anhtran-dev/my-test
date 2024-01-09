import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:3010', {
      withCredentials: true,
});


const LOL = (props) => {
      let [status , setStatus] = useState('unlike')

      // ------------------ SPORT


      const handleJoinSport = () => {
            let id = 12
            let first_name = 'demo'
            let last_name = '2'
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg'
            let room = '123'
            socket.emit('joinGroup', {id, first_name, last_name, avatar, room});
      }

      // client emit send message
      const handleChatSport = () => {
            let id = 461;
            let first_name = 'demo'
            let last_name = '2'
            let avatar = 'https://fantick.kan-tek.com/storage/users/avatars/2021_12_19_21_42_51-61bfedab809d8.jpg'
            let room = '123'
            let message = 'cccc'
            socket.emit('sendMessage', {id, first_name, last_name, avatar, room, message});
      }

      const leaveRoomSport = () => {
            let room = '123'
            let name = 'demo 2'
            socket.emit('leaveGroup', {name, room});
      }








      // -------------------------


      const online = () => {
            let user_id = 711
            socket.emit('online', {user_id});
      }

      const offline = () => {
            let user_id = 711
            socket.emit('offline', {user_id});
      }

      socket.on("connect_error", (err) => {
            console.log(err);
            console.log(err.message); // prints the message associated with the error
      });

      useEffect(() => {
            // client listen event like feed
            socket.on('new-appointment', (data) => {
                  console.log('new-appointment', data);
            });
      }, [])

      useEffect(() => {
            // client listen event like feed
            socket.on('show-online', (data) => {
                  console.log('show-online', data);
            });
      }, [])

      useEffect(() => {
            // client listen event like feed
            socket.on('donate', (data) => {
                  console.log('donate', data);
            });
      }, [])



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

            let id = 7
            let name = 'id7'
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg'
            let room = '56'
            socket.emit('join-room', {id, name, avatar, room});
      }

      const handleJoin2 = () => {
            let id = 8
            let name = 'id8'
            let avatar = 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg'
            let room = '56'
            socket.emit('join-room', {id, name, avatar, room});
      }

      // client emit send message
      const handleChat = () => {
            let id = 7
            let name = 'id7'
            let avatar = 'https://fantick.kan-tek.com/storage/users/avatars/2021_12_19_21_42_51-61bfedab809d8.jpg'
            let room = '56'
            let message = 'id7 chat room 56'
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
                        <button onClick={online}>Online</button>
                        <button onClick={offline}>Offline</button>
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


                  <div style={{marginTop: '5rem'}}>
                        <p>SPORT BOX</p>
                        <button onClick={() => handleJoinSport()}>Join</button>
                        <button onClick={() => handleChatSport()}>Chat</button>
                        <button onClick={() => leaveRoomSport()}>Leave</button>



                        {/*<div style="font-family: Montserrat">*/}
                        {/*      <p style="font-size: 18sp; font-weight: 500; margin-bottom: 20px">*/}
                        {/*            <span style="font-weight: 500; color: #f43ff4">Việt Nails</span> hỗ trợ bạn quảng bá cửa tiệm trên đa nền tảng như mạng xã hội, báo đài, tivi ở khắp các tiểu bang của Mỹ. Từ đó mang lại nguồn khách hàng tiềm năng khổng lồ cho salon của bạn.*/}
                        {/*      </p>*/}

                        {/*      <p style="font-size: 18sp; font-weight: 500; margin-bottom: 20px"> Chi phí quảng cáo này <span style="font-size: 18sp; font-weight: 500; color: #ff0000">HOÀN TOÀN MIỄN PHÍ</span> !!</p>*/}
                        {/*      <p style="font-size: 18sp; font-weight: 500; margin-bottom: 20px">Bạn cần làm gì để thu hút và kết nối với lượng khách hàng khổng lồ mà <span style="font-weight: 500; color: #f43ff4">Việt Nails</span> mang đến một cách nhanh nhất, hiệu quả nhất? Hãy thử các mẹo bên dưới, nhiều salon đã áp dụng và thành công trong việc thu hút khách.*/}
                        {/*      </p>*/}

                        {/*      <ul style="font-size: 18sp; font-weight: 400; list-style-type: decimal">*/}
                        {/*            <li>*/}
                        {/*                  Thường xuyên đăng tải thông tin mới nhất của tiệm như: hình ảnh mẫu nails đẹp tiệm đã thực hiện, hình ảnh dàn thợ, đa dạng các loại dịch vụ và tối ưu giá cả là một ưu thế …*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                  Chụp ảnh mẫu so sánh trước và sau khi khách đã làm dịch vụ để các khách hàng tiềm năng khác dễ dàng tham khảo.*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                  Phục vụ khách hàng chu đáo, giành được càng nhiều đánh giá 5* từ khách hàng sẽ càng có lợi cho tiệm của bạn.*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                  Tạo nhiều chương trình khuyến mãi như voucher giảm giá, tặng quà hấp dẫn cho khách hàng để thu hút khách mới và giữ chân khách cũ.*/}
                        {/*            </li>*/}
                        {/*      </ul>*/}
                        {/*</div>*/}



                        {/*<div style="font-family: Montserrat">*/}
                        {/*      <p style="font-size: 20sp; font-weight: 500; margin-bottom: 20px"><strong>Don't know where to hire a nail technician? Let <span style="font-weight: 500; color: #f43ff4">Việt Nails</span> take care of it!</strong></p>*/}

                        {/*      <p style="font-size: 18sp; font-weight: 400">Say goodbye to the days of burning the candle at both ends reading one post after another in the newspapers and on the website to find a nail technician for your salon because <span style="font-weight: 500; color: #f43ff4">Việt Nails</span> provides you with all the professional nail technicians who are working and finding a job in the US.</p>*/}

                        {/*      <ul style="font-size: 18sp; font-weight: 400; list-style-type: decimal">*/}
                        {/*            <li>The most accurate and clear information about nail technicians, including photos, skills, experience, finished products they have designed... - Posted by nail technicians themselves on <span style="font-weight: 500; color: #f43ff4">Việt Nails</span> app*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                  Posting job vacancies easily, quickly and reach thousands of nail technicians across the US.*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                  All are completely free, helping to share the cost burden with the nail salon owner*/}
                        {/*            </li>*/}
                        {/*      </ul>*/}

                        {/*      <p style="font-size: 18sp; font-weight: 400; margin-top: 20px">Use the <span style="font-weight: 500; color: #f43ff4">Việt Nails</span> app now to find a nail technician for your salon! Post a job and get a nail technician right away.*/}
                        {/*      </p>*/}
                        {/*</div>*/}
                        {/*<div style="font-family: Montserrat">*/}
                        {/*      <p style="font-size: 18sp; font-weight: 500; margin-bottom: 20px">*/}
                        {/*            <span style="font-weight: 500; color: #f43ff4">Việt Nails</span> supports you in promoting your nail salon on multiple platforms such as social networks, newspapers, and television throughout the US states. Thereby bringing a huge source of potential customers for your salon.*/}
                        {/*      </p>*/}

                        {/*      <p style="font-size: 18sp; font-weight: 500; margin-bottom: 20px"> This advertising cost is <span style="font-size: 18sp; font-weight: 500; color: #ff0000">ABSOLUTELY FREE</span> !!</p>*/}
                        {/*      <p style="font-size: 18sp; font-weight: 500; margin-bottom: 20px">What do you need to do to be able to connect with a huge number of customers in the fastest and most effective <span style="font-weight: 500; color: #f43ff4">Việt Nails</span> application? Try the tips below, many salons have applied and succeeded in attracting customers.*/}
                        {/*      </p>*/}

                        {/*      <ul style="font-size: 18sp; font-weight: 400; list-style-type: decimal">*/}
                        {/*            <li>*/}
                        {/*                  Regularly updating the latest nail salon information such as beautiful nail images that the salon has designed, the image of nail technicians, a variety of services and optimal prices is an advantage ...*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                  Take comparison photos before and after doing nails for customers at your salon for other potential customers to easily refer to.*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                  Always serve customers thoughtfully, try to get as many 5-star reviews from customers as it will benefit your salon*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                  Create many promotions such as discount vouchers, attractive gifts for your customers.*/}
                        {/*            </li>*/}
                        {/*      </ul>*/}
                        {/*</div>*/}





                        {/*<div style="font-family: Montserrat">*/}
                        {/*      <p style="font-size: 20sp; font-weight: 500; margin-bottom: 20px"><strong>Bạn không biết tuyển thợ ở đâu? Hãy để <span style="font-weight: 500; color: #f43ff4">Việt Nails</span> lo!</strong></p>*/}

                        {/*      <p style="font-size: 18sp; font-weight: 400">Tạm biệt chuỗi ngày thức khuya dậy sớm đọc báo, xem tin hết tờ báo này đến trang web khác để kiếm thợ cho tiệm vì <span style="font-weight: 500; color: #f43ff4">Việt Nails</span> đã cung cấp cho bạn tất cả thợ chuyên nghiệp đang tìm việc tại Mỹ.</p>*/}

                        {/*      <ul style="font-size: 18sp; font-weight: 400; list-style-type: decimal">*/}
                        {/*            <li>Thông tin về thợ hoàn toàn chính xác, rõ ràng, minh bạch bao gồm hình ảnh thợ, kỹ năng tay nghề, kinh nghiệm làm nghề và những hình ảnh sản phẩm thợ đã hoàn thiện ... Do chính anh chị thợ đăng tải trực tiếp trên ứng dụng <span style="font-weight: 500; color: #f43ff4">Việt Nails</span>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                  Đăng tin tuyển dụng dễ dàng, không tốn phí và nhanh chóng tiếp cận được hàng ngàn thợ nail tiềm năng trên khắp lãnh thổ nước Mỹ.*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                  Tất cả tính năng trong ứng dụng đều miễn phí hoàn toàn, chia sẻ gánh nặng chi phí cùng chủ tiệm.*/}

                        {/*            </li>*/}
                        {/*      </ul>*/}

                        {/*      <p style="font-size: 18sp; font-weight: 400; margin-top: 20px">Sử dụng ngay <span style="font-weight: 500; color: #f43ff4">Việt Nails</span> để tìm thợ cho tiệm của bạn! Tuyển là có thợ*/}
                        {/*      </p>*/}
                        {/*</div>*/}



                  </div>
            </>
      );
}

export default LOL;