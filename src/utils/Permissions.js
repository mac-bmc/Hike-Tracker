import { request,check, PERMISSIONS, RESULTS } from 'react-native-permissions'


const Permissions = (permission) => {
    check(permission)
        .then((result) => {
            switch (result) {
                case RESULTS.UNAVAILABLE:
                    return {error:"No available device"}
                    break;
                case RESULTS.DENIED:
                    request(permission).then((result) => {
                      });
                    break;
                case RESULTS.LIMITED:
                    console.log('The permission is limited: some actions are possible');
                    break;
                case RESULTS.GRANTED:
                    console.log('The permission is granted');
                    break;
                case RESULTS.BLOCKED:
                    console.log('The permission is denied and not requestable anymore');
                    break;
            }
        })
        .catch((error) => {
            console.log(`Permission check error - ${error}`)
        }
        )
}