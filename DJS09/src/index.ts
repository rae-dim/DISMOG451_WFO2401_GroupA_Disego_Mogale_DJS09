const propertyContainer = document.querySelector('.properties ')

import { showReviewTotal, populateUser } from './utils'
// let isOpen: boolean

// Reviews
const reviews : { 
    name: string; 
    stars: number; 
    loyaltyUser: boolean; 
    date: string
    }[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// User
const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

//Properties
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        first_line_address: string;
        city: string;
        code: number;
        country: string;
    };
    contact_details: string;
    isAvailable: boolean; 
}[] = [
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
        contact_details: 'marywinkle@gmail.com',
        isAvailable: true  
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            first_line_address: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact_details: 'garydavis@hotmail.com',
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            first_line_address: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact_details: 'andyluger@aol.com',
        isAvailable: true
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
propertyContainer.appendChild(card)
}