import * as React from 'react';
import Auth from '../modules/Auth';
import { Link } from 'react-router-dom';
import { CardText, CardTitle, Card } from 'material-ui';

const classes = {
  container: 'container'
};

class HomePage extends React.Component {
  render() {
    return (
      <Card className={classes.container}>
        <CardTitle title="Ứng dụng WEBGIS" subtitle="Hệ thống quản lý." />
        <CardText style={{ fontSize: '16px', color: 'green' }}>Lời chào...</CardText>
        {!Auth.isUserAuthenticated() ? (
          < CardText >
            Vui lòng  <Link to={'/login'}>đăng nhập</Link> để truy cập ứng dụng
          </CardText>
        ) : (
            < CardText >
              Truy cập <Link to={'/map'}>bản đồ</Link>
          </CardText>
          )
        }
      </Card >
    );
  }
}

export default HomePage;