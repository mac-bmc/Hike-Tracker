import { Button } from '@rneui/themed';

export default CustomButton=(props)=>{

  const OnClick = () => {
    console.log(`props called ${props.email},${props.password}`)
    props.onClick(props.email,props.password)
  }
    return(
        <Button 
        onPress={()=>OnClick()}
        title={props.title}
        loading={props.loading}
          buttonStyle={{
            backgroundColor: props.backgroundColor,
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 30,
          }}
        />
    )
}