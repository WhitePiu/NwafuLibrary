'use client'

import Link from "next/link"
import Image from "next/image"
import NwaIco from '@/assets/img/xiaohui.jpg'
import { Button, ConfigProvider, Timeline} from "antd"

import styles from './page.module.css';

export default function Page() {

  return (
    <div className={styles.box}>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              defaultHoverBorderColor: '#d9d9d9',
              defaultHoverColor: '#000000'
            }
          }
        }}
      >
        <Image src={NwaIco} alt="Nwafu ico" width={237} height={173}></Image>
        <h1 className="box">Nwafu 图书馆个性化学习平台</h1>
        <div className={styles.detail}>
          <Timeline
            items={[
              {
                children: '单点登录',
              },
              {
                children: '借阅归还书籍',
              },
              {
                children: '推荐算法推荐相关书籍到首页',
              },
              {
                children: '其他待开发',
              },
            ]}
          />
        </div>
        <div className={styles.login}>
          <Button type="primary"><Link href='./login'>登录</Link></Button>
          <Button ><Link href='./registe'>注册</Link></Button>
        </div>
      </ConfigProvider>
    </div>
  )

}