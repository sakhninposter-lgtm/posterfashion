    const DELIVERY_FEE = 50;

    const subCategoryMap = {
      tops:["tshirts","longshirts","hoodies"],
      bottoms:["skinnyjeans","widejeans","classicjeans","shorts"],
      dresses:["longdresses","eveningdresses"],
      suits:["fullsuits","twopieces"],
      outerwear:["jackets","blazers"]
    };

    const products = [
      {
        id:1,
        type:"clothing",
        mainCategory:"tops",
        subCategory:"tshirts",
        name:{en:"Poster Everyday T-Shirt",he:"טי־שירט יומיומית של פוסטר",ar:"تيشيرت يومي من بوستر",ru:"Повседневная футболка Poster"},
        desc:{en:"Clean fit for every day. Available in two colors.",he:"גזרה נקייה לכל יום. זמין בשני צבעים.",ar:"قصة مرتبة لكل يوم. متوفر بلونين.",ru:"Аккуратная посадка на каждый день. Доступно в двух цветах."},
        price:120,
        oldPrice:null,
        bundleDeal:{qty:2,total:200},
        dealGroup:"tshirt-200",
        colors:[
          {key:"pink",label:{en:"Pink",he:"ורוד",ar:"زهري",ru:"Розовый"},swatch:"#ff5ea9",
           image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80"],
           stock:{S:2, M:2, L:3, XL:2}},
          {key:"blue",label:{en:"Blue",he:"כחול",ar:"أزرق",ru:"Синий"},swatch:"#3f7bff",
           image:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"],
           stock:{S:1, M:2, L:2, XL:3}}
        ],
        sale:false,
        isNew:true
      },
      {
        id:2,
        type:"clothing",
        mainCategory:"tops",
        subCategory:"tshirts",
        name:{en:"Soft Cotton T-Shirt",he:"טי־שירט כותנה רכה",ar:"تيشيرت قطن ناعم",ru:"Мягкая хлопковая футболка"},
        desc:{en:"Easy basic piece. Two colors with separate stock.",he:"פריט בסיס קל. שני צבעים עם מלאי נפרד.",ar:"قطعة أساسية وخفيفة. لونان مع مخزون منفصل.",ru:"Легкая базовая вещь. Два цвета с отдельным остатком."},
        price:120,
        oldPrice:149,
        bundleDeal:{qty:2,total:200},
        dealGroup:"tshirt-200",
        colors:[
          {key:"white",label:{en:"White",he:"לבן",ar:"أبيض",ru:"Белый"},swatch:"#f4f4f4",
           image:"https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"],
           stock:{S:3, M:2, L:2, XL:1}},
          {key:"green",label:{en:"Green",he:"ירוק",ar:"أخضر",ru:"Зеленый"},swatch:"#3aa56e",
           image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"],
           stock:{S:1, M:1, L:2, XL:2}}
        ],
        sale:true,
        isNew:false
      },
      {
        id:3,
        type:"clothing",
        mainCategory:"tops",
        subCategory:"longshirts",
        name:{en:"Soft Long Shirt",he:"חולצה ארוכה רכה",ar:"بلوزة طويلة ناعمة",ru:"Мягкая длинная рубашка"},
        desc:{en:"Light and easy for daily wear.",he:"קלילה ונוחה ללבוש יומיומי.",ar:"خفيفة ومريحة للبس اليومي.",ru:"Легкая и удобная на каждый день."},
        price:129,
        oldPrice:null,
        stock:{S:3, M:2, L:5, XL:2},
        image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      },
      {
        id:4,
        type:"clothing",
        mainCategory:"tops",
        subCategory:"longshirts",
        name:{en:"Striped Long Shirt",he:"חולצה ארוכה עם פסים",ar:"بلوزة طويلة مخططة",ru:"Полосатая длинная рубашка"},
        desc:{en:"Long line with clean style.",he:"גזרה ארוכה עם סטייל נקי.",ar:"قصة طويلة وستايل مرتب.",ru:"Удлиненный силуэт в чистом стиле."},
        price:139,
        oldPrice:169,
        stock:{M:2, L:5, XL:2},
        image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
        sale:true,
        isNew:false
      },
      {
        id:5,
        type:"clothing",
        mainCategory:"tops",
        subCategory:"hoodies",
        name:{en:"Street Hoodie",he:"הודי סטריט",ar:"هودي ستريت",ru:"Худи Street"},
        desc:{en:"Warm casual hoodie.",he:"הודי קז'ואל חם.",ar:"هودي كاجوال ودافي.",ru:"Теплый повседневный худи."},
        price:169,
        oldPrice:null,
        stock:{M:2, L:5, XL:2},
        image:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      },
      {
        id:6,
        type:"clothing",
        mainCategory:"tops",
        subCategory:"hoodies",
        name:{en:"Zip Hoodie",he:"הודי עם רוכסן",ar:"هودي بسحاب",ru:"Худи на молнии"},
        desc:{en:"Comfort layer for cool days.",he:"שכבה נוחה לימים קרירים.",ar:"قطعة مريحة للأيام الباردة.",ru:"Удобный слой для прохладных дней."},
        price:179,
        oldPrice:219,
        stock:{S:3, M:2, L:5, XL:2},
        image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
        sale:true,
        isNew:false
      },
      {
        id:7,
        type:"clothing",
        mainCategory:"bottoms",
        subCategory:"skinnyjeans",
        name:{en:"Skinny Blue Jeans",he:"ג'ינס סקיני כחול",ar:"جينز سكيني أزرق",ru:"Синие skinny-джинсы"},
        desc:{en:"Close fit with clean line.",he:"גזרה צמודה עם קו נקי.",ar:"قصة ضيقة وستايل مرتب.",ru:"Облегающий крой с чистой линией."},
        price:149,
        oldPrice:null,
        stock:{S:3, M:2, L:5, XL:2},
        image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      },
      {
        id:8,
        type:"clothing",
        mainCategory:"bottoms",
        subCategory:"widejeans",
        name:{en:"Wide Jeans",he:"ג'ינס רחב",ar:"جينز واسع",ru:"Широкие джинсы"},
        desc:{en:"Relaxed wide fit.",he:"גזרה רחבה ונוחה.",ar:"قصة واسعة ومريحة.",ru:"Свободный широкий крой."},
        price:159,
        oldPrice:189,
        stock:{S:3, M:2, L:5},
        image:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
        sale:true,
        isNew:false
      },
      {
        id:9,
        type:"clothing",
        mainCategory:"bottoms",
        subCategory:"classicjeans",
        name:{en:"Classic Jeans",he:"ג'ינס קלאסי",ar:"جينز كلاسيكي",ru:"Классические джинсы"},
        desc:{en:"Easy everyday jeans.",he:"ג'ינס יומיומי קל לשילוב.",ar:"جينز يومي سهل للتنسيق.",ru:"Универсальные джинсы на каждый день."},
        price:145,
        oldPrice:null,
        stock:{S:3, M:2, L:5, XL:2},
        image:"https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      },
      {
        id:10,
        type:"clothing",
        mainCategory:"bottoms",
        subCategory:"shorts",
        name:{en:"Summer Shorts",he:"שורטס קיץ",ar:"شورت صيفي",ru:"Летние шорты"},
        desc:{en:"Light shorts for warm days.",he:"שורטס קל לימים חמים.",ar:"شورت خفيف للأيام الحارة.",ru:"Легкие шорты для теплых дней."},
        price:99,
        oldPrice:null,
        stock:{S:3, M:2, L:5},
        image:"https://images.unsplash.com/photo-1506629905607-d9d997c0f0c4?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      },
      {
        id:11,
        type:"clothing",
        mainCategory:"dresses",
        subCategory:"longdresses",
        name:{en:"Rose Long Dress",he:"שמלה ארוכה רוז",ar:"فستان طويل روز",ru:"Длинное платье Rose"},
        desc:{en:"Soft long dress for events. Available in two colors.",he:"שמלה ארוכה רכה לאירועים. זמינה בשני צבעים.",ar:"فستان طويل ناعم للمناسبات. متوفر بلونين.",ru:"Мягкое длинное платье для мероприятий. Доступно в двух цветах."},
        price:229,
        oldPrice:null,
        colors:[
          {key:"rose",label:{en:"Rose",he:"רוז",ar:"وردي",ru:"Розовый"},swatch:"#d96b8c",
           image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"],
           stock:{S:2, M:2, L:3}},
          {key:"black",label:{en:"Black",he:"שחור",ar:"أسود",ru:"Черный"},swatch:"#161616",
           image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"],
           stock:{S:1, M:2, L:2}}
        ],
        sale:false,
        isNew:true
      },
      {
        id:12,
        type:"clothing",
        mainCategory:"dresses",
        subCategory:"eveningdresses",
        name:{en:"Night Dress",he:"שמלת ערב",ar:"فستان سهرة",ru:"Вечернее платье"},
        desc:{en:"Dress for dinners and events. Included in the 2 for ₪300 dress deal.",he:"שמלה לערב ולאירועים. כלולה במבצע 2 ב-₪300 על שמלות.",ar:"فستان للسهرات والمناسبات. داخل عرض 2 فساتين بـ₪300.",ru:"Платье для ужинов и мероприятий. Участвует в акции 2 платья за ₪300."},
        price:249,
        oldPrice:299,
        bundleDeal:{qty:2,total:300},
        dealGroup:"dress-300",
        stock:{S:3, M:2, L:5},
        image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
        sale:true,
        isNew:false
      },
      {
        id:13,
        type:"clothing",
        mainCategory:"suits",
        subCategory:"fullsuits",
        name:{en:"Full Suit Set",he:"סט חליפה מלא",ar:"طقم كامل",ru:"Полный костюмный комплект"},
        desc:{en:"Full matching look.",he:"לוק מלא ותואם.",ar:"طقم كامل ومرتب.",ru:"Полный согласованный образ."},
        price:329,
        oldPrice:399,
        stock:{S:3, M:2, L:5},
        image:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80",
        sale:true,
        isNew:false
      },
      {
        id:14,
        type:"clothing",
        mainCategory:"suits",
        subCategory:"twopieces",
        name:{en:"2-Piece Set",he:"סט שני חלקים",ar:"طقم قطعتين",ru:"Комплект из 2 предметов"},
        desc:{en:"Easy matching set.",he:"סט תואם וקל ללבישה.",ar:"طقم مرتب وسهل للبس.",ru:"Удобный комплект из двух вещей."},
        price:289,
        oldPrice:null,
        stock:{S:3, M:2, L:5, XL:2},
        image:"https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      },
      {
        id:15,
        type:"clothing",
        mainCategory:"outerwear",
        subCategory:"jackets",
        name:{en:"Classic Black Jacket",he:"ז'קט שחור קלאסי",ar:"جاكيت أسود كلاسيكي",ru:"Классическая черная куртка"},
        desc:{en:"Sharp layer for day and night.",he:"שכבה חדה ליום ולערב.",ar:"قطعة مرتبة للنهار والمسا.",ru:"Стильный слой на день и вечер."},
        price:259,
        oldPrice:null,
        stock:{M:2, L:5, XL:2},
        image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      },
      {
        id:16,
        type:"clothing",
        mainCategory:"outerwear",
        subCategory:"blazers",
        name:{en:"Soft Blazer",he:"בלייזר רך",ar:"بليزر ناعم",ru:"Мягкий блейзер"},
        desc:{en:"Smart finish for full looks.",he:"סיום מחויט ללוקים מלאים.",ar:"يعطي اللوك شكل مرتب وكامل.",ru:"Элегантный штрих для полного образа."},
        price:279,
        oldPrice:329,
        stock:{S:3, M:2, L:5},
        image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
        sale:true,
        isNew:false
      },
      {
        id:17,
        type:"accessory",
        category:"bags",
        name:{en:"Poster Signature Bag",he:"תיק סיגנצ'ר של פוסטר",ar:"شنطة بوستر المميزة",ru:"Фирменная сумка Poster"},
        desc:{en:"Everyday boutique bag.",he:"תיק בוטיק יומיומי.",ar:"شنطة يومية ستايلها مرتب.",ru:"Повседневная сумка в бутиковом стиле."},
        price:149,
        oldPrice:null,
        stock:{"One Size":4},
        image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      },
      {
        id:18,
        type:"accessory",
        category:"earrings",
        name:{en:"Pink Shine Earrings",he:"עגילי ברק ורוד",ar:"حلق لمعة وردي",ru:"Розовые серьги Shine"},
        desc:{en:"Light statement earrings.",he:"עגילים קלים עם נוכחות.",ar:"حلق خفيف وبارز.",ru:"Легкие акцентные серьги."},
        price:59,
        oldPrice:79,
        stock:{"One Size":4},
        image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
        sale:true,
        isNew:false
      },
      {
        id:19,
        type:"accessory",
        category:"rings",
        name:{en:"Golden Ring",he:"טבעת זהב",ar:"خاتم ذهبي",ru:"Золотое кольцо"},
        desc:{en:"Simple gold-tone ring.",he:"טבעת פשוטה בגוון זהב.",ar:"خاتم بسيط بلون ذهبي.",ru:"Простое кольцо золотого оттенка."},
        price:69,
        oldPrice:null,
        stock:{6:2, 7:3, 8:2},
        image:"https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      }
      ,{
        id:20,
        type:"clothing",
        mainCategory:"tops",
        subCategory:"tshirts",
        name:{en:"Oversized Street T-Shirt",he:"טי־שירט אוברסייז סטריט",ar:"تيشيرت أوفرسايز ستريت",ru:"Оверсайз футболка Street"},
        desc:{en:"Relaxed fit with bold look.",he:"גזרה רחבה עם מראה בולט.",ar:"قصة واسعة وستايل بارز.",ru:"Свободный крой и выразительный стиль."},
        price:129,
        oldPrice:null,
        stock:{S:2, M:4, L:6, XL:3},
        image:"https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      },
      {
        id:21,
        type:"clothing",
        mainCategory:"tops",
        subCategory:"longshirts",
        name:{en:"Elegant Satin Shirt",he:"חולצת סאטן אלגנטית",ar:"بلوزة ساتان مرتبة",ru:"Элегантная атласная рубашка"},
        desc:{en:"Smooth shine for dressy looks.",he:"ברק עדין ללוקים יפים.",ar:"لمعة ناعمة للّوك المرتب.",ru:"Мягкий блеск для нарядного образа."},
        price:149,
        oldPrice:179,
        stock:{S:2, M:3, L:4},
        image:"https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=900&q=80",
        sale:true,
        isNew:false
      },
      {
        id:22,
        type:"clothing",
        mainCategory:"bottoms",
        subCategory:"widejeans",
        name:{en:"Wide Leg Denim",he:"ג'ינס רגל רחבה",ar:"جينز رجل واسعة",ru:"Джинсы wide leg"},
        desc:{en:"Modern shape with easy comfort.",he:"גזרה מודרנית ונוחה.",ar:"قصة عصرية ومريحة.",ru:"Современный силуэт и комфорт."},
        price:169,
        oldPrice:null,
        stock:{S:2, M:3, L:5, XL:2},
        image:"https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      },
      {
        id:23,
        type:"clothing",
        mainCategory:"dresses",
        subCategory:"eveningdresses",
        name:{en:"Shine Evening Dress",he:"שמלת ערב מבריקה",ar:"فستان سهرة لامع",ru:"Блестящее вечернее платье"},
        desc:{en:"Elegant piece for special nights. Included in the 2 for ₪300 deal and available in three colors.",he:"פריט אלגנטי לערבים מיוחדים. כלול במבצע 2 ב-₪300 וזמין בשלושה צבעים.",ar:"قطعة أنيقة للسهرات. داخل عرض 2 بـ₪300 ومتوفر بثلاثة ألوان.",ru:"Элегантная вещь для особых вечеров. Участвует в акции 2 за ₪300 и доступна в трех цветах."},
        price:259,
        oldPrice:309,
        bundleDeal:{qty:2,total:300},
        dealGroup:"dress-300",
        colors:[
          {key:"gold",label:{en:"Gold",he:"זהב",ar:"ذهبي",ru:"Золотой"},swatch:"#caa14a",
           image:"https://images.unsplash.com/photo-1566479179817-c0b5b4b4b0c2?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1566479179817-c0b5b4b4b0c2?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80"],
           stock:{S:1, M:1, L:2}},
          {key:"burgundy",label:{en:"Burgundy",he:"בורדו",ar:"عنابي",ru:"Бордовый"},swatch:"#7f1d3a",
           image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80"],
           stock:{S:1, M:1, L:1}},
          {key:"navy",label:{en:"Navy",he:"נייבי",ar:"كحلي",ru:"Темно-синий"},swatch:"#1f325f",
           image:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80"],
           stock:{S:0, M:1, L:1}}
        ],
        sale:true,
        isNew:false
      },
      {
        id:24,
        type:"clothing",
        mainCategory:"dresses",
        subCategory:"longdresses",
        name:{en:"Soft Floral Dress",he:"שמלה פרחונית רכה",ar:"فستان وردي ناعم",ru:"Мягкое цветочное платье"},
        desc:{en:"Light flow for everyday style.",he:"נפילה קלילה ליום־יום.",ar:"خفيف ومرتب للبس اليومي.",ru:"Легкое струящееся платье на каждый день."},
        price:219,
        oldPrice:null,
        stock:{S:2, M:3, L:4},
        image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      },
      {
        id:27,
        type:"clothing",
        mainCategory:"tops",
        subCategory:"longshirts",
        name:{en:"Zara Style Long Shirt",he:"חולצה ארוכה בסגנון זארה",ar:"قميص طويل ستايل زارا",ru:"Длинная рубашка в стиле Zara"},
        desc:{en:"Clean long shirt with light shape and two colors.",he:"חולצה ארוכה נקייה עם שתי אפשרויות צבע.",ar:"قميص طويل مرتب مع لونين مختلفين.",ru:"Аккуратная длинная рубашка в двух цветах."},
        price:129,
        oldPrice:159,
        bundleDeal:{qty:2,total:200},
        dealGroup:"tshirt-200",
        colors:[
          {key:"white",label:{en:"White",he:"לבן",ar:"أبيض",ru:"Белый"},swatch:"#f3f3f3",
           image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"],
           stock:{S:2,M:2,L:3,XL:2}},
          {key:"beige",label:{en:"Beige",he:"בז'",ar:"بيج",ru:"Бежевый"},swatch:"#d8c1a1",
           image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"],
           stock:{S:1,M:2,L:2,XL:1}}
        ],
        sale:true,
        isNew:true
      },
      {
        id:28,
        type:"clothing",
        mainCategory:"bottoms",
        subCategory:"classicjeans",
        name:{en:"Classic Denim Pants",he:"מכנסי דנים קלאסיים",ar:"بنطال جينز كلاسيكي",ru:"Классические джинсы"},
        desc:{en:"Straight clean fit. Included in the 2 for ₪300 pants deal.",he:"גזרה ישרה ונקייה. כלול במבצע 2 ב-₪300 על מכנסיים.",ar:"قصة مستقيمة ومرتبة. داخل عرض 2 بنطلون بـ₪300.",ru:"Прямой аккуратный крой. Участвуют в акции 2 брюк за ₪300."},
        price:179,
        oldPrice:219,
        bundleDeal:{qty:2,total:300},
        dealGroup:"pants-300",
        colors:[
          {key:"blue",label:{en:"Blue",he:"כחול",ar:"أزرق",ru:"Синий"},swatch:"#3f7bff",
           image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80"],
           stock:{S:2,M:2,L:3,XL:2}},
          {key:"black",label:{en:"Black",he:"שחור",ar:"أسود",ru:"Черный"},swatch:"#161616",
           image:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80"],
           stock:{S:1,M:2,L:2,XL:1}}
        ],
        sale:true,
        isNew:true
      },
      {
        id:29,
        type:"clothing",
        mainCategory:"bottoms",
        subCategory:"widejeans",
        name:{en:"Wide Leg Street Pants",he:"מכנסי רגל רחבה",ar:"بنطال واسع ستايل ستريت",ru:"Широкие уличные брюки"},
        desc:{en:"Relaxed wide fit. Included in the 2 for ₪300 pants deal.",he:"גזרה רחבה ונוחה. כלול במבצע 2 ב-₪300 על מכנסיים.",ar:"قصة واسعة ومريحة. داخل عرض 2 بنطلون بـ₪300.",ru:"Свободный широкий крой. Участвуют в акции 2 брюк за ₪300."},
        price:189,
        oldPrice:229,
        bundleDeal:{qty:2,total:300},
        dealGroup:"pants-300",
        colors:[
          {key:"stone",label:{en:"Stone",he:"סטון",ar:"ستون",ru:"Стоун"},swatch:"#b6a58d",
           image:"https://images.unsplash.com/photo-1506629905607-d9e6e4cd6b80?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1506629905607-d9e6e4cd6b80?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1506629905607-d9e6e4cd6b80?auto=format&fit=crop&w=900&q=80"],
           stock:{S:2,M:2,L:2,XL:1}},
          {key:"charcoal",label:{en:"Charcoal",he:"פחם",ar:"فحمي",ru:"Графит"},swatch:"#44484f",
           image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1506629905607-d9e6e4cd6b80?auto=format&fit=crop&w=900&q=80"],
           stock:{S:1,M:2,L:2,XL:1}}
        ],
        sale:true,
        isNew:true
      },
      {
        id:30,
        type:"clothing",
        mainCategory:"bottoms",
        subCategory:"skinnyjeans",
        name:{en:"Slim Fit Color Pants",he:"מכנסי סקיני צבעוניים",ar:"بنطال سكيني بألوان",ru:"Узкие цветные брюки"},
        desc:{en:"Modern slim fit with stretch comfort. Included in the 2 for ₪300 pants deal.",he:"גזרת סקיני מודרנית עם נוחות וגמישות. כלול במבצע 2 ב-₪300 על מכנסיים.",ar:"قصة سكيني عصرية مع راحة ومرونة. داخل عرض 2 بنطلون بـ₪300.",ru:"Современный узкий крой с комфортом и эластичностью. Участвуют в акции 2 брюк за ₪300."},
        price:169,
        oldPrice:209,
        bundleDeal:{qty:2,total:300},
        dealGroup:"pants-300",
        colors:[
          {key:"burgundy",label:{en:"Burgundy",he:"בורדו",ar:"خمري",ru:"Бордовый"},swatch:"#7b2036",
           image:"https://images.unsplash.com/photo-1506629905607-d9e6e4cd6b80?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1506629905607-d9e6e4cd6b80?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"],
           stock:{XS:1,S:2,M:2,L:2,XL:1}},
          {key:"olive",label:{en:"Olive",he:"זית",ar:"زيتي",ru:"Оливковый"},swatch:"#66734a",
           image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1506629905607-d9e6e4cd6b80?auto=format&fit=crop&w=900&q=80"],
           stock:{XS:1,S:2,M:3,L:2,XL:1}},
          {key:"black",label:{en:"Black",he:"שחור",ar:"أسود",ru:"Черный"},swatch:"#1a1a1a",
           image:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"],
           stock:{XS:1,S:2,M:2,L:2,XL:2}}
        ],
        sale:true,
        isNew:true
      },
      {
        id:31,
        type:"clothing",
        mainCategory:"bottoms",
        subCategory:"classicjeans",
        name:{en:"Soft Straight Pants",he:"מכנס ישר רך",ar:"بنطال مستقيم ناعم",ru:"Мягкие прямые брюки"},
        desc:{en:"Soft straight design with clean daily style. Included in the 2 for ₪300 pants deal.",he:"עיצוב ישר ורך ליום יום. כלול במבצע 2 ב-₪300 על מכנסיים.",ar:"تصميم مستقيم وناعم للاستعمال اليومي. داخل عرض 2 بنطلون بـ₪300.",ru:"Мягкий прямой фасон на каждый день. Участвуют в акции 2 брюк за ₪300."},
        price:179,
        oldPrice:225,
        bundleDeal:{qty:2,total:300},
        dealGroup:"pants-300",
        colors:[
          {key:"beige",label:{en:"Beige",he:"בז'",ar:"بيج",ru:"Бежевый"},swatch:"#c9ae8b",
           image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80"],
           stock:{S:2,M:3,L:2,XL:2}},
          {key:"navy",label:{en:"Navy",he:"נייבי",ar:"كحلي",ru:"Темно-синий"},swatch:"#273457",
           image:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80"],
           stock:{S:1,M:2,L:3,XL:2}},
          {key:"rose",label:{en:"Rose",he:"ורוד",ar:"وردي",ru:"Розовый"},swatch:"#c7798f",
           image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
           images:["https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80"],
           stock:{S:1,M:2,L:2,XL:1}}
        ],
        sale:true,
        isNew:true
      },
      {
        id:25,
        type:"clothing",
        mainCategory:"suits",
        subCategory:"twopieces",
        name:{en:"Two Piece Set",he:"סט שני חלקים",ar:"طقم قطعتين",ru:"Комплект из двух частей"},
        desc:{en:"Easy matching set.",he:"סט קל ונוח לשילוב.",ar:"طقم مرتب وسهل للبس.",ru:"Удобный комплект, который легко сочетать."},
        price:239,
        oldPrice:null,
        stock:{S:2, M:3, L:3},
        image:"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      },
      {
        id:26,
        type:"clothing",
        mainCategory:"outerwear",
        subCategory:"jackets",
        name:{en:"Light Denim Jacket",he:"ג'קט ג'ינס קל",ar:"جاكيت جينز خفيف",ru:"Легкая джинсовая куртка"},
        desc:{en:"Layer for cool evenings.",he:"שכבה לימים ולערבים קרירים.",ar:"قطعة خفيفة للمسا والجو اللطيف.",ru:"Легкий слой для прохладного вечера."},
        price:199,
        oldPrice:239,
        stock:{S:2, M:3, L:4, XL:2},
        image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
        sale:true,
        isNew:false
      },
      {
        id:27,
        type:"accessory",
        category:"bags",
        name:{en:"Mini Shoulder Bag",he:"תיק כתף קטן",ar:"شنطة كتف صغيرة",ru:"Мини-сумка через плечо"},
        desc:{en:"Small bag for daily looks.",he:"תיק קטן ללוק יומיומי.",ar:"شنطة صغيرة للوك اليومي.",ru:"Небольшая сумка для повседневного образа."},
        price:119,
        oldPrice:null,
        stock:{"One Size":4},
        image:"https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80",
        sale:false,
        isNew:true
      },
      {
        id:28,
        type:"accessory",
        category:"earrings",
        name:{en:"Pearl Drop Earrings",he:"עגילי פנינה נופלים",ar:"حلق لؤلؤ نازل",ru:"Серьги-капли с жемчугом"},
        desc:{en:"Soft elegant finish.",he:"סיום אלגנטי ועדין.",ar:"لمسة ناعمة ومرتبة.",ru:"Нежный элегантный акцент."},
        price:65,
        oldPrice:85,
        stock:{"One Size":3},
        image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80",
        sale:true,
        isNew:false
      }

    ];

    const cart = [];
    const selectedProductSizes = {};
    const selectedProductColors = {};
    let currentQuickProductId = null;
    let currentQuickImage = "";
    let currentLang = "ar";
    let selectedMainCategory = "all";
    let selectedSubcategories = [];
    let saleOnly = false;
    let newOnly = false;
    let selectedSizes = [];
    let currentSort = "featured";
    let paymentMethod = "visa";
    let selectedAccessory = "all";
    let activeDealCollection = "";
    let activeDealPreview = "";
    let currentPage = 1;
    const PRODUCTS_PER_PAGE = 24;

    const i18n = {
      en:{
        dir:"ltr",
        announce1:"New clothing in Sakhnin",
        announce2:"New arrivals & sale pieces",
        announce3:"Order on WhatsApp",
        enterStore:"Enter store",
        gateTag:"Join the list",
        gateTitle:"Get new drops first.",
        gateText:"New clothing, sale pieces, and quick updates from Poster Sakhnin.",
        gateNote:"Updates list: sakhninPoster@gmail.com",
        joinNow:"Join now",
        navShop:"Clothing",
        navAccessories:"Accessories",
                navContact:"Contact",
        cartWord:"Cart",
        heroTag:"Poster Sakhnin",
        heroTitle:"Mostly clothing. Clean style. Easy shopping.",
        heroText:"T-shirts, long shirts, hoodies, jeans, shorts, dresses, jackets, suits, and a small accessories corner.",
        shopNow:"Shop clothing",
        seeAccessories:"See accessories",
        trust1:"Women’s clothing",
        trust2:"Accessories",
        trust3:"25 years in Sakhnin",
        quick1:"Tops",
        quick2:"Dresses",
        quick3:"Jeans & pants",
        quick4:"Rings & bags",
        stat1Label:"Main",
        stat1Value:"Clothing",
        stat2Label:"Store",
        stat2Value:"Poster Sakhnin",
        stat3Label:"New",
        stat3Value:"Weekly picks",
        miniTitle1:"Clothing first",
        miniText1:"Most of the collection is everyday clothing and seasonal looks.",
        miniTitle2:"Easy filters",
        miniText2:"Choose a group, then choose product types below it.",
        miniTitle3:"Small accessories corner",
        miniText3:"Rings, earrings, and bags are in a separate section.",
        shopTitle:"Clothing collection",
        shopSub:"Clothing first. Easy to browse.",
        collectionNote:"The collection changes throughout the year depending on the weather and seasons.",
        accessoriesTitle:"Accessories corner",
        accessoriesSub:"Bags, rings, and earrings.",
        deliveryNote:"Delivery ₪50",
        paymentNote:"Visa, Bit, or cash on delivery",
        clearFilters:"Clear filters",
        deliveryTitle:"Delivery & payment",
        deliveryCart:"Delivery for every order: ₪50",
        paymentCart:"Choose how the customer will pay. All options stay visible below on PC and mobile. Visa opens card checkout only. Bit and cash can be sent on WhatsApp with the order details.",
        payVisa:"Visa",
        payVisaNote:"Card checkout only + ₪50 delivery",
        payBit:"Bit",
        payBitNote:"Send the order on WhatsApp, then confirm by Bit + ₪50 delivery",
        payCash:"Cash on delivery",
        payCashNote:"Send the order on WhatsApp and pay on delivery + ₪50 delivery",
        bundleLabel:"2 for",
        bundleFrom:"Choose 2 to get the deal",
        bundleApplied:"Deal applied",
        dealBoxTitle:"2 for ₪200 picks",
        dealBannerTitle:"Big sale — best pieces go fast.",
        dealBannerText:"Choose a store deal below and open only the items included in that sale.",
        dealBannerTag:"Hot store offers",
        shirtDealTitle:"2 shirts for ₪200",
        shirtDealText:"Open the shirts included in the store deal and choose your favorite pieces.",
        shirtDealButton:"2 shirts for ₪200 — click here",
        dressDealTitle:"2 dresses for ₪300",
        dressDealText:"Open only the selected dresses included in the 2 for ₪300 offer.",
        dressDealButton:"2 dresses for ₪300 — click here",
        pantsDealTitle:"2 pants for ₪300",
        pantsDealText:"Open only the pants included in the 2 for ₪300 offer.",
        pantsDealButton:"2 pants for ₪300 — click here",
        dealItemsReady:"items ready",
        dealBoxText:"Choose any 2 from these styles to activate the deal.",
        dealOpen:"Open item",
        photoLinkLabel:"Photo",
        notifyOwnerText:"For Bit and cash orders, WhatsApp sends a short order with regular price, sale price, chosen color, size, photo link, payment method, and delivery fee.",
        inStock:"In stock",
        paymentMethodLabel:"Payment",
        payVisaNow:"Continue to Visa",
        bitHelp:"Bit orders are sent on WhatsApp first, then payment is confirmed by Bit. Delivery fee: ₪50.",
        cashHelp:"Cash orders are sent on WhatsApp first, and payment is collected on delivery. Delivery fee: ₪50.",
        visaHelp:"Visa checkout should open card payment only. To charge real cards, connect a payment gateway like Stripe or Tranzila.",
        subtotalLabel:"Subtotal",
        deliveryLabel:"Delivery",
        saleSavingsLabel:"Sale savings",
        realPriceLabel:"Real price",
        salePriceLabel:"Sale price",
        colorLabel:"Color",
        chooseColorFirst:"Please choose a color first",
        chooseColorHint:"Please choose a color",
        filterAll:"All",
        filterTops:"Tops",
        filterDresses:"Dresses",
        filterBottoms:"Bottoms",
        filterOuterwear:"Jackets",
        filterSets:"Suits",
        filterBags:"Bags",
        filterEarrings:"Earrings",
        filterRings:"Rings",
        filterSale:"Sale",
        filterNew:"New",
        sortFeatured:"Featured",
        sortLow:"Price: Low to High",
        sortHigh:"Price: High to Low",
                                footerText:"Women’s clothing first, with a small accessories corner in Poster Sakhnin.",
        phoneLabel:"Phone",
        waLabel:"WhatsApp",
        instaLabel:"Instagram",
        mailLabel:"Email updates",
        cartTitle:"Your cart",
        cartItemsWord:"Items in cart",
        cartInfoSmall:"Delivery, payment, and cash on delivery options are shown below",
        emptyCart:"Your cart is empty.",
        totalLabel:"Order total",
        orderWhatsApp:"Send order on WhatsApp",
        addToCart:"Add to cart",
        remove:"Remove",
        searchPlaceholder:"Search clothing",
        joinedOk:"Thanks — the email was added.",
        noProducts:"No clothing found.",
        noAccessories:"No accessories found.",
        itemsFound:"items found",
        catTitle:"Clothing",
        specialTitle:"Special",
        subFilterLabel:"Choose one or more types",
        sizeTitle:"Sizes",
        waFloat:"WhatsApp",
        waMessage:"Hello Poster, I want to order:",
        updatesTitle:"Poster updates",
        updatesText:"Leave your email to get new pieces and sale updates.",
        subscribe:"Subscribe",
        oneSize:"One Size",
        noColorShort:"No color",
        waOrderTitle:"New Order - Poster",
        waLineColor:"Color",
        waLineSize:"Size",
        waLineQty:"Qty",
        waLineReg:"Reg",
        waLineSale:"Sale",
        waLineDeal:"Deal",
        waLinePhoto:"Photo",
        waLinePayment:"Payment",
        waLineDelivery:"Delivery",
        waLineItems:"Items",
        waLineTotal:"Total",
        cat_bags:"Bags",
        cat_earrings:"Earrings",
        cat_rings:"Rings",
        main_tops:"Tops",
        main_bottoms:"Bottoms",
        main_dresses:"Dresses",
        main_suits:"Suits",
        main_outerwear:"Jackets",
        sub_tshirts:"T-shirts",
        sub_longshirts:"Long shirts",
        sub_hoodies:"Hoodies",
        sub_skinnyjeans:"Skinny jeans",
        sub_widejeans:"Wide jeans",
        sub_classicjeans:"Classic jeans",
        sub_shorts:"Shorts",
        sub_longdresses:"Long dresses",
        sub_eveningdresses:"Evening dresses",
        sub_fullsuits:"Full suits",
        sub_twopieces:"2-piece sets",
        sub_jackets:"Jackets",
        sub_blazers:"Blazers"
      },
      he:{
        dir:"rtl",
        announce1:"חדש ב-Poster סח'נין",
        announce2:"בגדים חדשים, מבצעים ועדכונים",
        announce3:"הזמנה בוואטסאפ",
        enterStore:"להמשך לחנות",
        gateTag:"להצטרף לעדכונים",
        gateTitle:"לקבל ראשונה את מה שחדש.",
        gateText:"בגדים חדשים, מבצעים ופריטים שהגיעו עכשיו ל-Poster סח'נין.",
        gateNote:"רשימת עדכונים: sakhninPoster@gmail.com",
        joinNow:"להצטרף",
        navShop:"חנות",
        navAccessories:"אקססוריז",
        navContact:"צור קשר",
        cartWord:"עגלה",
        heroTag:"Poster Sakhnin",
        heroTitle:"בעיקר בגדים. סטייל נקי. קנייה קלה.",
        heroText:"טי־שירטים, חולצות ארוכות, הודיז, ג'ינסים, שורטס, שמלות, ז'קטים, חליפות ופינת אביזרים קטנה.",
        shopNow:"לקנות בגדים",
        seeAccessories:"לראות אביזרים",
        trust1:"בגדי נשים",
        trust2:"אביזרים",
        trust3:"25 שנה בסח'נין",
        quick1:"חולצות",
        quick2:"שמלות",
        quick3:"ג'ינסים ומכנסיים",
        quick4:"טבעות ותיקים",
        stat1Label:"עיקרי",
        stat1Value:"בגדים",
        stat2Label:"חנות",
        stat2Value:"Poster Sakhnin",
        stat3Label:"חדש",
        stat3Value:"בחירות שבועיות",
        miniTitle1:"קודם כל בגדים",
        miniText1:"רוב הקולקציה היא בגדים יומיומיים ולוקים עונתיים.",
        miniTitle2:"פילטרים קלים",
        miniText2:"בוחרים קבוצה ואז סוגי פריטים מתחתיה.",
        miniTitle3:"פינת אביזרים קטנה",
        miniText3:"טבעות, עגילים ותיקים נמצאים בחלק נפרד.",
        shopTitle:"קולקציית בגדים",
        shopSub:"קודם כל בגדים. נוח יותר לבחור.",
        collectionNote:"הקולקציה מתעדכנת לאורך כל השנה בהתאם למזג האוויר ולעונות השנה.",
        accessoriesTitle:"פינת אביזרים",
        accessoriesSub:"פינה קטנה של תיקים, טבעות ועגילים.",
        deliveryNote:"משלוח ₪50",
        paymentNote:"ויזה, Bit או מזומן במסירה",
        clearFilters:"נקה סינון",
        deliveryTitle:"משלוח ותשלום",
        deliveryCart:"משלוח לכל הזמנה: ₪50",
        paymentCart:"בחרו איך הלקוח ישלם. כל האפשרויות מוצגות למטה גם במחשב וגם במובייל. בויזה נפתח רק תשלום בכרטיס. ב-Bit או מזומן אפשר לשלוח את ההזמנה בוואטסאפ עם כל הפרטים.",
        payVisa:"ויזה",
        payVisaNote:"תשלום בכרטיס בלבד + ₪50 משלוח",
        payBit:"Bit",
        payBitNote:"שליחת הזמנה בוואטסאפ ואז תשלום ב-Bit + ₪50 משלוח",
        payCash:"מזומן במסירה",
        payCashNote:"שליחת הזמנה בוואטסאפ ותשלום במסירה + ₪50 משלוח",
        bundleLabel:"2 ב־",
        bundleFrom:"בחרי 2 כדי להפעיל את המבצע",
        bundleApplied:"המבצע הופעל",
        dealBoxTitle:"בחירות 2 ב־₪200",
        dealBannerTitle:"מבצע גדול — מהרו לפני שהמידות נגמרות.",
        dealBannerText:"בחרו את המבצע הרצוי ופתחו את כל הפריטים מהכפתורים למטה.",
        dealBannerTag:"מבצעי חנות חמים",
        shirtDealTitle:"2 חולצות ב־₪200",
        shirtDealText:"פתחו את כל החולצות שמשתתפות במבצע ובחרו את הפריטים שאהבתם.",
        shirtDealButton:"2 חולצות ב־₪200 — לחצו כאן",
        dressDealTitle:"2 שמלות ב־₪300",
        dressDealText:"פתחו את קולקציית השמלות ועברו על הדגמים שמשתתפים במבצע.",
        dressDealButton:"2 שמלות ב־₪300 — לחצו כאן",
        pantsDealTitle:"2 מכנסיים ב־₪300",
        pantsDealText:"פתחו רק את המכנסיים שמשתתפים במבצע 2 ב־₪300.",
        pantsDealButton:"2 מכנסיים ב־₪300 — לחצו כאן",
        dealItemsReady:"פריטים מוכנים",
        dealBoxText:"בחרי כל 2 מהדגמים האלה כדי להפעיל את המבצע.",
        dealOpen:"פתיחת פריט",
        photoLinkLabel:"תמונה",
        notifyOwnerText:"בהזמנות Bit או מזומן, הוואטסאפ שולח את ההזמנה עם המחיר הרגיל, מחיר המבצע, הצבע, המידה וקישור לתמונה.",
        inStock:"במלאי",
        paymentMethodLabel:"אמצעי תשלום",
        payVisaNow:"להמשך לתשלום בויזה",
        bitHelp:"הזמנת Bit נשלחת קודם בוואטסאפ ואז מאשרים תשלום ב-Bit. דמי משלוח: ₪50.",
        cashHelp:"הזמנת מזומן נשלחת קודם בוואטסאפ והתשלום מתבצע במסירה. דמי משלוח: ₪50.",
        visaHelp:"בבחירת ויזה צריך להיפתח רק תשלום בכרטיס. כדי לחייב כרטיסים באמת צריך לחבר ספק סליקה כמו Stripe או Tranzila.",
        subtotalLabel:"סכום ביניים",
        deliveryLabel:"משלוח",
        saleSavingsLabel:"חיסכון במבצע",
        realPriceLabel:"מחיר רגיל",
        salePriceLabel:"מחיר מבצע",
        colorLabel:"צבע",
        chooseColorFirst:"בחרי צבע קודם",
        chooseColorHint:"בחרי צבע",
        filterAll:"הכול",
        filterTops:"טופים",
        filterDresses:"שמלות",
        filterBottoms:"מכנסיים",
        filterOuterwear:"ז'קטים",
        filterSets:"חליפות",
        filterBags:"תיקים",
        filterEarrings:"עגילים",
        filterRings:"טבעות",
        filterSale:"מבצע",
        filterNew:"חדש",
        sortFeatured:"מומלץ",
        sortLow:"מחיר: מהנמוך לגבוה",
        sortHigh:"מחיר: מהגבוה לנמוך",
        updatesTitle:"עדכוני Poster",
        updatesText:"השאירי אימייל כדי לקבל הגעות חדשות ומבצעים.",
        subscribe:"הרשמה",
        footerText:"קודם כל בגדי נשים, עם פינת אביזרים קטנה ב-Poster Sakhnin.",
        phoneLabel:"טלפון",
        waLabel:"וואטסאפ",
        instaLabel:"אינסטגרם",
        mailLabel:"עדכוני אימייל",
        cartTitle:"העגלה שלך",
        cartItemsWord:"פריטים בעגלה",
        cartInfoSmall:"לחצו כדי לראות דמי משלוח ואפשרויות תשלום",
        emptyCart:"העגלה שלך ריקה.",
        totalLabel:'סה"כ לתשלום',
        orderWhatsApp:"הזמנה בוואטסאפ",
        addToCart:"להוסיף לעגלה",
        remove:"להסיר",
        searchPlaceholder:"חיפוש פריט",
        joinedOk:"תודה — האימייל נוסף.",
        noProducts:"לא נמצאו בגדים.",
        noAccessories:"לא נמצאו אביזרים.",
        itemsFound:"פריטים",
        catTitle:"בגדים",
        specialTitle:"מיוחד",
        subFilterLabel:"בחרו סוג אחד או יותר",
        sizeTitle:"מידות",
        waFloat:"וואטסאפ",
        waMessage:"שלום Poster, אני רוצה להזמין:",
        oneSize:"מידה אחת",
        noColorShort:"ללא צבע",
        waOrderTitle:"הזמנה חדשה - Poster",
        waLineColor:"צבע",
        waLineSize:"מידה",
        waLineQty:"כמות",
        waLineReg:"רגיל",
        waLineSale:"מבצע",
        waLineDeal:"מבצע",
        waLinePhoto:"תמונה",
        waLinePayment:"תשלום",
        waLineDelivery:"משלוח",
        waLineItems:"פריטים",
        waLineTotal:"סה״כ",
        cat_bags:"תיקים",
        cat_earrings:"עגילים",
        cat_rings:"טבעות",
        main_tops:"טופים",
        main_bottoms:"מכנסיים",
        main_dresses:"שמלות",
        main_suits:"חליפות",
        main_outerwear:"ז'קטים",
        sub_tshirts:"טי־שירטים",
        sub_longshirts:"חולצות ארוכות",
        sub_hoodies:"הודיז",
        sub_skinnyjeans:"ג'ינס סקיני",
        sub_widejeans:"ג'ינס רחב",
        sub_classicjeans:"ג'ינס קלאסי",
        sub_shorts:"שורטס",
        sub_longdresses:"שמלות ארוכות",
        sub_eveningdresses:"שמלות ערב",
        sub_fullsuits:"חליפות מלאות",
        sub_twopieces:"סטים 2 חלקים",
        sub_jackets:"ז'קטים",
        sub_blazers:"בלייזרים"
      },
      ar:{
        dir:"rtl",
        announce1:"وصلت تشكيلات جديدة على بوستر سخنين",
        announce2:"جديد المحل وتخفيضات على قطع مختارة",
        announce3:"للطلب عبر الواتساب",
        enterStore:"ادخلي عالمحل",
        gateTag:"خليكي أول وحدة تعرف",
        gateTitle:"دخّلي إيميلك ليصلك الجديد أول بأول",
        gateText:"ملابس جديدة، تخفيضات على قطع مختارة، ووصولات جديدة من بوستر سخنين.",
        gateNote:"للتحديثات والعروض: sakhninPoster@gmail.com",
        joinNow:"انضمي",
        navShop:"الملابس",
        navAccessories:"الإكسسوارات",
        navContact:"تواصل",
        cartWord:"السلة",
        heroTag:"Poster Sakhnin",
        heroTitle:"معظم التشكيلة ملابس. تسوّق مرتب وواضح.",
        heroText:"تيشيرتات، بلوزات طويلة، هوديز، جينز، شورتات، فساتين، جاكيتات وطقوم، ومعها زاوية إكسسوارات صغيرة.",
        shopNow:"تسوّقي الملابس",
        seeAccessories:"شوفي الإكسسوارات",
        trust1:"ملابس نسائية",
        trust2:"إكسسوارات",
        trust3:"25 سنة في سخنين",
        quick1:"بلوزات",
        quick2:"فساتين",
        quick3:"جينز وبنطلونات",
        quick4:"خواتم وشنط",
        stat1Label:"الأساس",
        stat1Value:"ملابس",
        stat2Label:"المحل",
        stat2Value:"Poster Sakhnin",
        stat3Label:"الجديد",
        stat3Value:"اختيارات الأسبوع",
        miniTitle1:"الملابس أولاً",
        miniText1:"أغلب التشكيلة ملابس يومية: بلوزات، بناطيل، فساتين وجاكيتات للموسم.",
        miniTitle2:"فلاتر سهلة",
        miniText2:"اختاري القسم وبعدها نوع القطع اللي تحته.",
        miniTitle3:"زاوية إكسسوارات صغيرة",
        miniText3:"خواتم، حلق وشنط بقسم لحاله عشان التصفح يكون أسهل.",
        shopTitle:"تشكيلة الملابس",
        shopSub:"أغلب المعروض ملابس، والاختيار صار أسهل.",
        collectionNote:"التشكيلة بتتغيّر طول السنة حسب الطقس وفصول السنة.",
        accessoriesTitle:"زاوية الإكسسوارات",
        accessoriesSub:"شنط، خواتم وحلق بقسم منفصل.",
        deliveryNote:"رسوم التوصيل ₪50",
        paymentNote:"فيزا أو Bit أو الدفع كاش عند الاستلام",
        clearFilters:"مسح التصفية",
        deliveryTitle:"التوصيل والدفع",
        deliveryCart:"رسوم التوصيل لكل طلب: ₪50",
        paymentCart:"اختاري طريقة الدفع. كل الخيارات ظاهرة بالأسفل على الكمبيوتر والموبايل. إذا اخترتي فيزا بنعرض فقط دفع البطاقة. أما Bit أو كاش فبيتم إرسال الطلب على واتساب مع كل التفاصيل.",
        payVisa:"فيزا",
        payVisaNote:"دفع بالبطاقة فقط + ₪50 رسوم توصيل",
        payBit:"Bit",
        payBitNote:"إرسال الطلب على واتساب ثم الدفع عبر Bit + ₪50 رسوم توصيل",
        payCash:"كاش عند الاستلام",
        payCashNote:"إرسال الطلب على واتساب والدفع عند الاستلام + ₪50 رسوم توصيل",
        bundleLabel:"2 بـ",
        bundleFrom:"اختاري قطعتين ليتفعل العرض",
        bundleApplied:"تم تفعيل العرض",
        dealBoxTitle:"اختيارات 2 بـ₪200",
        dealBannerTitle:"تنزيلات قوية — الحقوا قبل ما تخلص المقاسات.",
        dealBannerText:"اختاروا العرض المناسب واضغطوا على الزر لعرض كل القطع المشاركة فيه.",
        dealBannerTag:"عروض المتجر القوية",
        shirtDealTitle:"2 قمصان بـ₪200",
        shirtDealText:"افتحوا كل القمصان المشاركة في العرض واختاروا القطع اللي بتحبوها.",
        shirtDealButton:"2 قمصان بـ₪200 — اضغطوا هون",
        dressDealTitle:"2 فساتين بـ₪300",
        dressDealText:"افتحوا تشكيلة الفساتين وشوفوا كل القطع المشاركة في عرض الفساتين.",
        dressDealButton:"2 فساتين بـ₪300 — اضغطوا هون",
        pantsDealTitle:"2 بنطلون بـ₪300",
        pantsDealText:"افتحوا فقط البنطلونات المشاركة في عرض 2 بـ₪300.",
        pantsDealButton:"2 بنطلون بـ₪300 — اضغطوا هون",
        dealItemsReady:"قطع جاهزة",
        dealBoxText:"اختاري أي قطعتين من هالموديلات ليتفعّل العرض.",
        dealOpen:"فتح القطعة",
        photoLinkLabel:"الصورة",
        notifyOwnerText:"في طلبات Bit أو كاش، الواتساب بيوصل الطلب مع السعر الأصلي، سعر العرض، اللون، المقاس ورابط الصورة.",
        inStock:"متوفر",
        paymentMethodLabel:"طريقة الدفع",
        payVisaNow:"كمّلي للدفع بالفيزا",
        bitHelp:"طلبات الـBit بتنرسل أولاً على واتساب وبعدها بيتأكد الدفع عبر Bit. رسوم التوصيل ₪50.",
        cashHelp:"طلبات الكاش بتنرسل أولاً على واتساب والدفع بصير عند الاستلام. رسوم التوصيل ₪50.",
        visaHelp:"إذا اخترتي فيزا لازم يظهر فقط دفع البطاقة. وللدفع الحقيقي لازم ينربط الموقع مع شركة دفع مثل Stripe أو Tranzila.",
        subtotalLabel:"مجموع القطع",
        deliveryLabel:"رسوم التوصيل",
        saleSavingsLabel:"التوفير من العرض",
        realPriceLabel:"السعر الأصلي",
        salePriceLabel:"سعر العرض",
        colorLabel:"اللون",
        chooseColorFirst:"اختاري اللون أولاً",
        chooseColorHint:"اختاري اللون",
        filterAll:"الكل",
        filterTops:"بلوزات",
        filterDresses:"فساتين",
        filterBottoms:"بناطيل",
        filterOuterwear:"جاكيتات",
        filterSets:"أطقم",
        filterBags:"شنط",
        filterEarrings:"حلق",
        filterRings:"خواتم",
        filterSale:"تخفيضات",
        filterNew:"جديد",
        sortFeatured:"الأكثر رواجاً",
        sortLow:"السعر: من الأقل للأعلى",
        sortHigh:"السعر: من الأعلى للأقل",
        updatesTitle:"تحديثات بوستر",
        updatesText:"حطي إيميلك عشان يوصلك الجديد والتخفيضات.",
        subscribe:"اشتركي",
        footerText:"أول إشي الملابس النسائية، ومعها زاوية إكسسوارات صغيرة في بوستر سخنين.",
        phoneLabel:"الهاتف",
        waLabel:"واتساب",
        instaLabel:"إنستغرام",
        mailLabel:"إيميل التحديثات",
        cartTitle:"سلة الطلب",
        cartItemsWord:"عدد القطع بالسلة",
        cartInfoSmall:"اضغطي لتشوفي تفاصيل التوصيل والدفع",
        emptyCart:"السلة فاضية.",
        totalLabel:"المجموع للدفع",
        orderWhatsApp:"ابعتيلنا الطلب عالواتساب",
        addToCart:"ضيفي للسلة",
        remove:"حذف",
        searchPlaceholder:"دوّري على قطعة",
        joinedOk:"شكراً — ضفنا الإيميل.",
        noProducts:"ما لقينا قطع.",
        noAccessories:"ما لقينا إكسسوارات.",
        itemsFound:"قطعة",
        catTitle:"أقسام الملابس",
        specialTitle:"تصفية إضافية",
        sizeTitle:"المقاسات",
        waFloat:"واتساب",
        waMessage:"مرحبا بوستر، بدي أطلب:",
        oneSize:"قياس واحد",
        noColorShort:"بدون لون",
        waOrderTitle:"طلب جديد - Poster",
        waLineColor:"اللون",
        waLineSize:"المقاس",
        waLineQty:"الكمية",
        waLineReg:"السعر الأصلي",
        waLineSale:"سعر العرض",
        waLineDeal:"العرض",
        waLinePhoto:"الصورة",
        waLinePayment:"الدفع",
        waLineDelivery:"التوصيل",
        waLineItems:"القطع",
        waLineTotal:"المجموع",
        cat_bags:"شنط",
        cat_earrings:"حلق",
        cat_rings:"خواتم",
        main_tops:"بلوزات",
        main_bottoms:"بناطيل",
        main_dresses:"فساتين",
        main_suits:"أطقم",
        main_outerwear:"جاكيتات",
        sub_tshirts:"تيشيرتات",
        sub_longshirts:"بلوزات طويلة",
        sub_hoodies:"هوديز",
        sub_skinnyjeans:"جينز سكيني",
        sub_widejeans:"جينز واسع",
        sub_classicjeans:"جينز كلاسيكي",
        sub_shorts:"شورتات",
        sub_longdresses:"فساتين طويلة",
        sub_eveningdresses:"فساتين سهرة",
        sub_fullsuits:"طقم كامل",
        sub_twopieces:"طقم قطعتين",
        sub_jackets:"جاكيتات",
        sub_blazers:"بليزر",
        subFilterLabel:"اختاري نوع واحد أو أكثر"
      },
      ru:{
        dir:"ltr",
        announce1:"Новая одежда в Сахнине",
        announce2:"Новинки и скидочные позиции",
        announce3:"Заказать в WhatsApp",
        enterStore:"В магазин",
        gateTag:"Присоединяйтесь к списку",
        gateTitle:"Получайте новинки первыми.",
        gateText:"Новая одежда, скидочные вещи и быстрые обновления от Poster Sakhnin.",
        gateNote:"Список обновлений: sakhninPoster@gmail.com",
        joinNow:"Присоединиться",
        navShop:"Одежда",
        navAccessories:"Аксессуары",
        navContact:"Контакты",
        cartWord:"Корзина",
        heroTag:"Poster Sakhnin",
        heroTitle:"В основном одежда. Чистый стиль. Легкий шопинг.",
        heroText:"Футболки, длинные рубашки, худи, джинсы, шорты, платья, куртки, костюмы и небольшой уголок аксессуаров.",
        shopNow:"Смотреть одежду",
        seeAccessories:"Смотреть аксессуары",
        trust1:"Женская одежда",
        trust2:"Аксессуары",
        trust3:"25 лет в Сахнине",
        quick1:"Верх",
        quick2:"Платья",
        quick3:"Джинсы и брюки",
        quick4:"Кольца и сумки",
        stat1Label:"Главное",
        stat1Value:"Одежда",
        stat2Label:"Магазин",
        stat2Value:"Poster Sakhnin",
        stat3Label:"Новое",
        stat3Value:"Выбор недели",
        miniTitle1:"Сначала одежда",
        miniText1:"Большая часть коллекции — повседневная одежда и сезонные образы.",
        miniTitle2:"Простые фильтры",
        miniText2:"Выберите группу, а потом тип вещей ниже.",
        miniTitle3:"Небольшой уголок аксессуаров",
        miniText3:"Кольца, серьги и сумки теперь в отдельном разделе.",
        shopTitle:"Коллекция одежды",
        shopSub:"Сначала главная коллекция. Меньше текста, проще покупать.",
        collectionNote:"Коллекция меняется в течение года в зависимости от сезона и погоды.",
        accessoriesTitle:"Уголок аксессуаров",
        accessoriesSub:"Небольшой раздел для сумок, колец и серег.",
        deliveryNote:"Доставка ₪50",
        paymentNote:"Visa, Bit или наличными при получении",
        clearFilters:"Сбросить фильтры",
        deliveryTitle:"Доставка и оплата",
        deliveryCart:"Доставка на каждый заказ: ₪50",
        paymentCart:"Выберите способ оплаты. Все варианты всегда видны ниже и на компьютере, и на телефоне. При выборе Visa показывается только оплата картой. Для Bit и наличных заказ можно отправить в WhatsApp со всеми деталями.",
        payVisa:"Visa",
        payVisaNote:"Только оплата картой + ₪50 доставка",
        payBit:"Bit",
        payBitNote:"Сначала отправка заказа в WhatsApp, потом оплата через Bit + ₪50 доставка",
        payCash:"Наличными при получении",
        payCashNote:"Сначала отправка заказа в WhatsApp, потом оплата при получении + ₪50 доставка",
        bundleLabel:"2 за",
        bundleFrom:"Выберите 2, чтобы активировать предложение",
        bundleApplied:"Скидка применена",
        dealBoxTitle:"Выбор 2 за ₪200",
        dealBannerTitle:"Большая распродажа — успейте, пока есть размеры.",
        dealBannerText:"Выберите нужную акцию и откройте полную подборку по кнопкам ниже.",
        dealBannerTag:"Горячие предложения",
        shirtDealTitle:"2 рубашки за ₪200",
        shirtDealText:"Откройте все рубашки, которые участвуют в акции, и выберите понравившиеся модели.",
        shirtDealButton:"2 рубашки за ₪200 — нажмите",
        dressDealTitle:"2 платья за ₪300",
        dressDealText:"Откройте коллекцию платьев и просмотрите модели, участвующие в акции.",
        dressDealButton:"2 платья за ₪300 — нажмите",
        pantsDealTitle:"2 пары брюк за ₪300",
        pantsDealText:"Откройте только брюки, участвующие в акции 2 за ₪300.",
        pantsDealButton:"2 пары брюк за ₪300 — нажмите",
        dealItemsReady:"товаров готово",
        dealBoxText:"Выберите любые 2 вещи из этих моделей, чтобы активировать предложение.",
        dealOpen:"Открыть товар",
        photoLinkLabel:"Фото",
        notifyOwnerText:"Для заказов через Bit и наличные WhatsApp отправляет короткое сообщение: обычная цена, цена по акции, цвет, размер, ссылка на фото, способ оплаты и доставка.",
        inStock:"В наличии",
        paymentMethodLabel:"Способ оплаты",
        payVisaNow:"Перейти к оплате Visa",
        bitHelp:"Оплата через Bit оформляется после подтверждения заказа. Мы отправим запрос в Bit с суммой заказа и доставкой ₪50.",
        cashHelp:"Оплата курьеру при получении. Стоимость доставки ₪50.",
        visaHelp:"При выборе Visa должен показываться только карточный платёж. Для реального списания нужно подключить платёжный сервис, например Stripe или Tranzila.",
        subtotalLabel:"Подытог",
        deliveryLabel:"Доставка",
        saleSavingsLabel:"Экономия по акции",
        realPriceLabel:"Обычная цена",
        salePriceLabel:"Цена по акции",
        colorLabel:"Цвет",
        chooseColorFirst:"Сначала выберите цвет",
        chooseColorHint:"Выберите цвет",
        filterAll:"Все",
        filterTops:"Верх",
        filterDresses:"Платья",
        filterBottoms:"Низ",
        filterOuterwear:"Куртки",
        filterSets:"Костюмы",
        filterBags:"Сумки",
        filterEarrings:"Серьги",
        filterRings:"Кольца",
        filterSale:"Скидки",
        filterNew:"Новое",
        sortFeatured:"Рекомендуем",
        sortLow:"Цена: по возрастанию",
        sortHigh:"Цена: по убыванию",
        updatesTitle:"Обновления Poster",
        updatesText:"Оставьте email для новинок и скидок.",
        subscribe:"Подписаться",
        footerText:"Сначала женская одежда, а аксессуары — в отдельном небольшом разделе Poster Sakhnin.",
        phoneLabel:"Телефон",
        waLabel:"WhatsApp",
        instaLabel:"Instagram",
        mailLabel:"Email обновления",
        cartTitle:"Ваша корзина",
        cartItemsWord:"Товаров в корзине",
        cartInfoSmall:"Нажмите, чтобы увидеть доставку и оплату",
        emptyCart:"Ваша корзина пуста.",
        totalLabel:"Итого к оплате",
        orderWhatsApp:"Заказать в WhatsApp",
        addToCart:"Добавить в корзину",
        remove:"Убрать",
        searchPlaceholder:"Поиск одежды",
        joinedOk:"Спасибо — email добавлен.",
        noProducts:"Одежда не найдена.",
        noAccessories:"Аксессуары не найдены.",
        itemsFound:"товаров найдено",
        catTitle:"Одежда",
        specialTitle:"Особое",
        subFilterLabel:"Выберите один или несколько типов",
        sizeTitle:"Размеры",
        waFloat:"WhatsApp",
        waMessage:"Здравствуйте, Poster, я хочу заказать:",
        oneSize:"Один размер",
        noColorShort:"Без цвета",
        waOrderTitle:"Новый заказ - Poster",
        waLineColor:"Цвет",
        waLineSize:"Размер",
        waLineQty:"Кол-во",
        waLineReg:"Обычная",
        waLineSale:"Со скидкой",
        waLineDeal:"Акция",
        waLinePhoto:"Фото",
        waLinePayment:"Оплата",
        waLineDelivery:"Доставка",
        waLineItems:"Товары",
        waLineTotal:"Итого",
        cat_bags:"Сумки",
        cat_earrings:"Серьги",
        cat_rings:"Кольца",
        main_tops:"Верх",
        main_bottoms:"Низ",
        main_dresses:"Платья",
        main_suits:"Костюмы",
        main_outerwear:"Куртки",
        sub_tshirts:"Футболки",
        sub_longshirts:"Длинные рубашки",
        sub_hoodies:"Худи",
        sub_skinnyjeans:"Узкие джинсы",
        sub_widejeans:"Широкие джинсы",
        sub_classicjeans:"Классические джинсы",
        sub_shorts:"Шорты",
        sub_longdresses:"Длинные платья",
        sub_eveningdresses:"Вечерние платья",
        sub_fullsuits:"Полные костюмы",
        sub_twopieces:"Костюмы из 2 вещей",
        sub_jackets:"Куртки",
        sub_blazers:"Блейзеры"
      }
    };

    const emailPlaceholders = {
      en:"Enter your email",
      he:"הכניסי את האימייל שלך",
      ar:"حطي الإيميل تبعك",
      ru:"Введите ваш email"
    };

    function t(key){
      return i18n[currentLang][key] || key;
    }

    function currency(n){
      return "₪" + n;
    }

    function getMainLabel(main){
      return main === "all" ? t("filterAll") : t(`main_${main}`);
    }

    function getSubLabel(sub){
      return t(`sub_${sub}`);
    }

    function getAccessoryLabel(category){
      return t(`cat_${category}`);
    }

    function getItemLabel(item){
      if(item.type === "clothing") return getSubLabel(item.subCategory);
      return getAccessoryLabel(item.category);
    }

    
    function getVariantList(item){
      return Array.isArray(item.colors) ? item.colors : [];
    }

    function getDefaultColorKey(item){
      const variants = getVariantList(item);
      return variants.length ? variants[0].key : "";
    }

    function ensureSelectedColor(item){
      if(!item || !getVariantList(item).length) return "";
      const current = selectedProductColors[item.id];
      const exists = getVariantList(item).some(variant => variant.key === current);
      if(!exists) selectedProductColors[item.id] = getDefaultColorKey(item);
      return selectedProductColors[item.id];
    }

    function getCurrentVariant(item){
      const variants = getVariantList(item);
      if(!variants.length) return null;
      const colorKey = ensureSelectedColor(item);
      return variants.find(variant => variant.key === colorKey) || variants[0];
    }

    function getStockMap(item){
      const variant = getCurrentVariant(item);
      return variant ? (variant.stock || {}) : (item.stock || {});
    }

    function getAvailableSizes(item){
      return Object.keys(getStockMap(item) || {});
    }

    function getTotalStock(item){
      return Object.values(getStockMap(item) || {}).reduce((sum, qty) => sum + qty, 0);
    }

    function getColorLabel(item, colorKey){
      const variant = getVariantList(item).find(v => v.key === colorKey);
      if(!variant) return "";
      if(typeof variant.label === "string") return variant.label;
      return variant.label?.[currentLang] || variant.label?.en || colorKey;
    }

    function getSelectedColorLabel(item, colorKey){
      const label = getColorLabel(item, colorKey);
      if(!label) return "";
      if(currentLang === "ar") return `اللون: ${label}`;
      if(currentLang === "he") return `צבע: ${label}`;
      if(currentLang === "ru") return `Цвет: ${label}`;
      return `Color: ${label}`;
    }

    function getProductImages(item){
      const variant = getCurrentVariant(item);
      if(variant && variant.images && variant.images.length) return variant.images;
      if(variant && variant.image) return [variant.image];
      if(item.images && item.images.length) return item.images;
      const fallbackByMain = {
        tops:[
          item.image,
          'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80'
        ],
        bottoms:[
          item.image,
          'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80'
        ],
        dresses:[
          item.image,
          'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80'
        ],
        suits:[
          item.image,
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80'
        ],
        outerwear:[
          item.image,
          'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80'
        ],
        bags:[
          item.image,
          'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80'
        ],
        earrings:[
          item.image,
          'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80'
        ],
        rings:[
          item.image,
          'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80'
        ]
      };
      const key = item.mainCategory || item.category || 'tops';
      const arr = fallbackByMain[key] || [item.image, item.image, item.image];
      return [...new Set(arr.filter(Boolean))].slice(0,3);
    }

    function getPrimaryImage(item){
      const fallbackByMain = {
        tops:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
        bottoms:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
        dresses:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
        suits:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80",
        outerwear:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
        bags:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
        earrings:"https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80",
        rings:"https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80"
      };
      return getProductImages(item)[0] || item.image || fallbackByMain[item.mainCategory || item.category] || fallbackByMain.tops;
    }

    function normalizeProductImages(){
      products.forEach(item => {
        const safeImage = getPrimaryImage(item);
        if(!item.image) item.image = safeImage;
        if(!item.images || !item.images.length){
          item.images = getProductImages(item);
        }
        if(item.colors && item.colors.length){
          item.colors.forEach(variant => {
            if(!variant.image) variant.image = safeImage;
            if(!variant.images || !variant.images.length){
              variant.images = [variant.image || safeImage].filter(Boolean);
            }
          });
        }
      });
    }


    function getSoldOutText(){
      return currentLang === "ar" ? "نفد" : currentLang === "he" ? "אזל" : currentLang === "ru" ? "Нет в наличии" : "Sold out";
    }

    function getLeftText(qty){
      if(qty === 0) return getSoldOutText();
      if(qty <= 4){
        if(currentLang === "ar") return `باقي ${qty}`;
        if(currentLang === "he") return `נשארו ${qty}`;
        if(currentLang === "ru") return `Осталось ${qty}`;
        return `${qty} left`;
      }
      if(currentLang === "ar") return "متوفر";
      if(currentLang === "he") return "במלאי";
      if(currentLang === "ru") return "В наличии";
      return "In stock";
    }

    function getChooseSizeText(){
      if(currentLang === "ar") return "اختاري المقاس أولاً";
      if(currentLang === "he") return "בחרי מידה קודם";
      if(currentLang === "ru") return "Сначала выберите размер";
      return "Please choose a size first";
    }

    function getChooseSizeHintText(){
      if(currentLang === "ar") return "اختاري المقاس حتى تقدري تضيفي القطعة للسلة";
      if(currentLang === "he") return "בחרי מידה כדי להוסיף את הפריט לעגלה";
      if(currentLang === "ru") return "Выберите размер, чтобы добавить товар в корзину";
      return "Please choose a size to add this item to the cart";
    }

    function getLocalizedSize(size){
      return size === "One Size" ? t("oneSize") : size;
    }

    function getSelectedSizeText(size){
      const shownSize = getLocalizedSize(size);
      if(currentLang === "ar") return `تم اختيار المقاس: ${shownSize}`;
      if(currentLang === "he") return `המידה שנבחרה: ${shownSize}`;
      if(currentLang === "ru") return `Выбранный размер: ${shownSize}`;
      return `Selected size: ${shownSize}`;
    }

    function getSelectedSizeLabel(size){
      const shownSize = getLocalizedSize(size);
      if(currentLang === "ar") return `المقاس: ${shownSize}`;
      if(currentLang === "he") return `מידה: ${shownSize}`;
      if(currentLang === "ru") return `Размер: ${shownSize}`;
      return `Size: ${shownSize}`;
    }

    function renderSizeButtons(item){
      return Object.entries(getStockMap(item) || {}).map(([size, qty]) => `
        <button
          class="size size-option ${selectedProductSizes[item.id]===size ? "active" : ""} ${qty===0 ? "sold" : ""}"
          type="button"
          onclick="selectSize(${item.id}, '${size.replace("'", "\'")}')"
          ${qty===0 ? "disabled" : ""}
          aria-label="${size} ${qty===0 ? getSoldOutText() : getLeftText(qty)}"
        >
          <span>${size}</span>
          <small>${qty===0 ? getSoldOutText() : getLeftText(qty)}</small>
        </button>
      `).join("");
    }

    function renderColorButtons(item){
      const variants = getVariantList(item);
      if(!variants.length) return "";
      const selectedColor = ensureSelectedColor(item);
      return variants.map(variant => `
        <button
          class="color-chip ${selectedColor===variant.key ? "active" : ""}"
          type="button"
          onclick="selectColor(${item.id}, '${variant.key.replace("'", "\'")}')"
          aria-label="${getColorLabel(item, variant.key)}"
        >
          <span class="color-dot" style="background:${variant.swatch || '#fff'}"></span>
          <span>${getColorLabel(item, variant.key)}</span>
        </button>
      `).join("");
    }

    function selectColor(productId, colorKey){
      selectedProductColors[productId] = colorKey;
      delete selectedProductSizes[productId];
      const item = products.find(p => p.id === productId);
      if(item){
        currentQuickImage = getPrimaryImage(item);
      }
      renderProducts();
      renderAccessories();
      if(currentQuickProductId === productId) renderQuickView();
      updateCart();
    }

    function selectSize(productId, size){
      selectedProductSizes[productId] = size;
      renderProducts();
      renderAccessories();
      if(currentQuickProductId === productId) renderQuickView();
      updateCart();
    }

    function closeGate(){
      document.getElementById("emailGate").style.display = "none";
    }

    function subscribeEmail(e){
      e.preventDefault();
      const input = e.target.querySelector('input[name="email"]');
      const email = input ? input.value.trim() : "";
      if(email){
        alert(t("joinedOk") + "\n" + email);
        input.value = "";
        closeGate();
      }
    }

    function sortProducts(list){
      const arr = [...list];
      if(activeDealPreview){
        arr.sort((a,b) => {
          const aDeal = a.dealGroup === activeDealPreview ? 1 : 0;
          const bDeal = b.dealGroup === activeDealPreview ? 1 : 0;
          if(aDeal !== bDeal) return bDeal - aDeal;
          return 0;
        });
      }
      if(currentSort === "price-low") arr.sort((a,b) => a.price - b.price);
      if(currentSort === "price-high") arr.sort((a,b) => b.price - a.price);
      return arr;
    }

    function renderSubFilters(){
      const box = document.getElementById("subFilterWrap");
      const label = document.getElementById("subFilterLabel");

      if(selectedMainCategory === "all"){
        box.innerHTML = "";
        if(label) label.style.display = "none";
        return;
      }

      const subs = subCategoryMap[selectedMainCategory] || [];
      box.innerHTML = subs.map(sub => `
        <button class="sub-btn ${selectedSubcategories.includes(sub) ? "active" : ""}" data-sub="${sub}">
          ${getSubLabel(sub)}
        </button>
      `).join("");
      if(label) label.style.display = subs.length ? "block" : "none";
    }

    function getFilteredClothing(){
      const q = document.getElementById("searchInput").value.trim().toLowerCase();
      let filtered = products.filter(p => {
        if(p.type !== "clothing") return false;
        const mainMatch = selectedMainCategory === "all" || p.mainCategory === selectedMainCategory;
        const subMatch = selectedSubcategories.length === 0 || selectedSubcategories.includes(p.subCategory);
        const dealMatch = !activeDealCollection || p.dealGroup === activeDealCollection;
        const saleMatch = !saleOnly || p.sale;
        const newMatch = !newOnly || p.isNew;
        const sizeMatch = selectedSizes.length === 0 || selectedSizes.some(size => getAvailableSizes(p).includes(size));
        const text = (
          p.name[currentLang] + " " +
          p.desc[currentLang] + " " +
          getMainLabel(p.mainCategory) + " " +
          getSubLabel(p.subCategory)
        ).toLowerCase();
        const searchMatch = !q || text.includes(q);
        return mainMatch && subMatch && dealMatch && saleMatch && newMatch && sizeMatch && searchMatch;
      });
      return sortProducts(filtered);
    }

    function getFilteredAccessories(){
      return products.filter(p => p.type === "accessory" && (selectedAccessory === "all" || p.category === selectedAccessory));
    }

    function renderActiveFilters(){
      const box = document.getElementById("activeFilters");
      const chips = [];
      if(selectedMainCategory !== "all") chips.push(getMainLabel(selectedMainCategory));
      selectedSubcategories.forEach(sub => chips.push(getSubLabel(sub)));
      if(saleOnly) chips.push(t("filterSale"));
      if(newOnly) chips.push(t("filterNew"));
      selectedSizes.forEach(size => chips.push(size));
      box.innerHTML = chips.map(chip => `<span class="active-chip">${chip}</span>`).join("");
      const clearBtn = document.getElementById("clearFiltersBtn");
      const hasSearch = !!document.getElementById("searchInput").value.trim();
      const hasSorting = currentSort !== "featured";
      const hasFilters = chips.length > 0 || hasSearch || hasSorting;
      if(clearBtn) clearBtn.style.display = hasFilters ? "inline-flex" : "none";
    }

    function getBadge(p){
      if(activeDealPreview && p.dealGroup === activeDealPreview){
        return `<div class="badge">${getBundleText(p)}</div>`;
      }
      if(p.sale) return `<div class="badge">${t("filterSale")}</div>`;
      if(p.isNew) return `<div class="badge new-badge">${t("filterNew")}</div>`;
      return "";
    }

    function clearAllFilters(){
      selectedMainCategory = "all";
      selectedSubcategories = [];
      saleOnly = false;
      activeDealPreview = "";
      newOnly = false;
      selectedSizes = [];
      currentSort = "featured";
      activeDealCollection = "";

      document.querySelectorAll("#mainCategoryFilters .filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.main === "all");
      });
      document.getElementById("subFilterWrap").innerHTML = "";
      const subLabel = document.getElementById("subFilterLabel");
      if(subLabel) subLabel.style.display = "none";
      document.getElementById("saleToggle").classList.remove("active");
      document.getElementById("newToggle").classList.remove("active");
      document.querySelectorAll("#sizeFilters .size-chip").forEach(btn => btn.classList.remove("active"));
      document.getElementById("searchInput").value = "";
      document.getElementById("sortSelect").value = "featured";
      renderProducts();
    }

    function getBundleText(product){
      if(!product.bundleDeal) return "";
      return `${t("bundleLabel")} ${currency(product.bundleDeal.total)}`;
    }

    function isGiftComboTop(item){
      return !!item && item.type === "clothing" && ["tshirts","longshirts"].includes(item.subCategory);
    }

    function isGiftComboBottom(item){
      return !!item && item.type === "clothing" && ["skinnyjeans","widejeans","classicjeans","shorts"].includes(item.subCategory);
    }

    function isGiftComboGift(item){
      return !!item && item.type === "accessory" && ["rings","earrings"].includes(item.category);
    }

    function getGiftItemAppliedText(){
      if(currentLang === "ar") return "هدية مجانية";
      if(currentLang === "he") return "מתנה חינם";
      if(currentLang === "ru") return "Подарок бесплатно";
      return "Free gift";
    }

    function getGiftAppliedText(count){
      if(currentLang === "ar") return `تم تطبيق ${count} هدية مجانية`;
      if(currentLang === "he") return `הופעלו ${count} מתנות חינם`;
      if(currentLang === "ru") return `Применено ${count} бесплатных подарков`;
      return `${count} free gifts applied`;
    }

    function getGiftUnlockedText(count){
      if(currentLang === "ar") return `معك ${count} هدية جاهزة — أضيفي حلق أو خاتم`;
      if(currentLang === "he") return `יש לך ${count} מתנה מוכנה — הוסיפי עגיל או טבעת`;
      if(currentLang === "ru") return `У вас ${count} доступных подарка — добавьте серьги или кольцо`;
      return `${count} gift slots unlocked — add a ring or earring`;
    }

    function getGiftChoiceLineText(){
      if(currentLang === "ar") return "خاتم أو حلق واحد مجاناً لكل طقم";
      if(currentLang === "he") return "טבעת או עגיל אחד חינם לכל סט";
      if(currentLang === "ru") return "Одно кольцо или одни серьги бесплатно за пару";
      return "1 ring or 1 earring free per pair";
    }

    function getGiftComboStatus(){
      const tops = cart.filter(isGiftComboTop);
      const bottoms = cart.filter(isGiftComboBottom);
      const gifts = cart.filter(isGiftComboGift);
      const pairCount = Math.min(tops.length, bottoms.length);
      const freeGiftCount = Math.min(pairCount, gifts.length);
      const freeGiftItems = [...gifts].sort((a,b) => b.price - a.price).slice(0, freeGiftCount);
      return {
        topCount: tops.length,
        bottomCount: bottoms.length,
        pairCount,
        giftCount: gifts.length,
        freeGiftCount,
        unlockedGiftCount: Math.max(0, pairCount - freeGiftCount),
        freeGiftItems
      };
    }


    function getCartPricing(){
      const groups = new Map();
      let regularSubtotal = 0;

      cart.forEach(item => {
        const colorKey = item.chosenColor || "";
        const key = `${item.id}__${item.chosenSize || "One Size"}__${colorKey}`;
        if(!groups.has(key)){
          groups.set(key, {
            id:item.id,
            type:item.type,
            category:item.category || "",
            subCategory:item.subCategory || "",
            size:item.chosenSize || "One Size",
            colorKey,
            colorLabel:getColorLabel(item, colorKey),
            name:item.name[currentLang],
            price:item.price,
            bundleDeal:item.bundleDeal || null,
            dealGroup:item.dealGroup || (item.bundleDeal ? `product-${item.id}` : null),
            qty:0,
            regularTotal:0,
            savings:0,
            giftSavings:0,
            freeGiftQty:0,
            displayImage:item.displayImage || getPrimaryImage(item)
          });
        }
        const group = groups.get(key);
        group.qty += 1;
        group.regularTotal += item.price;
        regularSubtotal += item.price;
      });

      const dealBuckets = new Map();
      cart.forEach(item => {
        if(!item.bundleDeal) return;
        const bucketKey = item.dealGroup || `product-${item.id}`;
        if(!dealBuckets.has(bucketKey)){
          dealBuckets.set(bucketKey, {bundleDeal:item.bundleDeal, entries:[], itemNames:new Set()});
        }
        const displayKey = `${item.id}__${item.chosenSize || "One Size"}__${item.chosenColor || ""}`;
        const bucket = dealBuckets.get(bucketKey);
        bucket.entries.push({price:item.price, displayKey, name:item.name[currentLang]});
        bucket.itemNames.add(item.name[currentLang]);
      });

      let totalSavings = 0;
      const dealSummaries = [];
      dealBuckets.forEach(bucket => {
        const qtyPerBundle = bucket.bundleDeal?.qty || 0;
        if(qtyPerBundle < 2 || bucket.entries.length < qtyPerBundle) return;
        const sorted = [...bucket.entries].sort((a,b) => b.price - a.price);
        const bundleCount = Math.floor(sorted.length / qtyPerBundle);
        for(let i = 0; i < bundleCount; i++){
          const slice = sorted.slice(i * qtyPerBundle, (i + 1) * qtyPerBundle);
          const regular = slice.reduce((sum, entry) => sum + entry.price, 0);
          const savings = Math.max(0, regular - bucket.bundleDeal.total);
          if(!savings) continue;
          totalSavings += savings;
          slice.forEach(entry => {
            const group = groups.get(entry.displayKey);
            if(group){
              group.savings += savings * (entry.price / regular);
            }
          });
          dealSummaries.push({
            type:"bundle",
            qty:qtyPerBundle,
            regular,
            total:bucket.bundleDeal.total,
            savings,
            items:slice.map(entry => entry.name),
            itemNames:[...bucket.itemNames]
          });
        }
      });

      const giftStatus = getGiftComboStatus();
      if(giftStatus.freeGiftCount > 0){
        const freeGiftKeys = giftStatus.freeGiftItems.map(item => ({
          key:`${item.id}__${item.chosenSize || "One Size"}__${item.chosenColor || ""}`,
          price:item.price
        }));
        freeGiftKeys.forEach(entry => {
          const group = groups.get(entry.key);
          if(group){
            group.freeGiftQty += 1;
            group.giftSavings += entry.price;
            group.savings += entry.price;
            totalSavings += entry.price;
          }
        });
        dealSummaries.push({
          type:"gift",
          qty:giftStatus.freeGiftCount,
          total:0,
          savings:giftStatus.freeGiftItems.reduce((sum,item) => sum + item.price, 0)
        });
      }

      groups.forEach(group => {
        group.savings = Math.round(group.savings * 100) / 100;
        group.giftSavings = Math.round(group.giftSavings * 100) / 100;
        group.finalTotal = Math.max(0, group.regularTotal - group.savings);
      });

      totalSavings = Math.round(totalSavings * 100) / 100;
      return {
        groups:[...groups.values()],
        regularSubtotal,
        savings:totalSavings,
        subtotal:Math.max(0, regularSubtotal - totalSavings),
        dealSummaries,
        giftStatus
      };
    }



    function getChooseOptionsText(){
      if(currentLang === "ar") return "اختاري المقاس والصور";
      if(currentLang === "he") return "בחרי מידה ותמונות";
      if(currentLang === "ru") return "Выберите размер и фото";
      return "Choose size";
    }

    function getPreferredSizeText(){
      if(currentLang === "ar") return "أي مقاس بتفضّلي؟";
      if(currentLang === "he") return "איזו מידה את מעדיפה?";
      if(currentLang === "ru") return "Какой размер вы предпочитаете?";
      return "Which size do you prefer?";
    }

    function getMorePhotosText(){
      if(currentLang === "ar") return "صور أكثر للقطعة";
      if(currentLang === "he") return "עוד תמונות של הפריט";
      if(currentLang === "ru") return "Больше фото товара";
      return "More photos";
    }

    function getOpenDetailsText(){
      if(currentLang === "ar") return "افتحي القطعة وشوفي الصور والمقاسات";
      if(currentLang === "he") return "פתחי את הפריט וראי תמונות ומידות";
      if(currentLang === "ru") return "Откройте товар, чтобы увидеть фото и размеры";
      return "Open the item to see photos and sizes";
    }

    function getInStockOnlyText(){
      if(currentLang === "ar") return "المتوفر فقط";
      if(currentLang === "he") return "רק מה שבמלאי";
      if(currentLang === "ru") return "Только в наличии";
      return "Only in stock";
    }

    function hydrateProductGalleries(){
      products.forEach(item => {
        item.images = getProductImages(item);
      });
    }

    function openQuickView(id){
      const item = products.find(p => p.id === id);
      if(!item) return;
      currentQuickProductId = id;
      ensureSelectedColor(item);
      currentQuickImage = getPrimaryImage(item);
      renderQuickView();
      document.getElementById('productModal').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeQuickView(){
      document.getElementById('productModal').classList.remove('open');
      document.body.style.overflow = '';
    }

    function setQuickImage(src){
      currentQuickImage = src;
      renderQuickView();
    }

    function renderQuickView(){
      const item = products.find(p => p.id === currentQuickProductId);
      if(!item) return;
      ensureSelectedColor(item);
      const content = document.getElementById('quickViewContent');
      const images = getProductImages(item);
      const mainImage = currentQuickImage || images[0] || item.image;
      const selectedSize = selectedProductSizes[item.id] || '';
      const selectedColor = selectedProductColors[item.id] || '';
      const hasColors = getVariantList(item).length > 0;
      content.innerHTML = `
        <div>
          <div class="quick-gallery-main" style="background-image:url('${mainImage}')"></div>
          <div class="quick-gallery-thumbs">
            ${images.map(src => `
              <button type="button" class="quick-thumb ${mainImage===src ? 'active' : ''}" onclick="setQuickImage('${src}')" style="background-image:url('${src}')"></button>
            `).join('')}
          </div>
        </div>
        <div class="quick-info">
          <div class="category">${item.type === 'clothing' ? getSubLabel(item.subCategory) : getAccessoryLabel(item.category)}</div>
          <h3 id="quickViewTitle">${item.name[currentLang]}</h3>
          <p>${item.desc[currentLang]}</p>
          <div class="quick-price-box">
            <div class="price">${currency(item.price)} ${item.oldPrice ? `<span class="old-price">${currency(item.oldPrice)}</span>` : ''}</div>
            ${item.bundleDeal ? `<div class="deal-note">${getBundleText(item)} • ${t('bundleFrom')}</div>` : ''}
          </div>
          ${hasColors ? `
          <div>
            <div class="quick-section-label">${t('colorLabel')}</div>
            <div class="quick-color-wrap">${renderColorButtons(item)}</div>
            <div class="quick-size-message">${selectedColor ? getSelectedColorLabel(item, selectedColor) : t('chooseColorHint')}</div>
          </div>` : ``}
          <div>
            <div class="quick-section-label">${getPreferredSizeText()}</div>
            <div class="quick-size-wrap">${renderSizeButtons(item)}</div>
            <div class="quick-stock-note">${getInStockOnlyText()}</div>
            <div class="quick-size-message">${selectedSize ? getSelectedSizeText(selectedSize) : getChooseSizeHintText()}</div>
          </div>
          <div class="quick-actions">
            <button class="btn btn-primary quick-open-btn ${!selectedSize ? 'disabled-add' : ''}" onclick="addQuickToCart()" ${!selectedSize ? 'disabled' : ''}>${!selectedSize ? getChooseSizeText() : t('addToCart')}</button>
            <button class="btn quick-secondary" type="button" onclick="closeQuickView()">${currentLang === 'ar' ? 'رجوع' : currentLang === 'he' ? 'חזרה' : currentLang === 'ru' ? 'Назад' : 'Back'}</button>
          </div>
        </div>`;
    }

    function addQuickToCart(){
      if(currentQuickProductId == null) return;
      addToCart(currentQuickProductId, true);
    }


    function scrollToProduct(id){
      const cards = Array.from(document.querySelectorAll('#productGrid .card'));
      const target = cards.find(card => card.getAttribute('onclick') === `openQuickView(${id})`);
      if(target){
        target.scrollIntoView({behavior:'smooth', block:'center'});
        target.animate([
          {transform:'scale(1)'},
          {transform:'scale(1.02)'},
          {transform:'scale(1)'}
        ], {duration:420, easing:'ease'});
      }
    }

    function renderBundleDealBox(){
      const box = document.getElementById("bundleDealBox");
      if(!box) return;

      const shirtDealProducts = products.filter(p => p.type === "clothing" && p.bundleDeal && p.dealGroup === "tshirt-200");
      const dressDealProducts = products.filter(p => p.type === "clothing" && p.bundleDeal && p.dealGroup === "dress-300");
      const pantsDealProducts = products.filter(p => p.type === "clothing" && p.bundleDeal && p.dealGroup === "pants-300");

      if(!shirtDealProducts.length && !dressDealProducts.length && !pantsDealProducts.length){
        box.style.display = "none";
        box.innerHTML = "";
        return;
      }

      box.style.display = "grid";
      box.innerHTML = `
        <div class="deal-box-head">
          <div class="deal-box-copy">
            <h3>${t("dealBannerTitle")}</h3>
            <p>${t("dealBannerText")}</p>
          </div>
          <div class="deal-box-tag">${t("dealBannerTag")}</div>
        </div>
        <div class="deal-box-grid">
          <div class="deal-cta">
            <strong>${t("shirtDealTitle")}</strong>
            <small>${t("shirtDealText")}</small>
            <button class="btn btn-primary" type="button" onclick="showDealCollection('shirts')">${t("shirtDealButton")}</button>
            <div class="deal-hint">${shirtDealProducts.length} ${t("dealItemsReady")}</div>
          </div>
          <div class="deal-cta">
            <strong>${t("dressDealTitle")}</strong>
            <small>${t("dressDealText")}</small>
            <button class="btn btn-primary" type="button" onclick="showDealCollection('dresses')">${t("dressDealButton")}</button>
            <div class="deal-hint">${dressDealProducts.length} ${t("dealItemsReady")}</div>
          </div>
          <div class="deal-cta">
            <strong>${t("pantsDealTitle")}</strong>
            <small>${t("pantsDealText")}</small>
            <button class="btn btn-primary" type="button" onclick="showDealCollection('pants')">${t("pantsDealButton")}</button>
            <div class="deal-hint">${pantsDealProducts.length} ${t("dealItemsReady")}</div>
          </div>
        </div>
      `;
    }

    function showDealCollection(type){
      const mainMap = { shirts: "tops", dresses: "dresses", pants: "bottoms" };
      selectedMainCategory = mainMap[type] || "all";
      selectedSubcategories = [];
      newOnly = false;
      selectedSizes = [];
      currentSort = "featured";
      saleOnly = false;
      activeDealCollection = "";
      activeDealPreview = "";

      if(type === "shirts"){
        selectedSubcategories = ["tshirts","longshirts"];
        activeDealCollection = "tshirt-200";
        activeDealPreview = "tshirt-200";
      }
      if(type === "dresses"){
        activeDealCollection = "dress-300";
        activeDealPreview = "dress-300";
      }
      if(type === "pants"){
        selectedSubcategories = ["skinnyjeans","widejeans","classicjeans","shorts"];
        activeDealCollection = "pants-300";
        activeDealPreview = "pants-300";
      }

      const dealOnlyItems = products.filter(p => p.type === "clothing" && p.dealGroup === activeDealCollection);
      if(!dealOnlyItems.length){
        activeDealCollection = "";
        activeDealPreview = "";
      }

      document.querySelectorAll("#mainCategoryFilters .filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.main === selectedMainCategory);
      });
      document.getElementById("saleToggle").classList.remove("active");
      document.getElementById("newToggle").classList.remove("active");
      document.querySelectorAll("#sizeFilters .size-chip").forEach(btn => btn.classList.remove("active"));
      document.getElementById("searchInput").value = "";
      document.getElementById("sortSelect").value = "featured";

      renderSubFilters();
      document.querySelectorAll("#subFilterWrap .sub-btn").forEach(btn => {
        btn.classList.toggle("active", selectedSubcategories.includes(btn.dataset.sub));
      });
      currentPage = 1;
      renderProducts();
      scrollToDealResults();
    }

    function getPagedProducts(items){
      const totalPages = Math.max(1, Math.ceil(items.length / PRODUCTS_PER_PAGE));
      if(currentPage > totalPages) currentPage = totalPages;
      if(currentPage < 1) currentPage = 1;
      const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
      return {
        totalPages,
        items: items.slice(start, start + PRODUCTS_PER_PAGE)
      };
    }

    function scrollToDealResults(){
      const target = document.getElementById("productGrid") || document.getElementById("shop");
      if(!target) return;
      const headerOffset = window.innerWidth <= 900 ? 76 : 112;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({top:Math.max(0, top), behavior:"smooth"});
    }


    function addToCart(id, fromQuickView = false){
      const item = products.find(p => p.id === id);
      if(!item) return;

      if(getVariantList(item).length && !selectedProductColors[id]){
        alert(t('chooseColorFirst'));
        return;
      }

      const chosenSize = selectedProductSizes[id];
      const chosenColor = selectedProductColors[id] || '';
      if(!chosenSize){
        alert(getChooseSizeText());
        return;
      }

      const stockMap = getStockMap(item);
      if(!stockMap || !stockMap[chosenSize] || stockMap[chosenSize] <= 0){
        alert(getSoldOutText());
        return;
      }

      stockMap[chosenSize]--;

      cart.push({
        ...item,
        chosenSize,
        chosenColor,
        displayImage:getPrimaryImage(item)
      });

      updateCart();
      renderProducts();
      renderAccessories();
      if(fromQuickView) closeQuickView();
      openCart();
    }

    function removeFromCart(index){
      const removed = cart[index];
      if(removed && removed.chosenSize){
        const original = products.find(p => p.id === removed.id);
        if(original){
          if(removed.chosenColor && getVariantList(original).length){
            const variant = getVariantList(original).find(v => v.key === removed.chosenColor);
            if(variant && variant.stock && Object.prototype.hasOwnProperty.call(variant.stock, removed.chosenSize)){
              variant.stock[removed.chosenSize]++;
            }
          } else if(original.stock && Object.prototype.hasOwnProperty.call(original.stock, removed.chosenSize)){
            original.stock[removed.chosenSize]++;
          }
        }
      }
      cart.splice(index, 1);
      updateCart();
      renderProducts();
      renderAccessories();
    }

    function removeCartGroupItem(id, size, color){
      const idx = cart.findIndex(item => item.id === id && (item.chosenSize || "One Size") === size && ((item.chosenColor || '') === (color || '')));
      if(idx !== -1) removeFromCart(idx);
    }



    function toggleCartInfo(){
      const box = document.getElementById('cartExtraInfo');
      const arrow = document.getElementById('cartInfoArrow');
      if(!box) return;
      box.classList.add('open');
      if(arrow) arrow.textContent = '−';
    }

    function setPaymentMethod(method){
      paymentMethod = method;
      document.querySelectorAll('.pay-option').forEach(option => {
        const input = option.querySelector('input');
        option.classList.toggle('active', input && input.value === method);
      });
      const textEl = document.getElementById('paymentMethodText');
      if(textEl){
        textEl.textContent = method === 'visa' ? t('payVisa') : method === 'bit' ? t('payBit') : t('payCash');
      }
      const helpEl = document.getElementById('checkoutHelp');
      if(helpEl){
        helpEl.textContent = method === 'visa' ? t('visaHelp') : method === 'bit' ? t('bitHelp') : t('cashHelp');
      }
      const visaBtn = document.getElementById('fakeVisaBtn');
      const whatsappBtn = document.getElementById('whatsappOrderBtn');
      const ownerHelpEl = document.getElementById('ownerNotifyHelp');
      if(visaBtn){
        visaBtn.style.display = method === 'visa' ? 'inline-flex' : 'none';
      }
      if(whatsappBtn){
        whatsappBtn.style.display = method === 'visa' ? 'none' : 'inline-flex';
      }
      if(ownerHelpEl){
        ownerHelpEl.style.display = method === 'visa' ? 'none' : 'block';
      }
      updateCart();
    }

    function handleVisaCheckout(){
      if(cart.length === 0){
        alert(t('emptyCart'));
        return;
      }
      alert(t('visaHelp'));
    }


    

function updateCart(){
      const cartCountEl = document.getElementById("cartCount");
      const cartItems = document.getElementById("cartItems");
      const cartItemAmount = document.getElementById("cartItemAmount");
      const deliveryFeeEl = document.getElementById("deliveryFee");
      const whatsappBtn = document.getElementById("whatsappOrderBtn");
      const visaBtn = document.getElementById("fakeVisaBtn");
      const paymentMethodText = document.getElementById("paymentMethodText");
      const totalEl = document.getElementById("totalPrice");
      const realPriceEl = document.getElementById("cartRealPrice");
      const salePriceEl = document.getElementById("cartSalePrice");
      const subtotalEl = document.getElementById("cartSubtotal");
      const savingsEl = document.getElementById("cartSavings");
      const dealsEl = document.getElementById("cartDeals");

      if(cartCountEl){
        cartCountEl.textContent = cart.length;
        cartCountEl.style.display = cart.length > 0 ? "inline-flex" : "none";
      }

      if(cart.length === 0){
        if(cartItems) cartItems.innerHTML = `<div class="empty">${t("emptyCart")}</div>`;
        if(cartItemAmount) cartItemAmount.textContent = "0";
        if(realPriceEl) realPriceEl.textContent = currency(0);
        if(salePriceEl) salePriceEl.textContent = currency(0);
        if(subtotalEl) subtotalEl.textContent = currency(0);
        if(savingsEl) savingsEl.textContent = currency(0);
        if(deliveryFeeEl) deliveryFeeEl.textContent = currency(DELIVERY_FEE);
        if(totalEl) totalEl.textContent = currency(DELIVERY_FEE);
        if(dealsEl) dealsEl.innerHTML = "";
        if(whatsappBtn){
          whatsappBtn.href = "https://wa.me/972505350678";
          whatsappBtn.style.display = paymentMethod === "visa" ? "none" : "inline-flex";
        }
        if(visaBtn) visaBtn.style.display = paymentMethod === "visa" ? "inline-flex" : "none";
        if(paymentMethodText) paymentMethodText.textContent = t(paymentMethod === "visa" ? "payVisa" : paymentMethod === "bit" ? "payBit" : "payCash");
        return;
      }

      const pricing = getCartPricing();
      const subtotal = pricing.subtotal;
      const orderedGroups = [...pricing.groups].reverse();

      const itemCards = orderedGroups.map(group => `
        <div class="cart-item">
          <div class="cart-item-main">
            <div class="cart-thumb" style="background-image:url('${group.displayImage || ""}')"></div>
            <div class="cart-copy">
              <strong>${group.name}</strong>
              <small>${[getSelectedSizeLabel(group.size), group.colorLabel || ""].filter(Boolean).join(" • ")}</small>
              <small><span class="cart-qty-badge">${group.qty}</span> ${group.qty} × ${currency(group.price)} = ${currency(group.regularTotal)}</small>
              ${(group.bundleDeal || group.freeGiftQty > 0 || group.savings > 0) ? `
                <div class="cart-line-prices">
                  <span class="muted-line">${t("realPriceLabel")}: ${currency(group.regularTotal)}</span>
                  <span>${t("salePriceLabel")}: ${currency(group.finalTotal)}</span>
                </div>
              ` : ``}
              ${group.bundleDeal ? `<span class="cart-deal-note">${getBundleText({bundleDeal:group.bundleDeal})}${group.savings > 0 ? ` • ${t("bundleApplied")}` : ``}</span>` : ``}
              ${group.freeGiftQty > 0 ? `<span class="cart-gift-note">🎁 ${getGiftItemAppliedText()} × ${group.freeGiftQty}</span>` : ``}
              ${group.savings > 0 ? `<span class="cart-deal-note">${t("saleSavingsLabel")}: -${currency(group.savings)}</span>` : ``}
            </div>
          </div>
          <button class="remove-btn" onclick="removeCartGroupItem(${group.id}, '${group.size}', '${group.colorKey || ""}')">${t("remove")}</button>
        </div>
      `).join("");

      const topLabel = currentLang === "ar" ? "أحدث القطع المضافة" : currentLang === "he" ? "הפריטים האחרונים שנוספו" : currentLang === "ru" ? "Последние добавленные товары" : "Latest added items";

      if(cartItems){
        cartItems.innerHTML = `
          <div class="cart-intro"><strong>${t("cartItemsWord")}</strong><span>${cart.length}</span></div>
          <div class="cart-selected-strip">
            <div class="cart-selected-title">${topLabel}</div>
          </div>
          <div class="cart-stream">${itemCards}</div>
        `;
      }

      const total = subtotal + DELIVERY_FEE;
      if(cartItemAmount) cartItemAmount.textContent = String(cart.length);
      if(realPriceEl) realPriceEl.textContent = currency(pricing.regularSubtotal);
      if(salePriceEl) salePriceEl.textContent = currency(pricing.subtotal);
      if(subtotalEl) subtotalEl.textContent = currency(pricing.subtotal);
      if(savingsEl) savingsEl.textContent = pricing.savings ? `-${currency(pricing.savings)}` : currency(0);
      if(deliveryFeeEl) deliveryFeeEl.textContent = currency(DELIVERY_FEE);
      if(totalEl) totalEl.textContent = currency(total);
      if(paymentMethodText) paymentMethodText.textContent = t(paymentMethod === "visa" ? "payVisa" : paymentMethod === "bit" ? "payBit" : "payCash");
      if(whatsappBtn) whatsappBtn.style.display = paymentMethod === "visa" ? "none" : "inline-flex";
      if(visaBtn) visaBtn.style.display = paymentMethod === "visa" ? "inline-flex" : "none";

      if(dealsEl){
        const dealLines = [];
        pricing.dealSummaries.filter(summary => summary.type === "bundle").forEach(summary => {
          dealLines.push(`<div class="cart-deal-line">${summary.qty} • ${currency(summary.total)} • ${t("bundleApplied")}</div>`);
        });
        if(pricing.giftStatus.freeGiftCount > 0){
          dealLines.push(`<div class="cart-deal-line gift-line">🎁 ${getGiftAppliedText(pricing.giftStatus.freeGiftCount)} • ${getGiftChoiceLineText()}</div>`);
        }else if(pricing.giftStatus.unlockedGiftCount > 0){
          dealLines.push(`<div class="cart-deal-line gift-line">🎁 ${getGiftUnlockedText(pricing.giftStatus.unlockedGiftCount)}</div>`);
        }
        dealsEl.innerHTML = dealLines.join("");
      }

      const paymentLabel = paymentMethod === "visa" ? t("payVisa") : paymentMethod === "bit" ? t("payBit") : t("payCash");
      const lines = orderedGroups.map((group, i) => {
        const variantLine = [getLocalizedSize(group.size), group.colorLabel || t("noColorShort")].filter(Boolean).join(" • ");
        const saleLine = group.savings > 0
          ? `${t("realPriceLabel")}: ${currency(group.regularTotal)} | ${t("salePriceLabel")}: ${currency(group.finalTotal)} | ${t("saleSavingsLabel")}: -${currency(group.savings)}`
          : `${t("salePriceLabel")}: ${currency(group.regularTotal)}`;
        const photoLine = group.displayImage ? `📷 Photo: ${group.displayImage}` : "";
        return [
          `${i+1}. ${group.name}`,
          `   ${variantLine} | Qty: ${group.qty}`,
          `   ${saleLine}`,
          photoLine
        ].filter(Boolean).join("\n");
      });

      if(pricing.giftStatus.freeGiftCount > 0){
        lines.push(`🎁 ${getGiftAppliedText(pricing.giftStatus.freeGiftCount)} — ${getGiftChoiceLineText()}`);
      }else if(pricing.giftStatus.unlockedGiftCount > 0){
        lines.push(`🎁 ${getGiftUnlockedText(pricing.giftStatus.unlockedGiftCount)}`);
      }

      if(whatsappBtn){
        const waText = [
          t("waOrderTitle"),
          "",
          ...lines,
          "",
          `${t("realPriceLabel")}: ${currency(pricing.regularSubtotal)}`,
          `${t("salePriceLabel")}: ${currency(pricing.subtotal)}`,
          `${t("saleSavingsLabel")}: -${currency(pricing.savings)}`,
          `${t("deliveryLabel")}: ${currency(DELIVERY_FEE)}`,
          `${t("totalWord")}: ${currency(total)}`,
          `${t("paymentMethodLabel")}: ${paymentLabel}`
        ].join("\n\n");
        whatsappBtn.href = `https://wa.me/972505350678?text=${encodeURIComponent(waText)}`;
      }
    }


    function openCart(){
      const drawer = document.getElementById("cartDrawer");
      const overlay = document.getElementById("overlay");
      drawer.classList.add("open");
      drawer.setAttribute("aria-hidden", "false");
      overlay.classList.add("show");
      document.body.style.overflow = 'hidden';
    }

    function closeCart(){
      const drawer = document.getElementById("cartDrawer");
      const overlay = document.getElementById("overlay");
      drawer.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
      overlay.classList.remove("show");
      if(!document.getElementById('productModal').classList.contains('open')){
        document.body.style.overflow = '';
      }
    }

    function updateSelectOptions(){
      const sort = document.getElementById("sortSelect");
      sort.options[0].text = t("sortFeatured");
      sort.options[1].text = t("sortLow");
      sort.options[2].text = t("sortHigh");
    }

    function setLanguage(lang){
      currentLang = lang;
      const pack = i18n[lang];
      document.documentElement.lang = lang;
      document.documentElement.dir = pack.dir;
      document.getElementById("langSelect").value = lang;

      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if(pack[key]) el.textContent = pack[key];
      });

      document.getElementById("searchInput").placeholder = pack.searchPlaceholder;
      document.getElementById("gateEmail").placeholder = emailPlaceholders[lang];
      document.getElementById("newsletterEmail").placeholder = emailPlaceholders[lang];
      updateSelectOptions();
      renderSubFilters();
      document.querySelectorAll("#subFilterWrap .sub-btn").forEach(btn => {
        btn.classList.toggle("active", selectedSubcategories.includes(btn.dataset.sub));
      });
      currentPage = 1;
      renderProducts();
      renderAccessories();
      updateCart();
      setPaymentMethod(paymentMethod);
      renderBundleDealBox();
      renderActiveFilters();
      if(currentQuickProductId) renderQuickView();
    }

    document.getElementById("mainCategoryFilters").addEventListener("click", function(e){
      const btn = e.target.closest(".filter-btn");
      if(!btn) return;
      e.preventDefault();
      const nextMain = btn.dataset.main;
      if(selectedMainCategory !== nextMain){
        selectedSubcategories = [];
      }
      selectedMainCategory = nextMain;
      activeDealCollection = "";
      activeDealPreview = "";
      document.querySelectorAll("#mainCategoryFilters .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSubFilters();
      currentPage = 1;
      renderProducts();
    });

    document.getElementById("subFilterWrap").addEventListener("click", function(e){
      const btn = e.target.closest(".sub-btn");
      if(!btn) return;
      e.preventDefault();
      const sub = btn.dataset.sub;
      if(selectedSubcategories.includes(sub)){
        selectedSubcategories = selectedSubcategories.filter(s => s !== sub);
      } else {
        selectedSubcategories.push(sub);
      }
      renderSubFilters();
      currentPage = 1;
      renderProducts();
    });

    document.getElementById("saleToggle").addEventListener("click", function(e){
      e.preventDefault();
      activeDealCollection = "";
      activeDealPreview = "";
      saleOnly = !saleOnly;
      this.classList.toggle("active");
      currentPage = 1;
      renderProducts();
    });

    document.getElementById("newToggle").addEventListener("click", function(e){
      e.preventDefault();
      activeDealCollection = "";
      activeDealPreview = "";
      newOnly = !newOnly;
      this.classList.toggle("active");
      currentPage = 1;
      renderProducts();
    });

    document.getElementById("sizeFilters").addEventListener("click", function(e){
      const btn = e.target.closest(".size-chip");
      if(!btn) return;
      e.preventDefault();
      const size = btn.dataset.size;
      if(selectedSizes.includes(size)){
        selectedSizes = selectedSizes.filter(s => s !== size);
        btn.classList.remove("active");
      } else {
        selectedSizes.push(size);
        btn.classList.add("active");
      }
      renderProducts();
    });

    document.getElementById("accessoryTabs").addEventListener("click", function(e){
      const btn = e.target.closest(".accessory-tab");
      if(!btn) return;
      e.preventDefault();
      selectedAccessory = btn.dataset.acc;
      document.querySelectorAll("#accessoryTabs .accessory-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderAccessories();
    });

    document.getElementById("searchInput").addEventListener("input", function(){ currentPage = 1; renderProducts(); });

    document.getElementById("sortSelect").addEventListener("change", function(){
      currentSort = this.value;
      currentPage = 1;
      renderProducts();
    });

    hydrateProductGalleries();

// Initialize language from localStorage or default to "ar"
let bootLang = "ar";
try {
  const saved = localStorage.getItem("poster-fashion-lang");
  if (saved && i18n[saved]) bootLang = saved;
} catch (e) {}

// Set language FIRST, before any rendering
currentLang = bootLang;
document.documentElement.lang = bootLang;
document.documentElement.dir = i18n[bootLang].dir;

// Update ALL data-i18n elements immediately
document.querySelectorAll("[data-i18n]").forEach(el => {
  const key = el.getAttribute("data-i18n");
  if (i18n[bootLang][key]) el.textContent = i18n[bootLang][key];
});

// Set input placeholders
document.getElementById("searchInput").placeholder = i18n[bootLang].searchPlaceholder;
document.getElementById("langSelect").value = bootLang;

// NOW render everything with correct language
normalizeProductImages();
renderSubFilters();
currentPage = 1;
renderProducts();
renderAccessories();
updateCart();
setPaymentMethod("visa");
renderBundleDealBox();
renderActiveFilters();

// Event listener for language changes
document.getElementById("langSelect").addEventListener("change", function(e) {
  const newLang = e.target.value;
  currentLang = newLang;

  // Save to localStorage
  try {
    localStorage.setItem("poster-fashion-lang", newLang);
  } catch (err) {}

  // Update HTML attributes
  document.documentElement.lang = newLang;
  document.documentElement.dir = i18n[newLang].dir;

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[newLang][key]) el.textContent = i18n[newLang][key];
  });

  // Update placeholders
  document.getElementById("searchInput").placeholder = i18n[newLang].searchPlaceholder;

  // Re-render all content
  updateSelectOptions();
  renderSubFilters();
  document.querySelectorAll("#subFilterWrap .sub-btn").forEach(btn => {
    btn.classList.toggle("active", selectedSubcategories.includes(btn.dataset.sub));
  });
  currentPage = 1;
  renderProducts();
  renderAccessories();
  updateCart();
  setPaymentMethod(paymentMethod);
  renderBundleDealBox();
  renderActiveFilters();
  if (currentQuickProductId) renderQuickView();
});

