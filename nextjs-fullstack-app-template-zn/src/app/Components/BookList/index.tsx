'use client'

import React from 'react'
import styles from './index.module.scss';
import BookItem from '@/app/Components/BookItem'
import type { IProp } from '@/app/Components/BookItem';

export interface IBookListProp{
  bookList: Array<IProp>
}

const Index: React.FC<IBookListProp> = (props) => {
  const { bookList } =  props ;
  return (
    <div className={styles.bookArea}>
        {bookList.map((book) => {
          return (
            <div key={book.id} className={styles.bookItem}>
              <BookItem {...book} />
            </div>
            
          )
        })}
    </div>
  )
}

export default Index;
