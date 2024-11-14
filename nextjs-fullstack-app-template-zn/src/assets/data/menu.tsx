import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const menuListData: MenuItem[] = [
  {
    key: '/search',
    label: '图书查询',
    icon: <AppstoreOutlined />,
    children: [
      { key: '1', label: '查询' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    label: '图书借阅',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'sub5',
    label: '借阅历史',
    icon: <SettingOutlined />,
  },
  {
    key: 'sub6',
    label: '热门推荐',
    icon: <SettingOutlined />,
  },
  {
    key: 'sub7',
    label: '问题反馈',
    icon: <SettingOutlined />,
  },
  {
    key: 'sub8',
    label: '使用说明',
    icon: <SettingOutlined />,
  },
];