document.addEventListener("keydown", function(e){
  if(e.key === "Escape") closeQuickView();
});

function openGate(){
  const gate = document.getElementById("emailGate");
  if(gate) gate.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function(){
  setTimeout(openGate, 1200);
});

window.addEventListener("load", openGate);

  


/* ===== POSTER MERGED MOBILE FIX v3 ===== */
(function(){
  function byId(id){ return document.getElementById(id); }

  function bindCartButton(){
    const btn = document.querySelector('.cart-btn');
    if(!btn) return;
    btn.setAttribute('type','button');
    btn.onclick = function(e){
      e.preventDefault();
      e.stopPropagation();
      if(typeof openCart === 'function') openCart();
    };
  }

  function fixArabic(){
    if(typeof i18n === 'undefined' || !i18n.ar) return;
    i18n.ar.filterOuterwear = "جاكيتات";
    i18n.ar.shopSub = "عرض أوضح للموبايل، وكل صف فيه قطعتين بشكل مرتب.";
    i18n.ar.cartWord = "السلة";
  }

  function syncLanguageControl(){
    const select = byId('langSelect');
    if(!select) return;
    if(typeof currentLang !== 'undefined' && currentLang){
      select.value = currentLang;
      select.style.display = 'block';
      select.hidden = false;
    }
  }

  function safeRender(){
    try{
      if(typeof renderProducts === 'function') renderProducts();
      if(typeof renderAccessories === 'function') renderAccessories();
      if(typeof updateCart === 'function') updateCart();
      if(typeof renderActiveFilters === 'function') renderActiveFilters();
    }catch(err){}
  }

  document.addEventListener('DOMContentLoaded', function(){
    fixArabic();
    bindCartButton();
    syncLanguageControl();
    safeRender();
  });

  window.addEventListener('load', function(){
    bindCartButton();
    syncLanguageControl();
  });
})();

/* ===== POSTER PROFESSIONAL ACTIONS FIX ===== */
(function(){
  function bindCartButton(){
    const btn = document.querySelector('.cart-btn');
    if(!btn) return;
    btn.setAttribute('type','button');
    btn.onclick = function(e){
      e.preventDefault();
      e.stopPropagation();
      if(typeof openCart === 'function') openCart();
    };
  }

  function syncLanguageControl(){
    const select = document.getElementById('langSelect');
    if(!select) return;
    if(typeof currentLang !== 'undefined' && currentLang){
      select.value = currentLang;
    }
  }

  function refreshLayout(){
    bindCartButton();
    syncLanguageControl();
    try{
      if(typeof renderProducts === 'function') renderProducts();
      if(typeof renderAccessories === 'function') renderAccessories();
      if(typeof updateCart === 'function') updateCart();
    }catch(e){}
  }

  document.addEventListener('DOMContentLoaded', refreshLayout);
  window.addEventListener('load', refreshLayout);
  window.addEventListener('resize', refreshLayout);
})();


/* ===== CLEAN HOTFIX OVERRIDES ===== */

function renderBundleDealBox(){
  const box = document.getElementById("bundleDealBox");
  if(!box) return;

  const shirtDealProducts = products.filter(p => p.type === "clothing" && p.bundleDeal && p.dealGroup === "tshirt-200");
  const dressDealProducts = products.filter(p => p.type === "clothing" && p.bundleDeal && p.dealGroup === "dress-300");
  const pantsDealProducts = products.filter(p => p.type === "clothing" && p.bundleDeal && p.dealGroup === "pants-300");
  const comboProducts = products.filter(p => p.type === "clothing" && (["tshirts","longshirts","skinnyjeans","widejeans","classicjeans","shorts"].includes(p.subCategory)));

  box.style.display = "grid";
  box.innerHTML = `
    <div class="deal-box-head">
      <div class="deal-box-copy">
        <h3>${t("dealBannerTitle")}</h3>
        <p>${t("dealBannerText")}</p>
      </div>
      <div class="deal-box-tag">${t("dealBannerTag")}</div>
    </div>
    <div class="deal-box-grid deal-box-grid--four">
      <div class="deal-cta">
        <strong>${t("shirtDealTitle")}</strong>
        <small>${t("shirtDealText")}</small>
        <button class="btn btn-primary" type="button" onclick="showDealCollection('shirts')">${t("shirtDealButton")}</button>
        <div class="deal-hint">${shirtDealProducts.length} ${t("dealItemsReady")}</div>
      </div>
      <div class="deal-cta">
        <strong>${t("dressDealTitle")}</strong>
        <small>${t("dressDealText")}</small>
        <button class="btn btn-primary" type="button" onclick="showDealCollection('dresses')">${t("dressDealButton")}</button>
        <div class="deal-hint">${dressDealProducts.length} ${t("dealItemsReady")}</div>
      </div>
      <div class="deal-cta">
        <strong>${t("pantsDealTitle")}</strong>
        <small>${t("pantsDealText")}</small>
        <button class="btn btn-primary" type="button" onclick="showDealCollection('pants')">${t("pantsDealButton")}</button>
        <div class="deal-hint">${pantsDealProducts.length} ${t("dealItemsReady")}</div>
      </div>
      <div class="deal-cta combo-deal-cta combo-deal-cta--pro">
        <div class="gift-ribbon">🎁 ${currentLang === 'ar' ? 'هدية مجانية' : currentLang === 'he' ? 'מתנה חינם' : currentLang === 'ru' ? 'Бесплатный подарок' : 'Free gift'}</div>
        <strong>${currentLang === 'ar' ? 'قميص + بنطلون = هدية واحدة مجاناً' : currentLang === 'he' ? 'חולצה + מכנס = מתנה אחת חינם' : currentLang === 'ru' ? 'Рубашка + брюки = 1 подарок бесплатно' : '1 shirt + 1 pant = 1 free gift'}</strong>
        <small>${currentLang === 'ar' ? 'لكل طقم مشارك: اختاري إمّا حلق أو خاتم واحد مجاناً — وليس الاثنين معاً.' : currentLang === 'he' ? 'על כל סט משתתף: בוחרים או עגיל אחד או טבעת אחת חינם — לא שניהם יחד.' : currentLang === 'ru' ? 'За каждую подходящую пару: выберите либо одно кольцо, либо одни серьги бесплатно — не оба сразу.' : 'For each eligible pair, choose either 1 free ring or 1 free earring — not both together.'}</small>
        <div class="combo-deal-points">
          <span>${currentLang === 'ar' ? 'قميص' : currentLang === 'he' ? 'חולצה' : currentLang === 'ru' ? 'Рубашка' : '1 shirt'}</span>
          <span>+</span>
          <span>${currentLang === 'ar' ? 'بنطلون' : currentLang === 'he' ? 'מכנס' : currentLang === 'ru' ? 'Брюки' : '1 pant'}</span>
          <span>=</span>
          <span>${currentLang === 'ar' ? 'حلق أو خاتم مجاناً' : currentLang === 'he' ? 'עגיל או טבעת חינם' : currentLang === 'ru' ? 'Серьги или кольцо бесплатно' : 'free ring or earring'}</span>
        </div>
        <button class="btn btn-primary" type="button" onclick="showDealCollection('giftcombo')">${currentLang === 'ar' ? 'افتحي عرض الهدية' : currentLang === 'he' ? 'פתחי את מבצע המתנה' : currentLang === 'ru' ? 'Открыть подарочную акцию' : 'Open gift deal'}</button>
        <div class="deal-hint">${comboProducts.length} ${t("dealItemsReady")}</div>
      </div>
    </div>
  `;
}


function showDealCollection(type){
  selectedSubcategories = [];
  newOnly = false;
  selectedSizes = [];
  currentSort = "featured";
  saleOnly = false;
  activeDealCollection = "";
  activeDealPreview = "";

  if(type === "shirts"){
    selectedMainCategory = "tops";
    selectedSubcategories = ["tshirts","longshirts"];
    activeDealCollection = "tshirt-200";
    activeDealPreview = "tshirt-200";
  } else if(type === "dresses"){
    selectedMainCategory = "dresses";
    activeDealCollection = "dress-300";
    activeDealPreview = "dress-300";
  } else if(type === "pants"){
    selectedMainCategory = "bottoms";
    selectedSubcategories = ["skinnyjeans","widejeans","classicjeans","shorts"];
    activeDealCollection = "pants-300";
    activeDealPreview = "pants-300";
  } else if(type === "giftcombo"){
    selectedMainCategory = "all";
    selectedSubcategories = ["tshirts","longshirts","skinnyjeans","widejeans","classicjeans","shorts"];
    activeDealCollection = "";
    activeDealPreview = "";
  } else {
    selectedMainCategory = "all";
  }

  document.querySelectorAll("#mainCategoryFilters .filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.main === selectedMainCategory);
  });
  const saleToggle=document.getElementById("saleToggle"); if(saleToggle) saleToggle.classList.remove("active");
  const newToggle=document.getElementById("newToggle"); if(newToggle) newToggle.classList.remove("active");
  document.querySelectorAll("#sizeFilters .size-chip").forEach(btn => btn.classList.remove("active"));
  const search=document.getElementById("searchInput"); if(search) search.value = "";
  const sort=document.getElementById("sortSelect"); if(sort) sort.value = "featured";

  renderSubFilters();
  document.querySelectorAll("#subFilterWrap .sub-btn").forEach(btn => {
    btn.classList.toggle("active", selectedSubcategories.includes(btn.dataset.sub));
  });
  currentPage = 1;
  renderProducts();
  scrollToDealResults();
}

