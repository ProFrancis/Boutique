import React, { useContext } from "react";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  Text,
  View,
  Image,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

// CONTEXT
import { AuthContext } from "../context/AuthContext";

// STACKS
import AuthStack from "./authStack";
import ProductStack from "./productStack";

// SCREEN
import Profil from "../screen/AuthScreen/profil";
import Cart from "../screen/Products/cart.product";
import Add from "../screen/Products/post.product";

// ICONS
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// INSTANCE DE TAB
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { logout, user } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView>
        <View
          style={{
            height: 200,
            borderBottomWidth: 1,
            borderBottomColor: "#f4f4f4",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: 130,
              height: 130,
            }}
            source={{
              uri: "https://cdn.icon-icons.com/icons2/2643/PNG/512/man_boy_people_avatar_user_person_black_skin_tone_icon_159355.png",
            }}
          />
          <Text
            style={{
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            {user?.firstname}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 5,
              color: "#696969",
            }}
          >
            Utilisateur
          </Text>
        </View>
      </SafeAreaView>
      <DrawerItemList {...props} />
      <DrawerItem
        label="logout"
        onPress={() => logout()}
        icon={() => <MaterialIcons name="logout" size={20} color="gray" />}
      />
    </DrawerContentScrollView>
  );
}

export default function AppNavigation() {
  const { isLoading, user } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  if(user) {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            drawerStyle: {
              backgroundColor: "#fff",
            },
            // drawerLabelStyle: {
            //   color: ''
            // }
          }}
        >
          <Drawer.Screen
            name="Sneakers"
            component={TabNavigator}
            options={{
              drawerLabel: "Home",
              title: "Snekers",
              drawerIcon: () => <Ionicons name="home" size={20} color="gray" />,
            }}
          />
          <Drawer.Screen
            name="Add"
            component={Add}
            options={{
              drawerLabel: "Add",
              title: "Add Product",
              drawerIcon: () => (
                <Feather name="plus-circle" size={20} color="gray" />
              ),
            }}
          />
          <Drawer.Screen
            name="Profil"
            component={Profil}
            options={{
              drawerLabel: "Profil",
              title: "Profil",
              drawerIcon: () => <Feather name="user" size={20} color="gray" />,
            }}
          />
          <Drawer.Screen
            name="Cart"
            component={Cart}
            options={{
              drawerLabel: "Cart",
              title: "Cart",
              drawerIcon: () => (
                <Ionicons name="cart-outline" size={20} color="gray" />
              ),
            }}
          />
          <Drawer.Screen
            name="Settings"
            component={Profil}
            options={{
              drawerLabel: "Settings",
              title: "Settings",
              drawerIcon: () => (
                <Feather name="settings" size={20} color="gray" />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else {
    return ( 
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    )
  }

}

function TabNavigator() {
  const { isLoading, user } = useContext(AuthContext);

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#191970",
      }}
    >
      {user == null ? (
        <>
          <Tabs.Screen
            name="Auth"
            component={AuthStack}
            options={{ headerShown: false, tabBarStyle: { display: "none" } }}
          />
        </>
      ) : (
        <>
          <Tabs.Screen
            name="Home"
            component={ProductStack}
            options={{
              headerShown: false,
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Add"
            component={Add}
            options={{
              headerShown: false,
              tabBarLabel: "Add",
              tabBarIcon: ({ color, size }) => (
                <Feather name="plus-circle" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Profil"
            component={Profil}
            options={{
              headerShown: false,
              tabBarLabel: "Profil",
              tabBarIcon: ({ color, size }) => (
                <Feather name="user" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Panier"
            component={Cart}
            options={{
              headerShown: false,
              tabBarLabel: "Cart",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cart-outline" size={size} color={color} />
              ),
            }}
          />
        </>
      )}
    </Tabs.Navigator>
  );
}
