

export const filterData = [{ name: "Rápida", image: require('../assets/images/hotdog.png'), id: "0" },
{ name: "Bebidas", image: require('../assets/images/bebidas.png'), id: "1" },
{ name: "Del Mar", image: require('../assets/images/sushi.png'), id: "2" },
{ name: "Postres", image: require('../assets/images/helado.png'), id: "3" },
{ name: "Mercado", image: require('../assets/images/market.png'), id: "4" },
{ name: "Farmacia", image: require('../assets/images/farmacia.png'), id: "5" },
];

export const filterData2 = [{ name: "Rápida", image: 'https://img.freepik.com/foto-gratis/hamburguesa-ternera-plancha-patatas-fritas-queso-tomate-ia-generativa_188544-8466.jpg?w=1800&t=st=1701806512~exp=1701807112~hmac=60e7aad05a3b1ca758075d4be69db21a524b61ea609372c38e85136103ad17b1', id: "0" },
{ name: "Bebidas", image: 'https://img.freepik.com/foto-gratis/bebidas-gaseosas-coloridas-macro-disparo_53876-32239.jpg?w=1800&t=st=1701806647~exp=1701807247~hmac=7ef628972c4eaea017de0f7b637b1e3add99654af1e61284607a50a092ab0ad4', id: "1" },
{ name: "Del mar", image: "https://img.freepik.com/foto-gratis/vista-superior-apetitosa-mezcla-mariscos-mesa-madera_181624-428010jpg?w=1380&t=st=1701806700~exp=1701807300~hmac=2e4e47f1c12c88c5b8069d8b3b9bbfd0a3d82e785bae79180c8e8b1b3008ecae", id: "2" },
{ name: "Postres", image: "https://img.freepik.com/foto-gratis/juego-te-nueces-postre-plato-sobre-fondo-blanco-madera-vista-lateral_176474-38410jpg?w=1380&t=st=1701806766~exp=1701807366~hmac=888baacdcf3d34a311efcf78030b83611e96a612baa6221ce2ad755cc4103125", id: "3" },
{ name: "Mercado", image: "https://img.freepik.com/foto-gratis/vista-cerca-carro-compra-sobrecargado-comida-mientras-que-fondo-persona-femenina-elige-productos_342744-11310jpg?w=1800&t=st=1701806817~exp=1701807417~hmac=68700eed7eac8997cf882d51d9cf947543f254e6a9cad222ee96af5e855c3de0", id: "4" },
{ name: "Farmacia", image: "https://img.freepik.com/foto-gratis/tratamiento-medico-pastillas_23-2148108921.jpg?w=900&t=st=1701806898~exp=1701807498~hmac=6481c947efae4c726a32a6da03d685aa81992a23ffb67d6153239e45ede42f40", id: "5" },
];

