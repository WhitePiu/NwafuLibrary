import React from 'react'
import BookList from '@/app/Components/BookList';
import jieyueBooks from '@/assets/data/return/jieyueBooks.json';
import yuqiBooks from '@/assets/data/return/yuqiBooks.json';

export default function page() {
  return (
    <div>
      <h2>正在借阅的图书</h2>
        <section>
          <BookList bookList={ jieyueBooks }></BookList>
        </section>
      <h2>已经逾期的图书</h2>
        <section>
          <BookList bookList={yuqiBooks}></BookList>
        </section>
    </div>
  )
}
