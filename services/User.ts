import { Post, posts } from "./Post";
import { ImageSourcePropType } from "react-native";

export interface User {
    id: string;
    name: string;
    username: string;
    bio: string;
    profilePicture: ImageSourcePropType;
    followers: number;
    following: number;
    posts: Post[];
}

export const user: User = {
    id: '1',
    name: 'Anthony H',
    username: 'antdrew404',
    bio: 'Software Developer | Tech Enthusiast | Lifelong Learner',
    profilePicture: require('../assets/user-images/403ce37b-24e9-422b-82a0-ee722fdf9fda.jpg'),
    followers: 400,
    following: 50,
    posts: posts
}
