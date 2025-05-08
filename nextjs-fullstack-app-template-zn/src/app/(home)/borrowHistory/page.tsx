"use client"
import axios from "@/app/server/axiosInstance";
import * as React from "react";
import { useEffect, useState } from "react";
import style from "./page.module.scss";

interface IBook{
  id: string;
  title: string;
  catagory: string;
  author: string;
  borrowDate: string;
  returnDate: string;
}
// TODO：先写死,后面用token
const studentId = "123456";

const borrowHistory: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  useEffect(() => {
    axios.post("http://localhost:8080/books/borrowHistory", { studentId }).then((res) => {
      setBooks(res.data.booklist);
    })
  }, []);
  return (
    <div className={style.borrowHistoryContainer}>
      <h1 className={style.title}>Borrow History</h1>
      <div className={style.historyList}>
        {books.map((book) => (
          <div key={book.id} className={style.historyItem}>
            <h2 className={style.bookTitle}>{book.title}</h2>
            <p className={style.bookAuthor}>作者：{book.author}</p>
            <p className={style.borrowDate}>借阅日期：{book.borrowDate}</p>
            <p className={style.returnDate}>还书日期：{book.returnDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default borrowHistory;