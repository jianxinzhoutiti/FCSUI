import React, {
    Component, PropTypes,
    PureComponent
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

export default class AutoExpandingTextInput extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text:'',
            height:0,
        };
    }

    render() {
        return (
            <TextInput
                {...this.props}
                multiline={true}
                onChangeText={(text) => {
                   this.setState({text});
        }}
                onContentSizeChange={(event) => {
                 this.setState({height: event.nativeEvent.contentSize.height});
        }}
                style={[styles.default, {height: Math.max(35, this.state.height)}]}
                value={this.state.text}
            />
        );
    }
}

const styles = StyleSheet.create({
    default : {
        paddingHorizontal : 10,
        paddingVertical : 5,
        justifyContent : 'center',
        textAlign : 'left',
        fontSize:20,
    }
});
