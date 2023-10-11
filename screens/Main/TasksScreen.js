// TaskScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';
const TaskScreen = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    
    return (
        <View>
            <List.Section title="Tasks">
                <List.Accordion
                    title="Uncontrolled Accordion"
                    left={props => <List.Icon {...props} icon="folder" />}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>

                <List.Accordion
                    title="Controlled Accordion"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={expanded}
                    onPress={handlePress}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
            </List.Section>
        </View>
    );
};

export default TaskScreen;
