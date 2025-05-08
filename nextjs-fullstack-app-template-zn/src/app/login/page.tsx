'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import bgimage from '@/assets/img/tushuguan.jpg'
import { Form, Input, Checkbox, Button } from 'antd'
import type { FormProps } from 'antd'
import initUser from '@/assets/data/login/users.json'
import axios from '@/app/server/axiosInstance'
import { ContainerWithChildren } from 'postcss/lib/container'

type FieldType = {
  studentId: string;
  password: string;
  remember: string;
}

export default function page() {


  const router = useRouter();

  const onFinish: FormProps<FieldType>['onFinish'] = async (value) => {
    const { studentId, password } = value
    const response = axios({
      url: 'http://localhost:8080/user/login',
      method: 'post',
      data: {
        studentId,
        password
      },
      withCredentials: true,
    })

    const {data} = await response;
    if (data.code === 200) {
      router.push('/search')
    } else {
      onFinishFailed(data.message);
    }
  }

  const onFinishFailed = (errorMes) => {
    // TODO: 开发修改
    alert(errorMes)
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
