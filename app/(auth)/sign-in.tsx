import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function SignIn() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text>
                SignIn
            </Text>
            <Link href="/">Go back</Link>
        </View>
    );
}