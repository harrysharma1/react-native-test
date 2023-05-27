import { View, Text, SafeAreaView, Image, TextInputBase, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect,useState } from 'react';
import { useNavigation} from '@react-navigation/native';
import * as Icons from "react-native-heroicons/outline";
import { TextInput } from 'react-native';
import { SafeAreaView as SAE } from 'react-native-safe-area-context';
import Categories from '../components/Categories';
import 'react-native-url-polyfill/auto'
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity';

const HomeScreen = () => {
    const navigation=useNavigation();
    // const [featured , setFeatured] = useState([]);
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])                                        
    // useEffect(()=>{
    //     client.fetch(
    //             `
    //             *[_type=="featured"]{
    //                 ...,
    //                 restaurant[]->{
    //                     ...,
    //                     dishes[]->
    
    //                 }
    //             }
    //             `
    //     ).then((res)=>{setFeatured(res)})
    // },[])
    // console.log(featured)


    return (
        <SAE edges={['top','bottom','left','right']} className=" pt-1  flex-col"> 
            {/*Header*/}
                <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
                    <Image
                        source={{
                            uri:'https://links.papareact.com/wru'
                        }}
                        className="h-7 w-7 bg-gray-400 rounded-full"
                    />
                    <View className="flex-1 ">
                        <Text className="font-bold text-xs text-gray-400">
                            Deliver Now
                        </Text>
                        <Text className="font-bold text-lg">
                            Current Location
                            <Icons.ChevronDownIcon scale={20} color="#00CCBB"/>
                        </Text>
                    </View>
                    <Icons.UserIcon scale={30} color="#00CCBB"/>
                </View>

                {/* Search Bar */}
                <View className="flex-row items-center space-x-2 pb-2 mx-4 px-2">
                    <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                        <Icons.MagnifyingGlassIcon color='gray' scale={20}/>
                        <TextInput
                        placeholder='Search for restaurants or cuisines'
                        keyboardType='default'
                        />
                    </View>
                    <Icons.AdjustmentsVerticalIcon color="#00CCBB"/>
                </View>  
            
            {/* Body */}
            <ScrollView>
                {/* Categories */}
                <Categories/>
                {/* Featured */}
                {/* {featured?.map((category)=>{
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                })} */}
               
            </ScrollView>

        </SAE>
        
      );
}

export default HomeScreen