function renderPagination(totalItems){
  const wrap = document.getElementById("paginationWrap");
  if(!wrap) return;
  const totalPages = Math.max(1, Math.ceil(totalItems / PRODUCTS_PER_PAGE));
  if(totalPages <= 1){
    wrap.innerHTML = "";
    return;
  }
  const prevText = currentLang === "ar" ? "السابق" : currentLang === "he" ? "הקודם" : currentLang === "ru" ? "Назад" : "Prev";
  const nextText = currentLang === "ar" ? "التالي" : currentLang === "he" ? "הבא" : currentLang === "ru" ? "Далее" : "Next";
  const slideWord = currentLang === "ar" ? "شريحة" : currentLang === "he" ? "שקופית" : currentLang === "ru" ? "Слайд" : "Slide";
  let html = `<button class="page-btn" type="button" onclick="changePage(${currentPage - 1})" ${currentPage===1 ? 'disabled' : ''}>${prevText}</button>`;
  for(let i=1;i<=totalPages;i++){
    html += `<button class="page-btn ${i===currentPage ? 'active' : ''}" type="button" onclick="changePage(${i})">${slideWord} ${i}</button>`;
  }
  html += `<button class="page-btn" type="button" onclick="changePage(${currentPage + 1})" ${currentPage===totalPages ? 'disabled' : ''}>${nextText}</button>`;
  wrap.innerHTML = html;
}

