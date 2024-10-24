'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import bgimage from '@/assets/img/tushuguan.jpg'
import { Form, Input, Checkbox, Button } from 'antd'
import type { FormProps } from 'antd'
import initUser from '@/assets/data/users.json'

type FieldType = {
  studentId: string;
  password: string;
  remember: string;
}

export default function page() {

  const router = useRouter();

  const onFinish: FormProps<FieldType>['onFinish'] = (value) => {
    const { studentId, password } = value
    if (+studentId === initUser.studentId && +password === initUser.password) {
      alert('登录成功')
      router.push('/home')
    } else {
      onFinishFailed();
    }
  }

  const onFinishFailed = () => {
    // TODO: 开发修改
    router.push('/home')
    // alert('登录失败')
  }

  return (
    <div style={{ backgroundImage: `url(${bgimage.src})` }} className={styles.bgi}>
      <header className={styles.header}>欢迎登录图书馆个性化学习平台</header>
      <Form
        name='login'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={styles.loginForm}
      >
        {/* TODO: input怎么在输入的时候变为number */}
        <Form.Item<FieldType>
          label='学号'
          name='studentId'
          rules={[{ required: true, message: '学号必须是10位数字', type: 'string'}]}
        >
          <Input/>
        </Form.Item>
        <Form.Item<FieldType>
          label='密码'
          name='password'
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input.Password/>
        </Form.Item>
        <Form.Item<FieldType>
          label='记住密码'
          name='remember'
        >
          <Checkbox/>
        </Form.Item>
        <div className={styles.submits}>
          <Form.Item
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary">
              忘记密码
            </Button>
          </Form.Item>
        </div>

      </Form>
    </div>
  )
}
