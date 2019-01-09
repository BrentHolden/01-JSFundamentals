let friend = 'MrBean';

switch (friend) {
    case 'Zach':
        console.log('Let\'s go play ultimate!')
        break;
    case 'Ing':
        console.log('So...are you taking me to Belgium?')
        break;
    case 'Adam': 
        console.log('I probably have baby stuff for you to borrow.')
        break;
    default:
        console.log(`You, ${friend}, are not my friend.`)
}

let dessert = 'Cake';

switch (dessert.toLowerCase()) {
    case 'Pie':
        console.log('Pie, pie, me oh my!')
        break;
    case 'Cake':
        console.log('Cake is great!')
        break;
    case 'Ice Cream':
        console.log('I scream for ice cream!')
        break;
    default:
        console.log('Not on the menu.')
}

let range = -8

switch (true) {
    case (range < 0 && range > -10):
    console.log('worked')
        
        break;

    default:
        break;
}