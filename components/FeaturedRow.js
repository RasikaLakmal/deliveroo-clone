import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { 
    ArrowRightIcon
    } from "react-native-heroicons/outline";
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({id, description, title}) => {
    return (
        <View>
        <View className='mt-4 flex-row items-center justify-between px-4'>
            <Text className='font-bold text-lg'>{title}</Text>
            <ArrowRightIcon color='#00CCBB'/>
        </View>

        <Text className='text-xs text-gray-500 px-4'>{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className='pt-4'
        >
            <RestaurantCard
                key={1}
                id={1}
                imgUrl='https://i.pinimg.com/originals/43/6c/91/436c91a52295dfbd4d938f8b63e70f00.jpg'
                title='Ceylon Curry Club'
                rating={4.5}
                genre='Dine-in'
                address='No. 2, Dutch Hospital Shopping Precinct, Colombo 00100'
                short_description='Hours: Open ⋅ Closes 11:30PM Delivery: Now ⋅ Ends 9PM '
                dishes={[{  
                            id:1,
                            name:'Tempered mixed Sea Food',
                            description:'Calamari,Prawns,Fried Salaya and Fried Tuna',
                            price:10,
                            image:'https://i.guim.co.uk/img/media/8b04fd8b83760988484a2be762158d66d345bf00/0_316_3074_3073/master/3074.jpg?width=465&quality=85&dpr=1&s=none'
                        },{
                            id:2,
                            name:'Crumbed fried Pork',
                            description:'',
                            price:10,
                            image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                        },{
                            id:3,
                            name:'a',
                            description:'',
                            price:10,
                            image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                        },{
                            id:4,
                            name:'a',
                            description:'',
                            price:10,
                            image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                        },{
                            id:5,
                            name:'a',
                            description:'',
                            price:10,
                            image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                        }]}
                        lat={6.9334587}
                        long={79.7733524}
            />
            <RestaurantCard
                key={2}
                id={2}
                imgUrl='https://www.dineinsrilanka.com/wp-content/uploads/2017/09/dineinsrilanka_restaurant_temp_picture-1170x400_f11-580x408.jpg'
                title='KFC'
                rating={3.9}
                genre='Fast food restaurant'
                address='372 Colombo Rd, Gampaha'
                short_description='Service options: Dine-in · Takeaway · Delivery'
                dishes={[  
                    {  
                        id:1,
                        name:'Crispy Chicken',
                        description:'8pc , 12pc',
                        price:1600,
                        image:'https://d1ralsognjng37.cloudfront.net/61aae1be-0869-4a84-877d-6dcc7053e4d0.jpeg'
                        },{
                            id:2,
                        name:'Twister',
                        description:'hdkjds',
                        price:10,
                        image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                    },{
                        id:3,
                        name:'Fiery Grilled Chicken',
                        description:'6pc',
                        price:1550,
                        image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                    },{
                        id:4,
                        name:'a',
                        description:'hdkjds',
                        price:10,
                        image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                    }]}
                long={20}
                lat={0}
            />
            <RestaurantCard
                key={3}
                id={3}
                imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi72cYWXaXhATYNvHZAb7osyTSV1xA1nahaThnfw48VRnFzvNJU41PW3YUBBqG6UZs_zU&usqp=CAU'
                title='Pizza Hut'
                rating={4.3}
                genre=' Dine-in · Kerbside pickup · No-contact delivery'
                address='206 Colombo Rd, Gampaha'
                short_description='Family-friendly chain known for its made-to-order pizzas.'
                dishes={[{  
                    id:1,
                    name:'a',
                    description:'hdkjds',
                    price:10,
                    image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                    },{
                        id:2,
                    name:'a',
                    description:'hdkjds',
                    price:10,
                    image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                },{
                    id:3,
                    name:'a',
                    description:'hdkjds',
                    price:10,
                    image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                },{
                    id:4,
                    name:'a',
                    description:'hdkjds',
                    price:10,
                    image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                },]}
                long={79.9974944}
                lat={7.0908502}
            />
            <RestaurantCard
                key={4}
                id={4}
                imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPFKShmPqrUm2Ft_FuvMTS2pIn-pOm1pBclJdKmi4Jfy847gLH4lgayGiVCYMmVZVV2o&usqp=CAU'
                title='Kushmi Foods & Catering'
                rating={3.9}
                genre='Takeaway · Delivery · No dine-in'
                address='5 Dutugemunu St, Dehiwala-Mount Lavinia 10350'
                short_description=' Choose your combo & order now! · Chicken fried rice · Chicken biryani · Srilankan gravy dishes'
                dishes={[{ 
                    id:1,
                    name:'Lumprais',
                    description:'mixed meat curry, ghee rice, ash plantain, frikkadeller meatballs, belacan, seeni sambol, eggplant pahi',
                    price:400,
                    image:'https://upload.wikimedia.org/wikipedia/commons/f/f1/Lamprais_%28SL%29.jpg'
                    },{
                        id:2,
                    name:'Biriyani',
                    description:'Serving temperature: Hot',
                    price:3400,
                    image:'https://www.unileverfoodsolutions.lk/dam/global-ufs/mcos/meps/sri-lanka/calcmenu/recipes/LK-recipes/general/nasi-biriyani/main-header.jpg'
                },{
                    id:3,
                    name:'Fried Rice',
                    description:'Chicken ,Egg, Vege',
                    price:700,
                    image:'https://valentinascorner.com/wp-content/uploads/2018/04/Easy-Chicken-Fried-Rice-10-of-11.jpg'
                },{
                    id:4,
                    name:'Kottu',
                    description:'Chicken,Egg , Vege ',
                    price:10,
                    image:'https://live.staticflickr.com/6046/6298116355_419758aa5b_z.jpg'
                },]}
                long={80.0000}
                lat={7.54}
            />
        </ScrollView>
        </View>
    )
}

export default FeaturedRow