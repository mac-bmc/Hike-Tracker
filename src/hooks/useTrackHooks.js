import { Context as LocationContext } from "../context-providers/LocationContext";
import { Context as TrackContext } from "../context-providers/TrackContext";
import { useContext,useState} from "react";
import { navigate } from "../refs/NavRefs";

export default (name,location)=>
{
   const {boundActions} = useContext(TrackContext)
   const {state} = useContext(LocationContext)
   const[error,setError]=useState(null)
   const SaveTrack=async()=>
   {
    if(name)
    {
        setError(null)
        await boundActions.SaveTrack(name,location)
        navigate('viewTrack')
        
    }
    else{
        setError("Name Required")
    }
   }

   return [SaveTrack,error];
}