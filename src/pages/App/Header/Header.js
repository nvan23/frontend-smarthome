import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Menu,
  Drawer,
  Button,
  Divider,
} from 'antd';

import {
  DownOutlined,
} from '@ant-design/icons'

import './header.css'
const Header = () => {

  const [visibleNavDrawer, setVisibleNavDrawer] = useState(false)

  return (
    <div className='nav__container'>

      {/* Logo */}
      <Link to="/">
        <div >
          <img
            style={{ width: 50, height: 50, marginLeft: 16 }}
            alt='Logo'
          />
        </div>
      </Link>

      {/* Navbar */}
      <div className="menu__container">
        <Menu
          mode="horizontal"
          inlineIndent={40}
          overflowedIndicator={<DownOutlined onClick={() => setVisibleNavDrawer(true)} />}
          getPopupContainer={() => ''}
          style={{ border: 0 }}>
          {
            !!true ? (
              <>
                <Menu.Item key="homes">
                  <Link to="/homes">Homes</Link>
                </Menu.Item>

                <Menu.Item key="home">
                  <Link to="/home">Home</Link>
                </Menu.Item>

                <Menu.Item key="users">
                  <Link to="/users">Users</Link>
                </Menu.Item>

                <Menu.Item key="members">
                  <Link to="/members">Members</Link>
                </Menu.Item>

                <Menu.Item key="rooms">
                  <Link to="/rooms">Rooms</Link>
                </Menu.Item>

                <Menu.Item key="sensors">
                  <Link to="/sensors">Sensors</Link>
                </Menu.Item>

                <Menu.Item key="profile">
                  <Link to="/profile">Username</Link>
                </Menu.Item>

                <Menu.Item key="logout">
                  <Link to="/logout" onClick={() => console.log('logout handle')}>Logout</Link>
                </Menu.Item>
              </>
            ) : (

              <Menu.Item key="login">
                <Link to="/login">Login</Link>
              </Menu.Item>

            )
          }
        </Menu>

        {/* Mobile Nav */}
        <Drawer
          width='100vw'
          height='360'
          title={
            <div style={{
              width: '100%',
              display: 'inline-flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              {/* Logo */}
              <div >
                <Link to="/">
                  <img
                    style={{ width: 50, height: 50, marginLeft: 16 }}
                    src={process.env.PUBLIC_URL + '/logo_sea.png'}
                    alt='Logo'
                  />
                </Link>
              </div>
              <div>
                <Button type='text' onClick={() => setVisibleNavDrawer(false)}>Close</Button>
              </div>

            </div>
          }
          placement='top'
          closable={false}
          onClose={() => setVisibleNavDrawer(false)}
          visible={visibleNavDrawer}
          key='right'
        >
          <Menu
            mode='vertical'
            style={{ border: 0, textAlign: 'center' }}
            onSelect={() => setVisibleNavDrawer(false)}>
            {
              !!true ? (
                <>
                  <Menu.Item key="homes">
                    <Link to="/homes">Homes</Link>
                  </Menu.Item>

                  <Menu.Item key="home">
                    <Link to="/home">Home</Link>
                  </Menu.Item>

                  <Menu.Item key="users">
                    <Link to="/users">Users</Link>
                  </Menu.Item>

                  <Menu.Item key="members">
                    <Link to="/members">Members</Link>
                  </Menu.Item>

                  <Menu.Item key="rooms">
                    <Link to="/rooms">Rooms</Link>
                  </Menu.Item>

                  <Menu.Item key="sensors">
                    <Link to="/sensors">Sensors</Link>
                  </Menu.Item>

                  <Divider plain />

                  <Menu.Item key='nav-footer'>
                    <Link
                      key="profile"
                      to="/profile"
                      onClick={() => console.log('logout handle')}
                      style={{
                        marginRight: 20,
                        border: '1px solid rgb(142 142 142)',
                        padding: '7px 16px',
                        borderRadius: 4,
                      }}>
                      Username</Link>
                    <Link
                      key="logout"
                      to="/logout"
                      onClick={() => console.log('logout')}
                      style={{
                        backgroundColor: 'rgb(142 142 142)',
                        color: '#fff',
                        padding: '8px 16px',
                        borderRadius: '3px',
                      }}>
                      Đăng xuất
                    </Link>
                  </Menu.Item>
                </>
              ) : (

                <Menu.Item key="login">
                  <Link to="/login">Login</Link>
                </Menu.Item>

              )
            }
          </Menu>
        </Drawer>
      </div>
    </div >
  )
}

export default Header
