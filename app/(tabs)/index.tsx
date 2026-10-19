import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Link href={"/notification"}>Go to Notification </Link>
      <Link href={"/profile"}>Go to Profile </Link>
    </View>
  );
}

