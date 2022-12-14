import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>

        <CategoryCard 
            imgUrl='https://www.pngitem.com/pimgs/m/196-1967449_transparent-special-offers-png-special-offer-hd-png.png' 
            title='Offers'/>
        <CategoryCard 
            imgUrl='https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=D1z4xPCs-qQIZyUqRcHrnsJSJy_YbUD9udOrXpilNpI=' 
            title='Pizza'/>
        <CategoryCard 
            imgUrl='https://post.healthline.com/wp-content/uploads/2020/07/1200x628-facebook-1200x628.jpg' 
            title='Thai'/>
        <CategoryCard 
            imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/18/3a/09/6c/bonefish-seafood-platter.jpg' 
            title='Sea Food'/>
        <CategoryCard 
            imgUrl='https://www.happyfoodstube.com/wp-content/uploads/2016/03/homemade-sushi-image.jpg' 
            title='Sushi'/>
        <CategoryCard 
            imgUrl='https://miro.medium.com/max/700/1*Uc3oCsLdvFdw-RjDTuXVAw.jpeg' 
            title='Kottu'/>
    </ScrollView>
  )
}

export default Categories