import { View, Text, SafeAreaView, Image, TextInputBase } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { useNavigation} from '@react-navigation/native';
import * as Icons from "react-native-heroicons/outline";
import { TextInput } from 'react-native';


const HomeScreen = () => {
    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
    return (
         <SafeAreaView className="bg-white" >
            <Text className="text-red-500">
                {/* Header */}
                <View className="flex-row pb-10  items-center mx-4 space-x-2">
                    <Image
                    source={{
                        uri:'https://links.papareact.com/wru'
                    }}
                    className="h-7 w-7 bg-gray-400 rounded-full"
                    />
                <View className="flex-1">
                    <Text className="text-xs font-bold text-gray-400">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold text-lg">
                        Current Location
                        <Icons.ChevronDownIcon scale={20} color="#00CCBB"/>
                    </Text>
                </View>
                <Icons.UserIcon scale={30} color='#00CCBB'/>
                </View>
                <View className="flex-row">
                    <View className="flex-row">
                        <Icons.MagnifyingGlassIcon/>
                        <TextInput
                            placeholder='Search for restaurants or cuisines'
                            keyboardType='default'
                        />
                    </View>
                    <Icons.AdjustmentsVerticalIcon color='#00CCBB'/>
                </View>
            </Text>
         </SafeAreaView>
      );
}

export default HomeScreen