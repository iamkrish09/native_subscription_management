import "@/global.css"
import {FlatList, Image, Text, View} from "react-native";
import images from "@/constants/images"
import {icons} from "@/constants/icons";
import {styled} from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

import {HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS} from "@/constants/data";
import {formatCurrency} from "@/lib/utils";

//components
import ListHeading from "@/components/ListHeading"
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard"
import SubscriptionCard from "@/components/SubscriptionCard";

import dayjs from "dayjs";

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <View className="home-header">
                <View className="home-user">
                     <Image source={images.IMG_5516} className="home-avatar" />
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

                    <Text className="home-balance-date">
                        {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                    </Text>
                </View>
            </View>

            <View>
                <ListHeading title="Upcoming"/>

                //REACT WAY OF RENDERING
                {/*<UpcomingSubscriptionCard data={UPCOMING_SUBSCRIPTIONS[0]}/>*/}

                //REACT_NATIVE WAY OF RENDERING
                <FlatList
                    data={UPCOMING_SUBSCRIPTIONS}
                    renderItem={({ item }) => (
                        <UpcomingSubscriptionCard {...item}/>
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    ListEmptyComponent={<Text className="home-empty-state">No Upcoming renewals yet.</Text>}
                />
            </View>

            <View>
                <ListHeading title="All Subscription"/>
                <SubscriptionCard {...HOME_SUBSCRIPTIONS[0]}/>
            </View>
        </SafeAreaView>
    );
}