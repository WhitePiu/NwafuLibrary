
export default function findBooksbySubStr(bookList: any[], subStr: string) {
  return bookList.filter((book) => {
    return book.title.toLowerCase().includes(subStr.toLowerCase());
  })
}
/**
 * 
 * @param bookList 数组数据
 * @param page 页码
 * @param number 每页数量
 */
export function findBooksByPage(bookList: any[], page: number, number: number = 10) {
  return bookList.slice((page - 1) * number, page * number);
}