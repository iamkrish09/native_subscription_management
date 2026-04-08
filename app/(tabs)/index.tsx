import "@/global.css"
import {FlatList, Image, Text, View} from "react-native";
import images from "@/constants/images"
import {icons} from "@/constants/icons";
import {styled} from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

import {HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS} from "@/constants/data";
import {formatCurrency} from "@/lib/utils";

//components
import ListHeading from "@/components/ListHeading"
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard"
import SubscriptionCard from "@/components/SubscriptionCard";

import dayjs from "dayjs";
import {useState} from "react";

export default function App() {
    const tabBarHeight = useBottomTabBarHeight();
    const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);
    return (
        <SafeAreaView className="flex-1 bg-background p-5">

                <FlatList
                    ListHeaderComponent={ ()=>(
                        <>
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

                            <View className="mb-5">
                                <ListHeading title="Upcoming"/>

                                {/*REACT WAY OF RENDERING*/}
                                {/*<UpcomingSubscriptionCard data={UPCOMING_SUBSCRIPTIONS[0]}/>*/}

                                {/*REACT_NATIVE WAY OF RENDERING*/}
                                <FlatList
                                    data={UPCOMING_SUBSCRIPTIONS}
                                    renderItem={({ item }) => (
                                        <UpcomingSubscriptionCard {...item}/>
                                    )}
                                    keyExtractor={(item) => item.id}
                                    horizontal
                                    ListEmptyComponent={<Text className="home-empty-state">No Upcoming renewals yet.</Text>}
                                />
                            </View>

                            <ListHeading title="All Subscription"/>
                        </>
                    )}
                    data={HOME_SUBSCRIPTIONS}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <SubscriptionCard
                            {...item}
                            expanded={expandedSubscriptionId === item.id}
                            onPress={()=> setExpandedSubscriptionId((currentId) =>(currentId === item.id ? null : item.id))}
                        />
                    )}
                    extraData={expandedSubscriptionId}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={()=> <View className="h-4"/>}
                    ListEmptyComponent={<Text className="home-empty-state">No Upcoming renewals yet.</Text>}
                    contentContainerStyle={{ paddingBottom: tabBarHeight }}
                />

        </SafeAreaView>
    );
}