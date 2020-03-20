import React, { Component } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import Pdf from 'react-native-pdf'

class PDFScreen extends Component {
    state = {
        source: {uri: this.props.route.params.source, cache: true}
    }

    render() {
        return (
            <View style={styles.container}>
                <Pdf 
                    source={this.state.source}
                    style={styles.pdf}
                    horizontal={true}
                    enablePaging={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    pdf: {
        flex:1
    }
})
 
export default PDFScreen;