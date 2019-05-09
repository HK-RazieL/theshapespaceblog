import React from 'react'
import moment from "moment";

const Notifications = (props) => {
  const {notifications} = props;

  return (
    <div className="notification-section">
      <div className="card">
        <div className="card">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {               
              notifications && notifications.map(notification => {
                return (
                  <li key={notification.id}>
                    <span>{notification.user} </span>
                    <span>{notification.content}</span>
                    <div>{moment(notification.time.toDate()).fromNow()}</div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications;