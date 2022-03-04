import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { decreaseCount, increaseCount } from '../store/actions/counter';

export default function Component2(props) {

    const dispatch = useDispatch();

    return (
        <View style={styles.container2}>
            <Text style={styles.text}> Component 2</Text>
            <Button
                title="Increment"
                onPress={() => {
                    dispatch(increaseCount());
                    console.log('Incremented');
                }
                }
            />
            <Button
                title="Decrement"
                onPress={() => {
                    dispatch(decreaseCount());
                    console.log('Decremented');
                }
                }
            />
        </View>

    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
    container2: {
        width: '80%',
        height: '30%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-around',


    }
});
