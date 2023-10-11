
import { Appearance } from 'react-native';
export default function View(props) {

    const colorScheme = Appearance.getColorScheme();

    const bgColor = colorScheme == 'dark' ? 'red': 'pink';
    return (
        <View style={{ backroundColor: bgColor }}>
            { props.children }
        </View>
    );
}