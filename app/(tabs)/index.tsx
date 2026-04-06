import "@/global.css"
import { Image, Text, View } from "react-native";
import images from "@/constants/images"
import {icons} from "@/constants/icons";
import {styled} from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

import {HOME_BALANCE, HOME_USER} from "@/constants/data";
import {formatCurrency} from "@/lib/utils";

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <View className="home-header">
                <View className="home-user">
                     <Image source={images.avatar} className="home-avatar" />
                    <Text className="home-user-name">{HOME_USER.name}</Text>
                </View>

                <Image source={icons.add} className="home-add-icon"></Image>
            </View>

            <View className="home-balance-card">
                <Text className="home-balance-label">Balance</Text>

                <View className="home-balance-row">
                    <Text className="home-balance-amount">
                        {formatCurrency(HOME_BALANCE.amount)}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}