import { cateringList } from '../../IMAGES/catering/index';
import { privateChefList } from '../../IMAGES/privateChef/index';
import privateChef from '../../IMAGES/saritaP.png';
import mealPrep from '../../IMAGES/saritaM.png';
import catering from '../../IMAGES/saritaC.png';

export const services = [
    {
        id: 0,
        name: "Private Chef",
        coverImg: privateChef,
        imgList: [...privateChefList]
    },
    {
        id: 1,
        name: "Catering",
        coverImg: catering,
        imgList: [...cateringList]
    },
    {
        id: 2,
        name: "Meal Prep",
        coverImg: mealPrep,
        imgList: []
    }
];