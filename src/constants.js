import {
  AccountBookOutlined,
  BookOutlined,
  BranchesOutlined,
  BugOutlined,
  FolderOutlined,
  IdcardOutlined,
  ProfileOutlined,
  ShoppingOutlined,
  UserOutlined,
  UserSwitchOutlined,
  WechatWorkOutlined,
} from "@ant-design/icons";

export const dashboardSidebarData = [
  {
    text: "Default",
    isAccordion: false,
  },
  {
    isAccordion: true,
    items: [
      {
        key: "ec",
        label: "eCommerce",
        icon: <ShoppingOutlined />,
        children: [
          {
            key: "ec1",
            label: "eComm1",
          },
          {
            key: "ec2",
            label: "eComm2",
          },
        ],
      },
    ],
  },
  {
    isAccordion: true,
    items: [
      {
        key: "proj",
        label: "Projects",
        icon: <FolderOutlined />,
        children: [
          {
            key: "proj1",
            label: "Project1",
          },
          {
            key: "proj2",
            label: "Project2",
          },
        ],
      },
    ],
  },
  {
    isAccordion: true,
    items: [
      {
        key: "oc",
        label: "Online Courses",
        icon: <BookOutlined />,
        children: [
          {
            key: "oc1",
            label: "Course1",
          },
          {
            key: "oc2",
            label: "Course2",
          },
        ],
      },
    ],
  },
];

export const pagesSidebarData = [
  {
    isAccordion: true,
    items: [
      {
        key: "up",
        label: "User Profile",
        icon: <ProfileOutlined />,
        children: [
          {
            key: "over",
            label: "Overview",
          },
          {
            key: "pro",
            label: "Projects",
          },
          {
            key: "camp",
            label: "Campaigns",
          },
          {
            key: "doc",
            label: "Documents",
          },
          {
            key: "foll",
            label: "Followers",
          },
        ],
      },
    ],
  },
  {
    isAccordion: true,
    items: [
      {
        key: "acc",
        label: "Account",
        icon: <IdcardOutlined />,
        children: [
          {
            key: "acc1",
            label: "Account1",
          },
          {
            key: "acc2",
            label: "Account2",
          },
        ],
      },
    ],
  },
  {
    isAccordion: true,
    items: [
      {
        key: "cor",
        label: "Corporate",
        icon: <UserSwitchOutlined />,
        children: [
          {
            key: "cor1",
            label: "Corporate1",
          },
          {
            key: "cor2",
            label: "Corporate2",
          },
        ],
      },
    ],
  },
  {
    isAccordion: true,
    items: [
      {
        key: "blog",
        label: "Blog",
        icon: <AccountBookOutlined />,
        children: [
          {
            key: "blog1",
            label: "Blog1",
          },
          {
            key: "blog2",
            label: "Blog2",
          },
        ],
      },
    ],
  },
  {
    isAccordion: true,
    items: [
      {
        key: "social",
        label: "Social",
        icon: <WechatWorkOutlined />,
        children: [
          {
            key: "soc1",
            label: "Social1",
          },
          {
            key: "soc2",
            label: "Social2",
          },
        ],
      },
    ],
  },
];

export const notificationsPanelData = [
  {
    title: "You have a bug that needs to be fixed",
    src: <BugOutlined />,
    description: "Just now",
  },
  {
    title: "New user registered",
    src: <UserOutlined />,
    description: "59 minutes ago",
  },
  {
    title: "You have a bug that needs to be fixed",
    src: <BugOutlined />,
    description: "12 hours ago",
  },
  {
    title: "Andi Lane subscribed to you",
    src: <BranchesOutlined />,
    description: "11:59 AM",
  },
];

export const activitiesPanelData = [
  {
    title: "You have a bug that needs to be fixed",
    src: <UserOutlined />,
    description: "Just now",
  },
  {
    title: "Released a new version",
    src: <UserOutlined />,
    description: "59 minutes ago",
  },
  {
    title: "Submitted a bug",
    src: <UserOutlined />,
    description: "12 hours ago",
  },
  {
    title: "Modified a data in Page X",
    src: <UserOutlined />,
    description: "11:59 AM",
  },
];

export const contactsPanelData = [
  {
    title: "Natalie Craig",
    src: <UserOutlined />,
  },
  {
    title: "Drew Cano",
    src: <UserOutlined />,
  },
  {
    title: "Kate Morrison",
    src: <UserOutlined />,
  },
  {
    title: "Andi Lane",
    src: <UserOutlined />,
  },
];

export const topSellingProductsHeader = [
  {
    title: "Name",
  },
  {
    title: "Price",
  },
  {
    title: "Quantity",
  },
  {
    title: "Amount",
  },
];

// export const topSellingProductsData = [
//   {
//     name: "ASOS Ridley High Waist",
//     price: "$79.49",
//     quantity: "82",
//     amount: "$6,518,18",
//   },
//   {
//     name: "Marco Lightweight Shirt",
//     price: "$128.50",
//     quantity: "37",
//     amount: "$4,754.50",
//   },
//   {
//     name: "Half Sleeve  Shirt",
//     price: "$39.99",
//     quantity: "64",
//     amount: "$2,559.36",
//   },
//   {
//     name: "Lightweight Jacket",
//     price: "$20.00",
//     quantity: "184",
//     amount: "$3,680.00",
//   },
//   {
//     name: "Marco Shoes",
//     price: "$79.49",
//     quantity: "64",
//     amount: "$1,965.81",
//   },
// ];

export const topSellingProductsData = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: "82",
    amount: "$6,518,18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: "37",
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve  Shirt",
    price: "$39.99",
    quantity: "64",
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: "184",
    amount: "$3,680.00",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    quantity: "64",
    amount: "$1,965.81",
  },
];

export const orderListData = [
  {
    id: "#CM9801",
    user: "Nardi Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: "Drew Caro",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    isCheckboxEnabled: true,
    isChecked: true,
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    project: "OrderListTable Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    isCheckboxEnabled: true,
    isChecked: false,
  },
  {
    id: "#CM9801",
    user: "Nardi Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: "Drew Caro",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    project: "OrderListTable Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];
