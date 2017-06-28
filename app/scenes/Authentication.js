import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusbarBackground from '../components/StatusbarBackground'

export default class Authentication extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return(
            <ViewContainer>
                <StatusbarBackground />
                <View>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                        placeholder="EMAIL"
                        placeholderTextColor="black"
                        />
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                        placeholder="PASSWORD"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        />
                </View>
            </ViewContainer>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        textAlignVertical: 'bottom',
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 12
    }
})