import { cateringList } from '../../IMAGES/catering/index';
import { privateChefList } from '../../IMAGES/privateChef/index';

export const services = [
    {
        id: 0,
        name: "Private Chef",
        coverImg: "https://i.imgur.com/yuPJOlS.png",
        imgList: [...privateChefList],
        info: [
            'We offer Taste Testing Friday and Saturday for *$50',
            '*Up to 3 Items Only'
        ]
    },
    {
        id: 1,
        name: "Catering",
        coverImg: "https://i.imgur.com/Hh5WpFD.jpg",
        imgList: [...cateringList],
        info: [
            'All Catering orders require at least two weeks notice with a 50% down deposit.',
            'Pricing is billed per person and is subject to change base on the menu selections.',
            'Wait Staff Available for $75 per Server',
            'Delivery Available for a *$30 base fee',
            '*Additional Charge Based on Location',
            'We offer Taste Testing Friday and Saturday for **$50',
            '**Up to 3 Items Only'
        ]
    },
    {
        id: 2,
        name: "Meal Prep",
        coverImg: "https://i.imgur.com/WJNoXtW.png",
        imgList: [],
        info: [
            'Delivery Available for a *$30 base fee',
            '**Additional Charge Based on Location',
            'We offer Taste Testing Friday and Saturday for **$50',
            '**Up to 3 Items Only'
        ]
    }
];