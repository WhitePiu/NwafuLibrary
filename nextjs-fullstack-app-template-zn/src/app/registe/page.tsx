'use client'

import React from 'react'
import styles from './page.module.scss'
import { useRouter } from 'next/navigation'
import { Input, Form, Button} from 'antd'
import axios from 'axios'

export default function page() {
  const router = useRouter()
  const onFinish = (values: any) => { 
    const { studentId, name, password } = values

    // TODO: 注册逻辑
    axios({ method: 'post', url: 'http://localhost:8080/user/register', data: { studentId, name, password } }).then((res) => {
      const { data } = res;
      if (data.code === 200) {
        router.push('/login');
      } else {
        console.error(data.message)
      }
      
    }).catch((err) => {
      console.error(err)
    })
  }

  return (
    <div className={styles.box}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <div className={styles.content}>
        <h2>注册页面</h2>
        <Form onFinish={onFinish}>
          <Form.Item name={'studentId'}>
            <Input placeholder='请输入学号' size='large'/>
          </Form.Item>
          <Form.Item name={'name'}>
            <Input placeholder='请输入用户名' size='large'/>  
          </Form.Item>
          <Form.Item name={'password'}>
            <Input placeholder='请输入密码' size='large'/>
          </Form.Item>
          <div className={styles.btn}>
            <Form.Item>
              <Button htmlType='submit' size='large'>
                提交注册
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}
