import findBooks from "@/app/utils/findbooks";
import booklist from "@/assets/data/search/books.json";

export async function POST(request: Request) {
  // 服务端读取请求体是一个耗时工作，所以用异步
  const requestBody = await request.json()
  const { value } = requestBody;
  const subBooklist = findBooks(booklist, value);
  const data = {
    booklist: subBooklist,
    total: subBooklist.length,
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
