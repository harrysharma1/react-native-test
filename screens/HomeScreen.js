import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { useNavigation} from '@react-navigation/native';
import * as Icons from "react-native-heroicons/outline";
import { TextInput } from 'react-native-web';


const HomeScreen = () => {
    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
    return (
         <SafeAreaView className="bg-white pt-5">
            <Text className="text-red-500">
                {/* Header */}
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image
                        source={{
                            uri:'https://links.papareact.com/wru'
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full "
                    />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                        <Text className="font-bold text-lg">
                            Current Location
                            <Icons.ChevronDownIcon size={20} color='#00CCBB'/>
                        </Text>
                    </View>
                    <Icons.UserIcon size={35} color='#00CCBB'/>
                </View>

                {/* Search Bar */}
                <View className="flex-row">
                    <View>
                        
                    </View>
                    <Icons.AdjustmentsVerticalIcon/>
                </View>
           
             
            </Text>
           
            
         </SafeAreaView>
      );
}

export default HomeScreen