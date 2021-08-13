import MyButton from "./myButton";
import MyImage from "./myImage";

import { useExperiment } from "@growthbook/growthbook-react";

export default function MyABTest() {
    const { value } = useExperiment({
        key: 'button-image',
        variations: ['button', 'image'],
        weights: ['0.5', '0.5'],
    })

    return value === 'button' ? <MyButton /> : <MyImage />
}