function changePage(page){
  const totalItems = sortProducts(getFilteredClothing()).length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PRODUCTS_PER_PAGE));
  currentPage = Math.max(1, Math.min(page, totalPages));
  renderProducts();
  scrollToDealResults();
}

function renderProducts(){
  const grid = document.getElementById("productGrid");
  const count = document.getElementById("resultsCount");
  if(!grid) return;
  const shown = sortProducts(getFilteredClothing());
  const paged = getPagedProducts(shown);
  renderBundleDealBox();
  if(count) count.textContent = shown.length;
  renderActiveFilters();
  renderPagination(shown.length);

  if(!shown.length){
    grid.innerHTML = `<div class="empty" style="grid-column:1/-1">${t("noProducts")}</div>`;
    return;
  }

  grid.innerHTML = paged.items.map(p => {
    const preview = getPrimaryImage(p);
    return `
      <article class="card quick-card-click card-photo-only" onclick="openQuickView(${p.id})">
        <div class="card-media" style="background-image:url('${preview}')">${getBadge(p)}</div>
        <div class="card-body compact-card-body">
          <div class="price-row compact-price-row">
            <div class="price">${currency(p.price)}${p.oldPrice ? `<span class="old-price">${currency(p.oldPrice)}</span>` : ``}</div>
          </div>
          ${p.bundleDeal ? `<div class="deal-note">${getBundleText(p)}</div>` : ``}
        </div>
      </article>`;
  }).join("");
}


