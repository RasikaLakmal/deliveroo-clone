import { View, Text,Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems, removeFromBasket, removeFromBasket2, selectBasketTotal  } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal); 
    const [groupedItemsInBasket,setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    const total = (basketTotal + 500)

  return (
    <SafeAreaView className='flex-1 bg-white pt-5'>
        <View className='flex-1 bg-gray-100'>
            <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
                <View>
                    <Text className='text-lg font-bold text-center'>
                        Basket
                    </Text>
                    <Text className='text-center text-gray-400'>
                        {restaurant.title}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className='rounded-full bg-gray-100 absolute top-3 right-5'
                >
                    <XCircleIcon color='#00CCBB' height={50} width={50}/>
                </TouchableOpacity>
            </View>

            <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
                <Image
                    source={{
                        uri: 'https://food-images.files.bbci.co.uk/food/recipes/fluffyamericanpancak_74828_16x9.jpg',
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <Text className='flex-1'>
                    Deliver in 50-75 min
                </Text>
                <TouchableOpacity>
                    <Text className='text-[#00CCBB]'>
                        Change
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView className='divide-y divide-gray-200'>
                {Object.entries(groupedItemsInBasket).map(([key, items]) => {
                    return(
                    <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                        <Text>{items.length} x</Text>
                        <Image
                            source={{ uri: items[0]?.image}}
                            className='h-12 w-12 rounded-full'
                        />
                        <Text className='flex-1'>
                            {items[0]?.name}
                        </Text>

                        <Text className='text-gray-600'>
                        LKR {items[0]?.price}
                        </Text>

                        <TouchableOpacity>
                            <Text
                                className='text-xs text-[#00CCBB]'
                                onPress={() => dispatch(removeFromBasket2({id: key}))}
                            >
                                Remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                );
                })}
            </ScrollView>

            <View className='p-5 bg-white mt-5 space-y-4'>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-400'>Subtotal</Text>
                    <Text className='text-gray-400'>
                        LKR {basketTotal}
                    </Text>
                </View>

                <View className='flex-row justify-between'>
                    <Text className='text-gray-400'>Delivery Fee</Text>
                    <Text className='text-gray-400'>
                        LKR {500}
                    </Text>
                </View>

                <View className='flex-row justify-between'>
                    <Text>Order Total</Text>
                    <Text className='font-extra-bold'>
                        LKR {basketTotal + 500}
                    </Text>
                </View>

                <TouchableOpacity 
                    onPress={() => navigation.navigate('PreparingOrder')}
                    disabled={(total===500)}
                    className='p-4 rounded-lg bg-[#00CCBB]'>
                    <Text className='font-bold text-center text-lg text-white'>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen