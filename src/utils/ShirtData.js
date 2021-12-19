const shirtsData = [
  {
    id: 1,
    brand: 'HIGHLANDER',
    name: 'Highlander Olive Green Slim Fit Casual Shirt',
    images: [
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1291760/2017/12/5/11512469309046-Highlander-Dark-Green-Slim-Fit-Casual-Shirt-5071512469308877-4.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1291760/2017/12/5/11512469309020-Highlander-Dark-Green-Slim-Fit-Casual-Shirt-5071512469308877-5.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1291760/2017/12/5/11512469309068-Highlander-Dark-Green-Slim-Fit-Casual-Shirt-5071512469308877-3.jpg',
    ],
    description:
      'Olive green casual shirt, has a mandarin collar, a full button placket, long sleeves, a patch pocket, and a curved hem',
    rating: 4.3,
    sizes: [39, 40, 42, 44],
    price: 599,
    discount: 40,
    category: 'Men',
    color: 'Green',
  },
  {
    id: 2,
    brand: 'HIGHLANDER',
    name: 'Highlander White Slim Fit Casual Shirt',
    images: [
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1272502/2018/2/5/11517823086440-Highlander-White-Slim-Fit-Casual-Shirt-161517823086304-1.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1272502/2018/2/5/11517823086369-Highlander-White-Slim-Fit-Casual-Shirt-161517823086304-5.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1272502/2018/2/5/11517823086408-Highlander-White-Slim-Fit-Casual-Shirt-161517823086304-3.jpg',
    ],
    description:
      'White casual shirt, has a spread collar, a full button placket, a patch pocket, long sleeves with roll-up button tabs, a curved hemline',
    rating: 4.2,
    sizes: [39, 40, 42, 44],
    price: 599,
    discount: 40,
    category: 'Men',
    color: 'White',
  },
  {
    id: 3,
    brand: 'WROGN',
    name: 'Men White Slim Fit Casual Shirt',
    images: [
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12422406/2020/9/16/d660449d-d8c9-4d51-b78f-88aaf73596d81600231342289-WROGN-Men-Shirts-9831600231340594-1.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12422406/2020/9/16/7d783c2f-c334-411c-b0f3-4447ef823d7e1600231342154-WROGN-Men-Shirts-9831600231340594-4.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12422406/2020/9/16/564d468a-69f3-4c27-81ba-db52ebd489d11600231342058-WROGN-Men-Shirts-9831600231340594-6.jpg',
    ],
    description:
      'White solid casual shirt, has a mandarin collar, long sleeves, button placket, curved hem, and 1 patch pocket',
    rating: 4.4,
    sizes: [39, 40, 42, 44, 46],
    price: 1759,
    discount: 20,
    category: 'Men',
    color: 'White',
  },
  {
    id: 4,
    brand: 'WROGN',
    name: 'Men Black Slim Fit Casual Shirt',
    images: [
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12131944/2020/8/5/223d45c9-2b47-4989-b312-582e6f2418561596607596019-WROGN-Men-Shirts-4631596607594327-5.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12131944/2020/8/5/0bdb217f-11f7-4f53-b96f-6d54ddeccd0f1596607596194-WROGN-Men-Shirts-4631596607594327-1.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12131944/2020/8/5/50e5d7fe-80fa-4008-8218-1097705c12fe1596607596152-WROGN-Men-Shirts-4631596607594327-2.jpg',
    ],
    description:
      'Black solid casual shirt, has a spread collar, long sleeves, button placket, curved hem, and 1 patch pocket',
    rating: 4.5,
    sizes: [39, 40, 42, 44, 46],
    price: 1759,
    discount: 20,
    category: 'Men',
    color: 'Black',
  },
  {
    id: 5,
    brand: 'WILD WEST',
    name: 'Men Black Slim Fit Casual Shirt',
    images: [
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9246129/2019/4/9/2830b7db-9e10-4ecd-9b6d-4c520b9bb3ef1554792060495-WILD-WEST-Men-Black-Solid-Mandarin-Collar-T-shirt-5731554792-1.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9246129/2019/4/9/8eabd068-8b22-4d96-a19b-be092a5c488c1554792060441-WILD-WEST-Men-Black-Solid-Mandarin-Collar-T-shirt-5731554792-3.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9246129/2019/4/9/108a6c63-3fe5-421a-b68b-f6cd5fca10721554792060414-WILD-WEST-Men-Black-Solid-Mandarin-Collar-T-shirt-5731554792-4.jpg',
    ],
    description:
      'Black solid casual shirt, has a mandarin collar, short sleeves, straight hem',
    rating: 4.3,
    sizes: [38, 40, 42, 44, 46, 48],
    price: 559,
    discount: 44,
    category: 'Men',
    color: 'Black',
  },
  {
    id: 6,
    brand: 'Roadster',
    name: 'Men Blue Solid Slim Fit Casual Shirt',
    images: [
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14641450/2021/9/27/225bd68e-4078-4d22-92c5-d0fd60d60c831632743545562-Roadster-Men-Shirts-1011632743544829-1.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14641450/2021/9/27/bfed9585-31bb-4690-bcae-09966cefb8e61632743545554-Roadster-Men-Shirts-1011632743544829-2.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14641450/2021/9/27/ebe63a4a-1ee4-4a1d-86b7-53e44e857fe91632743545529-Roadster-Men-Shirts-1011632743544829-5.jpg',
    ],
    description:
      'Blue solid opaque Casual shirt, has a spread collar, button placket, long roll-up sleeves, curved hem',
    rating: 4.6,
    sizes: [38, 40, 42, 44],
    price: 639,
    discount: 60,
    category: 'Men',
    color: 'Blue',
  },
  {
    id: 7,
    brand: 'HERE&NOW',
    name: 'Men Black Slim Fit Casual Shirt',
    images: [
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11218470/2020/2/5/e85361ac-a39f-4c2c-ab79-1b446a292b131580907591137-HERENOW-Men-Shirts-7011580907588971-4.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11218470/2020/2/5/7189db06-2f9e-4c60-ba9a-e1bcbe9e6fca1580907591098-HERENOW-Men-Shirts-7011580907588971-5.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11218470/2020/2/5/8fc386da-ba76-4203-8532-6776eeebe1861580907591224-HERENOW-Men-Shirts-7011580907588971-2.jpg',
    ],
    description:
      'Black solid casual shirt, has a spread collar, long sleeves, button placket, curved hem, and 1 patch pocket',
    rating: 4.1,
    sizes: [38, 40, 42, 44, 46],
    price: 939,
    discount: 60,
    category: 'Men',
    color: 'Black',
  },
  {
    id: 8,
    brand: 'Roadster',
    name: 'Men Maroon Slim Fit Casual Shirt',
    images: [
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11896018/2020/7/13/a08fec7f-ce06-4aac-bc7d-bc48869213fa1594635204393-Roadster-Men-Shirts-7921594635203129-1.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11896018/2020/7/13/96e27f63-ed00-4e76-9235-2ffbb50e713f1594635204343-Roadster-Men-Shirts-7921594635203129-2.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11896018/2020/7/13/39ea1159-89e4-49a1-b4ec-a62d61fdd1371594635204247-Roadster-Men-Shirts-7921594635203129-4.jpg',
    ],
    description:
      'Maroon solid casual shirt, has a mandarin collar, long sleeves, button placket, curved hem, and 1 patch pocket',
    rating: 4.3,
    sizes: [38, 40, 42, 44],
    price: 599,
    discount: 50,
    category: 'Men',
    color: 'Maroon',
  },
  {
    id: 9,
    brand: 'Roadster',
    name: 'Men Olive Green Solid Slim Fit Casual Shirt',
    images: [
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13663886/2021/10/18/b2305a1c-3ec8-4b44-a4c5-e23a52ea41dd1634533122067-Roadster-Men-Shirts-3791634533121442-1.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13663886/2021/10/18/23e852a6-a0bd-4e20-8d2c-edce7f15d3301634533122033-Roadster-Men-Shirts-3791634533121442-4.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13663886/2021/10/18/754fe7e1-0b04-4f78-8b79-421d8cb6a6d61634533122057-Roadster-Men-Shirts-3791634533121442-2.jpg',
    ],
    description:
      'Olive green solid opaque Casual shirt ,has a spread collar, button placket, 1 patch pocket, short regular sleeves, curved hem',
    rating: 4.3,
    sizes: [38, 40, 42, 44],
    price: 769,
    discount: 45,
    category: 'Men',
    color: 'Green',
  },
  {
    id: 10,
    brand: 'HIGHLANDER',
    name: 'Men White Slim Fit Casual Shirt',
    images: [
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6491782/2019/3/15/83fb1506-a350-433c-b4cb-9b6da8b4bf591552650111531-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-51155265011-1.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6491782/2019/3/15/0019ab62-6911-40f0-a47f-875b163c92911552650111446-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-51155265011-5.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6491782/2019/3/15/114d4054-b689-4c09-9ab4-5729b8623f631552650111493-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-51155265011-3.jpg',
    ],
    description:
      'White solid casual shirt, has a mandarin collar,short sleeves, curved hem and 1 pocket',
    rating: 4.2,
    sizes: [38, 40, 42, 44],
    price: 494,
    discount: 55,
    category: 'Men',
    color: 'White',
  },
  {
    id: 11,
    brand: 'Roadster',
    name: 'Time Travlr Women Peach & Purple Slim Fit Checked Casual Shirt',
    images: [
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1805910/2018/5/9/890d3187-61dc-40de-ab47-18b521ea9f601525856749699-Roadster-Women-Peach--Purple-Regular-Fit-Checked-Casual-Shirt-7661525856749413-1.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1805910/2018/5/9/02ffa17e-febb-46c3-b006-77da57af87541525856749522-Roadster-Women-Peach--Purple-Regular-Fit-Checked-Casual-Shirt-7661525856749413-5.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1805910/2018/5/9/5e824daf-591e-4478-9dc1-67d25ebecfb21525856749593-Roadster-Women-Peach--Purple-Regular-Fit-Checked-Casual-Shirt-7661525856749413-3.jpg',
    ],
    description:
      'Peach and purple checked casual shirt, has a spread collar, button placket, long sleeves, two pockets, curved hem',
    rating: 4.2,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    price: 639,
    discount: 60,
    category: 'Women',
    color: 'Purple',
  },
  {
    id: 12,
    brand: 'YK',
    name: 'Boys Olive Green Solid Pure Cotton Opaque Casual Shirt',
    images: [
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14810414/2021/11/22/ace0fb77-31f9-412b-83f8-e52f7993e4741637584463280-YK-Boys-Olive-Green-Solid-Pure-Cotton-Opaque-Casual-Shirt-44-1.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14810414/2021/11/22/1764a89c-25de-4271-94cc-daf98fda098b1637584463262-YK-Boys-Olive-Green-Solid-Pure-Cotton-Opaque-Casual-Shirt-44-3.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14810414/2021/11/22/c03d017d-d287-4c56-a069-fa3beb452ee61637584463271-YK-Boys-Olive-Green-Solid-Pure-Cotton-Opaque-Casual-Shirt-44-2.jpg',
    ],
    description:
      'Olive green solid opaque casual shirt has a spread collar, button placket, 1 patch pocket, long roll-up sleeves, curved hem',
    rating: 4.6,
    sizes: ['8-9Y', '10-11Y', '12-13Y', '13-14Y'],
    price: 494,
    discount: 55,
    category: 'Boys',
    color: 'Green',
  },
  {
    id: 13,
    brand: 'JUSTICE',
    name: 'Girls Coral Red Solid Slim Fit Pure Cotton Casual Shirt',
    images: [
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15593894/2021/10/12/fb208121-d5f1-4516-9742-3f132272e23e1634042119292-JUSTICE-Girls-Coral-Red-Solid-Slim-Fit-Pure-Cotton-Casual-Sh-1.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15593894/2021/10/12/2c0af454-35a2-4cfb-96d7-8053fc4456531634042119251-JUSTICE-Girls-Coral-Red-Solid-Slim-Fit-Pure-Cotton-Casual-Sh-3.jpg',
      'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15593894/2021/10/12/a2c519af-1610-4b50-b8b7-4aa829efc8691634042119229-JUSTICE-Girls-Coral-Red-Solid-Slim-Fit-Pure-Cotton-Casual-Sh-4.jpg',
    ],
    description:
      'Coral solid opaque Casual shirt, has a spread collar, full button placket, sleeveless, straight hem',
    rating: 4.4,
    sizes: ['8-9Y', '10-11Y', '12-13Y', '13-14Y', '15-16Y'],
    price: 629,
    discount: 65,
    category: 'Girls',
    color: 'Red',
  },
]

export default shirtsData
