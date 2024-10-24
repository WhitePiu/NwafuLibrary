'use client'

import React from 'react';
import { Menu } from 'antd';
import { menuListData } from '@/assets/data/menu'
import styles from './layout.module.css'

export default function layout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  const onClick = () => {
    alert("点击菜单");
  }

  return (
    <div className={styles.homeBox}>
      {/* TODO:用户登录信息浮窗 */}
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={menuListData}
        className={styles.menu}
      ></Menu>
      {children}
    </div>
  )
}