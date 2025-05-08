"use client"

import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import type { GetProps } from 'antd';
import axios from '@/app/server/axiosInstance';
import BookList from '@/app/Components/BookList';
import styles from './page.module.scss';
import { Pagination } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;
const {Search} = Input;

export default function page() {
    const [bookList, setBookList] = useState([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        axios.post('http://localhost:8080/books/search?page=1').then(res => {
            setBookList(res.data.booklist);
            setTotal(res.data.total);
        })
    },[])

    const onSearch: SearchProps['onSearch'] = (value, event, info) => {
        axios.post('http://localhost:8080/books/search?page=1', {value: value}).then(res => {
            setBookList(res.data.booklist);
            setTotal(res.data.total);
        })
    }
    const onPageChange = (page: number) => {
        axios.get(`http://localhost:8080/books/search?page=${page}`).then(res => {
            setBookList(res.data.booklist);
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
