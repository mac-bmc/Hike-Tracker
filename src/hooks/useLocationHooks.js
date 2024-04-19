import { useState, useEffect, useContext } from "react"
import '../utils/_mockLocation'
import { Context as LocationContext } from "../context-providers/LocationContext"
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location"
export default (callback, shouldTrack) => {
    const [err, SetErr] = useState(null)
    useEffect(() => {
        let subscriber;
        const StartLocation = async () => {
            try {
                const { granted } = await requestForegroundPermissionsAsync();
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10,
                    },
                    callback

                );

                if (!granted) {
                    throw new Error("permission not granted")
                }
            }
            catch (error) {
                SetErr(error)
            }
        }

        if (shouldTrack) {
            StartLocation()
        }
        else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };

    }, [callback, shouldTrack])

    return [err];
}