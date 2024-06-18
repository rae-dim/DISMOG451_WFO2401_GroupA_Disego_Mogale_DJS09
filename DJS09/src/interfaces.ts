import {LoyaltyUser} from './enoms'

export default interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}