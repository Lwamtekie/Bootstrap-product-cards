const products = [

{
title: 'product1',
descriptions: 'bla bla bla',
imageUrl:'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/',
size: '4" x 4"',
weight: '8 oz.',
price1: '$1.99',
price2: '$1.49',
price3: '$0.99',
validUnit: '04/01/2016',},
{
 title: 'product2',
 descriptions: 'la la la',
 imageUrl: 'https://www.catster.com/wp-content/uploads/2017/12/A-gray-kitten-meowing.jpg',
 size: '5" x 6"',
 price1: '$2.99',
 price2: '$0.99',
 validUnit: '04/01/2016',

},
{
    title: 'product3',
descriptions: 'bla bla bla',
imageUrl:'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/',
size: '4" x 4"',
weight: '8 oz.',
price1: '$1.99',
price2: '$1.49',
price3: '$0.99',
validUnit: '04/01/2016',
},
{
title: 'product4',
descriptions: 'bla bla bla',
imageUrl:'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/',
size: '4" x 4"',
weight: '8 oz.',
price1: '$1.99',
price2: '$1.49',
price3: '$0.99',
validUnit: '04/01/2016',
},
{
    title: 'product5',
descriptions: 'bla bla bla',
imageUrl:'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/',
size: '4" x 4"',
weight: '8 oz.',
price1: '$1.99',
price2: '$1.49',
price3: '$0.99',
validUnit: '04/01/2016',
},




];

// console.log ('products', products);

const printToDom = (divId, textToPrint) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = textToPrint;
};
const domStringBuilder = () => {
    let domString = '';
    
    products.forEach((product) => {
        domString += `<h3>${product.title}</h3>`
    });
    printToDom('products-container',domString);
};




const init =() => {
    
    domStringBuilder();

};

init ();