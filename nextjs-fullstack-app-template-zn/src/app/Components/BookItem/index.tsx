'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import styles from './index.module.scss';
// TODO：临时解决办法
import bookImage from "@/assets/img/book.jpg";

export interface IProp{
  id: number, // 图书编号
  title: string, // 图书名称
  author: string, // 作者
  publisher: string, // 出版社
  description: string, // 简介
  price: number, // 价格
  rest: number, // 剩余数量
  category: string, // 分类
  img: string, // 图片
  type: number, //0 显示借阅 1 显示归还
}

const Index: React.FC<IProp> = (props) => {
  const { id, title, author, publisher, description, price, rest, category, img, type } = props;
  const [ifShowDetail, setIfShowDetail] = useState(false);
  const stateString = type ? '归还' : '借阅';

  return (
    <div>
      <div className={styles.bookSection}>
        <div className={styles.left}>
          <div className={ styles.cover }>
            <Image src={bookImage} alt="书籍相关照片" width={200} height={300}></Image>
          </div>
          <div className={ `sanjiao ${styles.sanjiao} `} onClick={() => setIfShowDetail(!ifShowDetail)}>
            详细信息
          </div>
          <h2 style={{ marginTop: '0' }}>{title}</h2>
          <footer>
            <span>赞一下</span>
            <span>踩一下</span>
          </footer>
        </div>
        {ifShowDetail && (
          <ul className={styles.right}>
            <li className={styles.name}>{ `点击${stateString}`}</li>
            <li>作者： {author}</li>
            <li>分类：{category}</li>
            <li>出版社： {publisher}</li>
            <li>价格： {price}</li>
            <li>剩余数量： {rest}</li>
            <p>书籍简介： { description }</p>
          </ul>
        )
        }
      </div>
      <div className="commentSection">

      </div>
    </div>
  )
}

export default Index;
