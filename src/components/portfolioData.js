
// const portfolioItem1 = new portfolioItem('Amadeusz Grzesiak', 'Moje portfolio, które stworzyłem w oparciu o GatsbyJS, które z kolei oparte jest o ReactJS. Kod strony możesz zobaczyć tutaj.', 'www.amadeuszgrzesiak.pl', 'amadeuszgrzesiak.pl', "url('agrzesiak-bg.jpg')");
// const portfolioItem2 = new portfolioItem('Inlei', 'Sklep internetowy stworzony dla polskich dystrubutorów włoskiego Inlei. Oparty jest na Wordpress i Woocomerce. Posiada panel do zarządzania sklepem.', 'https://inlei.pl/', 'inlei/pl', "url('inlei-bg.jpg')");
// const portfolioItem3 = new portfolioItem('Chiara Shop', 'Sklep internetowy oparty o Wordpress oraz najpopularniejszą wtyczkę e-commerce - Woocommerce. Posiada panel do zarządzania sklepem do dyspozycji właścicielki.', 'https://chiarashop.pl/', 'chiarashop.pl', "url('chiara-bg.jpg')");
// const portfolioItem4 = new portfolioItem('Goodside', 'Przykład typowej, nowoczesnej strony - wizytówki stworzonej dla warszawskiej agencji eventowej Goodside', 'http://goodside.com.pl', 'goodside.pl', "url('goodside-bg.jpg')");

const portfolioData = [
    {
        id = 1,
        name = 'Amadeusz Grzesiak',
        desc = 'Moje portfolio, które stworzyłem w oparciu o GatsbyJS, które z kolei oparte jest o ReactJS. Kod strony możesz zobaczyć tutaj.',
        link = 'www.amadeuszgrzesiak.pl',
        linkText = 'amadeuszgrzesiak.pl',
        bg = "url('agrzesiak-bg.jpg')"
    },
    {
        id = 2,
        name = 'Chiara Shop',
        desc = 'Sklep internetowy oparty o Wordpress oraz najpopularniejszą wtyczkę e-commerce - Woocommerce. Posiada panel do zarządzania sklepem do dyspozycji właścicielki.',
        link = 'https://chiarashop.pl/',
        linkText = 'chiarashop.pl',
        bg = "url('chiara-bg.jpg')"
    },
    {
        id = 3,
        name = 'Inlei',
        desc = 'Sklep internetowy stworzony dla polskich dystrubutorów włoskiego Inlei. Oparty jest na Wordpress i Woocomerce. Posiada panel do zarządzania sklepem.',
        link = 'https://inlei.pl/',
        linkText = 'inlei.pl',
        bg = "url('inlei-bg.jpg')"
    },
    {
        id = 4,
        name = 'Goodside',
        desc = 'Przykład typowej, nowoczesnej strony - wizytówki stworzonej dla warszawskiej agencji eventowej Goodside.',
        link = 'http://goodside.com.pl',
        linkText = 'goodside.com.pl',
        bg = "url('goodside-bg.jpg')"
    }
]

export default PortfolioItem