import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import axios from "axios";
import WidgetWrapper from 'components/UI/WidgetWrapper';

const Notifications = ({ postId }) => {
  const loggedInUserId = useSelector((state) => state.user._id);
  const token = useSelector((state) => state.token);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from the server
    const fetchNotifications = async () => {
      try {
        const response = await axios.fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/${postId}/notification`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userId: loggedInUserId }),
        });

        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error(error);
        setNotifications([
          {
            message: "Your network failed to load notifications. Please try again later.",
          },
        ]);
      }
    };

    fetchNotifications();
  }, [postId, loggedInUserId, token]);

  return (
    <WidgetWrapper maxHeight="14rem">
      <h1>Notifications</h1>
      <ul>
        {notifications.map(notification => (
          <li key={notification._id}>{notification.message}</li>
        ))}
      </ul>
    </WidgetWrapper>
  );
};

export default Notifications;