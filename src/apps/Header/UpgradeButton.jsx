import { Avatar, Popover, Button, Badge } from 'antd';

// import Notifications from '@/components/Notification';

import { RocketOutlined } from '@ant-design/icons';

import useLanguage from '@/locale/useLanguage';

import { useNavigate } from 'react-router-dom';

export default function UpgradeButton() {
  const translate = useLanguage();

  const navigate = useNavigate();
  const Content = () => {
    return (
      <>
        <p>{translate('Welcome to FinSol!')}</p>
      </>
    );
  };

  return (
    <Popover content={<Content />} title={translate('Get Started')} trigger="click">
      <Badge count={1} size="small">
        <Avatar
          icon={<RocketOutlined />}
          style={{
            color: '#f56a00',
            backgroundColor: '#FFF',
            float: 'right',
            marginTop: '5px',
            cursor: 'pointer',
          }}
        />
      </Badge>
    </Popover>
  );
}


