// DashboardScreen.js
import React from 'react';
import { View, Dimensions  } from 'react-native';
import { Card, Text } from 'react-native-paper';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const DashboardScreen = () => {
    const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
    };
    let chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    };

    const screenWidth = Dimensions.get('screen') - 10;
    return (
        <>

            <View>
                <View>
                    <Text variant='headlineMedium'>Dashboard</Text>
                </View>
                <ProgressChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    strokeWidth={16}
                    radius={32}
                    chartConfig={chartConfig}
                    hideLegend={false}
                />
            </View>
        </>
    );
};

export default DashboardScreen;
