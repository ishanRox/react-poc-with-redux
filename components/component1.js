import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Component2 from './component2';

export default function Component1(props) {

    const counter = useSelector(state => state.counter);

    return (

        <View style={styles.container1}>
            <Text>{counter.count} Component 1</Text>
            <Component2 />
        </View>


    );
}

const styles = StyleSheet.create({

    container1: {
        width: '50%',
        height: '50%',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    }

});
