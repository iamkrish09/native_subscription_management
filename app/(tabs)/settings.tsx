import { Text, View } from "react-native";
import React from 'react'
import {styled} from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function Settings  () {
    return (
        <SafeAreaView className="flex-1 p-5 bg-background">
            <Text>
                Settings
            </Text>
            {/*<Link href="/(auth)/sign-up">Create Account</Link>*/}
        </SafeAreaView>
    );
}