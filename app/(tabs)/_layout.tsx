import { tabs } from "@/constants/data";
import { colors, components } from '@/constants/theme';
import clsx from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
// import {Image} from "-image"
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

const TabLayout = () => {
        const insets = useSafeAreaInsets();
        const TabIcon = ({ focused, icon }: TabIconProps) => {
                return (
                        <View className="tabs-icon">
                                <View
                                        // className={clsx('tabs-pill', focused && 'tabs-active')}
                                        className={clsx(
                                                "w-10 h-10 rounded-full items-center justify-center",
                                                focused && "bg-[#EA7A53]"
                                        )}
                                >
                                        <Image source={icon} resizeMode="contain" className="tabs-glyph" style={{ width: 24, height: 24 }} />
                                </View>
                        </View>
                );
        };
        return (
                <Tabs
                        screenOptions={{
                                headerShown: false,
                                tabBarShowLabel: false,
                                tabBarStyle: {
                                        position: 'absolute',
                                        bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                                        height: tabBar.height,
                                        marginHorizontal: tabBar.horizontalInset,
                                        borderRadius: tabBar.radius,
                                        backgroundColor: colors.primary,
                                        borderTopWidth: 0,
                                        elevation: 0,
                                },
                                tabBarItemStyle: {
                                        paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6
                                },
                                tabBarIconStyle: {
                                        width: tabBar.iconFrame,
                                        height: tabBar.iconFrame,
                                        alignItems: 'center',
                                }

                        }}
                >
                        {tabs.map((tab) => (
                                <Tabs.Screen
                                        key={tab.name}
                                        name={tab.name}
                                        options={{
                                                title: tab.title,
                                                tabBarIcon: ({ focused }) => (
                                                        <TabIcon focused={focused} icon={tab.icon} />
                                                )
                                        }} />
                        ))}
                </Tabs>
        )
}
export default TabLayout;