"use client"

import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import type { GetProps } from 'antd';
import axios from 'axios';
import BookList from '@/app/Components/BookList';
import styles from './page.module.scss';
import { Pagination } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;
const {Search} = Input;

export default function page() {
    // TODO: 展示初始化数据,后端发请求获取数据，现在的bookList是假数据
    const [bookList, setBookList] = useState([]);
    const [total, setTotal] = useState<number>(20);

    useEffect(() => {
        // TODO: 像后端发送请求，获取数据
        axios.get('/api/booklist?page=1').then(res => {
            setBookList(res.data.booklist);
            setTotal(res.data.total);
        })
    },[])

    const onSearch: SearchProps['onSearch'] = (value, event, info) => {
        // TODO: 像后端发送请求，获取数据
        axios.post('/api/search?page=1', {value: value}).then(res => {
            setBookList(res.data.booklist);
            setTotal(res.data.total);
        })
    }
    const onPageChange = (page: number) => {
        // TODO: 像后端发送请求，获取数据
        axios.get(`/api/booklist?page=${page}`).then(res => {
            setBookList(res.data.booklist);
            setTotal(res.data.total);
        })
    }
    
    return (
        <div className='erjiPage'>
            <div className={styles.search}>
                <Search placeholder="输入查询书名关键字" onSearch={onSearch} style={{ width: '100%' }} size='large'/>
            </div>
            <BookList bookList={bookList}></BookList>
            <footer className={styles.page}>
                <Pagination align='center' defaultCurrent={1} defaultPageSize={10} pageSize={10} total={total} onChange={onPageChange}/>
            </footer>
        </div>
    )
}
