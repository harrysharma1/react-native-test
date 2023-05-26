import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/solid";
import RestaurantCard from './RestaurantCard';
const FeaturedRow = ({title,description}) => {
  return (
    <View className="bg-gray-200">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold ">{title}</Text>
        <Icons.ArrowRightIcon color="#00CCBB"/>
      </View>
      <Text className="text-gray-500 text-xs px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal:15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          shortDescription="Sushi, Maki, Nigiri, Sashimi"
          address={"London SW1H 9EU, United Kingdom"}
          dishes={["Sushi", "Maki", "Nigiri", "Sashimi"]}
          long={-0.127758}
          lat={51.507351}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          shortDescription="Sushi, Maki, Nigiri, Sashimi"
          address={"London SW1H 9EU, United Kingdom"}
          dishes={["Sushi", "Maki", "Nigiri", "Sashimi"]}
          long={-0.127758}
          lat={51.507351}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          shortDescription="Sushi, Maki, Nigiri, Sashimi"
          address={"London SW1H 9EU, United Kingdom"}
          dishes={["Sushi", "Maki", "Nigiri", "Sashimi"]}
          long={-0.127758}
          lat={51.507351}
        />

      </ScrollView>
    </View>
  )
}

export default FeaturedRow