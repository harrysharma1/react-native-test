import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
const Categories = () => {
  return (
   <ScrollView
   contentContainerStyle={{
    padding: 15,
    paddingTop:10

    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    className="bg-gray-200"
   >
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing1"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing2"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing3"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing4"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing5"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing6"/>
   </ScrollView>
  )
}

export default Categories