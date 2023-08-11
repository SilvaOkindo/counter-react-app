import React from 'react'

function UserCard(props) {
  return (


    <div className='users'>
    <div className='user-card'>
     <div className='image-container'> <img src={props.image} alt="user 1" /></div>
      <div className="user-info">
        <h1 className='name'>{props.name}</h1>
        <p className="occupation">Senior Journalist</p>
        <div className="card">
          <div>
            <small>Articles</small>
            <span>41</span>
          </div>

          <div>
            <small>Followers</small>
            <span>976</span>
          </div>
          
          <div>
            <small>Followers</small>
            <span>976</span>
          </div>
        </div>

        <div className="btns">
          <button>CHAT</button>
          <button>FOLLOW</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserCard;