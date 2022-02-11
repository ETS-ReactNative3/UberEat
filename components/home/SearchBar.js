import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({cityHandler}) {
  return ( //
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
       query={{ key: "AIzaSyCoq4_-BeKtYRIs-3FjJL721G1eP5DaU0g" }}
      onPress = {( data, details=null )=>{
          console.log(data.description)
          // the data that suggested by google api when we type Santa => Hollywood, Los Angelos,CA, USA
          //  we need to city so the first world;
          const city = data.description.split(',')[0]; // city Hollywood
          if(city){
                cityHandler(city)
          }

      }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}




// import React from "react";
// import { View, Text } from "react-native";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import AntDesign from "react-native-vector-icons/AntDesign";

// export default function SearchBar({ cityHandler }) {
//   return ( //AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4
//     <View style={{ marginTop: 15, flexDirection: "row" }}>
//       <GooglePlacesAutocomplete   
//         query={{ key: "AIzaSyDH6o7OzGdquovKOC6iaml1HpLOa46-AME" }}
//         onPress={(data, details = null) => {
//           console.log(data.description);
//           const city = data.description.split(",")[0];
//           cityHandler(city);
//         }}
//         placeholder="Search"
//         styles={{
//           textInput: {
//             backgroundColor: "#eee",
//             borderRadius: 20,
//             fontWeight: "700",
//             marginTop: 7,
//           },
//           textInputContainer: {
//             backgroundColor: "#eee",
//             borderRadius: 50,
//             flexDirection: "row",
//             alignItems: "center",
//             marginRight: 10,
//           },
//         }}
//         renderLeftButton={() => (
//           <View style={{ marginLeft: 10 }}>
//             <Ionicons name="location-sharp" size={24} />
//           </View>
//         )}
//         renderRightButton={() => (
//           <View
//             style={{
//               flexDirection: "row",
//               marginRight: 8,
//               backgroundColor: "white",
//               padding: 9,
//               borderRadius: 30,
//               alignItems: "center",
//             }}
//           >
//             <AntDesign
//               name="clockcircle"
//               size={11}
//               style={{ marginRight: 6 }}
//             />
//             <Text>Search</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }