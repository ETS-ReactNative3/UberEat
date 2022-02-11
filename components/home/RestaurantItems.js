import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// npm install react-native-bouncy-checkbox
// npm install tslib
export const  localRestaurants=[
    {
        name: "Beachside Bar",
        image_url: "https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/ouvrir-un-restaurant/comment-ouvrir-un-restaurant.png",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "Beachside Bar",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Inside_Le_Procope.jpg/1200px-Inside_Le_Procope.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "Beachside Bar",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Inside_Le_Procope.jpg/1200px-Inside_Le_Procope.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "Beachside Bar",
        image_url: "https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/ouvrir-un-restaurant/comment-ouvrir-un-restaurant.png",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    }
]

export default function RestaurantItems({ navigation , ...props}) {
    return ( 
        // activeOpacity={1} desable de pop of the button
            <>
                {
                    props.restaurantData.map((restaurant, index)=>(
                        <TouchableOpacity 
                            key={index} 
                            activeOpacity={1}
                            style={{marginBottom: 30}}
                            onPress={()=> navigation.navigate("RestaurantDetails",{ /// this is the route RestaurantDetails
                                    name: restaurant.name,
                                   image: restaurant.image_url,
                                   price: restaurant.price,
                                   reviews: restaurant.reviews,
                                   rating: restaurant.rating,
                                   categories: restaurant.categories,
                                 })}
                        
                        >

                            <View
                                key={index} 
                                style={{marginTop: 10, padding: 15, backgroundColor: "white"}}>
                                <RestaurantImage image={restaurant.image_url} />
                                <RestaurantInfo
                                name={restaurant.name} 
                                rating={restaurant.rating} 
                                />
                            </View>
                    </TouchableOpacity>

                    ))
                
                }
           </>
        
    )
}

const RestaurantImage = (props)=>{
    return <>
                <Image 
                
                    source={{
                        uri: props.image
                        }}
                style={{width: "100%", height: 180}}
                />
                <TouchableOpacity style={{position:"absolute", right: 20, top: 20}} >
                  <MaterialCommunityIcons name="heart-outline" size={25} color={"#fff"} />
                </TouchableOpacity>
    </>
};


const RestaurantInfo= (props)=>{
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10}}>
              <View>
                <Text style={{fontSize: 15, fontWeight: "bold"}}> {props.name} </Text>
                <Text style={{fontSize: 13, color: "gray"}}>30-45 * min</Text>
              </View>
            <View 
                style={{
                    backgroundColor: "#eee", 
                    height: 30,
                    width:30, 
                    alignItems: "center",
                    borderRadius: 15
                }}>
                <Text>{props.rating}</Text>
            </View>
        </View>
    )
}