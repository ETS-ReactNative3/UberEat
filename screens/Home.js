import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import SearchBar from '../components/home/SearchBar'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'
// key api yelp.com/fusion
const YELP_API_KEY="d7hD2Fjo6WMN0tDEN4Nv3P-XmGVifSExuP2Oo6f3-ou9a0Qp2SO6wH7Z_In5EeOEvQQOc69ETbkek7EngjqWAI5vd4At06LKQbXv7J8d4hOvpqToehQDVaf7UYjZYXYx"

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData]  = useState(localRestaurants)
    const [city, setCity] = useState("San Francisco")
    const [activeTab, setActiveTab] = useState("Delivery");

     const getRestaurantsFromYelp = () => {

        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
        const apiOptions = {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        };
    
        return fetch(yelpUrl, apiOptions)
          .then((res) => res.json())
          .then((json) => {
            console.log(json); 
            setRestaurantData( json.businesses.filter(business=>
                      business.transactions.includes(activeTab.toLowerCase()))
              );
          }
              
          )
          
      };

     useEffect(
         ()=>{
            // getRestaurantsFromYelp()
         }
     , [city, activeTab])

    return (
        <SafeAreaView style={{backgroundColor:"#eee", flex: 1,}}> 

            <View style={{backgroundColor:"white", padding: 15}}>
               <HeaderTabs activeTab={activeTab}  setActiveTab={setActiveTab} />
               <SearchBar cityHandler={setCity}/>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                   <Categories />
                   <RestaurantItems restaurantData={restaurantData} navigation={navigation}  />
       
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs/>
        </SafeAreaView>
    )
}
