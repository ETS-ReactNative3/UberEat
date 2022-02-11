import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch } from 'react-redux';

const foods = [
    {
        title: "Tandoori Chicken ",
        description: "Amazing indian dish with tenderloin chicken off the sizzing",
        price: "$19.20",
        image: "https://assets.afcdn.com/recipe/20180119/76936_w1024h768c1cx2680cy1786.jpg"
    },
    {
        title: "lasagne ",
        description: "Lasagne originated in Italy during the Middle Ages and have traditionally been ascribed to the city of Naples.",
        price: "$13.50",
        image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg"
    },
    {
        title: "Chicken Chilaquiles",
        description: "Chilaquiles is a Mexican dish originally created to use up leftovers. It's traditionally made with corn tortillas, chiles, cheese and meat that are either tossed together and sautéed or layered like lasagna and baked.",
        price: "$19.20",
        image: "https://frugalhausfrau.com/wp-content/uploads/2015/05/Chicken-Chilaquiles-Verde-3.jpg"
    },
    {
        title: "Tandoori Chicken ",
        description: "Chicken Caesar Salad is a must in the recipe file and this one definitely does not disappoint! Plus it’s made healthier by using mostly Greek yogurt in part for the mayonnaise and olive oil in the dressing.",
        price: "$20.62",
        image: "https://img.taste.com.au/Wl3qdnK8/taste/2016/11/chicken-caesar-salad-83105-1.jpeg"
    }
];



const styles = StyleSheet.create({
    menuItemStyle : {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle:{
        fontSize: 19,
        fontWeight: '600'
    }
})


export default function MenuItems({ restaurantName }) {
    const dispatch = useDispatch()

const selectItem = (item, checkboxValue) =>
    dispatch({
        type: 'ADD_TO_CART',
        payload: {...item, restaurantName: restaurantName, checkboxValue: checkboxValue }
    })

    return (
        <ScrollView showsVerticalScrollIndicator={false}> 
         {
             foods.map((food, index)=>(
                <View  key={index}>
                    <View style={styles.menuItemStyle}>
                        {/* this is like a input type="radio" with orange color */}
                        <BouncyCheckbox 
                          iconStyle={{borderColor: 'lightgray', borderRadius: 0}}
                          fillColor='green'
                          onPress = {(checkboxValue)=> selectItem(food, checkboxValue) }
                        /> 
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={0.5} orientation='vertical'
                         style={{
                             marginHorizontal: 20,
                         }}
                    />
                </View>
             ))
         }
           
        </ScrollView>
    )
}

const FoodInfo = (props) =>(
    <View style={{width: 240, justifyContent: "space-evenly"}} >
        <Text style={styles.titleStyle} >{props.food.title} </Text>
        <Text>{props.food.description} </Text>
        <Text>{props.food.price} </Text>
    </View>
)

const FoodImage = (props)=>(
    <View>
        <Image
              source={{uri: props.food.image}}
              style={{width: 100, height: 100, borderRadius: 8}}
        />
    </View>
)