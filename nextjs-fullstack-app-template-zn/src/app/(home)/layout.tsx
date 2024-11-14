'use client'

import React, { useState } from 'react';
import { Menu } from 'antd';
import { menuListData } from '@/assets/data/menu'
import styles from './layout.module.css'
import { useRouter } from 'next/navigation'


export default function layout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  // TODO:面包屑
  const [breadCrumb, setBreadCrumb] = useState("图书馆个性化学习平台");

  const router = useRouter();

  
  const onClick = ({ item, key, keyPath, domEvent }) => {
    // keyPath是数组
    router.push(keyPath[1])
  }

  return (
    <div>
      {/* TODO:用户登录信息浮窗 */}
      <header className={styles.userBox}>
        <div className="breadCrumb">
          {breadCrumb}
        </div>
        <div className={styles.userInfo}>
          {/* TODO: 登录系统做完写这个 */}
          <span>技术交流</span>
          <span>用户名</span>
          <span>用户头像</span>
        </div>
      </header>
      <div className={styles.homeBox}>
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
    </div>
  )
}