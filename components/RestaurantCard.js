import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as IconsSolid from "react-native-heroicons/solid";
import * as IconsOutline from "react-native-heroicons/outline";
const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    shortDescription,
    dishes,
    long,
    lat,
}) => {
  return (
    <TouchableOpacity className="bg-white rounded shadow-sm mr-3">
        <Image
            source={{
                uri:imgUrl,
            }}
            className="w-65 h-36 rounded-sm "
        />
        <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
                <IconsSolid.StarIcon color="green" opacity={0.5} size={22}/>
                <Text className="text-gray-500 text-xs">
                    <Text className="font-green-600">{rating}</Text>  ·  {genre}
                </Text>
            </View>  
        <View className="flex-row items-center speace-x-1">
            <IconsOutline.MapPinIcon color="gray" size={22}/>
            <Text className="text-gray-500 text-xs">Nearby  ·  {address}</Text>
        </View>
        </View>
      
    </TouchableOpacity>
  )
}

export default RestaurantCard