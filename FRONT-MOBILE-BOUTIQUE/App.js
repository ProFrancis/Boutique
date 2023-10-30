import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./navigation/router";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./context/authContext";

// REDUX
import store from "./redux";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store} >
      <AuthProvider>
        <AppNavigation />
        <StatusBar style="auto" />
      </AuthProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
