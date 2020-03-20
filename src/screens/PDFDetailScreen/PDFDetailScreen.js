import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

class MainScreen extends Component {
    state = {
        book: this.props.route.params.book
    }

    pdfOpenHandler = () => {
        this.props.navigation.navigate('PDFScreen', {source: this.state.book.item.url})
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Image source={{uri: this.state.book.item.cover}} style={styles.image} />
                    <Text style={[styles.text, styles.title]}>{this.state.book.item.title}</Text>
                    <Text style={[styles.text, styles.description]}>{this.state.book.item.description}</Text>
                    <TouchableOpacity onPress={this.pdfOpenHandler}>
                        <View style={styles.button}>
                            <Text style={[styles.text, {fontSize: 20}]}>PDF</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333840'
    },
    scrollView: {
        alignItems: 'center',
        marginTop: 30,
        width:'100%'
    },
    image: {
        width: "50%",
        height: 300
    },
    text: {
        color: 'white',
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        textAlign: 'right',
        direction: 'rtl'
    },
    button: {
        backgroundColor: '#3c32f0',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 50,
        borderRadius: 25,
        marginTop: 20
    }
})
 
export default MainScreen;