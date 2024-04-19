import React from "react";
import { Input } from '@rneui/themed';
import { colors } from "../../res/colors";


const CustomTextInput = (props) => {


    function setContent(newText) {
        props.onChange(newText)
    }

    return (
        <Input
            secureTextEntry={props.secure}
            underlineColorAndroid={'transparent'}
            label={props.placeholder}
            value={props.value}
            errorMessage={props.errorMsg}
            errorStyle={{color:colors.errorText}}
            onChangeText={(newText) => setContent(newText)}
        />
    )
}


export default CustomTextInput