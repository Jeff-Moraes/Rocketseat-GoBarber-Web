import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>New notification</p>
            <time>2 days before</time>
            <button type="button">readed</button>
          </Notification>
          <Notification>
            <p>New notification</p>
            <time>2 days before</time>
            <button type="button">readed</button>
          </Notification>
          <Notification>
            <p>New notification</p>
            <time>2 days before</time>
            <button type="button">readed</button>
          </Notification>
          <Notification>
            <p>New notification</p>
            <time>2 days before</time>
            <button type="button">readed</button>
          </Notification>
          <Notification>
            <p>New notification</p>
            <time>2 days before</time>
            <button type="button">readed</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
