const propertyContainer = document.querySelector('.properties ') as HTMLElement
const footer = document.querySelector('.footer') as HTMLElement
const reviewContainer = document.querySelector('.reviews') as HTMLElement
const container = document.querySelector('.container') as HTMLElement
const button = document.querySelector('.button')as HTMLElement

import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from './utils'
import { Permissions, LoyaltyUser } from './enoms' 
import {Price, Country} from './types'
import Review from './interfaces'
let isOpen: boolean



// Reviews
const reviews : { 
    name: string; 
    stars: number; 
    loyaltyUser: LoyaltyUser; 
    date: string
    }[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021'
    },
]

// User
const you /*: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
}  */= {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        first_line_address: string;
        city: string;
        code: number | string;
        country: Country;
    };
    contact_details: [number, string];
    isAvailable: boolean; 
}

//Properties
const properties : Property[] = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            first_line_address: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact_details: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 30,
        location: {
            first_line_address: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact_details: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 25,
        location: {
            first_line_address: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact_details: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/malaysian-hotel.jpeg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            first_line_address: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact_details: [ +60349822083, 'lee34@gmail.com'],
        isAvailable: false 
    }
]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

//add the properties
for (let i = 0; i <properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    showDetails(you.permissions, card, properties[i].price)
    propertyContainer.appendChild(card)
}

let count= 0
function addReviews(array : Review[]) : void {
    if (!count) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i=0; i<topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)  
        }
        container.removeChild(button)
    }
}

button.addEventListener('click', () => addReviews(reviews))
//footer details
const currentLocation: [string, string, number]  = ["Polokwane", '10:56', 23]
footer.innerHTML = currentLocation[0] +' '+ currentLocation[1] + ' ' + currentLocation[2]
footer.classList.add('footer')

