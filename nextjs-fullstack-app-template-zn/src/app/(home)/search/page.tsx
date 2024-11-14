"use client"

import React from 'react'
import { Input } from 'antd';
import type { GetProps } from 'antd';
import bookList from '@/assets/data/books.json';
import BookItem from '@/app/Components/BookItem';
import styles from './page.module.scss';

type SearchProps = GetProps<typeof Input.Search>;
const {Search} = Input;

export default function page() {
    // TODO: 展示初始化数据,后端发请求获取数据，现在的bookList是假数据


    const onSearch: SearchProps['onSearch'] = (value, event, info) => {
        // TODO: 像后端发送请求，获取数据

        
    }

    return (
        <div>
            <Search placeholder="输入查询关键字" onSearch={onSearch} style={{ width: 200 }} />
            <div className={styles.bookArea}>
                {bookList.map((book) => {
                    return (
                        <BookItem key={book.id} {...book} />
                    )
                })}
            </div>

        </div>
    )
}
