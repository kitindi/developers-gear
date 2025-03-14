import chair_1 from "./chair_1.png";
import chair_2 from "./chair_2.png";
import chair_3 from "./chair_3.png";
import dell_xp_1 from "./Dell_xps.png";
import keyboard from "./keyboard.png";
import mackbook_air from "./mackbook_air.png";

import earpod_2 from "./earpod_2.png";
import earpod_3 from "./earpod_3.png";
import hp_1 from "./hp_1.png";
import hp_envy from "./hp_envy.png";
import iphone_2 from "./iphone_2.png";
import iphone_3 from "./iphone_3.png";
import lenovo_1 from "./lenovo_1.png";
import lenovo_2 from "./lenovo_2.png";
import s22 from "./s22.png";
import s23_ultra from "./s23_ultra.png";
import s25_ultra from "./s25_ultra.png";
import sony_1 from "./sony_1.png";

import sony_3 from "./sony_3.png";
import table_1 from "./table_1.png";
import table_2 from "./table_2.png";

import yasbymix from "./yasbymix.png";
import mpesa from "./mpesa.png";
import airtelmoney from "./airtelmoney.png";

export const paymentMethod = [
  {
    service_provider: "airtel",
    logo: airtelmoney,
    lipaNumber: 1234567,
  },
  {
    service_provider: "voda",
    logo: mpesa,
    lipaNumber: 1234567,
  },
  {
    service_provider: "yas",
    logo: yasbymix,
    lipaNumber: 1234567,
  },
];

export const all_products = [
  {
    id: 1,
    name: "Luxury 3D Ergonomic Mesh Swivel Office Chair Home ",
    old_price: 300000.0,
    image: chair_1,
    category: "desk_accessories",
    sale: true,
    discount: 0.2,
    ratings: 4.5,
  },
  {
    id: 2,
    name: "Ergonomic Mesh Office / Chair Home ",
    old_price: 200000.0,
    image: chair_2,
    category: "desk_accessories",
    sale: true,
    discount: 0.2,
    ratings: 4,
  },
  {
    id: 3,
    name: "6 HP USB Slim Business Keyboards ",
    old_price: 70000.0,

    image: keyboard,
    category: "keyboard_mice",
    sale: true,
    discount: 0.2,
    ratings: 4.5,
  },
  {
    id: 4,
    name: 'Dell XPS 13 Plus 9320 13.4" Touchscreen Notebook',
    old_price: 2000000.0,

    image: dell_xp_1,
    category: "laptop",
    sale: true,
    discount: 0.2,
    ratings: 4.5,
  },

  {
    id: 5,
    name: '2018+ Apple MacBook Air 13" Retina Touch ID 16GB RAM 256GB 3.6GHz i5',
    old_price: 2000000.0,
    discount: 0.2,
    image: mackbook_air,
    category: "laptop",
    sale: true,
    ratings: 4.5,
  },

  {
    id: 6,
    name: "Apple Earpods With Remote & Mic",
    old_price: 30000.0,
    discount: 0.2,
    image: earpod_2,
    category: "headphones",
    sale: true,
    ratings: 4,
  },
  {
    id: 7,
    name: "Apple Earpods With Remote&Mic",
    old_price: 30000.0,
    discount: 0.2,
    image: earpod_3,
    category: "headphones",
    sale: true,
    ratings: 4,
  },
  {
    id: 8,
    name: 'HP Laptop 14", AMD Ryzen 3,8GB RAM,256GB SSD,Windows 11',
    old_price: 1500000.0,
    discount: 0.2,
    image: hp_1,
    category: "laptop",
    sale: true,
    ratings: 4,
  },
  {
    id: 9,
    name: 'HP Envy 17" FHD Touch Laptop - i7-13700H, 64GB RAM, 258 SSD NVMe, Windows 11',
    old_price: 2200000.0,
    discount: 0.2,
    image: hp_envy,
    category: "laptop",
    sale: true,
    ratings: 4.5,
  },

  {
    id: 10,
    name: "Apple iPhone 15, 128 GB Storage, Black",
    old_price: 1200000.0,
    discount: 0.2,
    image: iphone_2,
    category: "mobile",
    sale: true,
    ratings: 4,
  },
  {
    id: 11,
    name: "Apple iPhone 15, 128 GB Storage, Black",
    old_price: 1200000.0,
    discount: 0.2,
    image: iphone_3,
    category: "mobile",
    sale: true,
    ratings: 4.6,
  },
  {
    id: 12,
    name: "ALenovo Ideapad 1,15.6' AMD Ryzen 7,16GB RAM,512GB SSD, Windows 11,Grey",
    old_price: 2200000.0,
    discount: 0.2,
    image: lenovo_1,
    category: "laptop",
    sale: true,
    ratings: 4,
  },
  {
    id: 13,
    name: "ALenovo Ideapad 1,15.6' AMD Ryzen 7,16GB RAM,512GB SSD, Windows 11,Grey",
    old_price: 2200000.0,
    discount: 0.2,
    image: lenovo_2,
    category: "laptop",
    sale: true,
    ratings: 4,
  },

  {
    id: 14,
    name: "Samsung Galaxy S22 SM-S901B/DS - 128GB, 8GB RAM, 5G",
    old_price: 900000.0,
    image: s22,
    category: "mobile",
    sale: true,
    discount: 0.2,
    ratings: 4.5,
  },
  {
    id: 15,
    name: "2024 NEW S23 Ultra Android 4GB+128GB Smartphone Unlocked 6800mAh Dual SIM",
    old_price: 25000000.0,
    image: s23_ultra,
    category: "mobile",
    sale: true,
    discount: 0.2,
    ratings: 4,
  },
  {
    id: 16,
    name: 'Samsung Galaxy S25 Ultra 5G S938 6.8"LTPO 12/256GB SD8 Elite 5000mAh',
    old_price: 1400000.0,
    discount: 0.2,
    image: s25_ultra,
    category: "mobile",
    sale: true,
    ratings: 4.5,
  },
  {
    id: 17,
    name: 'Samsung Galaxy S25 Ultra 5G S938 6.8"LTPO 12/256GB SD8 Elite 5000mAh',
    old_price: 1400000.0,
    discount: 0.2,
    image: s25_ultra,
    category: "mobile",
    sale: true,
    ratings: 4,
  },
  {
    id: 18,
    name: "Sony WH-1000XM4 Noise-Canceling Headphones Black",
    old_price: 700000.0,
    discount: 0.2,
    image: sony_1,
    category: "mobile",
    sale: true,
    ratings: 4.5,
  },

  {
    id: 19,
    name: "Sony WH-1000XM4 Noise-Canceling Headphones Black",
    old_price: 700000.0,
    discount: 0.2,
    image: sony_3,
    category: "headphones",
    sale: true,
    ratings: 4,
  },
  {
    id: 20,
    name: "Sony WH-1000XM4 Noise-Canceling Headphones Black",
    old_price: 700000.0,
    discount: 0.2,
    image: sony_3,
    category: "headphones",
    sale: true,
    ratings: 4,
  },
  {
    id: 21,
    name: "Electric Standing Desk, Adjustable Height Stand up Desk Home Office Desk",
    old_price: 700000.0,
    discount: 0.2,
    image: table_1,
    category: "desk_accessories",
    sale: true,
    ratings: 4,
  },
  {
    id: 22,
    name: "Electric Standing Desk, Adjustable Height Stand up Desk Home Office Desk",
    old_price: 700000.0,
    discount: 0.2,
    image: table_2,
    category: "desk_accessories",
    sale: true,
    ratings: 4,
  },
];
