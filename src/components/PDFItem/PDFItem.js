import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet
} from 'react-native'

import BookImage from '../../assets/BookImage.jpg'

const PDFItem = (props) => {
    const description = props.description

    return (
        <TouchableOpacity style={styles.container} onPress={() => props.detailViewChange()} >
            <View style={styles.left}>
                <Image source={{uri: props.cover}} style={styles.image} />
            </View>

            <View style={styles.right}>
                <Text style={[styles.text, styles.title]}>{props.title}</Text>
                <Text style={[styles.text, styles.description]} >
                    {
                        description.length >= 100 ? description.slice(0, 100) + '...': description 
                    }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 'auto',
        backgroundColor: '#3594e8',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 10,
        margin: 10
    },
    left: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    },
    right:{
        width: '70%',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        padding: 10,
        textAlign: 'right'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16
    },
    image: {
        width: '90%',
        height: 170,
        borderRadius: 8
    }
})
 
export default PDFItem;