export const foodCartData = [
    {
        restaurantName: "Mc Donald's - Sand Cart", farAway: "21.2", businessAddress: "Playa La Herradura",
        images: 'https://z-p3-scontent.flsc2-1.fna.fbcdn.net/v/t39.30808-6/241347319_4255460921212445_7547948780137886065_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEOEK6a56e9aq_PkRyb58E5LhPDgklGIlYuE8OCSUYiVm7RyVloH7pSsPrimbyO6yY&_nc_ohc=eTIVSXOXPIMAX8QxAU6&_nc_zt=23&_nc_ht=z-p3-scontent.flsc2-1.fna&oh=00_AfCnsW57sed6RpSmQtYxR1rVLU5Ej2qDpIsudJtc-j9raw&oe=656F038A',
        averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1888612, lng: 210246325 },
        discount: 10, deliveryTime: 15, collectTime: 5, foodType: "Hamburguesas, Papas Fritas, Nuggets...",
        productData: [{ name: "Hamburguesa Marina", price: 6000, image: 'https://i.dailymail.co.uk/1s/2022/01/10/23/52772527-0-image-a-112_1641855941475.jpg' },
        { name: "Trilogía", price: 18000, image: 'https://www.latercera.com/resizer/7Ul74j33VrCiwJCXriZTj1EBbf4=/arc-anglerfish-arc2-prod-copesa/public/SX7ECHXOOBH75GJGKK4IQYSGPE.jpg' }], id: 0
    },

    {
        restaurantName: "El Oriente - Beach Flavors", farAway: "12.7", businessAddress: "Playa La Herradura",
        images: 'https://z-p3-scontent.flsc2-1.fna.fbcdn.net/v/t39.30808-6/341092279_594863352570120_8763751210877218608_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFpNBeYp3Drs_BwulBIJvIIcyo9UysmloRzKj1TKyaWhGmMZswdtSWbVrKVCttpdAo&_nc_ohc=arc4G_m_N6oAX_j_Zrh&_nc_zt=23&_nc_ht=z-p3-scontent.flsc2-1.fna&oh=00_AfBYhQaXRxY9sfSVSVSZyL1poJayy7n25dAycO5cLShjCA&oe=656E3381',
        averageReview: 4.9, numberOfReview: 306, coordinates: { lat: -26.1891648, lng: 2102441808 },
        discount: 20, deliveryTime: 30, collectTime: 10, foodType: "Completos, Sandwiches, Limonadas... ",
        productData: [{ name: "Completo Marino", price: 3000, image: 'https://completosoriente.cl/wp-content/uploads/2022/09/oriente22.jpg' },
        { name: "Sandwich Marino", price: 3500, image: 'https://completosoriente.cl/wp-content/uploads/2022/09/oriente14jpg' }], id: 1
    },

    {
        restaurantName: "Sarevi Heladería", farAway: "5", businessAddress: "Los Pastores 51, La Herradura",
        images: 'https://img.freepik.com/fotos-premium/colorida-heladeria-modernavarios-sabores-helados_636638-2607.jpg',
        coordinates: { lat: -26.1886781, lng: 210244879 }, averageReview: 5.0, numberOfReview: 1272,
        discount: 12, deliveryTime: 25, collectTime: 15, foodType: "Helados, Waffles, Confites...",
        productData: [{ name: "Waffle Marino", price: 3500, image: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/5a/5f/27/waffles-by-the-ocean.jpg' },
        { name: "Helado Marino", price: 2500, image: 'https://media.istockphoto.com/id/1075540086/es/foto/pov-de-mano-que-sostiene-un-ar%C3%A1ndano-morado-con-sabor-a-helado-en-charles-town-cornwall-en-un.jpg?s=612x612&w=0&k=20&c=EjFCgi9fv820oRyA44SrdhcWw17U0F1qvYs3gQdhzH0=' }], id: 2
    },
];

export const menuData = [

    { title: "HAMBURGUESAS", special: false, key: 0, },
    { title: "SUSHI", special: false, key: 1 },
    { title: "VEGANO", special: false, key: 2 },
    { title: "PAPAS FRITAS", special: false, key: 3 },
    { title: "CEVICHES", special: false, key: 4 },
    { title: "BEBIDAS FRÍAS", special: false, key: 5 },
    { title: "CAFÉ", special: false, key: 6 },
    { title: "MILKSHAKES", special: false, key: 7 },
    { title: "HELADOS", special: false, key: 8 },
    { title: "POSTRES", special: false, key: 9 },
    { title: "OTROS", special: false, key: 10 },

];

export const specialData = [
    { title: "OFERTA LIMITADA", key: 0 },
    { title: "BAÑO DE QUESO?", key: 1 },
];

export const menu = [
    { key: 1, title: 'Hamburguesas' },
    { key: 2, title: 'Sushi' },
    { key: 3, title: 'Vegano' },
    { key: 4, title: 'Papas fritas' },
    { key: 5, title: 'Ceviches' },
    { key: 6, title: 'Bebidas Frías' },
    { key: 7, title: 'Café' },
    { key: 8, title: 'Milkshakes' },
    { key: 9, title: 'Helados' },
    { key: 10, title: 'Postres' },
    { key: 11, title: 'Otros' },
]


