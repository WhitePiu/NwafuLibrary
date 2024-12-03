import bookList from '@/assets/data/search/books.json';
import { findBooksByPage } from '@/app/utils/findbooks';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const pageNumber = Number(url.searchParams.get('page'));
  const booklistByPage = findBooksByPage(bookList, pageNumber);
  const data = {
    booklist: booklistByPage,
    total: bookList.length, // Total number of books
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}