function renderAccessories(){
  const grid = document.getElementById("accessoryGrid");
  if(!grid) return;
  const shown = getFilteredAccessories();
  if(!shown.length){
    grid.innerHTML = `<div class="empty" style="grid-column:1/-1">${t("noAccessories")}</div>`;
    return;
  }
  grid.innerHTML = shown.map(p => {
    const preview = getPrimaryImage(p);
    const giftNote = ["rings","earrings"].includes(p.category)
      ? `<div class="accessory-gift-note">🎁 ${currentLang === 'ar' ? 'مجاني مع قميص + بنطلون' : currentLang === 'he' ? 'חינם עם חולצה + מכנס' : currentLang === 'ru' ? 'Бесплатно с рубашкой + брюками' : 'Free with shirt + pant'}</div>`
      : ``;
    return `
      <article class="accessory-card quick-card-click card-photo-only" onclick="openQuickView(${p.id})">
        <div class="accessory-media" style="background-image:url('${preview}')">
          ${getBadge(p)}
          ${["rings","earrings"].includes(p.category) ? `<div class="gift-badge">🎁 ${currentLang === 'ar' ? 'هدية' : currentLang === 'he' ? 'מתנה' : currentLang === 'ru' ? 'Подарок' : 'Gift'}</div>` : ``}
        </div>
        <div class="accessory-body compact-card-body">
          <div class="price-row compact-price-row">
            <div class="price">${currency(p.price)}${p.oldPrice ? `<span class="old-price">${currency(p.oldPrice)}</span>` : ``}</div>
          </div>
          ${giftNote}
          ${p.bundleDeal ? `<div class="deal-note">${getBundleText(p)}</div>` : ``}
        </div>
      </article>`;
  }).join("");
}


(function(){
  try{
    renderSubFilters();
    renderProducts();
    renderAccessories();
    updateCart();
    setPaymentMethod(paymentMethod || 'visa');
  }catch(e){
    console.error('Clean hotfix init error:', e);
  }
})();
