import { ImageSourcePropType } from "react-native";

export interface Post {
    id: string;
    username: string
    title: string;
    content: string;
    image?: ImageSourcePropType;
    createdAt: Date;
}

export const posts: Post[] = [
    {
    id: '1',
    username: 'antdrew404',
    title: 'Kicking Things Off 🚀',
    content: 'Just launched my first post—excited to share my journey in tech and creativity!',
    image: require('../assets/post-images/coolbackgrounds-fractalize-cool_backgrounds.png'),
    createdAt: new Date()
},
{
    id: '2',
    username: 'antdrew404',
    title: 'Crafting with Purpose ✨',
    content: 'Spent the weekend engraving custom pieces for 951Engravements. Nothing beats the smell of fresh wood and laser precision.',
    image: require("../assets/post-images/coolbackgrounds-unsplash-zeller.jpg"),
    createdAt: new Date()
},
{
    id: '3',
    username: 'antdrew404',
    title: 'Code & Coffee ☕',
    content: 'Debugged a gnarly Expo issue today. Learned a ton about dependency trees and build configs. Progress feels good.',
    image: require("../assets/post-images/coolbackgrounds-unsplash-bean.jpg"),
    createdAt: new Date()
},
{
    id: '4',
    username: 'antdrew404',
    title: 'UI Polish in Progress 🎨',
    content: 'Refactored my signup page with NativeWind—centered layout, clean validation, and a footer that finally feels right.',
    image: require("../assets/post-images/coolbackgrounds-unsplash-jilden.jpg"),
    createdAt: new Date()
},
{
    id: '5',
    username: 'antdrew404',
    title: 'Retail Ready 💼',
    content: 'Updated my resume for customer service roles. Highlighted my FedEx logistics experience and sales wins from Security One.',
    image: require("../assets/post-images/coolbackgrounds-unsplash-silva.jpg"),
    createdAt: new Date()
}
]