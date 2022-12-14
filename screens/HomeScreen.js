import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { 
    UserIcon, 
    ChevronDownIcon, 
    MagnifyingGlassIcon, 
    AdjustmentsVerticalIcon
    } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    return (
        <SafeAreaView className='bg-white pt-6'>
                {/*header*/}
                <View className='items-center flex-row pb-3 mx-4 space-x-2'>
                    <Image
                    source={{
                        uri: "https://cdn.dribbble.com/users/1355613/screenshots/6807438/food_delivery_4x.jpg?compress=1&resize=400x300",
                    }}
                    className='h-7 w-7 bg-gray-300 p-4'
                    />

                    <View className='flex-1'>
                        <Text className='font-bold text-gray-400 text-xs'>
                            Deliver Now!
                        </Text>
                        <Text className='font-bold text-xl'>
                            Current Location
                            <ChevronDownIcon size={20} color='#00CCBB'/>
                        </Text>
                    </View>

                    <UserIcon size={35} color='#00CCBB'/>
                </View>

                {/*search*/}
                <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                    <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
                        <MagnifyingGlassIcon color='gray' size={20}/>
                        <TextInput 
                        placeholder='Restaurants and cuisines'
                        keyboardType='default'/>

                    </View>

                    <AdjustmentsVerticalIcon color='#00CCBB'/>
                </View>

                {/* body */}
                <ScrollView className='bg-gray-100'
                    contentContainerStyle={{
                    paddingBottom: 100,
                }}>
                    {/* categories */}
                    <Categories/>

                    {/* Featured */}
                    <FeaturedRow
                        id='1'
                        title='Featured'
                        description='Paid placements from our partners'
                    />

                    {/* Tasty Discounts */}
                    <FeaturedRow
                        id='2'
                        title='Tasty Discounts'
                        description="Everyone's been enjoying these juicy discounts"
                    />

                    {/* Offers near you */}
                    <FeaturedRow
                        id='3'
                        title='Offers near you'
                        description='Why not support your local restaurant tonight!'
                    />
                </ScrollView>
        </SafeAreaView>
    )
}