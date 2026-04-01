import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function SignUp() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text>
                SignUp
            </Text>
            <Link href="/(auth)/sign-up">Login</Link>
        </View>
    );
}