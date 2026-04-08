import { Text, View } from "react-native";
import {useLocalSearchParams, Link} from "expo-router";

export default function SubscriptionDetails   () {
    const { id } = useLocalSearchParams<{id : string}>();
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text>
                SubscriptionDetails: {id}
            </Text>
            <Link href="/">Go Back</Link>
        </View>
    );
}