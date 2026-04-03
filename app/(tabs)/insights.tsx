import { Text, View } from "react-native";
import React from 'react'
import {styled} from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function Insights   () {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-background">
            <Text>
                Insights
            </Text>
            {/*<Link href="/(auth)/sign-up">Create Account</Link>*/}
        </SafeAreaView>
    );
}