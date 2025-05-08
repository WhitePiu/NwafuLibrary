import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const menuListData: MenuItem[] = [
  {
    key: '1',
    label: '图书业务',
    icon: <AppstoreOutlined />,
    children: [
      { key: '/search', label: '图书查询' },
      { key: '/return', label: '正在借阅' },
      { key: '/actioncenter', label: '操作中心' },
    ],
  },
  {
    key: 'borrowHistory',
    label: '借阅历史',
    icon: <SettingOutlined />,
  },
  {
    key: 'sub6',
    label: '图书推荐',
    icon: <SettingOutlined />,
  },
  {
    key: 'sub7',
    label: '问题反馈',
    icon: <SettingOutlined />,
  },
];