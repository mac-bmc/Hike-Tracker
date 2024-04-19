import {Button} from'@rneui/themed'

export const ControlButton=(props)=>{
    function OnClick(){
        props.callback()
    }
    return(
        <Button 
        onPress={()=>OnClick()}
        title={props.title}
        loading={props.loading}
          buttonStyle={{
            backgroundColor: 'orange',
            width:150,
            borderWidth: 2,
            borderColor: 'orange',
            borderRadius: 30,
          }}
        />
    )
}