export const menuDetailedData = [
    {
        meal: "Big Mac",
        price: 5000,
        image: "https://mcdonalds.es/api/cms/images/mcdonalds-es/2635e21b-9bae-4835-9efe-defc1ab25c1b_1080x943_App_Bundles_McMBM.png?auto=compress,format",
        details: "Deliciosa hamburguesa con ingredientes 100% frescos",
        preferenceTitle: ["Elige 2 agregados", "Elige el sabor de tu bebida", "Quieres agregar algo más?", "Quieres extra salsa?"],
        preferenceData: [

            [{ name: "Jalapeno", price: 1000, checked: false, id: 10 }, { name: "Salsa BBQ", price: 1075, checked: false, id: 11 }, { name: 'Salsa Tocino', price: 1999, checked: false, id: 12 },
            ],

            [{ name: "Coca Pequeña", price: 1090, checked: false, id: 13 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 14 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 15 },
            { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 16 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 17 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 18 },
            { name: 'MilkShake Mixto', price: 1495, checked: false, id: 19 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 20 },
            ],

            [{ name: "Coca Pequeña", price: 1090, checked: false, id: 21 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 22 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 23 },
            { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 24 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 25 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 26 },
            { name: 'MilkShake Mixto', price: 1495, checked: false, id: 27 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 28 }, { name: 'MilkShake de Vainilla', price: 1495, checked: false, id: 29 },
            ],

            [{ name: "Salsa Especial", price: 1090, checked: false, id: 30 }, { name: "Salsa BBQ", price: 1090, checked: false, id: 31 }, { name: 'Salsa Mostaza Miel', price: 1990, checked: false, id: 32 },
            ],

            [
                { name: "Coca Pequeña", price: 1090, checked: false, id: 33 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 34 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 35 },
                { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 36 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 37 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 38 },
                { name: 'MilkShake Mixto', price: 1495, checked: false, id: 39 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 40 }, { name: 'MilkShake de Vainilla', price: 1495, checked: false, id: 41 },
            ],
        ],
        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 0
    },

    {
        meal: "Papas Bacon Chedar",
        price: 3000,
        image: "https://mcdonalds.es/api/cms/images/mcdonalds-es/79140026-c66c-4810-a01a-24757af4b122_producto-31.png?auto=compress,format",
        details: "Deliciosas papitas bañadas en queso chedar y tocino",
        preferenceTitle: ["Elige 2 agregados", "Elige el sabor de tu bebida", "Quieres agregar algo más?", "Quieres extra salsa?"],
        preferenceData: [

            [{ name: "Jalapeno", price: 1091, checked: false, id: 0 }, { name: "Salsa Tocino", price: 1075, checked: false, id: 1 }, { name: 'Salsa BBQ', price: 1999, checked: false, id: 2 },
            ],

            [{ name: "Coca Pequeña", price: 1090, checked: false, id: 0 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 1 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 2 },
            { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 3 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 4 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 5 },
            { name: 'MilkShake Mixto', price: 1495, checked: false, id: 6 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 7 },
            ],

            [{ name: "Coca Pequeña", price: 1090, checked: false, id: 0 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 1 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 2 },
            { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 3 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 4 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 5 },
            { name: 'MilkShake Mixto', price: 1495, checked: false, id: 6 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 7 }, { name: 'MilkShake de Vainilla', price: 1495, checked: false, id: 8 },
            ],

            [{ name: "Salsa Especial", price: 1090, checked: false, id: 0 }, { name: "Salsa BBQ", price: 1090, checked: false, id: 1 }, { name: 'Salsa Mostaza Miel', price: 1990, checked: false, id: 2 },
            ],

            [
                { name: "Coca Pequeña", price: 1090, checked: false, id: 0 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 1 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 2 },
                { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 3 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 4 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 5 },
                { name: 'MilkShake Mixto', price: 1495, checked: false, id: 6 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 7 }, { name: 'MilkShake de Vainilla', price: 1495, checked: false, id: 8 },
            ],
        ],
        minimum_quatity: [2, 1, 2, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 1
    },

    {
        meal: "Hamburguesa de Pollo",
        price: 5000,
        image: "https://as01.epimg.net/diarioas/imagenes/2021/01/05/actualidad/1609843027_736144_1609843267_noticia_normal.jpg",
        details: "Deliciosa hamburguesa de pollo con ingredientes 100% frescos",
        preferenceTitle: ["Elige 2 agregados", "Elige el sabor de tu bebida", "Quieres agregar algo más?", "Quieres extra salsa?"],
        preferenceData: [

            [{ name: "Jalapeno", price: 1091, checked: false, id: 0 }, { name: "Salsa Tocino", price: 1075, checked: false, id: 1 }, { name: 'Salsa BBQ', price: 1999, checked: false, id: 2 },
            ],

            [{ name: "Coca Pequeña", price: 1090, checked: false, id: 0 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 1 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 2 },
            { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 3 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 4 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 5 },
            { name: 'MilkShake Mixto', price: 1495, checked: false, id: 6 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 7 },
            ],

            [{ name: "Coca Pequeña", price: 1090, checked: false, id: 0 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 1 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 2 },
            { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 3 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 4 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 5 },
            { name: 'MilkShake Mixto', price: 1495, checked: false, id: 6 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 7 }, { name: 'MilkShake de Vainilla', price: 1495, checked: false, id: 8 },
            ],

            [{ name: "Salsa Especial", price: 1090, checked: false, id: 0 }, { name: "Salsa BBQ", price: 1090, checked: false, id: 1 }, { name: 'Salsa Mostaza Miel', price: 1990, checked: false, id: 2 },
            ],

            [
                { name: "Coca Pequeña", price: 1090, checked: false, id: 0 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 1 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 2 },
                { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 3 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 4 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 5 },
                { name: 'MilkShake Mixto', price: 1495, checked: false, id: 6 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 7 }, { name: 'MilkShake de Vainilla', price: 1495, checked: false, id: 8 },
            ],
        ],

        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 2
    },

    {
        meal: "Big Mac",
        price: 5000,
        image: "https://mcdonalds.es/api/cms/images/mcdonalds-es/2635e21b-9bae-4835-9efe-defc1ab25c1b_1080x943_App_Bundles_McMBM.png?auto=compress,format",
        details: "Deliciosa hamburguesa con ingredientes 100% frescos",
        preferenceTitle: ["Elige 2 agregados", "Elige el sabor de tu bebida", "Quieres agregar algo más?", "Quieres extra salsa?"],
        preferenceData: [

            [{ name: "Jalapeno", price: 1091, checked: false, id: 0 }, { name: "Salsa Tocino", price: 1075, checked: false, id: 1 }, { name: 'Salsa BBQ', price: 1999, checked: false, id: 2 },
            ],

            [{ name: "Coca Pequeña", price: 1090, checked: false, id: 0 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 1 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 2 },
            { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 3 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 4 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 5 },
            { name: 'MilkShake Mixto', price: 1495, checked: false, id: 6 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 7 },
            ],

            [{ name: "Coca Pequeña", price: 1090, checked: false, id: 0 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 1 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 2 },
            { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 3 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 4 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 5 },
            { name: 'MilkShake Mixto', price: 1495, checked: false, id: 6 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 7 }, { name: 'MilkShake de Vainilla', price: 1495, checked: false, id: 8 },
            ],

            [{ name: "Salsa Especial", price: 1090, checked: false, id: 0 }, { name: "Salsa BBQ", price: 1090, checked: false, id: 1 }, { name: 'Salsa Mostaza Miel', price: 1990, checked: false, id: 2 },
            ],

            [
                { name: "Coca Pequeña", price: 1090, checked: false, id: 0 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 1 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 2 },
                { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 3 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 4 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 5 },
                { name: 'MilkShake Mixto', price: 1495, checked: false, id: 6 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 7 }, { name: 'MilkShake de Vainilla', price: 1495, checked: false, id: 8 },
            ],
        ],

        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 3
    },


    {

        meal: "Papas Bacon Chedar",
        price: 3000,
        image: "https://mcdonalds.es/api/cms/images/mcdonalds-es/79140026-c66c-4810-a01a-24757af4b122_producto-31.png?auto=compress,format",
        details: "Deliciosas papitas bañadas en queso chedar y tocino",
        preferenceTitle: ["Elige 2 agregados", "Elige el sabor de tu bebida", "Quieres agregar algo más?", "Quieres extra salsa?"],
        preferenceData: [

            [{ name: "Jalapeno", price: 1091, checked: false, id: 0 }, { name: "Salsa Tocino", price: 1075, checked: false, id: 1 }, { name: 'Salsa BBQ', price: 1999, checked: false, id: 2 },
            ],

            [{ name: "Coca Pequeña", price: 1090, checked: false, id: 0 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 1 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 2 },
            { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 3 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 4 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 5 },
            { name: 'MilkShake Mixto', price: 1495, checked: false, id: 6 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 7 },
            ],

            [{ name: "Coca Pequeña", price: 1090, checked: false, id: 0 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 1 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 2 },
            { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 3 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 4 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 5 },
            { name: 'MilkShake Mixto', price: 1495, checked: false, id: 6 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 7 }, { name: 'MilkShake de Vainilla', price: 1495, checked: false, id: 8 },
            ],

            [{ name: "Salsa Especial", price: 1090, checked: false, id: 0 }, { name: "Salsa BBQ", price: 1090, checked: false, id: 1 }, { name: 'Salsa Mostaza Miel', price: 1990, checked: false, id: 2 },
            ],

            [
                { name: "Coca Pequeña", price: 1090, checked: false, id: 0 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 1 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 2 },
                { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 3 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 4 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 5 },
                { name: 'MilkShake Mixto', price: 1495, checked: false, id: 6 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 7 }, { name: 'MilkShake de Vainilla', price: 1495, checked: false, id: 8 },
            ],
        ],

        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 4
    },

    {
        meal: "Hamburguesa de Pollo",
        price: 5000,
        image: "https://as01.epimg.net/diarioas/imagenes/2021/01/05/actualidad/1609843027_736144_1609843267_noticia_normal.jpg",
        details: "Deliciosa hamburguesa de pollo con ingredientes 100% frescos",
        preferenceTitle: ["Elige 2 agregados", "Elige el sabor de tu bebida", "Quieres agregar algo más?", "Quieres extra salsa?"],
        preferenceData: [
            [{ name: "Jalapeno", price: 1091, checked: false, id: 10 }, { name: "Salsa Tocino", price: 1075, checked: false, id: 11 }, { name: 'Salsa BBQ', price: 1999, checked: false, id: 12 },
            ],

            [{ name: "Coca Pequeña", price: 1090, checked: false, id: 13 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 14 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 15 },
            { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 16 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 17 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 18 },
            { name: 'MilkShake Mixto', price: 1495, checked: false, id: 19 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 20 },
            ],

            [{ name: "Coca Pequeña", price: 1090, checked: false, id: 21 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 22 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 23 },
            { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 24 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 25 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 26 },
            { name: 'MilkShake Mixto', price: 1495, checked: false, id: 27 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 28 }, { name: 'MilkShake de Vainilla', price: 1495, checked: false, id: 29 },
            ],

            [{ name: "Salsa Especial", price: 1090, checked: false, id: 30 }, { name: "Salsa BBQ", price: 1090, checked: false, id: 31 }, { name: 'Salsa Mostaza Miel', price: 1990, checked: false, id: 32 },
            ],

            [
                { name: "Coca Pequeña", price: 1090, checked: false, id: 33 }, { name: "Fanta Pequeña", price: 1090, checked: false, id: 34 }, { name: 'Sprite Pequeña', price: 1990, checked: false, id: 35 },
                { name: 'Coca Pequeña Zero', price: 1095, checked: false, id: 36 }, { name: 'Fanta Cero Pequeña', price: 1095, checked: false, id: 37 }, { name: 'Jugo De Naranja', price: 1095, checked: false, id: 38 },
                { name: 'MilkShake Mixto', price: 1495, checked: false, id: 39 }, { name: 'MilkShake de Chocolate', price: 1495, checked: false, id: 40 }, { name: 'MilkShake de Vainilla', price: 1495, checked: false, id: 41 },
            ],
        ],
        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 5
    },

];