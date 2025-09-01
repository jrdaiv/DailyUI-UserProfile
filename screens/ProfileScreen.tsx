import { View, Text, ScrollView, Image, Share } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { user } from '../services/User';

export default function ProfileScreen() {
  return (

    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView className="flex-1">
        <View className="mt-24 items-center justify-center">
          <Image
            source={user.profilePicture}
            className="h-32 w-32 rounded-full shadow-2xl shadow-blue-700"
          />
          <Text className="mt-4 text-2xl font-bold text-white">{user.name}</Text>
          <Text className="text-base text-gray-400">{user.username}</Text>
        </View>

        <View className="mt-3 items-center">
          <Text className="text-lg text-gray-300">{user.bio}</Text>
        </View>

        <View className="mt-6 flex-row justify-around">
          <View className="items-center">
            <Text className="text-lg font-semibold text-white">{user.posts.length}</Text>
            <Text className="font-bold text-white/50">Posts</Text>
          </View>
          <View className="ml-5 items-center ">
            <Text className="text-lg font-semibold text-white">{user.followers}</Text>
            <Text className="font-bold text-white/50">Followers</Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-semibold text-white">{user.following}</Text>
            <Text className="font-bold text-white/50">Following</Text>
          </View>
        </View>

        <View className="flex-1">
          {/* <Text className="text-lg font-bold text-white">Posts</Text> */}
          <View className="mb-16 mt-8">
            <Text className="mx-auto mb-3 text-xl font-bold text-white/70">User Posts</Text>
            {user.posts.map((post) => (
              <>
                <View key={post.id} className="m-1 border-t-2 border-blue-500/50 p-4">
                  <Text className="mx-auto mb-5 text-lg font-bold text-white/70">{post.title}</Text>
                  <Image source={post.image} className="mx-auto h-52 w-96" />
                  <Text className="mx-auto mt-5 font-semibold text-gray-400">{post.content}</Text>
                  <Text className="ml-auto mt-6 text-sm text-gray-400">
                    Created: {post.createdAt.toDateString()}
                  </Text>
                </View>
              </>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
