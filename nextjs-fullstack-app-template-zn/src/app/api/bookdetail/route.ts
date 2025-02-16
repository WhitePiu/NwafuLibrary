export async function GET(request: Request) {
  const bookdetail = {
    id: '1',
    title: '深入理解计算机系统',
    author: 'Randal E. Bryant',
    description: '本书适用于那些希望深入了解计算机系统内部工作原理的读者。分好低啊工会的分红股符合规范的话ui的师傅给答复过户的fish给ui的方式互动方式股东分红古典诗歌刚大夫的方式的固定复古对公大夫甘道夫固定股东回购u的风格与对付一个的福音关于的风格一顿饭关于的风格的u的复古风大哥蝴蝶飞古狗大夫规划大夫固定式固定复古蝴蝶飞固定复古度过udfg梵蒂冈u犯嘀咕单方事故的发生韩国i东方化工ui哦地方古idfuiog豆腐干ui的风格和uiod贵啊个uid会德丰回归的发挥过护肤的是给幅度u',
    publisher: '机械工业出版社',
    img: '@/assets/img/book.jpg',
    category: '计算机科学',
    type: '1',
    borrowDate: '2022-01-01',
    returnDate: '2022-01-31',
    rest: '5',
    goodNum: '1012',
    badNum: '218',
  };

  return new Response(JSON.stringify(bookdetail), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}