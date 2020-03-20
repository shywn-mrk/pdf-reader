import React, { Component } from 'react'
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native'
import PDFItem from '../../components/PDFItem/PDFItem'


class MainScreen extends Component {
    state = {
        books: []
    }

    componentWillMount = () => {
        fetch('https://smartdoctor.app/api/api.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    books: data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    pdfDetailViewHandler = (book) => {
        this.props.navigation.navigate('PDFDetail', {book: book})
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.books}
                    renderItem={(book) => {
                        return (<PDFItem 
                                    title={book.item.title} 
                                    description={book.item.description}
                                    cover={book.item.cover}
                                    detailViewChange={() => this.pdfDetailViewHandler(book)} />)
                    }}
                    keyExtractor={book => book.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333840'
    },
    scrollView: {
        width: '98%'
    }
})
 
export default MainScreen;