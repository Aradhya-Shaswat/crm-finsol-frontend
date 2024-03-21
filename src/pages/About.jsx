import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

import { useNavigate } from 'react-router-dom';

const About = () => {
  const translate = useLanguage();

  const navigate = useNavigate();

  return (
    <Result
      status="success"
      title={'FinSol'}
      subTitle={translate('Powered by Kasper Infotech')}
      extra={
        <>
          <p>
            Website : <a href="https://kasperinfotech.org">www.kasperinfotech.org</a>{' '}
          </p>
          <Button
            type="primary"
            onClick={() => {
              navigate('/');
            }}
          >
            {translate('Back')}
          </Button>
        </>
      }
    />
  );
};

export default About;
