'use client'

import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import type { ReactElement } from "react";
import bookImg from "@/assets/img/book.jpg";
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import { Row, Col, Statistic, DatePicker, Space, DatePickerProps } from "antd";
import { Dayjs } from "dayjs";

const { RangePicker } = DatePicker;
const getYearMonth = (date: Dayjs) => date.year() * 12 + date.month();

export interface IProps {
  searchParams: {
    id: string
  }
  children? : ReactElement
}

export interface IBookDetail {
  id: string
  title: string
  author: string
  description: string
  publisher: string, // 出版社
  img: string // TODO: 封面图片
  category: string, // 分类
  type: string // TODO: 是否正在借阅1
  borrowDate: string // TODO: 借阅日期,格式为YYYY-MM-DD,如果没有借阅则为空
  returnDate: string // TODO: 应还日期,格式为YYYY-MM-DD,如果没有借阅则为空
  rest: string // TODO: 库存数量
  goodNum : string // TODO: 点赞数
  badNum: string // TODO: 点踩数
}

export default function Page(props: IProps) {
  const { searchParams: { id } } = props;
  const [bookdetail, setBookdetail] = useState<IBookDetail>({});

  // TODO: 发请求获取id书籍的详细数据
  useEffect(() => {
      axios.get(`/api/bookdetail?id=${id}`).then((res) => {
        setBookdetail(res.data)
      }).catch((err) => {
        console.log(err)
      })
  },[])

    const disabled2MonthsDate: DatePickerProps['disabledDate'] = (current, { from, type }) => {
    if (from) {
      const minDate = from.add(-1, 'months');
      const maxDate = from.add(1, 'months');

      switch (type) {
        case 'year':
          return current.year() < minDate.year() || current.year() > maxDate.year();

        default:
          return (
            getYearMonth(current) < getYearMonth(minDate) ||
            getYearMonth(current) > getYearMonth(maxDate)
          );
      }
    }

    return false;
  };
  const renderBorrow = () => {
    return (
      <div className={styles.borrow}>
        <header className={styles.borrowHeader}>借阅登记</header>
        <Space direction="vertical">
          <div>借阅书籍名称： {bookdetail.title}</div>
          <div>
            <RangePicker placeholder={["借阅日期", "归还日期"]} size="large" disabledDate={disabled2MonthsDate}></RangePicker>
          </div>
        </Space>
      </div>
    )
  }

  const renderReturn = () => {
    return (
      <div className={styles.return}>
        <header className={styles.returnHeader}>归还登记</header>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.container}>
        <Image style={{marginRight: '20px'}} src={bookImg} alt={bookdetail.title} width={300} height={400}></Image>
        <div className={styles.detail}>
          <h1>{bookdetail.title}</h1>
          <div className={styles.rest}>剩余数量： {bookdetail.rest} </div>
          <div className={styles.detailBox}>
            <div>
              <div className={styles.head}>作者：<span className={styles.text}>{bookdetail.author}</span></div>
              <div className={styles.head}>出版社： <span className={styles.text}>{bookdetail.publisher}</span></div>
            </div>
            <div>
              <div className={styles.head}>ID: <span className={styles.text}>{bookdetail.id}</span></div>
              <div className={styles.head}>分类： <span className={styles.text}>{bookdetail.category}</span></div>
            </div>
          </div>
          <p className={styles.description}>内容介绍： {bookdetail.description}</p>
            <Row gutter={16}>
              <Col span={12}>
                <Statistic title="点赞数" value={bookdetail.goodNum} prefix={<LikeOutlined />} />
              </Col>
              <Col span={12}>
                <Statistic title="点踩数" value={bookdetail.badNum} prefix={<DislikeOutlined />} />
              </Col>
            </Row>
        </div>
      </div>
      <section>
        {renderBorrow()}
      </section>
    </div>

  );
}

